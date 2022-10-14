import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, HeartOutlined } from '@ant-design/icons';

import icon from '../images/logo.png';
const Navbar = () => {
  return (

    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className='logo'>
                <Link to="/">Doggo</Link>
            </Typography.Title>

        </div>
        <Menu theme='dark'>

            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item icon={<HeartOutlined />}>
                <Link to="/favourites">Favourites</Link>
            </Menu.Item>

        </Menu>

    </div>
  )
  
};

export default Navbar;
