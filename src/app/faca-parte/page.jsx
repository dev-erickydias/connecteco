'use client'

import { useState } from 'react'
import AnimatedBlock, { HoverCard } from '../../components/ui/AnimatedBlock'
import { Sprout, Users, Target, Send, CheckCircle, Leaf } from 'lucide-react'

export default function FacaPartePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ecoponto_name: '',
    address: '',
    city: '',
    state: '',
    materials: [],
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        materials: checked
          ? [...prev.materials, value]
          : prev.materials.filter((m) => m !== value),
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '', email: '', phone: '',
        ecoponto_name: '', address: '', city: '', state: '',
        materials: [], message: '',
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-eco-50 via-white to-earth-50 py-14 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <AnimatedBlock variant="slideUp" className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-eco-100 rounded-2xl mb-5">
            <Leaf size={28} className="text-eco-500" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-eco-900 mb-4">
            Faca Parte da ConnectEco
          </h1>
          <div className="divider-eco" />
          <p className="text-lg text-eco-700/70 max-w-2xl mx-auto mt-4">
            Registre seu ponto de coleta ou compartilhe sua iniciativa de sustentabilidade
            com nossa comunidade
          </p>
        </AnimatedBlock>

        {/* Form Card */}
        <AnimatedBlock variant="scaleIn" delay={0.2}>
          <div className="eco-card overflow-hidden">
            {/* Form Header */}
            <div className="gradient-eco px-8 py-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
              <div className="relative">
                <h2 className="font-display text-2xl font-bold text-white">
                  Preencha o Formulario
                </h2>
                <p className="text-eco-100/80 mt-2 text-sm">
                  Todos os campos marcados com * sao obrigatorios
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              {/* Success Message */}
              {submitted && (
                <div className="mb-8 p-4 bg-eco-50 border border-eco-200 rounded-xl flex items-center gap-3">
                  <CheckCircle size={20} className="text-eco-500 flex-shrink-0" />
                  <p className="text-eco-800 font-semibold text-sm">
                    Obrigado! Seu formulario foi enviado com sucesso. Entraremos em contato em breve.
                  </p>
                </div>
              )}

              {/* Personal Information */}
              <div className="mb-10">
                <h3 className="font-display text-xl font-bold text-eco-900 mb-6 pb-3 border-b-2 border-eco-100">
                  Informacoes Pessoais
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-eco-700 mb-2">Nome Completo *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-eco-50/50 border border-eco-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 placeholder:text-eco-400"
                      placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-eco-700 mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-eco-50/50 border border-eco-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 placeholder:text-eco-400"
                      placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-eco-700 mb-2">Telefone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-eco-50/50 border border-eco-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 placeholder:text-eco-400"
                      placeholder="(XX) XXXXX-XXXX" />
                  </div>
                </div>
              </div>

              {/* Ecoponto Information */}
              <div className="mb-10">
                <h3 className="font-display text-xl font-bold text-eco-900 mb-6 pb-3 border-b-2 border-eco-100">
                  Informacoes do Ecoponto
                </h3>
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-eco-700 mb-2">Nome do Ecoponto *</label>
                    <input type="text" name="ecoponto_name" value={formData.ecoponto_name} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-eco-50/50 border border-eco-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 placeholder:text-eco-400"
                      placeholder="Nome do seu ponto de coleta" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-eco-700 mb-2">Endereco Completo *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-eco-50/50 border border-eco-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 placeholder:text-eco-400"
                      placeholder="Rua, numero, complemento" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-eco-700 mb-2">Cidade *</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-eco-50/50 border border-eco-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 placeholder:text-eco-400"
                        placeholder="Sua cidade" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-eco-700 mb-2">Estado *</label>
                      <input type="text" name="state" value={formData.state} onChange={handleChange} required maxLength="2"
                        className="w-full px-4 py-3 bg-eco-50/50 border border-eco-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 placeholder:text-eco-400 uppercase"
                        placeholder="SP" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div className="mb-10">
                <h3 className="font-display text-xl font-bold text-eco-900 mb-6 pb-3 border-b-2 border-eco-100">
                  Materiais Coletados *
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Plastico', 'Papel', 'Vidro', 'Metal', 'Borracha', 'Eletronicos', 'Medicamentos', 'Textil', 'Oleo de cozinha'].map((material) => (
                    <label key={material} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      formData.materials.includes(material)
                        ? 'border-eco-400 bg-eco-50'
                        : 'border-eco-100 hover:border-eco-200'
                    }`}>
                      <input type="checkbox" name="materials" value={material}
                        checked={formData.materials.includes(material)} onChange={handleChange}
                        className="w-4 h-4 text-eco-600 rounded focus:ring-2 focus:ring-eco-400 cursor-pointer" />
                      <span className="text-sm text-eco-700 font-medium">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="mb-10">
                <h3 className="font-display text-xl font-bold text-eco-900 mb-6 pb-3 border-b-2 border-eco-100">
                  Mensagem Adicional
                </h3>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                  className="w-full px-4 py-3 bg-eco-50/50 border border-eco-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 placeholder:text-eco-400 resize-none"
                  placeholder="Conte-nos mais sobre seu ecoponto ou iniciativa..." />
              </div>

              {/* Submit */}
              <button type="submit"
                className="w-full gradient-eco hover:shadow-eco-lg text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2">
                <Send size={18} />
                Enviar Formulario
              </button>

              <p className="text-xs text-eco-600/50 mt-5 text-center">
                Seus dados serao utilizados apenas para contato sobre sua iniciativa de sustentabilidade.
              </p>
            </form>
          </div>
        </AnimatedBlock>

        {/* Info Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Sprout, title: 'Sustentavel', desc: 'Contribuir para um planeta mais verde e saudavel', color: 'eco' },
            { icon: Users, title: 'Comunidade', desc: 'Fazer parte de uma rede de pessoas engajadas', color: 'sky' },
            { icon: Target, title: 'Impacto', desc: 'Gerar mudanca real atraves da tecnologia', color: 'moss' },
          ].map((item, idx) => (
            <AnimatedBlock key={idx} variant="slideUp" delay={0.3 + idx * 0.1}>
              <div className="eco-card p-6 text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                  item.color === 'eco' ? 'bg-eco-100 text-eco-600' :
                  item.color === 'sky' ? 'bg-sky-100 text-sky-600' :
                  'bg-moss-100 text-moss-600'
                }`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-eco-900 mb-2">{item.title}</h3>
                <p className="text-eco-700/60 text-sm">{item.desc}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </div>
  )
}
