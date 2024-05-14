export default function CardService({minia, imgAlt, title, content}) {
    return<>
    <div className="cardService_article">
        <img src={minia} alt={imgAlt} className="cardService_minia"/>
        <h3>{title}</h3>
        <p className="cardService_content">{content}</p>
    </div>
    </>
}