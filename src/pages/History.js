import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { userService } from '../services/api';
import { 
  MessageSquare, 
  Calendar,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import toast from 'react-hot-toast';

const HistoryPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Buscar respostas LLM
  const { data: llmData, isLoading, error } = useQuery(
    'llm-responses',
    userService.getLLMResponses,
    {
      staleTime: 60 * 1000, // 1 minuto
      onSuccess: (data) => {
        console.log('📥 LLM Data recebida:', data);
        console.log('📦 Data.data:', data?.data);
        console.log('📝 Responses:', data?.data?.responses);
      },
      onError: (err) => {
        console.error('❌ Erro ao buscar respostas:', err);
      }
    }
  );

  console.log('🔍 llmData:', llmData);
  console.log('🔍 llmData.data:', llmData?.data);

  const responses = llmData?.data?.responses || [];
  const total = llmData?.data?.total || 0;

  console.log('📋 Responses final:', responses);
  console.log('📊 Total final:', total);

  const handleCopy = (content, index) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    toast.success('Copiado para área de transferência!');
    
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-beige-50 via-white to-romance-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romance-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando histórico...</p>
        </div>
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
              <MessageSquare className="h-8 w-8 text-romance-500" />
              <h1 className="text-4xl font-bold text-gray-900">
                Histórico de Respostas
              </h1>
            </div>
            
            <p className="text-lg text-gray-600">
              Todas as respostas da IA para suas consultas ({total} {total === 1 ? 'resposta' : 'respostas'}).
            </p>
          </motion.div>

          {/* Lista de respostas LLM */}
          {responses.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center py-12"
            >
              <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Nenhuma resposta ainda
              </h2>
              <p className="text-gray-600 mb-6">
                Suas interações com a IA aparecerão aqui.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {responses.map((response, index) => (
                <motion.div
                  key={response.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className="card hover:shadow-lg transition-all duration-300"
                >
                  {/* Header da resposta */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-romance rounded-full flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Resposta da IA #{responses.length - index}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(response.createdAt).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Botão copiar */}
                    <button
                      onClick={() => handleCopy(response.content, index)}
                      className="inline-flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-600 font-medium">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Conteúdo da resposta */}
                  <div className="prose prose-sm max-w-none">
                    <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                      {response.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
