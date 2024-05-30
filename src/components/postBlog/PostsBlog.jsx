// components/PostsBlog.js

import "./postBlog.css";
import PostBlog from "./PostBlog";
import postBlogContain from "@/constants/postBlogContain";

export default function PostsBlog() {
  const fist = postBlogContain.filter((blog, i) => i <= 2);
  const fistOneCollum = fist.filter((blog, i) => i <= 0);
  const fistItensTwoCollum = fist.filter((blog, i) => i > 0);
  const secondItens = postBlogContain.filter((blog, i) => i > 2);

  return (
    <div className="posts">
      <div className="post__item post__item_fist">
        {fistOneCollum.map((post) => (
          <PostBlog
            key={post.titulo}
            src={post.imagem}
            alt={post.titulo}
            width={100} 
            height={100}
            title={post.titulo}
            content={post.descricao}
            large={post.large}
            link={post.link}
          />
        ))}
 
        <div className="port__item_second">
          {fistItensTwoCollum.map((post) => (
            <PostBlog
              key={post.titulo}
              title={post.titulo}
              src={post.imagem}
            alt={post.titulo}
            width={100} 
            height={100}
              content={post.descricao}
              large={post.large}
              link={post.link}
            />
          ))}
        </div>
      </div>
      <div className="post__item">
        {secondItens.map((post) => (
          <PostBlog
            key={post.titulo}
            title={post.titulo}
            src={post.imagem}
            alt={post.titulo}
            width={100} 
            height={100}
            content={post.descricao}
            large={post.large}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
}
