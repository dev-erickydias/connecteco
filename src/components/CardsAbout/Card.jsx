import React from 'react';
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";
import Link from 'next/link';
export default function Card({ nome,descricao,descricaoDois,cargo, src, alt, width, height, linkedin, gitHub }) {
    return (
        <li className="card">
            <CustomImage className="card__image" width={width} height={height} src={src} alt={alt} />
            {cargo?<h2>{cargo}</h2>:null}

            <div>
                <h4>{nome}</h4>
                <div>
                    {descricao ? <p>{descricao}</p> : null}
                    {descricaoDois ? <p>{descricaoDois}</p> : null}
                </div>
            </div>

            <div>
              {linkedin? <CustomButton className={"cards-about__btn"} ><Link href={linkedin} target='_blank'>Linkedin</Link></CustomButton> : null}  
              {gitHub? <CustomButton className={"cards-about__btn"} ><Link href={gitHub} target='_blank'>GitHub</Link></CustomButton> : null} 
                
            </div>
        </li>
    );
}
