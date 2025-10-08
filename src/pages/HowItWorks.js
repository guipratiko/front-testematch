import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Zap, 
  BarChart3, 
  Share2,
  CheckCircle,
  ArrowRight,
  Camera,
  Brain,
  Heart
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Envie sua Foto',
      description: 'Faça upload de uma foto clara do seu rosto. Pode ser uma selfie ou qualquer foto onde seu rosto esteja visível.',
      tips: ['Use boa iluminação', 'Evite óculos escuros', 'Olhe para a câmera']
    },
    {
      number: '02',
      icon: Brain,
      title: 'IA Analisa sua Personalidade',
      description: 'Nossa inteligência artificial avançada analisa suas características faciais e determina seu tipo de personalidade MBTI.',
      tips: ['Processo instantâneo', 'Tecnologia de ponta', 'Alta precisão']
    },
    {
      number: '03',
      icon: Heart,
      title: 'Descubra sua Compatibilidade',
      description: 'Receba análise completa sobre como você ama, sua compatibilidade com diferentes tipos e dicas personalizadas.',
      tips: ['16 tipos MBTI', 'Compatibilidade detalhada', 'Insights profundos']
    },
    {
      number: '04',
      icon: Share2,
      title: 'Compartilhe os Resultados',
      description: 'Baixe seu infográfico personalizado e compartilhe nas redes sociais ou com amigos.',
      tips: ['Design exclusivo', 'Pronto para redes sociais', 'Totalmente personalizável']
    }
  ];

  const techStack = [
    {
      icon: Camera,
      title: 'Análise Facial',
      description: 'Tecnologia avançada de reconhecimento facial'
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Machine Learning com modelos treinados'
    },
    {
      icon: BarChart3,
      title: 'Análise MBTI',
      description: 'Baseado em metodologia científica validada'
    }
  ];

  const faqs = [
    {
      question: 'Quanto tempo demora a análise?',
      answer: 'A análise é praticamente instantânea! Em poucos segundos após enviar sua foto, você receberá seu resultado completo.'
    },
    {
      question: 'A análise é precisa?',
      answer: 'Sim! Nossa IA foi treinada com milhares de análises e validada por especialistas em psicologia e MBTI.'
    },
    {
      question: 'Minhas fotos ficam armazenadas?',
      answer: 'Não. Suas fotos são processadas e imediatamente deletadas por questões de privacidade e segurança.'
    },
    {
      question: 'Posso fazer análise de outras pessoas?',
      answer: 'Sim! Você pode analisar quantas pessoas quiser, desde que tenha créditos disponíveis.'
    }
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
              Como{' '}
              <span className="text-gradient-romance">Funciona</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Descubra sua compatibilidade romântica em 4 passos simples
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-12 mb-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="card">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-5xl font-bold text-romance-200">
                          {step.number}
                        </span>
                        <div className="w-16 h-16 bg-gradient-romance rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.tips.map((tip, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-romance-500" />
                            <span className="text-sm text-gray-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-romance-100 to-royal-100 rounded-3xl flex items-center justify-center shadow-xl">
                      <Icon className="h-32 w-32 text-romance-400 opacity-50" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technology Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Tecnologia de Ponta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-gradient-romance rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {tech.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-600 mb-8">
              Sua análise de compatibilidade está a um clique de distância
            </p>
            <Link
              to="/upload"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Fazer Análise Agora</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

