function gerarIdUnico() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  }
  
  // Array de objetos postBlog
  const postBlog = [
    {
      id: gerarIdUnico(),
      titulo: "Aprendendo JavaScript",
      descricao: "Uma introdução ao JavaScript para iniciantes.",
      imagem: "https://exemplo.com/imagens/javascript.png",
      link: "https://exemplo.com/aprendendo-javascript"
    },
    {
      id: gerarIdUnico(),
      titulo: "CSS para Iniciantes",
      descricao: "Guia básico para começar a usar CSS em seus projetos.",
      imagem: "https://exemplo.com/imagens/css.png",
      link: "https://exemplo.com/css-para-iniciantes"
    },
    {
      id: gerarIdUnico(),
      titulo: "Dominando o HTML",
      descricao: "Tudo o que você precisa saber sobre HTML.",
      imagem: "https://exemplo.com/imagens/html.png",
      link: "https://exemplo.com/dominando-html"
    }
  ];
   
  export default postBlog