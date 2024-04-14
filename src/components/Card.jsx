export default function CardService({minia, imgAlt, title, content}) {
    return<>
    <article className="card_article">
        <img src={minia} alt={imgAlt} className="card_minia"/>
        <h3>{title}</h3>
        <p className="card_content">{content}</p>
    </article>
    </>
}