import flag from "../assets/Logos/Drapeau-US.png";
import html from "../assets/Logos/html-logo.png";
import css from "../assets/Logos/CSS3-logo.png";
import js from "../assets/Logos/JavaScript-logo.png";
import react from "../assets/Logos/React-logo.png";
import sass from "../assets/Logos/sass-logo.png";
import shopify from "../assets/Logos/Shopify-logo.webp";
import wordpress from "../assets/Logos/wordpress-logo.png";


export default function Tools() {
    return <>
        <section className="Tools_container">
            <h2> Mes languages </h2>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src={flag} 
                        height="100" 
                        width="250" 
                        alt="" />
                    </div>
                    <div class="slide">
                        <img src={html} 
                        height="100" 
                        width="250" 
                        alt="" />
                    </div>
                    <div class="slide">
                        <img src={css} 
                        height="100" 
                        width="250" 
                        alt="" />
                    </div>
                    <div class="slide">
                        <img src={js} 
                        height="100" 
                        width="250" 
                        alt="" />
                    </div>
                    <div class="slide">
                        <img src={react} 
                        height="100" 
                        width="250" 
                        alt="" />
                    </div>
                    <div class="slide">
                        <img src={sass} 
                        height="100" 
                        width="250" 
                        alt="" />
                    </div>
                    <div class="slide">
                        <img src={shopify} 
                        height="100" 
                        width="250" 
                        alt="" />
                    </div>
                    <div class="slide">
                        <img src={wordpress} 
                        height="100" 
                        width="250" 
                        alt="" />
                    </div>
                </div>
            </div>
            <p> Accompagné de mes outils favoris Photoshop, Figma, GitHub et VisualStudio Code. </p>
        </section>
    </>

}