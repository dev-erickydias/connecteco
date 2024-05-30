import Link from "next/link";
import CustomImage from "../CustomImage";

export default function PostBlog({ title, content, large,width,height, link, src, alt }) {
    return (
      <div className={`post ${large ? 'post--large' : 'post--small'}`}>
        <CustomImage width={width} className={"post__image"} height={height} src={src} alt={alt} />
        <div className="post__content">
          <h2 className="post__title">{title}</h2>
          {large && <p className="post__description">{content}</p>}
          <button className="post__button"><Link className="post__link" href={link} target="_blank">Visualizar</Link></button>
        </div>
      </div>
    );
  }
