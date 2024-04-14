import CardService from "./Card";
import codeImg from "../assets/code-solid.svg";

export default function Service() {
    return <>
        <section>
            <CardService
                minia={codeImg}
                imgAlt="Vector balise de code"
                title="Développement Frontend"
                content="fdksgqfkj gdfk gdqskjfh qds fhsdgkfqj dgsf dskjfh 
                sdjkhfds qkjfhv dsjkhfv sdkfjh sq" />
        </section>
    </>
}