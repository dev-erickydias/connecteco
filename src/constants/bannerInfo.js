function gerarIdUnico() {
  return 'id-' + Math.random().toString(36).substr(2, 9);
}

const bannerInfo = [
  {
    texts: {
      title: "dsfdfdsfdfs",
      description: "sdfdfsdsfdsfdsfdfs!"
    },
    id: gerarIdUnico(),
    image: {
      src: "/BannerOne.png",
      alt: "Peneus para reciclar",
      width: 607,
      height: 811,
      className: "banner__image_object-contain"
    }
  },
  {
    texts: {
      title: "Encontre psasa",
      description: "Para um futuro sustentável. Veja onde reciclar!"
    },
    id: gerarIdUnico(),
    image: {
      src: "/BannerOne.png",
      alt: "Peneus para reciclar",
      width: 607,
      height: 811,
      className: "banner__image_object-contain"
    }
  },
  {
    texts: {
      title: "Esadsadsadsda",
      description: "Para um futuro sustentável. Veja onde reciclar!"
    },
    id: gerarIdUnico(),
    image: {
      src: "/BannerOne.png",
      alt: "Peneus para reciclar",
      width: 607,
      height: 811,
      className: "banner__image_object-contain"
    }
  }
];

export default bannerInfo;
