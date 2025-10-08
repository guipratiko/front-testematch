import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { userService } from '../services/api';
import toast from 'react-hot-toast';
import { 
  User, 
  Mail, 
  Phone, 
  Settings, 
  Save,
  Eye,
  EyeOff,
  Trash2,
  AlertTriangle
} from 'lucide-react';

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      notifications: user?.preferences?.notifications ?? true,
      emailMarketing: user?.preferences?.emailMarketing ?? false,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await updateProfile({
        name: data.name,
        phone: data.phone,
        preferences: {
          notifications: data.notifications,
          emailMarketing: data.emailMarketing,
        },
      });

      if (result.success) {
        toast.success('Perfil atualizado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async (data) => {
    setLoading(true);
    try {
      await userService.deactivateAccount(data.password);
      toast.success('Conta desativada com sucesso!');
      logout();
    } catch (error) {
      console.error('Erro ao desativar conta:', error);
      const message = error.response?.data?.error || 'Erro ao desativar conta';
      toast.error(message);
    } finally {
      setLoading(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 via-white to-romance-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-8 w-8 text-romance-500" />
              <h1 className="text-4xl font-bold text-gray-900">
                Meu Perfil
              </h1>
            </div>
            
            <p className="text-lg text-gray-600">
              Gerencie suas informações pessoais e preferências.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações pessoais */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card">
                <div className="flex items-center space-x-3 mb-6">
                  <Settings className="h-6 w-6 text-gray-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Informações Pessoais</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        {...register('name', {
                          required: 'Nome é obrigatório',
                          minLength: {
                            value: 2,
                            message: 'Nome deve ter pelo menos 2 caracteres'
                          },
                          maxLength: {
                            value: 50,
                            message: 'Nome deve ter no máximo 50 caracteres'
                          }
                        })}
                        className={`input pl-10 ${errors.name ? 'input-error' : ''}`}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="input pl-10 bg-gray-100 text-gray-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      O email não pode ser alterado. Entre em contato conosco se necessário.
                    </p>
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone <span className="text-gray-400">(opcional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        {...register('phone', {
                          pattern: {
                            value: /^[\d\s\-()+]+$/,
                            message: 'Telefone inválido'
                          }
                        })}
                        className={`input pl-10 ${errors.phone ? 'input-error' : ''}`}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Preferências */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Preferências</h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          {...register('notifications')}
                          className="w-4 h-4 text-romance-600 bg-gray-100 border-gray-300 rounded focus:ring-romance-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-700">
                          Receber notificações sobre análises
                        </span>
                      </label>
                      
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          {...register('emailMarketing')}
                          className="w-4 h-4 text-romance-600 bg-gray-100 border-gray-300 rounded focus:ring-romance-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-700">
                          Receber emails promocionais e dicas
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Botão salvar */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Save className="h-5 w-5" />
                        <span>Salvar alterações</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Informações da conta */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações da Conta</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Membro desde</span>
                    <span className="text-sm font-medium text-gray-900">
                      {new Date(user?.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Plano atual</span>
                    <span className="text-sm font-medium text-gray-900 capitalize">
                      {user?.plan || 'free'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Créditos</span>
                    <span className="text-sm font-medium text-gray-900">
                      {user?.credits || 0}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ações da conta */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações da Conta</h3>
                
                <div className="space-y-3">
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Desativar conta</span>
                  </button>
                </div>
              </div>

              {/* Estatísticas */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Último login</span>
                    <span className="text-sm font-medium text-gray-900">
                      {user?.lastLogin 
                        ? new Date(user.lastLogin).toLocaleDateString('pt-BR')
                        : 'Nunca'
                      }
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Modal de confirmação de exclusão */}
          {showDeleteModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-6 max-w-md w-full"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Desativar conta
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Tem certeza que deseja desativar sua conta? Esta ação não pode ser desfeita.
                  Todos os seus dados serão removidos permanentemente.
                </p>
                
                <form onSubmit={handleSubmit(handleDeleteAccount)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Digite sua senha para confirmar
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                          required: 'Senha é obrigatória'
                        })}
                        className={`input pr-10 ${errors.password ? 'input-error' : ''}`}
                        placeholder="Sua senha"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowDeleteModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Desativando...' : 'Desativar'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
