import CardService from "./CardService";
import codeImg from "../assets/code-solid.svg";

export default function Service() {
    return <>
        <section id="Competences" className="cardService_container">
            <CardService
                minia={codeImg}
                imgAlt="Vector balise de code"
                title="Développement Frontend"
                content="Votre site web reflète votre marque. Il est vecteur d'idée et plus.
                Équipez-vous d'un site sur-mesure, agréable à regarder,
                sur n'importe quel appareil, n'importe quand." />
            <CardService
                minia={codeImg}
                imgAlt="Vector balise de code"
                title="Web marketing"
                content="Dans un monde digital en constante évolution : moteurs de recherche, réseaux, inluenceurs...
                mettre en avant votre entreprise est essentiel pour atteindre votre cible de manière efficace." />
            <CardService
                minia={codeImg}
                imgAlt="Vector balise de code"
                title="Stratégie"
                content="L'offre et la demande vont main dans la main. Établissons un plan 
                pour exploiter les deux afin de booster vos ventes sur le marché." />
        </section>
    </>
}