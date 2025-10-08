import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Logout
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    Cookies.remove('testematch_token');
    delete api.defaults.headers.common['Authorization'];
    toast.success('Logout realizado com sucesso!');
  }, []);

  // Buscar perfil do usuário
  const fetchUserProfile = useCallback(async () => {
    try {
      const response = await api.get('/auth/profile');
      setUser(response.data.user);
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      logout();
    } finally {
      setLoading(false);
    }
  }, [logout]);

  // Verificar se há token salvo ao carregar
  useEffect(() => {
    const savedToken = Cookies.get('testematch_token');
    if (savedToken) {
      setToken(savedToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [fetchUserProfile]);

  // Login
  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token: newToken, user: userData } = response.data;
      
      setToken(newToken);
      setUser(userData);
      
      // Salvar token no cookie
      Cookies.set('testematch_token', newToken, { 
        expires: 7, // 7 dias
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });
      
      // Configurar header de autorização
      api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      
      toast.success('Login realizado com sucesso!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.error || 'Erro ao fazer login';
      toast.error(message);
      return { success: false, error: message };
    }
  };

  // Registro
  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      const { token: newToken, user: newUser } = response.data;
      
      setToken(newToken);
      setUser(newUser);
      
      // Salvar token no cookie
      Cookies.set('testematch_token', newToken, { 
        expires: 7, // 7 dias
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });
      
      // Configurar header de autorização
      api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      
      toast.success('Conta criada com sucesso!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.error || 'Erro ao criar conta';
      toast.error(message);
      return { success: false, error: message };
    }
  };

  // Atualizar perfil
  const updateProfile = async (profileData) => {
    try {
      const response = await api.put('/auth/profile', profileData);
      setUser(response.data.user);
      toast.success('Perfil atualizado com sucesso!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.error || 'Erro ao atualizar perfil';
      toast.error(message);
      return { success: false, error: message };
    }
  };

  // Renovar token
  const refreshToken = async () => {
    try {
      const response = await api.post('/auth/refresh');
      const { token: newToken } = response.data;
      
      setToken(newToken);
      Cookies.set('testematch_token', newToken, { 
        expires: 7,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });
      
      api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      return { success: true };
    } catch (error) {
      logout();
      return { success: false };
    }
  };

  // Verificar se está autenticado
  const isAuthenticated = () => {
    return !!token && !!user;
  };

  // Verificar se tem créditos suficientes
  const hasCredits = (required = 1) => {
    return user && user.credits >= required;
  };

  // Atualizar créditos do usuário
  const updateCredits = (newCredits) => {
    if (user) {
      setUser({ ...user, credits: newCredits });
    }
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateProfile,
    refreshToken,
    isAuthenticated,
    hasCredits,
    updateCredits,
    fetchUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
