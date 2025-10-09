import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Upload, 
  Star, 
  Users, 
  Zap, 
  Shield,
  ArrowRight,
  Sparkles,
  Camera
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Análise MBTI',
      description: 'Descubra seu tipo de personalidade e como você ama'
    },
    {
      icon: Users,
      title: 'Compatibilidade',
      description: 'Veja sua compatibilidade com diferentes tipos de personalidade'
    },
    {
      icon: Star,
      title: 'Celebridades',
      description: 'Compare-se com celebridades brasileiras e internacionais'
    },
    {
      icon: Zap,
      title: 'Dicas Práticas',
      description: 'Receba conselhos personalizados para seus relacionamentos'
    },
    {
      icon: Shield,
      title: 'Red Flags',
      description: 'Identifique pontos de atenção em relacionamentos'
    },
    {
      icon: Camera,
      title: 'Infográfico',
      description: 'Compartilhe seus resultados com um visual incrível'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Incrível! Descobri muito sobre mim e agora entendo melhor meus relacionamentos.',
      rating: 5
    },
    {
      name: 'João Santos',
      text: 'As dicas são muito práticas e me ajudaram a melhorar minha comunicação.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      text: 'O resultado foi surpreendente! Recomendo para todos os meus amigos.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section com Header Integrado */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Header Transparente */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent={true} />
        </div>

        {/* Conteúdo Hero */}
        <div className="relative z-10 section-padding pt-32 sm:pt-36 pl-8 sm:pl-12 lg:pl-16">
          <div className="text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 inline-block">
                Descubra sua{' '}
                <span className="text-gradient-romance">compatibilidade</span>{' '}
                romântica
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block">
                Envie sua foto e descubra insights incríveis sobre sua personalidade, 
                forma de amar e compatibilidade com diferentes tipos de pessoas.
              </p>
            </motion.div>
              
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-8"
            >
              <Link
                to="/upload"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <Upload className="h-5 w-5" />
                <span>Envie sua foto</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/plans"
                className="btn-outline text-lg px-8 py-4"
              >
                Ver planos
              </Link>
            </motion.div>
              
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-left"
            >
              <p className="text-sm text-gray-500 mb-4 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-block">
                Mais de 10.000 análises realizadas
              </p>
              <div className="flex justify-start space-x-1 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">4.9/5 (2.847 avaliações)</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-romance-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-royal-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gold-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que você vai descobrir?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa IA analisa sua foto e gera insights profundos sobre sua personalidade e relacionamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center hover:shadow-lg transition-all duration-300 p-4 sm:p-6"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-romance rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-royal-50 to-romance-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-lg text-gray-600">
              Milhares de pessoas já descobriram mais sobre si mesmas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-royal"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-romance">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pronto para descobrir sua compatibilidade?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Envie sua foto agora e receba insights incríveis sobre sua personalidade e relacionamentos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/upload"
                className="bg-white text-romance-500 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
              >
                <Upload className="h-5 w-5" />
                <span>Começar análise</span>
              </Link>
              
              <Link
                to="/plans"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors"
              >
                Ver planos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
