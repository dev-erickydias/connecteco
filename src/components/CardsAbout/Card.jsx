import React from 'react';
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";
import Link from 'next/link';
export default function Card({ nome, descricao, descricaoDois, cargo, src, alt, width, height, linkedin, gitHub }) {
    if (descricao) {
        return (
            <li className="card">
                <CustomImage className="card__image" width={width} height={height} src={src} alt={alt} />
                {cargo ? <h2 className='card__cargo'>{cargo}</h2> : null}

                <div>
                    <h4 className='card__title'>{nome}</h4>
                    <div>
                        {descricao ? <p className='card__descricao'>{descricao}</p> : null}
                        {descricaoDois ? <p className='card__descricao'>{descricaoDois}</p> : null}
                    </div>
                </div>

                <div>
                    {linkedin ? <CustomButton className={"card-about__btn"}><Link href={linkedin} target='_blank'>Linkedin</Link></CustomButton> : null}
                    {gitHub ? <CustomButton className={"card-about__btn"}><Link href={gitHub} target='_blank'>GitHub</Link></CustomButton> : null}
                </div>
            </li>
        );
    } else {
        return null;
    }
}