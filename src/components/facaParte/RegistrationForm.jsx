"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedBlock from "../ui/AnimatedBlock";

export default function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    nomeEmpresa: "",
    cnpj: "",
    diasFuncionamento: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "Este campo é obrigatório";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const response = await fetch("../../utils/sendEmail.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Formulário enviado com sucesso!");
      setFormData({
        nome: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        nomeEmpresa: "",
        cnpj: "",
        diasFuncionamento: "",
      });
      setErrors({});
    } else {
      alert("Erro ao enviar o formulário.");
    }
  };

  const goToHome = () => {
    router.push("/");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 rounded-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full"
        >
          <p className="text-center text-gray-700 mb-6 font-semibold">
            Em construção. Entre em contato pelo e-mail{" "}
            <a className="text-eco-600 hover:text-eco-700 font-bold" href="mailto:connectecoads@gmail.com">
              connectecoads@gmail.com
            </a>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToHome}
            className="w-full bg-gradient-to-r from-eco-500 to-agro-leaf text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
          >
            Voltar para Home
          </motion.button>
        </motion.div>
      </div>

      <AnimatedBlock variant="slideUp" className="w-full px-4 py-12">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Personal Information */}
            <div>
              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-eco-700 mb-6 flex items-center gap-2">
                <span>👤</span> Informações Pessoais
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "nome", label: "Nome", icon: "👨" },
                  { name: "rua", label: "Rua", icon: "🏠" },
                  { name: "bairro", label: "Bairro", icon: "📍" },
                  { name: "cidade", label: "Cidade", icon: "🏙️" },
                  { name: "estado", label: "Estado", icon: "🗺️" },
                ].map((field) => (
                  <motion.div key={field.name} variants={itemVariants} className="relative">
                    <label className="block text-sm font-semibold text-eco-700 mb-2 flex items-center gap-2">
                      <span>{field.icon}</span> {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-500 transition-all ${
                        errors[field.name] ? 'border-red-500' : 'border-eco-300'
                      }`}
                      placeholder={`Digite o ${field.label.toLowerCase()}`}
                    />
                    {errors[field.name] && (
                      <span className="text-red-600 text-sm mt-1 block font-semibold">{errors[field.name]}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Company Information */}
            <div>
              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-eco-700 mb-6 flex items-center gap-2">
                <span>🏢</span> Informações da Empresa
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "nomeEmpresa", label: "Nome da Empresa", icon: "🏭" },
                  { name: "cnpj", label: "CNPJ", icon: "📄" },
                  { name: "diasFuncionamento", label: "Dias de Funcionamento", icon: "📅", span: true },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    variants={itemVariants}
                    className={field.span ? "md:col-span-2" : ""}
                  >
                    <label className="block text-sm font-semibold text-eco-700 mb-2 flex items-center gap-2">
                      <span>{field.icon}</span> {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-500 transition-all ${
                        errors[field.name] ? 'border-red-500' : 'border-eco-300'
                      }`}
                      placeholder={`Digite ${field.label.toLowerCase()}`}
                    />
                    {errors[field.name] && (
                      <span className="text-red-600 text-sm mt-1 block font-semibold">{errors[field.name]}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-eco-500 to-agro-leaf text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-lg"
              >
                ✅ Enviar Formulário
              </motion.button>
            </motion.div>

            {/* Privacy Policy Link */}
            <motion.p variants={itemVariants} className="text-center text-gray-600 text-sm">
              Ao enviar, você concorda com nossa{" "}
              <a
                href="/privacy-policy"
                className="text-eco-600 hover:text-eco-700 font-semibold underline"
              >
                Política de Privacidade
              </a>
            </motion.p>
          </motion.div>
        </form>
      </AnimatedBlock>
    </>
  );
}
