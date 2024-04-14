import allDevices from "../assets/proof-of-completion.svg";

export default function Banner() {
    return <>
        <section className="banner-container">
            <h1>
                Développement, WebMarketing & Stratégie
            </h1>
            <span>
                J'utilise internet pour créer, apprendre et améliorer.
            </span>
            <figure>
                <img src={allDevices} alt="vector de plusieurs appareils web" />
            </figure>


        </section>
    </>
}