import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye,
  Database,
  UserCheck,
  FileText,
  AlertCircle,
  HelpCircle,
  Trash2,
  Share2
} from 'lucide-react';

const Privacy = () => {
  const lastUpdate = 'Janeiro de 2025';

  const sections = [
    {
      icon: FileText,
      title: '1. Introdução',
      content: [
        'Esta Política de Privacidade descreve como o Teste Match coleta, usa, armazena e protege suas informações pessoais.',
        'Ao usar nossa plataforma, você concorda com as práticas descritas nesta política.',
        'Estamos comprometidos com a proteção de sua privacidade e seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD).',
        'Esta política aplica-se a todos os usuários da plataforma Teste Match.'
      ]
    },
    {
      icon: Database,
      title: '2. Informações que Coletamos',
      content: [
        'Dados de Cadastro: Nome, email, senha (criptografada) e telefone.',
        'Dados de Análise: Fotos enviadas (processadas e deletadas imediatamente), resultados das análises.',
        'Dados de Pagamento: Informações processadas por gateways seguros de terceiros (não armazenamos dados de cartão).',
        'Dados de Uso: Páginas visitadas, tempo de uso, funcionalidades acessadas, dispositivo e navegador.',
        'Dados de Comunicação: Mensagens enviadas através de formulários de contato ou suporte.',
        'Cookies: Utilizamos cookies para melhorar a experiência do usuário e analytics.'
      ]
    },
    {
      icon: Eye,
      title: '3. Como Usamos suas Informações',
      content: [
        'Fornecer e melhorar nossos serviços de análise de personalidade.',
        'Processar pagamentos e gerenciar créditos da sua conta.',
        'Enviar comunicações importantes sobre a plataforma e atualizações.',
        'Responder suas dúvidas, solicitações e fornecer suporte.',
        'Personalizar sua experiência e recomendar funcionalidades.',
        'Realizar análises estatísticas para melhorar a plataforma.',
        'Prevenir fraudes e garantir a segurança da plataforma.',
        'Cumprir obrigações legais e regulatórias.'
      ]
    },
    {
      icon: Shield,
      title: '4. Proteção de Dados',
      content: [
        'Utilizamos criptografia SSL/TLS para proteger a transmissão de dados.',
        'Senhas são armazenadas com hash seguro (bcrypt) e nunca em texto plano.',
        'Acesso aos dados é restrito apenas a funcionários autorizados.',
        'Realizamos backups regulares e mantemos múltiplas camadas de segurança.',
        'Monitoramos constantemente a plataforma contra ameaças de segurança.',
        'Seus dados são armazenados em servidores seguros e confiáveis.'
      ]
    },
    {
      icon: Trash2,
      title: '5. Tratamento de Fotos',
      content: [
        'As fotos enviadas são usadas EXCLUSIVAMENTE para análise de personalidade.',
        'Após o processamento pela IA, as fotos são IMEDIATAMENTE DELETADAS de nossos servidores.',
        'Não armazenamos, vendemos ou compartilhamos suas fotos com terceiros.',
        'Mantemos apenas os resultados da análise (tipo MBTI, compatibilidade, etc), nunca as imagens.',
        'Todo o processamento é feito de forma automatizada e segura.',
        'Você tem garantia total de que suas fotos não permanecerão em nosso sistema.'
      ]
    },
    {
      icon: Share2,
      title: '6. Compartilhamento de Dados',
      content: [
        'NÃO vendemos, alugamos ou comercializamos seus dados pessoais.',
        'Podemos compartilhar dados com prestadores de serviço (pagamentos, hospedagem) sob contratos de confidencialidade.',
        'Podemos compartilhar dados se exigido por lei ou ordem judicial.',
        'Dados agregados e anonimizados podem ser usados para estatísticas e pesquisas.',
        'Você tem controle sobre o compartilhamento de seus resultados nas redes sociais.',
        'Terceiros autorizados devem seguir a mesma política de privacidade.'
      ]
    },
    {
      icon: UserCheck,
      title: '7. Seus Direitos (LGPD)',
      content: [
        'Acesso: Você pode solicitar uma cópia de todos os seus dados pessoais.',
        'Correção: Você pode atualizar ou corrigir suas informações a qualquer momento.',
        'Exclusão: Você pode solicitar a exclusão completa de sua conta e dados.',
        'Portabilidade: Você pode solicitar seus dados em formato estruturado.',
        'Revogação: Você pode revogar consentimentos dados anteriormente.',
        'Oposição: Você pode se opor a certos tipos de processamento de dados.',
        'Para exercer seus direitos, entre em contato via email ou WhatsApp.'
      ]
    },
    {
      icon: Lock,
      title: '8. Cookies e Tecnologias',
      content: [
        'Usamos cookies essenciais para o funcionamento da plataforma.',
        'Cookies de analytics nos ajudam a entender como você usa a plataforma.',
        'Você pode desabilitar cookies nas configurações do navegador, mas isso pode afetar a funcionalidade.',
        'Não usamos cookies de publicidade de terceiros.',
        'Respeitamos as configurações de "Do Not Track" do seu navegador.'
      ]
    },
    {
      icon: Database,
      title: '9. Retenção de Dados',
      content: [
        'Mantemos seus dados enquanto sua conta estiver ativa.',
        'Dados de análise são mantidos para permitir acesso ao histórico.',
        'Após exclusão da conta, removemos todos os dados em até 30 dias.',
        'Alguns dados podem ser mantidos por período maior se exigido por lei.',
        'Você pode solicitar exclusão antecipada a qualquer momento.'
      ]
    },
    {
      icon: AlertCircle,
      title: '10. Menores de Idade',
      content: [
        'Nossos serviços são destinados a maiores de 18 anos.',
        'Não coletamos intencionalmente dados de menores de idade.',
        'Se você for responsável por um menor e acredita que ele forneceu dados, entre em contato imediatamente.',
        'Análises de menores só podem ser realizadas por responsáveis legais com consentimento apropriado.'
      ]
    },
    {
      icon: FileText,
      title: '11. Alterações nesta Política',
      content: [
        'Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas.',
        'Notificaremos sobre alterações significativas via email ou aviso na plataforma.',
        'A data da última atualização é sempre indicada no topo desta página.',
        'O uso continuado após alterações constitui aceitação da nova política.'
      ]
    },
    {
      icon: HelpCircle,
      title: '12. Contato',
      content: [
        'Para dúvidas sobre privacidade, exercer seus direitos ou relatar problemas:',
        'Email: privacidade@testematch.com',
        'WhatsApp: +55 62 93557070',
        'Respondemos solicitações em até 48 horas úteis.',
        'Para solicitações LGPD, pode levar até 15 dias úteis conforme previsto em lei.'
      ]
    }
  ];

  const highlights = [
    {
      icon: Trash2,
      title: 'Fotos Deletadas',
      description: 'Suas fotos são processadas e deletadas imediatamente'
    },
    {
      icon: Lock,
      title: 'Dados Criptografados',
      description: 'Criptografia de ponta a ponta em toda comunicação'
    },
    {
      icon: Shield,
      title: 'LGPD Compliant',
      description: 'Total conformidade com a Lei Geral de Proteção de Dados'
    },
    {
      icon: UserCheck,
      title: 'Você no Controle',
      description: 'Acesso, correção e exclusão de dados a qualquer momento'
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
            <div className="w-16 h-16 bg-gradient-romance rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Política de{' '}
              <span className="text-gradient-romance">Privacidade</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Seu privacidade é nossa prioridade
            </p>
            <p className="text-sm text-gray-500">
              Última atualização: {lastUpdate}
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="w-14 h-14 bg-gradient-romance rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="card bg-green-50 border border-green-200">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Nosso Compromisso com sua Privacidade
                  </h3>
                  <p className="text-sm text-gray-700">
                    Suas fotos são processadas e <strong>IMEDIATAMENTE DELETADAS</strong> após análise. 
                    Não vendemos, compartilhamos ou armazenamos suas imagens. Seu privacidade é 
                    nossa prioridade máxima e seguimos rigorosamente a LGPD.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Privacy Sections */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.03) }}
                  className="card"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-romance rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-1">
                      {section.title}
                    </h2>
                  </div>
                  <div className="ml-16 space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card bg-gradient-romance text-white text-center">
              <Lock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Dúvidas sobre Privacidade?
              </h3>
              <p className="mb-6 opacity-90">
                Entre em contato com nossa equipe de privacidade
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacidade@testematch.com"
                  className="bg-white text-romance-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  privacidade@testematch.com
                </a>
                <a
                  href="https://wa.me/556293557070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

