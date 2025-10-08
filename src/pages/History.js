import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { analysisService } from '../services/api';
import { 
  History as HistoryIcon, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Eye,
  Share2,
  Calendar,
  Search
} from 'lucide-react';

const HistoryPage = () => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Buscar histórico de análises
  const { data: historyData, isLoading } = useQuery(
    ['analysis-history', page, statusFilter],
    () => analysisService.getAnalysisHistory({
      page,
      limit: 10,
      status: statusFilter || undefined,
    }),
    {
      keepPreviousData: true,
    }
  );

  const analyses = historyData?.analyses || [];
  const pagination = historyData?.pagination;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-blue-500 animate-spin" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAnalyses = analyses.filter(analysis => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        analysis.plan.toLowerCase().includes(searchLower) ||
        getStatusText(analysis.status).toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

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
              <HistoryIcon className="h-8 w-8 text-romance-500" />
              <h1 className="text-4xl font-bold text-gray-900">
                Histórico de Análises
              </h1>
            </div>
            
            <p className="text-lg text-gray-600">
              Veja todas as suas análises realizadas e acompanhe o progresso.
            </p>
          </motion.div>

          {/* Filtros e busca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Busca */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar análises..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input pl-10"
                  />
                </div>
              </div>

              {/* Filtro de status */}
              <div className="sm:w-48">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="input"
                >
                  <option value="">Todos os status</option>
                  <option value="completed">Concluídas</option>
                  <option value="processing">Processando</option>
                  <option value="pending">Aguardando</option>
                  <option value="failed">Falharam</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Lista de análises */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romance-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Carregando análises...</p>
            </div>
          ) : filteredAnalyses.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card text-center py-12"
            >
              <HistoryIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Nenhuma análise encontrada
              </h2>
              <p className="text-gray-600 mb-6">
                {searchTerm || statusFilter
                  ? 'Tente ajustar os filtros de busca.'
                  : 'Você ainda não realizou nenhuma análise.'}
              </p>
              <Link to="/upload" className="btn-primary">
                Fazer primeira análise
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredAnalyses.map((analysis, index) => (
                <motion.div
                  key={analysis.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Status */}
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(analysis.status)}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(analysis.status)}`}>
                          {getStatusText(analysis.status)}
                        </span>
                      </div>

                      {/* Informações */}
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Análise {analysis.plan === 'complete' ? 'Completa' : 'Básica'}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(analysis.createdAt).toLocaleDateString('pt-BR')}</span>
                          </div>
                          <span>•</span>
                          <span>{analysis.creditsUsed} crédito{analysis.creditsUsed > 1 ? 's' : ''}</span>
                          {analysis.processingTime && (
                            <>
                              <span>•</span>
                              <span>{analysis.processingTime}s</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Ações */}
                    <div className="flex items-center space-x-2">
                      {analysis.status === 'completed' && (
                        <>
                          <Link
                            to={`/analysis/${analysis.id}`}
                            className="inline-flex items-center space-x-2 px-3 py-2 bg-romance-100 text-romance-700 rounded-lg hover:bg-romance-200 transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                            <span>Ver</span>
                          </Link>
                          
                          {analysis.isPublic && (
                            <button
                              onClick={() => navigator.clipboard.writeText(`${window.location.origin}/analysis/share/${analysis.shareToken}`)}
                              className="inline-flex items-center space-x-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                            >
                              <Share2 className="h-4 w-4" />
                              <span>Compartilhar</span>
                            </button>
                          )}
                        </>
                      )}
                      
                      {analysis.status === 'failed' && (
                        <Link
                          to="/upload"
                          className="inline-flex items-center space-x-2 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                        >
                          <span>Tentar novamente</span>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Mensagem de erro */}
                  {analysis.status === 'failed' && analysis.errorMessage && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-700">
                        <strong>Erro:</strong> {analysis.errorMessage}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Paginação */}
          {pagination && pagination.pages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center justify-center space-x-2"
            >
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Anterior
              </button>
              
              <div className="flex items-center space-x-1">
                {[...Array(pagination.pages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      page === i + 1
                        ? 'bg-romance-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === pagination.pages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Próximo
              </button>
            </motion.div>
          )}

          {/* Estatísticas */}
          {analyses.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="card text-center">
                <div className="text-3xl font-bold text-romance-600 mb-2">
                  {analyses.length}
                </div>
                <div className="text-gray-600">Total de análises</div>
              </div>
              
              <div className="card text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {analyses.filter(a => a.status === 'completed').length}
                </div>
                <div className="text-gray-600">Concluídas</div>
              </div>
              
              <div className="card text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {analyses.reduce((sum, a) => sum + a.creditsUsed, 0)}
                </div>
                <div className="text-gray-600">Créditos utilizados</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
