import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { analysisService } from '../services/api';
import toast from 'react-hot-toast';
import { 
  Upload as UploadIcon, 
  Heart, 
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';

const UploadPage = () => {
  const [plan, setPlan] = useState('basic');
  const [loading, setLoading] = useState(false);
  const { user, hasCredits } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const requiredCredits = plan === 'basic' ? 1 : 3;
    
    if (!hasCredits(requiredCredits)) {
      toast.error('Créditos insuficientes. Compre mais créditos para continuar.');
      navigate('/plans');
      return;
    }

    setLoading(true);

    try {
      const response = await analysisService.uploadImage({
        plan,
        // O n8n irá processar a imagem e enviar os dados via webhook
      });
      
      toast.success('Análise iniciada com sucesso!');
      navigate(`/analysis/${response.data.analysis.id}`);
    } catch (error) {
      console.error('Erro ao iniciar análise:', error);
      const message = error.response?.data?.error || 'Erro ao iniciar análise';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const plans = [
    {
      id: 'basic',
      name: 'Plano Básico',
      price: '1 crédito',
      features: ['MBTI', '1 celebridade', '2 dicas'],
      color: 'romance'
    },
    {
      id: 'complete',
      name: 'Plano Completo',
      price: '3 créditos',
      features: ['MBTI completo', 'Múltiplas celebridades', '3 scripts', 'Infográfico'],
      color: 'gold'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 via-white to-romance-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-romance-200 mb-6">
              <Sparkles className="h-4 w-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700">Análise por IA</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Inicie sua{' '}
              <span className="text-gradient-romance">análise</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa IA vai analisar sua foto e revelar insights incríveis sobre sua personalidade e compatibilidade romântica.
            </p>

            {user && (
              <div className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-romance-100 to-royal-100 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4 text-romance-600" />
                <span className="text-sm font-medium text-gray-700">
                  Você tem {user.credits} créditos disponíveis
                </span>
              </div>
            )}
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Informação sobre o processo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card mb-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Como funciona?
                  </h2>
                  <div className="space-y-2 text-gray-600">
                    <p>1. Escolha seu plano de análise</p>
                    <p>2. Nossa IA processará sua foto automaticamente</p>
                    <p>3. Receba insights detalhados sobre sua personalidade</p>
                    <p>4. Descubra sua compatibilidade romântica</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Seleção de plano */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Escolha seu plano
              </h2>

              <div className="space-y-4 mb-8">
                {plans.map((planOption) => (
                  <div
                    key={planOption.id}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                      plan === planOption.id
                        ? `border-${planOption.color}-400 bg-${planOption.color}-50`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setPlan(planOption.id)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          plan === planOption.id
                            ? `border-${planOption.color}-500 bg-${planOption.color}-500`
                            : 'border-gray-300'
                        }`}>
                          {plan === planOption.id && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                        <h3 className="font-semibold text-gray-900">
                          {planOption.name}
                        </h3>
                      </div>
                      <span className={`font-bold ${
                        planOption.color === 'gold' ? 'text-gold-600' : 'text-romance-600'
                      }`}>
                        {planOption.price}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {planOption.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Informações importantes */}
              <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-700">
                    <p className="font-semibold mb-1">Importante:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• A análise será processada automaticamente pelo n8n</li>
                      <li>• Você receberá uma notificação quando estiver pronta</li>
                      <li>• O processo pode levar alguns minutos</li>
                      <li>• Você pode acompanhar o progresso na página de resultados</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botão de envio */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  loading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'btn-primary hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Iniciando análise...</span>
                  </>
                ) : (
                  <>
                    <UploadIcon className="h-5 w-5" />
                    <span>Iniciar análise</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
