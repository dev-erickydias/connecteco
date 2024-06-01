import React from 'react';
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";
import Link from 'next/link';
export default function Card({ nome,descicao,descricaoDois, src, alt, width, height, linkedin, gitHub }) {
    return (
        <li className="card">
            <CustomImage className="card__image" width={width} height={height} src={src} alt={alt} />
            <div>
                <h4>{nome}</h4>
                <div>
                    <p>{descicao}</p>
                    <p>{descricaoDois}</p>
                </div>
            </div>

            <div>
                <CustomButton className={"cards-about__btn"} ><Link href={linkedin} target='_blank'>Linkedin</Link></CustomButton>
                <CustomButton className={"cards-about__btn"} ><Link href={gitHub} target='_blank'>Linkedin</Link></CustomButton>
            </div>
        </li>
    );
}
