import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { useAuth } from '../contexts/AuthContext';
import { userService } from '../services/api';
import { 
  BarChart3, 
  Upload, 
  History, 
  CreditCard, 
  Heart,
  Clock,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  // Buscar dados do dashboard
  const { data: dashboardData, isLoading } = useQuery(
    'dashboard',
    userService.getDashboard,
    {
      staleTime: 5 * 60 * 1000, // 5 minutos
    }
  );

  const stats = dashboardData?.data?.stats;
  const recentAnalyses = dashboardData?.data?.recentAnalyses || [];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-blue-500 animate-spin" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'failed':
        return <Clock className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Concluída';
      case 'processing':
        return 'Processando';
      case 'pending':
        return 'Aguardando';
      case 'failed':
        return 'Falhou';
      default:
        return 'Desconhecido';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romance-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 via-white to-romance-50">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-8 w-8 text-romance-500" />
              <h1 className="text-4xl font-bold text-gray-900">
                Dashboard
              </h1>
            </div>
            
            <p className="text-lg text-gray-600">
              Bem-vindo de volta, {user?.name}! Aqui está um resumo da sua jornada de autoconhecimento.
            </p>
          </motion.div>

          {/* Cards de estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-romance"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Créditos</p>
                  <p className="text-3xl font-bold text-gray-900">{user?.credits || 0}</p>
                </div>
                <CreditCard className="h-8 w-8 text-romance-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-royal"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Análises</p>
                  <p className="text-3xl font-bold text-gray-900">{stats?.totalLLMResponses || 0}</p>
                </div>
                <Heart className="h-8 w-8 text-royal-500" />
              </div>
            </motion.div>

          </div>

          {/* Ações rápidas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ações Rápidas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/upload"
                className="group p-6 bg-gradient-to-br from-romance-50 to-romance-100 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Upload className="h-6 w-6 text-romance-500" />
                  <h3 className="font-semibold text-gray-900">Nova Análise</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Envie uma nova foto para análise
                </p>
                <div className="flex items-center text-romance-600 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Começar</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>

              <Link
                to="/history"
                className="group p-6 bg-gradient-to-br from-royal-50 to-royal-100 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <History className="h-6 w-6 text-royal-500" />
                  <h3 className="font-semibold text-gray-900">Histórico</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Veja todas as suas análises
                </p>
                <div className="flex items-center text-royal-600 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Ver histórico</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>

              <Link
                to="/plans"
                className="group p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <CreditCard className="h-6 w-6 text-gold-500" />
                  <h3 className="font-semibold text-gray-900">Comprar Créditos</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Adquira mais créditos para análises
                </p>
                <div className="flex items-center text-gold-600 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Ver planos</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Análises recentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Análises Recentes</h2>
              <Link
                to="/history"
                className="text-romance-500 hover:text-romance-600 font-medium transition-colors"
              >
                Ver todas
              </Link>
            </div>

            {recentAnalyses.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhuma análise ainda
                </h3>
                <p className="text-gray-600 mb-6">
                  Comece sua jornada de autoconhecimento fazendo sua primeira análise.
                </p>
                <Link to="/upload" className="btn-primary">
                  Fazer primeira análise
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {recentAnalyses.map((analysis, index) => (
                  <motion.div
                    key={analysis.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(analysis.status)}
                        <span className="text-sm font-medium text-gray-700">
                          {getStatusText(analysis.status)}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Análise {analysis.plan === 'complete' ? 'Completa' : 'Básica'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {new Date(analysis.createdAt).toLocaleDateString('pt-BR')} • {analysis.creditsUsed} crédito{analysis.creditsUsed > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>

                    {analysis.status === 'completed' && (
                      <Link
                        to={`/analysis/${analysis.id}`}
                        className="inline-flex items-center space-x-2 px-3 py-2 bg-romance-100 text-romance-700 rounded-lg hover:bg-romance-200 transition-colors"
                      >
                        <span>Ver resultado</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Dicas e novidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 card-gold"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-bold text-gray-900">Dica do Dia</h2>
            </div>
            
            <div className="bg-white/50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                <strong>💡 Dica:</strong> Para obter os melhores resultados, use fotos com boa iluminação 
                e onde seu rosto esteja claramente visível. Evite fotos com óculos escuros ou 
                muito maquiagem, pois isso pode afetar a precisão da análise.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">Baseado em 10.000+ análises</span>
                </div>
                
                <Link
                  to="/upload"
                  className="text-gold-600 hover:text-gold-700 font-medium transition-colors"
                >
                  Fazer análise →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
