function Card(props) {
    return (
        <div className="Card" onClick={props.shuffle}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default Card;
