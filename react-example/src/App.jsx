import './App.css';
import JobCategoryCard from "./components/JobCategoryCard/JobCategoryCard.jsx";
import myIcon1 from './assets/icon-test.svg';


function App() {

    return (
        <>
            <div className="app-container">
                <JobCategoryCard title="Hello" bgColor="#FFECEC" iconPath={myIcon1}/>
                <JobCategoryCard title="Hello" bgColor="#FFECEC" iconPath={myIcon1}/>
                <JobCategoryCard title="Hello" bgColor="#FFECEC" iconPath={myIcon1}/>
                <JobCategoryCard title="Hello" bgColor="#FFECEC" iconPath={myIcon1}/>
                <JobCategoryCard title="Hello" bgColor="#FFECEC" iconPath={myIcon1}/>
                <JobCategoryCard title="Hello" bgColor="#FFECEC" iconPath={myIcon1}/>
                <JobCategoryCard title="Hello" bgColor="#FFECEC" iconPath={myIcon1}/>
                <JobCategoryCard title="Hello" bgColor="#FFECEC" iconPath={myIcon1}/>
            </div>
        </>
    )
}

export default App
