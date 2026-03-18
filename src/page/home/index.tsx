import React from "react";
import { Breadcrumb, Layout, theme } from 'antd';
import NavLeft from "../../components/navLeft";
import MyBreadCrumb from "../../components/breadCrumb";
import MyHeader from "../../components/header";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;


function Home(){

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
   

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <NavLeft/>
        </Sider>
        <Layout>
          <Header style={{ padding: "0 20px", background: colorBgContainer ,textAlign:"right"}} >
            <MyHeader/>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <MyBreadCrumb/>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout> 
    );
}

interface buttonProps{
    type?:string;
    children:React.ReactNode;
}

const Abutton:React.FC<buttonProps>=(props)=>{
    const cssStyle={padding:"10px 20px",borderRadius:"10px", backgroundColor:props.type=="primary"?"blue":"red"}
    return <button style={cssStyle}>{props.children}</button>
}
export default Home