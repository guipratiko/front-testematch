import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { analysisService } from '../services/api';
import { 
  Heart, 
  Star, 
  Zap, 
  Camera,
  Share2,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  Crown,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

const Analysis = () => {
  const { id } = useParams();
  const [isPublic, setIsPublic] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  // Buscar análise
  const { data: analysisData, isLoading, error } = useQuery(
    ['analysis', id],
    () => analysisService.getAnalysis(id),
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
    }
  );

  const analysis = analysisData?.data?.analysis;

  useEffect(() => {
    if (analysis?.shareToken) {
      setShareUrl(`${window.location.origin}/analysis/share/${analysis.shareToken}`);
    }
  }, [analysis]);

  const togglePublic = async () => {
    try {
      await analysisService.makePublic(id, !isPublic);
      setIsPublic(!isPublic);
    } catch (error) {
      console.error('Erro ao alterar visibilidade:', error);
    }
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romance-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando análise...</p>
        </div>
      </div>
    );
  }

  if (error || !analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Análise não encontrada</h2>
          <p className="text-gray-600 mb-6">A análise que você está procurando não existe ou não está disponível.</p>
          <Link to="/history" className="btn-primary">
            Ver minhas análises
          </Link>
        </div>
      </div>
    );
  }

  const isOwner = analysis.isOwner;
  const result = analysis.result;

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
            <div className="flex items-center justify-between mb-6">
              <Link
                to={isOwner ? "/history" : "/"}
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Link>

              {isOwner && analysis.status === 'completed' && (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePublic}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      analysis.isPublic
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {analysis.isPublic ? 'Pública' : 'Privada'}
                  </button>
                  
                  {analysis.isPublic && (
                    <button
                      onClick={() => navigator.clipboard.writeText(shareUrl)}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-romance-100 text-romance-700 rounded-lg hover:bg-romance-200 transition-colors"
                    >
                      <Share2 className="h-4 w-4" />
                      <span>Compartilhar</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-romance-200 mb-4">
                <Sparkles className="h-4 w-4 text-gold-500" />
                <span className="text-sm font-medium text-gray-700">
                  Análise {analysis.plan === 'complete' ? 'Completa' : 'Básica'}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Sua análise de{' '}
                <span className="text-gradient-romance">compatibilidade</span>
              </h1>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(analysis.status)}
                  <span>{getStatusText(analysis.status)}</span>
                </div>
                <span>•</span>
                <span>{new Date(analysis.createdAt).toLocaleDateString('pt-BR')}</span>
                {analysis.processingTime && (
                  <>
                    <span>•</span>
                    <span>{analysis.processingTime}s</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Status de processamento */}
          {analysis.status !== 'completed' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center mb-8"
            >
              <div className="py-8">
                {analysis.status === 'processing' ? (
                  <>
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-romance-500 mx-auto mb-4"></div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Analisando sua foto...
                    </h2>
                    <p className="text-gray-600">
                      Nossa IA está trabalhando para revelar insights sobre sua personalidade.
                      Isso pode levar alguns minutos.
                    </p>
                  </>
                ) : analysis.status === 'failed' ? (
                  <>
                    <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Análise falhou
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {analysis.errorMessage || 'Ocorreu um erro durante a análise. Tente novamente.'}
                    </p>
                    <Link to="/upload" className="btn-primary">
                      Tentar novamente
                    </Link>
                  </>
                ) : (
                  <>
                    <Clock className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Aguardando processamento...
                    </h2>
                    <p className="text-gray-600">
                      Sua análise está na fila e será processada em breve.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Resultados */}
          {analysis.status === 'completed' && result && (
            <div className="space-y-8">
              {/* Teaser para não proprietários */}
              {!isOwner && analysis.requiresCredits && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card-gold text-center"
                >
                  <Crown className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Desbloqueie o relatório completo!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Veja apenas um preview dos resultados. Compre créditos para acessar o relatório completo.
                  </p>
                  <Link to="/plans" className="btn-gold">
                    Comprar créditos
                  </Link>
                </motion.div>
              )}

              {/* MBTI */}
              {result.mbti && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="card-royal"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="h-6 w-6 text-royal-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Tipo de Personalidade</h2>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-royal-600 mb-2">
                      {result.mbti}
                    </div>
                    <p className="text-gray-600">
                      Seu tipo de personalidade baseado na análise facial
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Score de paixão */}
              {result.compatibility?.passionScore && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="card-romance"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="h-6 w-6 text-romance-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Score de Paixão</h2>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-romance-600 mb-2">
                      {result.compatibility.passionScore}%
                    </div>
                    <p className="text-gray-600">
                      Sua intensidade emocional em relacionamentos
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Celebridades */}
              {(result.celebrities?.brazilian || result.celebrities?.international) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="card-gold"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <Star className="h-6 w-6 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Celebridades Similares</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {result.celebrities.brazilian && (
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 mb-2">
                          Brasileira
                        </div>
                        <div className="text-2xl font-bold text-gold-600 mb-1">
                          {result.celebrities.brazilian.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.celebrities.brazilian.similarity}% de similaridade
                        </div>
                      </div>
                    )}
                    
                    {result.celebrities.international && (
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 mb-2">
                          Internacional
                        </div>
                        <div className="text-2xl font-bold text-gold-600 mb-1">
                          {result.celebrities.international.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.celebrities.international.similarity}% de similaridade
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Infográfico */}
              {result.infographicUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="card text-center"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Camera className="h-6 w-6 text-gray-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Infográfico</h2>
                  </div>
                  
                  <div className="mb-6">
                    <img
                      src={result.infographicUrl}
                      alt="Infográfico da análise"
                      className="max-w-full h-auto rounded-xl shadow-lg mx-auto"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => window.open(result.infographicUrl, '_blank')}
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Baixar PDF</span>
                    </button>
                    
                    {analysis.isPublic && (
                      <button
                        onClick={() => navigator.clipboard.writeText(shareUrl)}
                        className="btn-outline inline-flex items-center space-x-2"
                      >
                        <Share2 className="h-4 w-4" />
                        <span>Compartilhar</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
