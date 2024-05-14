import HomeBanner from "../Components/HomeBanner";
import Libraryparts from "../Components/Libraryparts";
import SubCategory from "../Components/SubCategory";

const Home = () => {
    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div className="mt-10">
                <Libraryparts></Libraryparts>
            </div>
            <div className="my-10">
                <SubCategory></SubCategory>
            </div>
        </div>
    );
};

export default Home;