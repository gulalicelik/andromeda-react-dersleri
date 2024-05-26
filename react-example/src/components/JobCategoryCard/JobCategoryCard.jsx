import './JobCategoryCard.css';
const JobCategoryCard = (props) => {

    // eslint-disable-next-line react/prop-types
    const {iconPath, title, bgColor} = props;

    return (
        <>
            <div className="category-card" style={{backgroundColor: bgColor}}>
                <img src={iconPath}/>
                <span className="card-title">{title}</span>
            </div>
        </>
    );

}

export default JobCategoryCard;