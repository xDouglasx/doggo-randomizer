import './App.css';
import { Navbar, Home, Favourites } from './components';
import { Routes , Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    document.body.classList.add('body-color');
  }, [])


  return (
    <div className="app">

      <div className='navbar'>
          <Navbar />
      </div>

      <div className='main'>
          <Layout>
              <div className='routes'>
                  <Routes>
                      <Route exact path="/" element={ <Home />} />
                      <Route exact path="/favourites" element={  <Favourites /> }/>
                  </Routes>

              </div>
          </Layout>

          <div className='footer'>
          <div className=''>
            <Typography.Title level={1} className='logo' style={{textAlign: 'center'}}>
                <Link to="/">Doggo</Link>
            </Typography.Title>
        </div>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/favourites'>Favourites</Link>
            </Space>

        </div>
      </div>    

    </div>
  );
}

export default App;
