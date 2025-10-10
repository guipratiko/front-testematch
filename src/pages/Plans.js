import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { useAuth } from '../contexts/AuthContext';
import { creditsService } from '../services/api';
import { 
  Heart, 
  Check, 
  Users, 
  Camera,
  Crown,
  Sparkles,
  ArrowRight,
  CreditCard,
  Gift,
  Shield,
  Clock
} from 'lucide-react';

const Plans = () => {
  const { user } = useAuth();

  // Buscar planos disponíveis
  const { data: plansData, isLoading } = useQuery(
    'plans',
    creditsService.getPlans,
    {
      staleTime: 0,
      cacheTime: 0,
    }
  );

  const plans = plansData?.data?.plans || [];

  // Planos hardcoded para garantir que apareçam
  const hardcodedPlans = [
    {
      id: 'basic',
      name: 'Pacote 1k',
      type: 'basic',
      price: 29.9,
      credits: 1000,
      description: 'Perfeito para iniciar sua jornada de autoconhecimento.',
      features: [
        'Mil créditos inclusos',
        'Validade vitalícia',
        'Use no seu ritmo',
        'Suporte dedicado'
      ],
      discount: { percentage: 0 },
      isActive: true,
      sortOrder: 1,
      checkoutUrl: 'https://testematch.carrinho.app/one-checkout/ocmtb/29828835'
    },
    {
      id: 'complete',
      name: 'Pacote 3k',
      type: 'complete',
      price: 59.9,
      credits: 3000,
      description: 'Economia e recursos extras para análises completas.',
      features: [
        '3 mil créditos inclusos',
        'Melhor custo-benefício',
        'Recursos completos',
        'Prioridade no suporte',
        'Bônus exclusivos'
      ],
      discount: { percentage: 0 },
      isActive: true,
      sortOrder: 2,
      checkoutUrl: 'https://testematch.carrinho.app/one-checkout/ocmtb/29830318'
    },
    {
      id: 'credits_pack',
      name: 'Pacote 5k',
      type: 'credits_pack',
      price: 99,
      originalPrice: 124,
      credits: 5000,
      description: 'Máxima economia para você e seu par.',
      features: [
        '5 mil créditos inclusos',
        'Economia de 20%',
        'Ideal para casais',
        'Análises ilimitadas',
        'Suporte VIP'
      ],
      discount: { percentage: 20 },
      isActive: true,
      sortOrder: 3,
      checkoutUrl: 'https://testematch.carrinho.app/one-checkout/ocmtb/29830386'
    }
  ];

  // Usar planos hardcoded se a API não retornar dados
  const displayPlans = plans.length > 0 ? plans : hardcodedPlans;

  const getPlanIcon = (type) => {
    switch (type) {
      case 'basic':
        return Heart;
      case 'complete':
        return Crown;
      case 'credits_pack':
        return Gift;
      default:
        return Heart;
    }
  };

  const getPlanGradient = (type) => {
    switch (type) {
      case 'basic':
        return 'from-romance-500 to-romance-600';
      case 'complete':
        return 'from-gold-500 to-gold-600';
      case 'credits_pack':
        return 'from-mint-500 to-mint-600';
      default:
        return 'from-romance-500 to-romance-600';
    }
  };

  const getPlanBadge = (type) => {
    switch (type) {
      case 'basic':
        return { text: 'Essencial', color: 'bg-romance-100 text-romance-700' };
      case 'complete':
        return { text: 'Mais Popular', color: 'bg-gold-100 text-gold-700' };
      case 'credits_pack':
        return { text: 'Melhor Valor', color: 'bg-mint-100 text-mint-700' };
      default:
        return { text: 'Essencial', color: 'bg-romance-100 text-romance-700' };
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-royal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romance-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando planos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-royal-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-romance-200 mb-6">
                <Sparkles className="h-4 w-4 text-gold-500" />
                <span className="text-sm font-medium text-gray-700">Escolha seu plano</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Desbloqueie sua{' '}
                <span className="text-gradient-romance">compatibilidade</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Escolha o plano ideal para descobrir insights profundos sobre sua personalidade e relacionamentos.
              </p>

              {user && (
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                  <CreditCard className="h-4 w-4 text-romance-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Você tem {user.credits} créditos
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-romance-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-royal-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gold-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Planos */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {displayPlans.map((plan, index) => {
              const Icon = getPlanIcon(plan.type);
              const gradient = getPlanGradient(plan.type);
              const badge = getPlanBadge(plan.type);
              const isPopular = plan.type === 'complete';
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${
                    isPopular 
                      ? 'ring-2 ring-gold-400 shadow-gold scale-105' 
                      : 'shadow-soft hover:shadow-lg'
                  } bg-white rounded-3xl p-8 transition-all duration-300`}
                >
                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 ${badge.color}`}>
                      <Icon className="h-4 w-4" />
                      <span>{badge.text}</span>
                    </div>
                  </div>

                  {/* Header do plano */}
                  <div className="text-center mb-8 pt-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${gradient}`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Preço */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center space-x-2">
                        {plan.discount?.percentage > 0 && (
                          <span className="text-lg text-gray-400 line-through">
                            R$ {Math.round(plan.price / (1 - plan.discount.percentage / 100))}
                          </span>
                        )}
                        <span className="text-4xl font-bold text-gray-900">
                          R$ {plan.price}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        ({plan.credits} crédito{plan.credits > 1 ? 's' : ''})
                      </div>
                      {plan.discount?.percentage > 0 && (
                        <div className="text-sm text-mint-600 font-semibold">
                          {plan.discount.percentage}% de desconto
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botão */}
                  <div className="text-center">
                    {plan.checkoutUrl ? (
                      <a
                        href={plan.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r ${gradient} hover:shadow-lg hover:scale-105`}
                      >
                        <CreditCard className="h-4 w-4" />
                        <span>Comprar Agora</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        to="/upload"
                        className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r ${gradient} hover:shadow-lg hover:scale-105`}
                      >
                        <span>Escolher Plano</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-romance-500 to-royal-500 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Por que escolher nossos planos?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Tecnologia de ponta combinada com insights psicológicos profundos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: '100% Seguro',
                description: 'Seus dados são protegidos com criptografia de ponta'
              },
              {
                icon: Clock,
                title: 'Resultados Rápidos',
                description: 'Análise completa em menos de 5 minutos'
              },
              {
                icon: Users,
                title: 'Precisão Científica',
                description: 'Baseado em estudos de personalidade MBTI'
              },
              {
                icon: Camera,
                title: 'Visual Incrível',
                description: 'Infográficos lindos para compartilhar'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pronto para descobrir sua compatibilidade?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já descobriram insights incríveis sobre seus relacionamentos.
          </p>
          <Link
            to="/register"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>Começar Agora</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Plans;