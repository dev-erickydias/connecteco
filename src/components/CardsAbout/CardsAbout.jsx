import Card from "./Card";
import postIntegrants from "@/constants/postIntegrantes";
export default function CardsAbout() {
  return (
    <ul className="cards-about">
      {postIntegrants.map((integrante) => {
        return (
          <Card
            linkedin={integrante.linkLinkedin}
            gitHub={integrante.linkGithub}
            src={integrante.imagem}
            nome={integrante.nome}
            alt={integrante.nome}
            descricao={integrante.descricao}
            descricaoDois={integrante.descricaoDois}
            width={100}
            height={50}
            cargo={integrante.cargo}
          />
        );
      })}
    </ul>
  );
}
