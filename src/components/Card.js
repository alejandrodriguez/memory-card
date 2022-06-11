function Card(props) {
    return (
        <div className="Card" key={props.uniqid}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default Card;
