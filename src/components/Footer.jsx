import Github from '../assets/Logos/github.svg'

export default function Footer() {
    return <>
        <section className="footer_container">
            <figure>
                <span>
                    NPereira
                </span>
            </figure>
            <a href="https://github.com/Naofalp" target="_blank">
                <img className="githubLogo_footer" src={Github} alt="GitHub logo" />
            </a>
            <p>
                Réalisé avec React & SASS. <br/> Hébergé par Firebase.
            </p>
        </section>
    </>
}