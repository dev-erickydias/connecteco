function gerarIdUnico() {
  return "id-" + Math.random().toString(36).substr(2, 9);
}

const postIntegrants = [
  {
    id: gerarIdUnico(),
    nome: "Herison",
    cargo: "Desenvolvedor Web",
    descricao:"Após dedicar-me intensamente por 10 anos como designer, abrangendo diversos campos como design para impressos, digitais, redes sociais e criação de layouts para websites, decidi retornar a uma paixão antiga: o desenvolvimento web. Com grande entusiasmo e amor por aprender, adquiri conhecimentos sólidos nas principais tecnologias de desenvolvimento front-end, tais como HTML, CSS e JavaScript. Além disso, desenvolvi habilidades avançadas em React, Next.js e Node, assim como em todo o seu ecossistema.",
    imagem: "https://avatars.githubusercontent.com/u/134605176?v=4",
    linkGithub: "https://github.com/herisonp",
    linkLinkedin: "https://linkedin.com/in/herison",
  },
  {
    id: gerarIdUnico(),
    nome: "Ericky Dias",
    cargo: "Desenvolvedor Web",
    descricao:
      "",

    imagem: "",
    linkGithub: "https://github.com/dev-erickydias",
    linkLinkedin: "https://www.linkedin.com/in/erickydias/",
  },
  {
    id: gerarIdUnico(),
    nome: "Natalia Vessoni",
    cargo: "QA",
    descricao:
      "Meu nome é Natalia Vessoni e sou nutricionista em transição de carreira para Analista de Qualidade de Software. Descobri na área de QA uma nova fonte de motivação, e estou buscando cada vez mais me aperfeiçoar neste ramo. Atualmente, estou envolvida no desenvolvimento da Connect Eco, plataforma que promove práticas ecológicas por meio da tecnologia. É uma satisfação enorme fazer parte de uma iniciativa tão inspiradora. Meu objetivo é participar ainda mais de projetos de alta qualidade e contribuir para o desenvolvimento de soluções tecnológicas inovadoras e sustentáveis. Estou empolgada com as novas oportunidades e desafios que essa jornada oferece.",

    imagem: "",
    linkGithub: "https://github.com/navessoni-qa",
    linkLinkedin: "https://www.linkedin.com/in/natalia-vessoni/",
  },
  {
    id: gerarIdUnico(),
    nome: "Maikon Correia",
    cargo: "Desenvolvedor Web",
    descricao:
      "",

    imagem: "",
    linkGithub: "https://github.com/MaikonCorrea",
    linkLinkedin: "https://www.linkedin.com/in/maikon-correa-9a5407264/",
  },
  {
    id: gerarIdUnico(),
    nome: "Gabriel Amoroso",
    cargo: "Analise De Dados",
    descricao:
      "Sou formado em farmácia, e me apaixonei pela área de dados relacionada com biologia. Ingressei no bootcamp de Análise de Dados pra complementar minha formação e pretendo utilizar esse aprendizado tecnológico em conjunto com meu aprendizado da área da saúde para impactar positivamente na vida das pessoas. Meu sonho é trabalhar na área de dados voltada pra saúde, usando tecnologias como Machine Learning e Big Data para genômica. Nesses anos obtive experiência em linguagens de programação como Python, SQL e R, além de tecnologias de genética como GenBank.",
    imagem: "",
    linkGithub: "https://github.com/GabrielAmoroso",
    linkLinkedin: "https://www.linkedin.com/in/gabrielamoroso/",
  },
  {
    id: gerarIdUnico(),
    nome: "Luiz Guilherme",
    cargo: "Analise De Dados",
    descricao:
      "Sou estudante de economia, sou um entusiaste de finanças e tecnologia. Desejo trabalharno setor financeiro com foco para análise, por isso participei do bootcamp de Análise de Dados",

    imagem: "",
    linkGithub: "https://github.com/Luizg39",
    linkLinkedin: "https://www.linkedin.com/in/luiz-g-pereira/",
  },
  {
    id: gerarIdUnico(),
    nome: "Angela Ribeiro",
    cargo: "QA",
    descricao:
      "Luso-brasileira, vivi toda a vida em Portugal, sou licenciada há 18 anos em Radiologia e há 14 anos a trabalhar no “Programa de Rastreio de Cancro da Mama” na Liga Portuguesa Contra o Cancro. Presentemente encontro-me a realizar meus estudos como QA Tester.O desafio desta transição de carreira, reaproximou de mim uma fluidez e identificação muito prazerosas com as tecnologias de Informação, nomeadamente com a área de Software.",
    imagem: "",
    linkGithub: "https://github.com/angelaribeiro84",
    linkLinkedin: "https://www.linkedin.com/in/angelaribeiro84",
  },
  {
    id: gerarIdUnico(),
    nome: "Felipe Fracasso",
    cargo: "QA",
    descricao:
      "Meu nome é Felipe Fracasso sou formado em Engenharia Química e larguei um cargo como concursado na área para buscar novos desafios na área de tecnologia. Comecei a minha migrassão com um curso de Ánalise de Sistemas e no final do ano passado descobri a área de testes no momento estou estudando ambas as áreas e me interesso muito por programação backend e pela parte de testes automatizados e espero que em breve possa estar profissionalmente dentro da área.",

    imagem: "",
    linkGithub: "https://github.com/FelipeM-F",
    linkLinkedin: "https://www.linkedin.com/in/felipefracasso/",
  },
  {
    id: gerarIdUnico(),
    nome: "Carlos Roberto",
    cargo: "QA",
    descricao:
      "Sou profissional com formação em Tecnologia de Alimentos e sólida experiência em análise e controle de qualidade. Recém-formado, buscando uma transição para a área de Tecnologia da Informação como Analista de Qualidade de Software (Q.A. Engineer). Com um olhar crítico voltado à experiência do usuário, aplicando novas habilidades para conferir a qualidade do software. Motivado a compartilhar e adquirir conhecimento continuamente.",

    imagem: "",
    linkGithub: "https://github.com/CarlosRobertoAJ/",
    linkLinkedin: "https://www.linkedin.com/in/carlos-roberto-320a13127/",
  },
  {
    id: gerarIdUnico(),
    nome: "Ludmilla Lima",
    cargo: "QA",
    descricao:
      "Me chamo Ludmilla Lima sempre gostei da área de TI, e quando tive a oportunidade de entrar nesse mundo, entrei. Formada em analise de QA estou cada vez mais conectada a esse mundo de tecnologia. Me apaixonei por cada pedaço desse novo mundo de informação. Estou participando desse projeto que visa um futuro melhor para o nosso mundo. Trabalhar nesse projeto me fez ver o quanto aprendi nesses meses de formação. É incrível fazer parte desse projeto, aplicando assim todos os meus conhecimento e ajudando o meio ambiente.",

    imagem: "",
    linkGithub: "https://github.com/lwestania",
    linkLinkedin: "https://www.linkedin.com/in/ludmilla-lima-3b21b312a",
  },
  {
    id: gerarIdUnico(),
    nome: "Patrícia",
    cargo: "Analista De Dados",
    descricao: "",
    imagem: "",
    linkGithub: "https://github.com/patriciamgcosta",
    linkLinkedin: "https://www.linkedin.com/in/patriciamgc/",
  },
  {
    id: gerarIdUnico(),
    nome: "Livia Borges",
    cargo: "QA",
    descricao:
      "Meu nome é Livia e sou Mestre em Geologia e Geofísica onde tive a oportunidade ao longo da minha experiência acadêmica de desenvolver modelagens para estudos nas áreas de Petróleo e Mineração através das linguagens Matlab e R. Isso despertou meu interesse na área de TI e hoje com uma base em Análise de QA pretendo me aprofundar ainda mais nessa área e depois migrar para o desenvolvimento de software.",
    imagem: "",
    linkGithub: "https://github.com/LiviaBorges",
    linkLinkedin: "https://www.linkedin.com/in/liviaborgespessanha",
  },
  {
    id: gerarIdUnico(),
    nome: "Eduardo",
    cargo: "QA",
    descricao:"",
    imagem: "",
    linkGithub: "https://github.com/Eduardo-goveia",
    linkLinkedin: "https://www.linkedin.com/in/eduardo-goveia-433b832bb/",
  },
];

export default postIntegrants;