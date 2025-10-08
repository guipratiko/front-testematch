import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  AlertCircle,
  Shield,
  Scale,
  HelpCircle
} from 'lucide-react';

const Terms = () => {
  const lastUpdate = 'Janeiro de 2025';

  const sections = [
    {
      icon: FileText,
      title: '1. Aceitação dos Termos',
      content: [
        'Ao acessar e usar a plataforma Teste Match, você concorda com estes Termos de Uso e nossa Política de Privacidade.',
        'Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.',
        'Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação.',
        'O uso continuado da plataforma após mudanças nos termos constitui aceitação dessas alterações.'
      ]
    },
    {
      icon: CheckCircle,
      title: '2. Serviços Oferecidos',
      content: [
        'O Teste Match oferece análise de personalidade baseada em inteligência artificial através do upload de fotos.',
        'Os serviços incluem: análise MBTI, compatibilidade romântica, comparação com celebridades e dicas personalizadas.',
        'Os resultados são gerados automaticamente por IA e devem ser usados como guia, não como verdade absoluta.',
        'Não garantimos 100% de precisão nas análises, pois personalidade é complexa e multifacetada.'
      ]
    },
    {
      icon: Shield,
      title: '3. Conta de Usuário',
      content: [
        'Você é responsável por manter a confidencialidade de sua conta e senha.',
        'Você deve ter pelo menos 18 anos para criar uma conta e usar nossos serviços.',
        'Informações fornecidas no cadastro devem ser verdadeiras, atualizadas e completas.',
        'Você é responsável por todas as atividades realizadas em sua conta.',
        'Você deve notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.'
      ]
    },
    {
      icon: AlertCircle,
      title: '4. Uso Aceitável',
      content: [
        'Você concorda em usar a plataforma apenas para fins legais e de acordo com estes termos.',
        'É proibido usar a plataforma para análises de menores de idade sem consentimento dos responsáveis.',
        'É proibido fazer upload de fotos de terceiros sem o consentimento explícito deles.',
        'É proibido tentar hackear, sobrecarregar ou prejudicar o funcionamento da plataforma.',
        'É proibido usar a plataforma para fins comerciais sem autorização prévia.',
        'Conteúdo ofensivo, difamatório ou ilegal é estritamente proibido.'
      ]
    },
    {
      icon: Scale,
      title: '5. Créditos e Pagamentos',
      content: [
        'Análises são realizadas mediante o consumo de créditos adquiridos através de nossos planos.',
        'Os créditos não expiram e ficam disponíveis em sua conta até serem utilizados.',
        'Todos os pagamentos são processados por gateways seguros de terceiros.',
        'Preços estão sujeitos a alterações, mas mudanças não afetarão créditos já adquiridos.',
        'Reembolsos podem ser solicitados em até 7 dias após a compra, desde que nenhum crédito tenha sido utilizado.'
      ]
    },
    {
      icon: FileText,
      title: '6. Propriedade Intelectual',
      content: [
        'Todo o conteúdo da plataforma, incluindo textos, gráficos, logos e software, é propriedade do Teste Match.',
        'Você recebe uma licença limitada, não exclusiva e intransferível para usar a plataforma.',
        'É proibido copiar, modificar, distribuir ou reproduzir qualquer parte da plataforma sem autorização.',
        'Os resultados das análises são de sua propriedade e podem ser compartilhados livremente.',
        'Feedback e sugestões enviados podem ser usados pela empresa sem compensação.'
      ]
    },
    {
      icon: Shield,
      title: '7. Privacidade e Dados',
      content: [
        'O tratamento de seus dados pessoais está detalhado em nossa Política de Privacidade.',
        'Suas fotos são processadas e imediatamente deletadas após a análise.',
        'Mantemos apenas os resultados das análises, nunca as imagens originais.',
        'Seus dados não serão compartilhados com terceiros sem seu consentimento.',
        'Você pode solicitar a exclusão de seus dados a qualquer momento.'
      ]
    },
    {
      icon: AlertCircle,
      title: '8. Limitação de Responsabilidade',
      content: [
        'Os serviços são fornecidos "como estão", sem garantias de qualquer tipo.',
        'Não nos responsabilizamos por decisões tomadas com base nos resultados das análises.',
        'Não garantimos que a plataforma estará sempre disponível ou livre de erros.',
        'Não nos responsabilizamos por perdas ou danos resultantes do uso da plataforma.',
        'Nossa responsabilidade máxima é limitada ao valor pago pelos serviços.',
        'As análises são para entretenimento e autoconhecimento, não substituem orientação profissional.'
      ]
    },
    {
      icon: HelpCircle,
      title: '9. Rescisão',
      content: [
        'Você pode encerrar sua conta a qualquer momento através do menu de configurações ou contato.',
        'Podemos suspender ou encerrar sua conta por violação destes termos.',
        'Após encerramento, você perde acesso aos créditos não utilizados, salvo acordo específico.',
        'As disposições destes termos que por natureza devem sobreviver ao encerramento, sobreviverão.'
      ]
    },
    {
      icon: Scale,
      title: '10. Lei Aplicável',
      content: [
        'Estes termos são regidos pelas leis da República Federativa do Brasil.',
        'Qualquer disputa será resolvida nos tribunais de Goiânia, Goiás.',
        'Se qualquer disposição destes termos for considerada inválida, as demais permanecerão válidas.',
        'Estes termos constituem o acordo completo entre você e o Teste Match.'
      ]
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
              <Scale className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Termos de{' '}
              <span className="text-gradient-romance">Uso</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Leia atentamente nossos termos e condições de uso
            </p>
            <p className="text-sm text-gray-500">
              Última atualização: {lastUpdate}
            </p>
          </motion.div>

          {/* Summary Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="card bg-blue-50 border border-blue-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Resumo dos Termos
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Você deve ter 18+ anos para usar nossos serviços</li>
                    <li>• Não faça upload de fotos sem consentimento</li>
                    <li>• As análises são para orientação, não verdade absoluta</li>
                    <li>• Créditos não expiram mas não são reembolsáveis após uso</li>
                    <li>• Suas fotos são deletadas após processamento</li>
                    <li>• Use a plataforma apenas para fins legais</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.05) }}
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
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card bg-gradient-romance text-white text-center">
              <HelpCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Dúvidas sobre os Termos?
              </h3>
              <p className="mb-6 opacity-90">
                Entre em contato conosco para esclarecimentos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/556293557070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-romance-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:contato@testematch.com"
                  className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

