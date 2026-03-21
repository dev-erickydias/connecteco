'use client';

import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem, AnimatedBlock } from '../ui/AnimatedBlock';

export default function CompanyInfo() {
  const values = [
    "Responsabilidade e sensibilização ambiental",
    "Diálogo social",
    "Otimização integral, orientada para a criação de valor",
    "Solidariedade",
    "Espírito de grupo",
    "Ambição",
    "Empatia",
    "Diversidade"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="w-full py-16 px-4 bg-gradient-to-b from-eco-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Mission, Vision, Values Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-eco-500 h-full"
            >
              <h2 className="text-2xl font-bold text-eco-700 mb-4 flex items-center gap-2">
                <span>🎯</span> Missão
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                A Connect Eco nasce com o anseio de conectar a população que busca na reciclagem uma ferramenta eficaz, através de pontos de coleta parceiros. Promovendo o envolvimento de pequenas e médias empresas, tal como o individual, visamos fortalecer laços com um público engajado, conscientizando cada vez mais a sociedade acerca das imperatividades de implementação de boas práticas de sustentabilidade ambiental.
              </p>
            </motion.div>
          </StaggerItem>

          {/* Vision */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-agro-leaf h-full"
            >
              <h2 className="text-2xl font-bold text-eco-700 mb-4 flex items-center gap-2">
                <span>🌍</span> Visão
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Connect Eco busca se tornar um ponto em comum de compartilhamento de ideias e informações relevantes sobre a reciclagem, ampliando a nível nacional os pontos de coleta, criando parcerias e ações de marketing para buscar, cada vez mais, elucidar o quão fácil e eficaz se torna uma ação quando é realizada no coletivo.
              </p>
            </motion.div>
          </StaggerItem>

          {/* Values Grid */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-agro-gold h-full"
            >
              <h2 className="text-2xl font-bold text-eco-700 mb-6 flex items-center gap-2">
                <span>💎</span> Valores
              </h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {values.slice(0, 4).map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-eco-50 rounded-lg p-3 border-l-4 border-eco-500"
                  >
                    <p className="text-xs md:text-sm font-semibold text-eco-700">{value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Origin Story */}
        <AnimatedBlock
          variant="slideUp"
          className="bg-gradient-to-r from-eco-500 to-agro-leaf rounded-2xl shadow-xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
            <span>🌱</span> Como nasceu a Connect Eco
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            A nossa empresa nasceu da observação de uma necessidade crescente por soluções sustentáveis no descarte de materiais. Em um mundo cada vez mais preocupado com o impacto ambiental dos resíduos mal geridos, notamos que muitas pessoas queriam descartar seus resíduos de maneira correta, mas enfrentavam dificuldades em encontrar empresas confiáveis que realizassem a coleta e o processamento adequado desses materiais.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            A ideia era simples, mas poderosa: criar uma plataforma que conectasse pessoas que precisavam descartar materiais com empresas especializadas em recolhê-los e reciclá-los. Com isso, não só se resolveria um problema logístico, mas também se promoveria um impacto positivo no meio ambiente.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Combinando conhecimentos em desenvolvimento de software e gestão de resíduos, a equipe desenvolveu uma plataforma que facilita o processo de descarte. O usuário pode inserir informações sobre os materiais que deseja descartar e, em poucos cliques, encontrar empresas que oferecem os serviços necessários. Acreditamos que, ao facilitar o acesso a serviços de coleta e reciclagem, estamos contribuindo para um futuro mais sustentável e consciente.
          </p>
        </AnimatedBlock>
      </div>
    </section>
  );
}
