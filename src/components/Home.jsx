import DoggoCard from "./DoggoCard"
import { Row } from "antd"
import { useGetDoggosQuery } from "../services/doggoApi"

const Home = () => {

    const { data } = useGetDoggosQuery();
    
    return (

        <div>
            <Row gutter={[32, 32]} className="doggo-card-container">

                {data?.map((dog) => (
                    <DoggoCard doggo={dog}/>
                ))}              
            
            </Row>
        </div>
    );
};

export default Home;