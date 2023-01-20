import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { HomeFilled,AppstoreFilled,SettingFilled,BookFilled,MehFilled,ProfileFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('系统首页', '0', <HomeFilled />),
  
    getItem('项目管理', 'sub1', <AppstoreFilled />, [
      getItem('竞标项目', '1'),
      getItem('发包项目', '2'),
    ]),
    getItem('用户管理', 'sub2', <MehFilled />, [
        getItem('普通用户', '3'),
        getItem('管理员', '4'),
        getItem('实名认证', '5'),
    ]),
    getItem('日志审计', '6', <ProfileFilled />),
    getItem('系统管理', 'sub3', <SettingFilled />, [
        getItem('系统平台', '7'),
        getItem('邮件服务器', '8'),
    ]),
    getItem('扩展内容', 'sub4', <BookFilled />, [
        getItem('轮播图片', '9'),
        getItem('作者', '10'),
    ]),
  
  ];
  
const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    // const toggleCollapsed = () => {
    //   setCollapsed(!collapsed);
    // };
    
    // 控制路由数组
    let routersList = [
        { url:'/' },
        { url:'auction' }
    ]

    const navigate = useNavigate()
    // 点击Item调用
    const selectItem = (item:any) => {
        // console.log(item)
        routersList.forEach((res,index)=>{
            if(item.key==index){
                navigate(res.url)
                return;
            }
        })
        
    }
    
  
    return (
        <div style={{ width: 200 }}>
            {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button> */}
            <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            onClick={selectItem}
            />
        </div>
    );
};

export default App