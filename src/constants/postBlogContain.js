function gerarIdUnico() {
  return "id-" + Math.random().toString(36).substr(2, 9);
}
const postBlogContain = [
  {
    id: gerarIdUnico(),
    titulo: "Mercado brasileiro no cenário de reciclagem de lixo plástico",
    descricao: "De acordo com a plataforma Mundo do Plástico, boa parte do plástico reciclado têm suas origens do uso dom éstico. Estudo encomendados pela Plano de Incentivo à Cadeia do Plástico (o PICPlast), trouxe dados relevantes à respeito da reciclagem de plástico no Brasil durante o ano de 2018.",
    imagem:
      "https://miro.medium.com/v2/resize:fit:786/format:webp/0*cfu47lP7OepqFSjk.png",
    link: "https://medium.com/@connecteco1green/mercado-brasileiro-no-cenário-de-reciclagem-de-lixo-plástico-625fe271f578",
    large: true,
  },
  {
    id: gerarIdUnico(),
    titulo: "Reciclagem no Brasil e no Mundo",
    descricao:
      "O Brasil segundo dados do Banco Mundial, recicla apenas 1,4% do lixo coletado, enquanto a média do mundo é de 14%, demonstrando que o Brasil está muito atrasado em relação ao mundo.",
    imagem:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*c_PVztlC2w54WRSr.jpg",
    link: "https://medium.com/@connecteco1green/reciclagem-no-brasil-e-no-mundo-3c6773db0dfa",
  },
  {
    id: gerarIdUnico(),
    titulo: "Composição do Lixo no Brasil",
    descricao:
      "Segundo o Banco Mundial, o Brasil 4o maior produtor de lixo plástico no mundo, atrás dos Estados Unidos, China e Índia. O Brasil coleta 91% do lixo produzido, de 11,3 milhões de toneladas, mas recicla apenas 1,4%, 145 mil toneladas.",
    imagem:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*jUAMH1-Yx8nfWpCW.jpg",
    link: "https://medium.com/@connecteco1green/composição-do-lixo-no-brasil-cf960ddb2acf",
  },
  {
    id: gerarIdUnico(),
    titulo: "A indústria téxtil e o processo de reciclagem",
    descricao: "Já é de conhecimento popular que a indústria téxtil necessita de uma grande quantidade de água para o preparo de suas peças, com uma estimativa de 5 mil litros de água por calça jeans, por exemplo. Destes 5 mil litros, mais de 4 mil são referentes ao plantio do algodão necessário para plantação.",
    imagem: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*gptwx7WN3iNLK5lz.jpg",
    link: "https://medium.com/@connecteco1green/a-indústria-téxtil-e-o-processo-de-reciclagem-e3ee7908d243",
  },
  {
    id: gerarIdUnico(),
    titulo: "Lixo nas Cidades Brasileiras e no Mundo",
    descricao: "As principais cidades brasileiras, São Paulo, Rio de Janeiro e Brasília foram comparadas a média das 300 maiores cidades do mundo em questão de reciclagem.",
    imagem: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*0u5rXUv8NvqqJF1Q.png",
    link: "https://medium.com/@connecteco1green/lixo-nas-cidades-brasileiras-e-no-mundo-6635e6fa4a2d"
  },
  {
    id: gerarIdUnico(),
    titulo: "Impacto ambiental de carros elétricos",
    descricao: "Os carros elétricos representam uma grande aposta entre todos os ambientalistas e países em busca de uma opção mais sustentável para o meio ambiente",
    imagem: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*GhvQ37CCFaOPJv70.jpeg",
    link: "https://medium.com/@connecteco1green/impacto-ambiental-de-carros-elétricos-bc6d00a81f4e"
  }
];

export default postBlogContain;
