export default function Contact() {
    return <>
        <section id="Contact" className="contact_container">
            <h2 className="contact_title">Démarrer un projet</h2>
            <p className="contact_texte">Vous êtes interessé pour travailler ensemble ?
                Je suis toujours ouvert à de nouvelles opportunités.
            </p>
            <div className="buttonContact_container">
            <button className="buttonContact" onClick={() => window.location.href = 'mailto:naofal.pereira@yahoo.fr'}>
                C'est parti 😁
            </button>
            </div>
        </section>
    </>
}