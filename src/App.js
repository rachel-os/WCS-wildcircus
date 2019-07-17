import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Main from './Components/Main';
import Logo from '../src/assets/images/star.png';
import './App.css';
import "antd/dist/antd.css";

function App() {

  const [toggleNavbar, setToggleNavbar] = useState('');
  const { Header, Content, Footer } = Layout;
  const handleClick = e => {
    console.log('click ', e);
    setToggleNavbar({
      current: e.key,
    });
  };

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Link to='/'>
            <img className="logoWildCircus" alt="logo" src={Logo} title="Wild circus logo" />
          </Link>
          <Menu 
            className="navigation"
            onClick={handleClick}
            selectedKeys={[toggleNavbar]}
            theme="dark"
            mode="horizontal">
            <Menu.Item key="events">
              <Link to="/events">
                Our events
              </Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">
                <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer">
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
        </Header>
        <Content className="content">
          <Main />
        </Content>
      </Layout>
      <Footer className="footer">Made with love @WildCodeSchool</Footer>
    </div>
  );
}

export default App;
