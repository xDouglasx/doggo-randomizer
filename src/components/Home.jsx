import DoggoCard from "./DoggoCard"
import { Row } from "antd"
import { useGetDoggosQuery } from "../services/doggoApi"
import { useEffect, useState } from 'react'
import Loader from './Loader'
import { RedoOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Home = () => {

    const { data, refetch, isFetching } = useGetDoggosQuery();
    const [doggos, setDoggos] = useState([])

    useEffect(() => {
        setDoggos(data);
    },[data])

    const refresh = () => {
        refetch()
    }

    if(isFetching) return <Loader />;
    
    return (

        <div>
            <Button onClick={refresh} type="primary" shape="round" icon={<RedoOutlined />} size="large">
                Next 6 dogs </Button>
            <Row gutter={[32, 32]} className="doggo-card-container">

                {doggos?.map((dog) => (
                    <DoggoCard doggo={dog}/>
                ))}              
            
            </Row>
        </div>
    );
};

export default Home;