import React, { useState } from 'react';
import { Menu, BackTop } from 'antd';
import Logo from '../src/assets/images/star.png';
import { Link } from 'react-router-dom';
import './App.css';
import "antd/dist/antd.css";

function App() {

  const [toggleNavbar, setToggleNavbar] = useState('');
  const handleClick = e => {
    console.log('click ', e);
    setToggleNavbar({
      current: e.key,
    });
  };

  return (
    <div className="App">
      <nav>
        <Link to='/'>
          <div>
            <img className="logoWildCircus" alt="logo" src={Logo} title="Wild circus logo" />
          </div>
        </Link>
        <Menu 
          className="navigation"
          onClick={handleClick} 
          selectedKeys={[toggleNavbar]} 
          mode="horizontal">
          <Menu.Item key="events">
            <Link to="/events">
              Our events
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                About us
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </nav>
      <BackTop>
        <div className="ant-back-top-inner">UP</div>
      </BackTop>
    </div>
  );
}

export default App;
