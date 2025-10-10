import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '../services/api';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';
import toast from 'react-hot-toast';

const SetupPassword = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const loadUserData = useCallback(async () => {
    try {
      const response = await api.get(`/auth/setup-password/${userId}`);
      setUserData(response.data.user);
      
      // Se já tem email válido, preencher e bloquear campo
      if (response.data.user.email && !response.data.user.needsEmail) {
        setFormData(prev => ({ ...prev, email: response.data.user.email }));
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      
      if (error.response?.data?.redirect) {
        toast.error('Conta já está ativa. Faça login.');
        navigate('/login');
      } else {
        toast.error('Link inválido ou expirado');
        navigate('/');
      }
    }
  }, [userId, navigate]);

  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  const validateForm = () => {
    const newErrors = {};

    // Validar email apenas se necessário (não tem email válido)
    if (userData?.needsEmail) {
      if (!formData.email) {
        newErrors.email = 'Email é obrigatório';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email inválido';
      }
    }
    // Se já tem email, não validar

    // Validar senha
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    // Validar confirmação de senha
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirme sua senha';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        password: formData.password
      };

      // Só enviar email se necessário
      if (userData?.needsEmail && formData.email) {
        payload.email = formData.email;
      }

      const response = await api.post(`/auth/setup-password/${userId}`, payload);

      toast.success('Senha configurada com sucesso!');
      
      // Login automático
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Redirecionar para dashboard
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      }

    } catch (error) {
      console.error('Erro ao configurar senha:', error);
      toast.error(error.response?.data?.error || 'Erro ao configurar senha');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-royal-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-12 w-12 text-romance-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-royal-50 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-romance rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Configure sua Senha
          </h1>
          <p className="text-gray-600">
            Bem-vindo, <strong>{userData?.name}</strong>! Complete seu cadastro para acessar seus créditos.
          </p>
        </div>

        {/* Success Info */}
        <div className="card bg-green-50 border border-green-200 mb-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">
                Pagamento Aprovado!
              </h3>
              <p className="text-sm text-green-700">
                Sua compra foi confirmada. Configure sua senha para acessar a plataforma.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email {!userData?.needsEmail && <span className="text-gray-400 text-xs">(pré-cadastrado)</span>}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!userData?.needsEmail}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-romance-500 transition-all ${
                  errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                } ${!userData?.needsEmail ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                placeholder={userData?.needsEmail ? "seu@email.com" : "Email já configurado"}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-romance-500 transition-all ${
                  errors.password ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                }`}
                placeholder="Mínimo 6 caracteres"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.password}</span>
              </p>
            )}
          </div>

          {/* Confirmar Senha */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-romance-500 transition-all ${
                  errors.confirmPassword ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                }`}
                placeholder="Repita sua senha"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.confirmPassword}</span>
              </p>
            )}
          </div>

          {/* Informações do Usuário */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">CPF:</span>
              <span className="font-medium text-gray-900">
                {userData?.cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Telefone:</span>
              <span className="font-medium text-gray-900">
                {userData?.phone?.length === 11 
                  ? userData.phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
                  : userData?.phone?.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
                }
              </span>
            </div>
            {userData?.credits > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Créditos disponíveis:</span>
                <span className="font-bold text-romance-600 text-base">
                  {userData?.credits || 0}
                </span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full btn-primary py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                <span>Configurando...</span>
              </>
            ) : (
              <>
                <CheckCircle className="h-5 w-5" />
                <span>Ativar Conta</span>
              </>
            )}
          </button>
        </form>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            🔒 Seus dados estão protegidos e criptografados
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SetupPassword;
