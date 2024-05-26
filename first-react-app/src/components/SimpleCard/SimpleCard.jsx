import './SimpleCard.css';


// eslint-disable-next-line react/prop-types
const SimpleCard = (props) => {

    // const title = props.title;
    // const description = props.description;

    // eslint-disable-next-line react/prop-types
    const {title, description} = props;
    return (
        <>
            <div className="card">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </>
    );
}

export default SimpleCard;