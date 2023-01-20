import React from 'react';
import { Layout } from 'antd';

import { Outlet } from "react-router-dom";

// 
import LeftMenu from "../../components/leftMenu"

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  return (
    <div className="w-100-100">
        <Layout>
            <Header style={{height:'60px'}}>
                <div style={{height:'60px'}} className='h-100-100 col-FFFFFF'>众包后台管理系统</div>
            </Header>
            {/* style={{min-height:'100vh'}} */}
            <Layout style={{minHeight:'calc(100vh - 60px)'}}>
                <Sider>
                    <LeftMenu></LeftMenu>
                </Sider>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </div>
    
  );
};
export default Home;
