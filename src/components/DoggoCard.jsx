import {  HeartOutlined } from "@ant-design/icons";
import { Card, Col, Alert } from "antd";
import { useState } from 'react'

const DoggoCard = ({ doggo }) => {

    const [ isConfirmed, setConfirmed ] = useState(false)
    
    const favouriteDog = (dog) => {
     
    const doggosList = JSON.parse(localStorage.getItem('doggosList')) || [];
    doggosList.push({url : dog.url});
    localStorage.setItem('doggosList', JSON.stringify(doggosList));
    
    setConfirmed(true)

    setTimeout(() => {
        setConfirmed(false)
      }, 3000);

    }

    const isMp4 = doggo.url.includes("mp4");
    
    return (

        <div className="doggo-card-div">

            {isConfirmed && (
                <Alert
                message="Doggo Added to Favourites"
                description="Go to your favourites to check your doggos"
                type="success"
                showIcon
                />
            )}            

            <Col xs={24} sm={12} lg={6} className="doggo-card">
                <Card style={{ width: 400 }} 
                  cover={ isMp4 ? 
                  <video controls style={{ height: 450 }}>
                        <source src={doggo.url} type="video/mp4" />
                  </video> : <img alt="example" src={doggo?.url} style={{ height: 450 }}/>  } actions={[ <HeartOutlined onClick={() => favouriteDog(doggo)} />, ]}>
                </Card>
            </Col>
        </div>
 
    );

};

export default DoggoCard;