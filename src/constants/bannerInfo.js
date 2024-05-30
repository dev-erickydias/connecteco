function gerarIdUnico() {
  return "id-" + Math.random().toString(36).substr(2, 9);
}

const bannerInfo = [
  {
    title: "Encontre pontos de reciclagem perto de você!",
    description: "Para um futuro sustentável. Veja onde reciclar!",
    id: gerarIdUnico(),
    src: "/BannerOne.png",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
  },
  {
    title: "Nosso Blog",
    description: "Fique por dentro de todas as novidades e informações sobre reciclagem e sustentabilidade.",
    id: gerarIdUnico(),
    src: "/BannerOne.png",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
  },
  {
    title: "Faça parte",
    description: "Preencha o formulário abaixo e tenha seu ponto de coleta em destaque.",
    id: gerarIdUnico(),
    src: "/BannerOne.png",
    alt: "Peneus para reciclar",
    width: 607,
    height: 811,
    className: "banner__image_object-contain",
  },
];

export default bannerInfo;
