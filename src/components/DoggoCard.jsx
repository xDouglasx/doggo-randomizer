import {  HeartOutlined } from "@ant-design/icons";
import { Card, Col } from "antd";

const DoggoCard = ({ doggo }) => {

    return (

        <div className="doggo-card-div">
            <Col xs={24} sm={12} lg={6} className="doggo-card">
                <Card
                    style={{
                    width: 400,
                    }}
                    cover={
                    <img
                        alt="example"
                        src={doggo?.url}
                    />
                    }
                    actions={[ <HeartOutlined />,
                    ]}
                >
                </Card>
            </Col>

        </div>
 
    );

};

export default DoggoCard;