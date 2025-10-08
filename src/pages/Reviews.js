import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Sparkles, ArrowRight, Quote } from 'lucide-react';

const Reviews = () => {
  const stats = [
    { value: '10.000+', label: 'Análises Realizadas' },
    { value: '4.9/5', label: 'Avaliação Média' },
    { value: '98%', label: 'Usuários Satisfeitos' },
    { value: '2.847', label: 'Avaliações' }
  ];

  const reviews = [
    {
      name: 'Maria Silva',
      type: 'ENFJ - Protagonista',
      rating: 5,
      text: 'Incrível! Descobri muito sobre mim e agora entendo melhor meus relacionamentos. A análise foi surpreendentemente precisa e as dicas práticas me ajudaram muito!',
      date: 'Janeiro 2025'
    },
    {
      name: 'João Santos',
      type: 'INTJ - Arquiteto',
      rating: 5,
      text: 'As dicas são muito práticas e me ajudaram a melhorar minha comunicação. Nunca imaginei que uma análise por foto pudesse ser tão detalhada!',
      date: 'Janeiro 2025'
    },
    {
      name: 'Ana Costa',
      type: 'ESFP - Animador',
      rating: 5,
      text: 'O resultado foi surpreendente! Recomendo para todos os meus amigos. O infográfico ficou lindo e compartilhei nas redes sociais.',
      date: 'Dezembro 2024'
    },
    {
      name: 'Pedro Oliveira',
      type: 'ISTP - Virtuoso',
      rating: 5,
      text: 'Muito legal descobrir com quais tipos eu sou mais compatível. A análise de compatibilidade é super detalhada e me ajudou a entender melhor meus relacionamentos.',
      date: 'Dezembro 2024'
    },
    {
      name: 'Juliana Lima',
      type: 'INFP - Mediador',
      rating: 5,
      text: 'A análise é profunda e realmente útil. Me identifiquei muito com o resultado e as sugestões foram muito relevantes para o momento que estou vivendo.',
      date: 'Dezembro 2024'
    },
    {
      name: 'Carlos Mendes',
      type: 'ENTJ - Comandante',
      rating: 5,
      text: 'Excelente ferramenta! Precisão impressionante. Como alguém cético, fiquei realmente surpreso com o nível de acurácia da análise.',
      date: 'Novembro 2024'
    },
    {
      name: 'Fernanda Rocha',
      type: 'ISFJ - Defensor',
      rating: 5,
      text: 'Me ajudou a entender melhor como me relaciono com as pessoas. Agora sei o que procurar em um parceiro e como melhorar meus relacionamentos atuais.',
      date: 'Novembro 2024'
    },
    {
      name: 'Ricardo Alves',
      type: 'ESTP - Empreendedor',
      rating: 5,
      text: 'Rápido, fácil e muito revelador! Fiz a análise e em segundos tinha todos os resultados. Vale muito a pena!',
      date: 'Novembro 2024'
    },
    {
      name: 'Beatriz Ferreira',
      type: 'INFJ - Advogado',
      rating: 5,
      text: 'As dicas de compatibilidade são incríveis. Finalmente entendo por que alguns relacionamentos funcionam melhor que outros para mim.',
      date: 'Outubro 2024'
    },
    {
      name: 'Lucas Martins',
      type: 'ENTP - Debatedor',
      rating: 5,
      text: 'Adorei comparar meu tipo com celebridades! É muito legal ver que compartilho personalidade com pessoas que admiro.',
      date: 'Outubro 2024'
    },
    {
      name: 'Camila Souza',
      type: 'ISTJ - Logístico',
      rating: 5,
      text: 'Análise completa e bem estruturada. Tudo muito organizado e fácil de entender. Recomendo!',
      date: 'Outubro 2024'
    },
    {
      name: 'Gabriel Pereira',
      type: 'ENFP - Ativista',
      rating: 5,
      text: 'Me deu insights que eu nunca tinha pensado antes. A análise trouxe uma nova perspectiva sobre minha forma de amar.',
      date: 'Setembro 2024'
    }
  ];

  const categories = [
    {
      title: 'Precisão da Análise',
      rating: 4.9,
      reviews: 2847
    },
    {
      title: 'Facilidade de Uso',
      rating: 5.0,
      reviews: 2847
    },
    {
      title: 'Qualidade dos Insights',
      rating: 4.8,
      reviews: 2847
    },
    {
      title: 'Atendimento ao Cliente',
      rating: 4.9,
      reviews: 2847
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
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-gold-400 fill-current" />
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              O que nossos usuários{' '}
              <span className="text-gradient-romance">dizem</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Milhares de pessoas já descobriram mais sobre si mesmas
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl font-bold text-gradient-romance mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Rating Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Avaliações por Categoria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.reviews.toLocaleString('pt-BR')} avaliações
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-gold-400 fill-current" />
                    <span className="text-2xl font-bold text-gray-900">
                      {category.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.05) }}
                className="card-royal relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-romance-200" />
                <div className="flex space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-sm text-romance-600">
                    {review.type}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {review.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-gradient-romance rounded-3xl p-12 text-center text-white"
          >
            <Sparkles className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Junte-se a milhares de pessoas satisfeitas
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Descubra sua compatibilidade romântica agora mesmo
            </p>
            <Link
              to="/upload"
              className="bg-white text-romance-500 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>Começar Minha Análise</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

