'use client'

import AnimatedBlock from '../../components/ui/AnimatedBlock'
import { Shield, Database, Target, Share2, Lock, Scale, Clock, Globe, RefreshCw, Mail, Cookie, UserX } from 'lucide-react'

const sections = [
  { icon: Database, title: 'Introducao', content: 'A ConnectEco ("nos", "nos", "nosso" ou "nossa") opera o site e aplicativo ConnectEco. Esta pagina informa voce sobre nossas politicas relativas a coleta, uso e divulgacao de dados pessoais quando voce usa nosso servico e as escolhas que voce tem associadas a esses dados.' },
  { icon: Database, title: 'Dados Coletados', content: 'Coletamos automaticamente certos tipos de informacoes sobre seus dispositivos quando voce acessa nossa plataforma.',
    items: ['Tipo de dispositivo e sistema operacional', 'Navegador da internet usado', 'Endereco IP', 'Paginas visitadas e tempo gasto nelas', 'Informacoes de localizacao geografica aproximada', 'Nome completo, email, telefone (quando fornecidos)'] },
  { icon: Target, title: 'Uso de Dados', content: 'Utilizamos os dados coletados para:',
    items: ['Fornecer, manter e melhorar nossos servicos', 'Responder as suas solicitacoes e oferecer suporte', 'Enviar atualizacoes sobre sustentabilidade', 'Analisar o uso da plataforma para melhorias', 'Detectar, prevenir e abordar fraudes'] },
  { icon: Lock, title: 'Seguranca de Dados', content: 'Implementamos medidas tecnicas, administrativas e fisicas apropriadas para proteger seus dados contra acesso, alteracao, divulgacao ou destruicao nao autorizada.' },
  { icon: Share2, title: 'Servicos de Terceiros', content: 'Os servicos de terceiros que usamos incluem:',
    items: ['Google Analytics para analise de uso', 'Google Ads para publicidade', 'Supabase para armazenamento de dados', 'Servicos de email para comunicacoes'] },
  { icon: UserX, title: 'Privacidade de Menores', content: 'Nossos servicos nao sao enderecados a menores de 13 anos. Nao coletamos intencionalmente informacoes pessoais de criancas menores de 13 anos.' },
  { icon: Scale, title: 'Seus Direitos', content: 'Voce tem certos direitos em relacao as suas informacoes pessoais:',
    items: ['Direito de acessar seus dados pessoais', 'Direito de corrigir dados imprecisos', 'Direito de solicitar a exclusao de seus dados', 'Direito de optar por nao receber comunicacoes de marketing', 'Direito de portar seus dados'] },
  { icon: Cookie, title: 'Uso de Cookies', content: 'Utilizamos cookies e tecnologias similares para rastrear atividades em nosso servico e armazenar certas informacoes. Voce pode instruir seu navegador a recusar todos os cookies ou indicar quando um cookie esta sendo enviado.' },
  { icon: RefreshCw, title: 'Alteracoes a Esta Politica', content: 'Podemos atualizar nossa Politica de Privacidade periodicamente. Qualquer mudanca sera postada nesta pagina com a data de "Ultima Atualizacao".' },
  { icon: Mail, title: 'Entre em Contato', content: 'Se voce tiver duvidas sobre esta Politica de Privacidade, entre em contato conosco em contato@connecteco.com.br' },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="gradient-eco py-14 md:py-20 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/5 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatedBlock variant="slideDown">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={32} className="text-eco-100" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
              Politica de Privacidade
            </h1>
            <p className="text-eco-100/80 text-lg">
              Sua privacidade e importante para nos
            </p>
          </AnimatedBlock>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <AnimatedBlock key={index} variant="slideUp" delay={index * 0.05}>
                <div className="eco-card p-6 md:p-8 border-l-4 border-l-eco-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-eco-50 rounded-xl">
                      <Icon size={20} className="text-eco-500" />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-eco-900">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-eco-700/70 leading-relaxed mb-4">{section.content}</p>
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-eco-700/70 bg-eco-50/50 rounded-lg p-3 text-sm">
                          <span className="text-eco-500 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedBlock>
            )
          })}
        </div>

        {/* Last Updated */}
        <AnimatedBlock variant="fadeIn" delay={0.3}>
          <div className="mt-12 p-6 bg-eco-50 rounded-2xl border border-eco-100">
            <p className="text-sm text-eco-600/60">
              <strong className="text-eco-700">Ultima atualizacao:</strong> 11 de Marco de 2026
            </p>
            <p className="text-sm text-eco-600/60 mt-2">
              Ao usar a ConnectEco, voce concorda com os termos desta Politica de Privacidade.
            </p>
          </div>
        </AnimatedBlock>

        {/* CTA */}
        <AnimatedBlock variant="slideUp" delay={0.4}>
          <div className="mt-8 gradient-eco rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
            <p className="font-display text-lg font-semibold text-white relative">
              Tem duvidas sobre nossa politica de privacidade?
            </p>
            <a href="mailto:contato@connecteco.com.br"
              className="relative inline-block mt-4 px-6 py-3 bg-white text-eco-700 font-bold rounded-xl hover:bg-eco-50 transition-colors">
              Entre em Contato
            </a>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  )
}
