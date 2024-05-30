function gerarIdUnico() {
  return "id-" + Math.random().toString(36).substr(2, 9);
}

const postIntegrants = [
  {
    id: gerarIdUnico(),
    nome: "Herison",
    Cargos: "Desenvolvedor Web",
    descricao:
      "Após dedicar-me intensamente por 10 anos como designer, abrangendo diversos campos como design para impressos, digitais, redes sociais e criação de layouts para websites, decidi retornar a uma paixão antiga: o desenvolvimento web.",
    descriçãoDois:
      "Com grande entusiasmo e amor por aprender, adquiri conhecimentos sólidos nas principais tecnologias de desenvolvimento front-end, tais como HTML, CSS e JavaScript. Além disso, desenvolvi habilidades avançadas em React, Next.js e Node, assim como em todo o seu ecossistema.",
    imagem: "https://exemplo.com/imagens/javascript.png",
    linkGithub: "https://github.com/herisonp",
    linkLinkedin: "https://linkedin.com/in/herison",
  },
  {
    id: gerarIdUnico(),
    nome: "Ericky Dias",
    Cargos: "Desenvolvedor Web",
    descricao:
      "",
    descriçãoDois:
      "",
    imagem: "https://exemplo.com/imagens/javascript.png",
    linkGithub: "https://github.com/dev-erickydias",
    linkLinkedin: "https://www.linkedin.com/in/erickydias/",
  },
  {
    id: gerarIdUnico(),
    nome: "Natalia Vessoni",
    Cargos: "QA",
    descricao:
      "Meu nome é Natalia Vessoni e sou nutricionista em transição de carreira para Analista de Qualidade de Software. Descobri na área de QA uma nova fonte de motivação, e estou buscando cada vez mais me aperfeiçoar neste ramo. Atualmente, estou envolvida no desenvolvimento da Connect Eco, plataforma que promove práticas ecológicas por meio da tecnologia. É uma satisfação enorme fazer parte de uma iniciativa tão inspiradora. Meu objetivo é participar ainda mais de projetos de alta qualidade e contribuir para o desenvolvimento de soluções tecnológicas inovadoras e sustentáveis. Estou empolgada com as novas oportunidades e desafios que essa jornada oferece.",
    descriçãoDois:
      "",
    imagem: "https://exemplo.com/imagens/javascript.png",
    linkGithub: "https://github.com/navessoni-qa",
    linkLinkedin: "https://www.linkedin.com/in/natalia-vessoni/",
  },
];
