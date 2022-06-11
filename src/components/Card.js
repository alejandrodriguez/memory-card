function Card(props) {
    return (
        <div className="Card" onClick={props.onClick}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default Card;
