import Link from "next/link";
import CustomImage from "../CustomImage";

export default function PostBlog({ title, content, large, link, src, alt }) {
    return (
      <div className={`post ${large ? 'post--large' : 'post--small'}`}>
        <div className="post__image"><CustomImage src={src} alt={postIntegrants.title} /></div>
        <div className="post__content">
          <h2 className="post__title">{title}</h2>
          {large && <p className="post__description">{content}</p>}
          <button className="post__button"><Link href={link} target="_blank">Visualizar</Link></button>
        </div>
      </div>
    );
  }
