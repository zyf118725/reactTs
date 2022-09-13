import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './index.less';
import { Button, Space } from 'antd';
function Header() {
  const navs = [
    {name: '首页', url:'/'},
    {name: '新闻', url:'/news'},
  ]
  return (
    <div className='headw'>
      <Space size={8}>
        {navs.map((item, i) =>(
          <Link className='item' to={item.url} key={i}>{item.name}</Link>
        ))}
      </Space>
    </div>
  )
}

export default Header