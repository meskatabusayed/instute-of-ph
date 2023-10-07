import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Programmes from "../../components/Programmes/Programmes";


const Home = () => {


    const programmes = useLoaderData();
  



    return (
        <div>
            <Banner></Banner>
            <Programmes programmes={programmes}></Programmes>
        </div>
    );
};

export default Home;