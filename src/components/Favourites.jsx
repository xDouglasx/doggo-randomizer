import DoggoCard from "./DoggoCard"
import { Row } from "antd"
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react'


const Favourites = () => {  

    const [doggos, setDoggos] = useState([]);

    useEffect(() => {
      const doggos = JSON.parse(localStorage.getItem('doggosList')) || []
      if (doggos) {
       setDoggos(doggos);
      }
    }, []);

    const clearLocalStorage = () => {
        localStorage.clear();
        setDoggos([]);
    }  

    return(

        <div>
            <Button onClick={clearLocalStorage} type="primary" shape="round" icon={<DeleteOutlined />} size="large">
                Clear Favourite Dogs </Button>
            <Row gutter={[32, 32]} className="doggo-card-container">

                {doggos?.map((dog) => (
                    <DoggoCard doggo={dog}/>
                ))}              
            
            </Row>
        </div>

    );
};

export default Favourites;