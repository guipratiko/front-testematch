import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  HelpCircle, 
  Book, 
  MessageCircle,
  CreditCard,
  Shield,
  Camera,
  Settings,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    {
      icon: Book,
      title: 'Primeiros Passos',
      description: 'Como começar a usar a plataforma',
      articles: 12
    },
    {
      icon: Camera,
      title: 'Sobre a Análise',
      description: 'Como funciona a análise de personalidade',
      articles: 8
    },
    {
      icon: CreditCard,
      title: 'Pagamentos e Créditos',
      description: 'Informações sobre planos e pagamentos',
      articles: 10
    },
    {
      icon: Shield,
      title: 'Privacidade e Segurança',
      description: 'Como protegemos seus dados',
      articles: 6
    },
    {
      icon: Settings,
      title: 'Conta e Configurações',
      description: 'Gerenciar sua conta',
      articles: 7
    },
    {
      icon: HelpCircle,
      title: 'Problemas Técnicos',
      description: 'Soluções para problemas comuns',
      articles: 9
    }
  ];

  const faqs = [
    {
      category: 'Geral',
      question: 'O que é o Teste Match?',
      answer: 'O Teste Match é uma plataforma de análise de compatibilidade romântica que usa inteligência artificial para analisar sua foto e determinar seu tipo de personalidade MBTI. Com base nisso, fornecemos insights sobre como você ama, sua compatibilidade com diferentes tipos de personalidade e dicas personalizadas para relacionamentos.'
    },
    {
      category: 'Análise',
      question: 'Como funciona a análise por foto?',
      answer: 'Nossa IA analisa características faciais e micro-expressões na sua foto para determinar traços de personalidade. O sistema foi treinado com milhares de análises e validado por especialistas em psicologia. A análise é instantânea e fornece resultados baseados no sistema MBTI de 16 tipos de personalidade.'
    },
    {
      category: 'Análise',
      question: 'A análise é precisa?',
      answer: 'Sim! Nossa tecnologia foi validada por especialistas e tem uma taxa de precisão de 92%. No entanto, é importante lembrar que nenhuma análise de personalidade é 100% definitiva. Use os resultados como guia para autoconhecimento, não como verdade absoluta.'
    },
    {
      category: 'Análise',
      question: 'Quanto tempo demora para receber os resultados?',
      answer: 'A análise é praticamente instantânea! Após o upload da foto, você receberá seus resultados completos em poucos segundos. Isso inclui seu tipo MBTI, análise de compatibilidade, comparação com celebridades e dicas personalizadas.'
    },
    {
      category: 'Privacidade',
      question: 'Minhas fotos são armazenadas?',
      answer: 'Não! Por questões de privacidade e segurança, suas fotos são processadas e imediatamente deletadas de nossos servidores. Mantemos apenas os resultados da análise, nunca as imagens originais.'
    },
    {
      category: 'Privacidade',
      question: 'Meus dados estão seguros?',
      answer: 'Sim! Utilizamos criptografia de ponta a ponta e seguimos rigorosos padrões de segurança. Seus dados pessoais são protegidos conforme a LGPD (Lei Geral de Proteção de Dados). Nunca compartilhamos suas informações com terceiros.'
    },
    {
      category: 'Créditos',
      question: 'Como funcionam os créditos?',
      answer: 'Cada análise consome 1 crédito. Você pode comprar créditos através dos nossos planos: Básico (5 créditos), Premium (15 créditos) ou Ilimitado (50 créditos). Os créditos não expiram e podem ser usados quando quiser.'
    },
    {
      category: 'Créditos',
      question: 'Posso compartilhar meus créditos?',
      answer: 'Não, os créditos são vinculados à sua conta e não podem ser transferidos. No entanto, você pode usar seus créditos para analisar fotos de outras pessoas (com a permissão delas).'
    },
    {
      category: 'Créditos',
      question: 'Como faço para comprar mais créditos?',
      answer: 'Basta acessar a página de Planos e escolher o pacote que melhor atende suas necessidades. Aceitamos pagamentos via cartão de crédito, PIX e boleto bancário.'
    },
    {
      category: 'Técnico',
      question: 'Que tipo de foto devo usar?',
      answer: 'Use uma foto clara do seu rosto, de frente para a câmera, com boa iluminação. Evite usar óculos escuros, chapéus ou outros acessórios que cubram seu rosto. Selfies funcionam perfeitamente!'
    },
    {
      category: 'Técnico',
      question: 'A análise não está funcionando. O que fazer?',
      answer: 'Primeiro, certifique-se de que sua foto atende aos requisitos: rosto visível, boa iluminação, frente para a câmera. Se o problema persistir, tente usar outro navegador ou limpar o cache. Caso continue com dificuldades, entre em contato com nosso suporte via WhatsApp.'
    },
    {
      category: 'Conta',
      question: 'Como altero minha senha?',
      answer: 'Acesse sua página de Perfil, clique em "Alterar Senha" e siga as instruções. Você precisará fornecer sua senha atual e a nova senha duas vezes para confirmação.'
    },
    {
      category: 'Conta',
      question: 'Posso deletar minha conta?',
      answer: 'Sim. Se desejar excluir sua conta, entre em contato com nosso suporte via WhatsApp ou email. Processaremos sua solicitação em até 48 horas. Lembre-se que ao deletar sua conta, você perderá todo seu histórico e créditos restantes.'
    },
    {
      category: 'Resultados',
      question: 'Posso refazer minha análise?',
      answer: 'Sim! Você pode fazer quantas análises quiser, desde que tenha créditos disponíveis. É normal fazer novas análises após mudanças significativas na vida ou simplesmente para comparar resultados.'
    },
    {
      category: 'Resultados',
      question: 'Como compartilho meus resultados?',
      answer: 'Após receber seus resultados, você pode baixar um infográfico personalizado e compartilhar nas redes sociais. Também é possível gerar um link de compartilhamento para enviar para amigos.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
              Central de{' '}
              <span className="text-gradient-romance">Ajuda</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Como podemos ajudar você hoje?
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar por pergunta, palavra-chave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-romance-500 focus:ring-2 focus:ring-romance-200 transition-all"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="card hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-romance rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.description}
                  </p>
                  <p className="text-romance-600 text-sm font-medium">
                    {category.articles} artigos
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-romance-100 text-romance-700 text-xs rounded-full mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  Nenhuma pergunta encontrada. Tente outra busca.
                </p>
              </div>
            )}
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-romance rounded-3xl p-12 text-center text-white"
          >
            <MessageCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Nossa equipe está pronta para ajudar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/556293557070"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-romance-500 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Falar no WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Enviar Email</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;

