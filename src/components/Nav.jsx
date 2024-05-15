export default function Nav() {
    return <>
        <nav className="nav-header">
            <a href="#About" className="nav-header_link disapear" >À propos</a>
            <a href="#Competences" className="nav-header_link" >Compétences</a>
            <a href="#Portfolio" className="nav-header_link" >Portfolio</a>
            <a href="#Contact" className="nav-header_link" >Contact</a>
        </nav>
    </>
}

/** Remplacer les a par des navlink to= a la fin
 * 
 * Mettre une collapse qui s'ouvre de droite vers la gauche ? */