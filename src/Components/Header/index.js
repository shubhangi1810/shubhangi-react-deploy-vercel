import React, {useState} from 'react';
import { Button, Layout } from 'antd';
import "./header.css"

const { Header: AntHeader } = Layout;

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const toggleLoginState = () => {
    setLoggedIn((prev) => !prev)
  }
  return (
    <AntHeader className="header-root">
      {loggedIn ? (
        <>
          <Button onClick={() => toggleLoginState()} className="btn-logout" type="primary">Logout</Button>
          <Button>Profile</Button>
        </>
      ) : (
        <Button onClick={() => toggleLoginState()} type="primary">
          Login
        </Button>
      )}
    </AntHeader>
  );
};

export default Header;
