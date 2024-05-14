import CardService from "./CardService";
import codeImg from "../assets/code-solid.svg";

export default function Service() {
    return <>
        <section id="Competences" className="cardService_container">
            <CardService
                minia={codeImg}
                imgAlt="Vector balise de code"
                title="Développement Frontend"
                content="Your website should look good and behave correctly from any device, 
                of any size, every single time. We can help!" />
                <CardService
                minia={codeImg}
                imgAlt="Vector balise de code"
                title="Web marketing"
                content="Your website should look good and behave correctly from any device, 
                of any size, every single time. We can help!Your website should look good and behave correctly from any device, 
                of any size, every single time. We can help!Your website should look good and behave correctly from any device, 
                of any size, every single time. We can help!" />
                <CardService
                minia={codeImg}
                imgAlt="Vector balise de code"
                title="Stratégie"
                content="Your website should look good and behave correctly from any device, 
                of any size, every single time. We can help!" />
        </section>
    </>
}