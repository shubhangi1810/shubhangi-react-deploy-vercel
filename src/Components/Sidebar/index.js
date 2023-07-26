import React from 'react';
import { Layout, Menu } from 'antd';
import "./Sidebar.css"

const { Sider } = Layout;

const Sidebar = () => {
  return (
      <Sider  collapsible>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item style={{marginTop: 10}} key="1" icon={<img src="/map.png" alt="map-icon" width={20} height={20}/>}>
            MAP
          </Menu.Item>
        </Menu>
      </Sider>
  );
};

export default Sidebar;
