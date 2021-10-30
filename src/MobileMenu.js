import React, { useState } from "react";
import { Menu, Button } from 'antd';
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const MobileMenu = () => {
  const [ collapsed, setCollapsed ] = useState(true);

  const toggleCollapsed = () => {
    collapsed === true ? setCollapsed(false) : setCollapsed(true);
  }

  return (
    <div className="m-3 flex justify-end">
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        style={{ color: "#5b45e0"}}
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1">
          <Link to="/" >Israel</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/projects">Project</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/other" >Others</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about" >About</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MobileMenu;
