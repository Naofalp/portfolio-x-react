import nina from '../assets/Projets/nina carducci.png';
import kasa from '../assets/Projets/kasa.png';
import kanban from '../assets/Projets/kanban.png';
import booki from '../assets/Projets/Booki.png';
import backend from '../assets/Projets/backend.png';

export default function Works() {
    return <>
        <section id="Portfolio" className="Works_container">
            <h2> Mes travaux </h2>
            <p> Voici mes projets aboutis. Vous voulez en voir plus ? Ceux en cours ? Discutons-en !</p>
            <div className="cardPortfolio_container">
                <div className="cardPortfolio_article">
                    <figure className='cardPortfolio_figure'>
                        <img src={nina} alt="Debuggage et Optimisation site nina carducci" />
                        <figcaption>
                            <h3> Debuggage et Optimisation </h3>
                            <button className="button-55" role="button" onClick={()=>window.open('https://naofalp.github.io/Nina-carducci/', '_blank', 'noopener noreferrer')}>
                                Visiter
                            </button>
                        </figcaption>
                    </figure>
                </div>
                <div className="cardPortfolio_article">
                    <figure className='cardPortfolio_figure'>
                        <img src={kasa} alt="Site de location immobilière Kasa sous app REACT router" />
                        <figcaption>
                            <h3> Site de location immobilière Kasa </h3>
                            <button className="button-55" role="button" onClick={()=>window.open('https://github.com/Naofalp/kasaREACT', '_blank', 'noopener noreferrer')}>
                                Visiter
                            </button>
                        </figcaption>
                    </figure>
                </div>
                <div className="cardPortfolio_article">
                    <figure className='cardPortfolio_figure'>
                        <img src={kanban} alt="Tableau Kanban Méthode agile sur Trello" />
                        <figcaption>
                            <h3> Planification de sprints et methode agile </h3>
                            <button className="button-55" role="button" onClick={()=>window.open('https://trello.com/b/iT9PivtB/menumakers-by-qwenta', '_blank', 'noopener noreferrer')}>
                                Visiter
                            </button>
                        </figcaption>
                    </figure>
                </div>
                <div className="cardPortfolio_article">
                    <figure className='cardPortfolio_figure'>
                        <img src={booki} />
                        <figcaption>
                            <h3> Maquette de site de notation d'hébergements </h3>
                            <button className="button-55" role="button" onClick={()=>window.open('https://naofalp.github.io/Booki/', '_blank', 'noopener noreferrer')}>
                                Visiter
                            </button>
                        </figcaption>
                    </figure>
                </div>
                <div className="cardPortfolio_article">
                    <figure className='cardPortfolio_figure'>
                        <img src={backend} alt="Site de notation de livre MongoDB Express API Backend" />
                        <figcaption>
                            <h3> Réalisation du back-end d'un site de notation de livre </h3>
                            <button className="button-55" role="button" onClick={()=>window.open('https://github.com/Naofalp/Projet-7-Back-End/tree/master', '_blank', 'noopener noreferrer')}>
                                Visiter
                            </button>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </>

}