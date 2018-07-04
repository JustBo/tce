import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class Template extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" style={{width: '120px',
  height: '31px',
  background: 'rgba(255,255,255,.2)',
  margin: '16px 28px 16px 0',
  float: 'left'}}/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider collapsible={true} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Footer
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
// #components-layout-demo-fixed-sider .logo {
  // height: 32px;
  // background: rgba(255,255,255,.2);
  // margin: 16px;
// }
export default Template;
