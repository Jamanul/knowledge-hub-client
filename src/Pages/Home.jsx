import { useContext } from "react";
import HomeBanner from "../Components/HomeBanner";
import Libraryparts from "../Components/Libraryparts";
import NewArrival from "../Components/NewArrival";
import SubCategory from "../Components/SubCategory";
import { AuthContext } from "../FirebaseAuth/AuthProvider";

const Home = () => {
    
    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div className="my-10">
                <Libraryparts></Libraryparts>
            </div>
            <div>
                <NewArrival></NewArrival>
            </div>
            <div className="my-10">
                <SubCategory></SubCategory>
            </div>
        </div>
    );
};

export default Home;