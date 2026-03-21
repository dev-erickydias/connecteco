'use client';

import { motion } from 'framer-motion';
import AnimatedBlock from '../ui/AnimatedBlock';

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "Introdução",
            icon: "📋",
            content: "A Connect Eco valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta política de privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações."
        },
        {
            title: "Dados Coletados",
            icon: "📊",
            content: "Coletamos os seguintes tipos de dados pessoais:",
            items: [
                "Nome",
                "Endereço de e-mail",
                "Número de telefone",
                "Endereço postal",
                "Dados de navegação (cookies, endereço IP, etc.)"
            ]
        },
        {
            title: "Finalidade da Coleta de Dados",
            icon: "🎯",
            content: "Usamos seus dados pessoais para as seguintes finalidades:",
            items: [
                "Melhorar nossos serviços",
                "Enviar comunicações de marketing",
                "Realizar análises e pesquisas",
                "Cumprir obrigações legais"
            ]
        },
        {
            title: "Compartilhamento de Dados",
            icon: "🔗",
            content: "Podemos compartilhar seus dados pessoais com:",
            items: [
                "Nossos parceiros e fornecedores de serviços",
                "Autoridades legais, se necessário",
                "Empresas do mesmo grupo econômico"
            ]
        },
        {
            title: "Segurança dos Dados",
            icon: "🔒",
            content: "Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acessos não autorizados, perda ou destruição."
        },
        {
            title: "Direitos dos Usuários",
            icon: "⚖️",
            content: "Você tem o direito de:",
            items: [
                "Acessar seus dados pessoais",
                "Solicitar a correção de dados incorretos",
                "Solicitar a exclusão de seus dados",
                "Solicitar a portabilidade dos seus dados",
                "Opor-se ao processamento de seus dados"
            ],
            footer: "Para exercer seus direitos, entre em contato conosco através do e-mail connectecoads@gmail.com."
        },
        {
            title: "Retenção de Dados",
            icon: "⏱️",
            content: "Manteremos seus dados pessoais pelo período necessário para cumprir as finalidades descritas nesta política, salvo se houver outra exigência legal."
        },
        {
            title: "Transferência Internacional de Dados",
            icon: "🌍",
            content: "Seus dados pessoais podem ser transferidos e processados em outros países que oferecem um nível de proteção de dados adequado."
        },
        {
            title: "Alterações na Política de Privacidade",
            icon: "🔄",
            content: "Esta política de privacidade pode ser atualizada periodicamente. Notificaremos você sobre quaisquer alterações significativas através de nossos canais de comunicação habituais."
        },
        {
            title: "Contato",
            icon: "📧",
            content: "Se você tiver dúvidas ou preocupações sobre esta política de privacidade, entre em contato conosco pelo e-mail connectecoads@gmail.com."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="w-full bg-gradient-to-b from-white to-eco-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <AnimatedBlock variant="slideDown" className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-eco-700 text-center mb-4 flex items-center justify-center gap-3">
                        <span>🛡️</span> Política de Privacidade
                    </h1>
                    <p className="text-center text-gray-600 text-lg">
                        Última atualização: 01/06/2024
                    </p>
                </AnimatedBlock>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {sections.map((section, index) => (
                        <motion.section
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-eco-500 hover:shadow-xl transition-shadow"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-eco-700 mb-4 flex items-center gap-3">
                                <span className="text-3xl">{section.icon}</span>
                                {section.title}
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                {section.content}
                            </p>

                            {section.items && (
                                <ul className="space-y-3 mb-4">
                                    {section.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-start gap-3 text-gray-700 bg-eco-50 rounded-lg p-3"
                                        >
                                            <span className="text-eco-500 font-bold mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.footer && (
                                <div className="bg-eco-100 rounded-lg p-4 text-sm text-gray-700 mt-4">
                                    {section.footer}
                                    <br />
                                    <a
                                        href="mailto:connectecoads@gmail.com"
                                        className="text-eco-600 font-semibold hover:text-eco-700 underline"
                                    >
                                        connectecoads@gmail.com
                                    </a>
                                </div>
                            )}
                        </motion.section>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 bg-gradient-to-r from-eco-500 to-agro-leaf rounded-2xl text-white text-center"
                >
                    <p className="text-lg font-semibold">
                        Tem dúvidas sobre nossa política de privacidade?
                    </p>
                    <a
                        href="mailto:connectecoads@gmail.com"
                        className="inline-block mt-4 px-6 py-3 bg-white text-eco-700 font-bold rounded-lg hover:bg-eco-50 transition-colors"
                    >
                        Entre em Contato Conosco
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
