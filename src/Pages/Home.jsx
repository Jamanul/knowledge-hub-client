import HomeBanner from "../Components/HomeBanner";
import SubCategory from "../Components/SubCategory";

const Home = () => {
    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div className="my-10">
                <SubCategory></SubCategory>
            </div>
        </div>
    );
};

export default Home;