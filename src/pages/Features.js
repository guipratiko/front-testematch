import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Shield, 
  Users, 
  Star, 
  Heart,
  BarChart3,
  MessageCircle,
  Share2,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Camera,
      title: 'Análise por Foto',
      description: 'Envie sua foto e nossa IA avançada analisa suas características faciais para determinar seu tipo de personalidade MBTI.',
      color: 'from-romance-500 to-romance-600'
    },
    {
      icon: Users,
      title: 'Análise MBTI Completa',
      description: 'Descubra seu tipo de personalidade dentre os 16 tipos do MBTI e entenda profundamente como você se relaciona com o mundo.',
      color: 'from-royal-500 to-royal-600'
    },
    {
      icon: Heart,
      title: 'Compatibilidade Romântica',
      description: 'Veja sua compatibilidade com cada tipo de personalidade e descubra quais combinações funcionam melhor para você.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Star,
      title: 'Compare com Celebridades',
      description: 'Descubra quais celebridades brasileiras e internacionais compartilham seu tipo de personalidade.',
      color: 'from-gold-500 to-yellow-600'
    },
    {
      icon: MessageCircle,
      title: 'Dicas Personalizadas',
      description: 'Receba conselhos práticos e específicos para melhorar seus relacionamentos baseados no seu tipo de personalidade.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Identificação de Red Flags',
      description: 'Entenda os principais pontos de atenção em relacionamentos para o seu tipo e como evitar problemas comuns.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: BarChart3,
      title: 'Análise Detalhada',
      description: 'Receba um relatório completo com gráficos, estatísticas e insights profundos sobre sua personalidade.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Share2,
      title: 'Infográfico Compartilhável',
      description: 'Compartilhe seus resultados nas redes sociais com um infográfico visualmente atraente e personalizado.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const benefits = [
    'Resultados instantâneos em segundos',
    'Análise baseada em IA de última geração',
    'Interface intuitiva e fácil de usar',
    'Precisão validada por especialistas',
    'Privacidade e segurança garantidas',
    'Acesso ao histórico de análises',
    'Suporte dedicado via WhatsApp',
    'Atualizações e melhorias constantes'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-royal-50">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Funcionalidades{' '}
              <span className="text-gradient-romance">Poderosas</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Descubra tudo o que você pode fazer com nossa plataforma de análise de compatibilidade romântica
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Por que escolher o Teste Match?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-romance-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para descobrir sua compatibilidade?
            </h3>
            <p className="text-gray-600 mb-8">
              Comece agora mesmo sua análise de personalidade
            </p>
            <Link
              to="/upload"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Começar Análise</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;

