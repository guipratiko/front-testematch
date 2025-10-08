import axios from 'axios';

// Configurar axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para requisições
api.interceptors.request.use(
  (config) => {
    // Adicionar timestamp para evitar cache
    config.params = {
      ...config.params,
      _t: Date.now(),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para respostas
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Se erro 401 e não é uma tentativa de refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Tentar renovar token
        const refreshResponse = await api.post('/auth/refresh');
        const newToken = refreshResponse.data.token;
        
        // Atualizar header de autorização
        api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        
        // Repetir requisição original
        return api(originalRequest);
      } catch (refreshError) {
        // Se refresh falhar, redirecionar para login
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Serviços de autenticação
export const authService = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (profileData) => api.put('/auth/profile', profileData),
  refreshToken: () => api.post('/auth/refresh'),
};

// Serviços de upload e análise
export const analysisService = {
  uploadImage: (data) => api.post('/upload', data),
  getAnalysis: (id) => api.get(`/analysis/${id}`),
  getAnalysisHistory: (params) => api.get('/analysis', { params }),
  makePublic: (id, isPublic) => api.put(`/analysis/${id}/public`, { isPublic }),
  getPublicAnalysis: (token) => api.get(`/analysis/share/${token}`),
  getUploadStatus: (id) => api.get(`/upload/status/${id}`),
};

// Serviços de créditos
export const creditsService = {
  getCredits: (params) => api.get('/credits', { params }),
  getPlans: () => api.get('/credits/plans'),
  purchaseCredits: (planId) => api.post('/credits/purchase', { planId }),
  getHistory: (params) => api.get('/credits/history', { params }),
};

// Serviços do usuário
export const userService = {
  getDashboard: () => api.get('/user/dashboard'),
  getSettings: () => api.get('/user/settings'),
  updateSettings: (settings) => api.put('/user/settings', settings),
  getUserAnalyses: (params) => api.get('/user/analyses', { params }),
  deactivateAccount: (password) => api.delete('/user/account', { data: { password } }),
};

// Serviços de webhook (para testes)
export const webhookService = {
  testWebhook: () => api.get('/webhook/test'),
};

export { api };
