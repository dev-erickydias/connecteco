
import Card from "./Card";
import postIntegrants from "@/constants/postIntegrantes";
export default function CardsAbout() {
    console.log(postIntegrants)
    return (
        <ul className="cards-about">
            {postIntegrants.map((integrante)=>{
                return (
                <Card linkedin={integrante.linkLinkedin} gitHub={integrante.linkGithub} src={integrante.imagem} nome={integrante.nome} alt={integrante.nome} descicao={integrante.descricaoDois} width={100} height={50} />
            )
            })}
            
        </ul>
    );
}
