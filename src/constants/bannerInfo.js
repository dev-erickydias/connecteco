function gerarIdUnico() {
  return "id-" + Math.random().toString(36).substr(2, 9);
}

const bannerInfo = [
  {
    title: "Encontre pontos de reciclagem perto de você!",
    description: "Para um futuro sustentável. Veja onde reciclar!",
    id: gerarIdUnico(),
    src: "https://images.unsplash.com/photo-1613858749733-3a3e456e3d9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
    button: false
  },
  {
    title: "Junte-se a Nós por um Planeta Sustentável.",
    description: "Fique por dentro de todas as novidades e informações sobre reciclagem e sustentabilidade.",
    id: gerarIdUnico(),
    src: "https://plus.unsplash.com/premium_photo-1681965550198-c1c039421905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVjb2xvZ2lhfGVufDB8fDB8fHww",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
    button: false
  },
  {
    title: "Faça parte de um futuro mais verde.",
    description: "Preencha o formulário abaixo e tenha seu ponto de coleta em destaque.",
    id: gerarIdUnico(),
    src: "/id 4.jpg",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
    button: true
  },
  {
    title: "Prefira empresas ligadas a ideias sustentáveis!",
    description: "A gente pode te ajudar nisso!",
    id: gerarIdUnico(),
    src: "/id 2.jpg",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
    button: false
  },
  {
    title: "Você sabe o que são os 5R’s?",
    description: "Repensar, Recusar, Reduzir, Reutilizar e Reciclar.",
    id: gerarIdUnico(),
    src: "/id 3.jpg",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
    button: false
  },
];

export default bannerInfo;
