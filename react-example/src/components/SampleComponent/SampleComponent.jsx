import './SampleComponent.css';

const SampleComponent = (props) => {

    // console.log(props)
    // console.log(props.name)
    // console.log(props.city)

    // const name = props.name; // normal props
    // const city = props.city; // normal props


    // eslint-disable-next-line react/prop-types
    const {name, city, bgColor} = props;
    console.log(props);
    return (
        <div className="sample-card" style={{backgroundColor : bgColor}}>
            <h1>{name}</h1>
            <h2>{city}</h2>
        </div>
    );
}

export default SampleComponent;