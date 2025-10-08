import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  HelpCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Resposta em até 5 minutos',
      action: 'Enviar mensagem',
      link: 'https://wa.me/556293557070',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'contato@testematch.com',
      action: 'Enviar email',
      link: 'mailto:contato@testematch.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: HelpCircle,
      title: 'Central de Ajuda',
      description: 'FAQ e artigos úteis',
      action: 'Acessar central',
      link: '/help-center',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const supportHours = [
    { day: 'Segunda a Sexta', hours: '9h às 18h' },
    { day: 'Sábado', hours: '9h às 14h' },
    { day: 'Domingo', hours: 'Fechado' }
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
              Entre em{' '}
              <span className="text-gradient-romance">Contato</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Estamos aqui para ajudar você. Escolha a melhor forma de contato
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isExternal = method.link.startsWith('http') || method.link.startsWith('mailto');
              
              return (
                <a
                  key={index}
                  href={method.link}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="card hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {method.description}
                  </p>
                  <span className="text-romance-600 font-medium text-sm group-hover:text-romance-700">
                    {method.action} →
                  </span>
                </a>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envie sua Mensagem
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Mensagem enviada com sucesso!
                    </h3>
                    <p className="text-gray-600">
                      Responderemos em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romance-500 focus:ring-2 focus:ring-romance-200 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romance-500 focus:ring-2 focus:ring-romance-200 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romance-500 focus:ring-2 focus:ring-romance-200 transition-all"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="support">Suporte Técnico</option>
                        <option value="billing">Pagamentos e Créditos</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Parcerias</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romance-500 focus:ring-2 focus:ring-romance-200 transition-all resize-none"
                        placeholder="Descreva sua dúvida ou solicitação..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              {/* Support Hours */}
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-romance rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Horário de Atendimento
                  </h3>
                </div>
                <div className="space-y-3">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="card bg-gradient-romance text-white">
                <MessageCircle className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Resposta Rápida no WhatsApp
                </h3>
                <p className="mb-4 opacity-90">
                  Para suporte urgente, entre em contato via WhatsApp. Respondemos em até 5 minutos durante o horário comercial.
                </p>
                <a
                  href="https://wa.me/556293557070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-romance-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors inline-block"
                >
                  Abrir WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-royal rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Localização
                  </h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Goiânia, Goiás - Brasil
                </p>
                <p className="text-sm text-gray-500">
                  Atendimento 100% remoto via WhatsApp e Email
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

