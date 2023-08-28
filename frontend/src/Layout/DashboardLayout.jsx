import React from 'react';
import { AppstoreOutlined, SnippetsOutlined, WarningOutlined, CheckSquareOutlined, BarChartOutlined, UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';


const { Header, Content, Sider } = Layout;

const items = [
  {
    key: 'sub1',
    icon: React.createElement(AppstoreOutlined),
    label: 'All Stock',
    to: 'allStock'
  },
  {
    key: 'sub2',
    icon: React.createElement(CheckSquareOutlined),
    label: 'Purchase',
    to: 'purchase'
  },
  {
    key: 'sub3',
    icon: React.createElement(BarChartOutlined),
    label: 'Sales',
    to:'sales'
  },
  {
    key: 'sub4',
    icon: React.createElement(WarningOutlined),
    label: 'Expiry Returns',
    children: [
      {
        key: 1,
        label: 'Purchase',
        to:'purchaseReturn'
      },
      {
        key: 2,
        label: 'Sales',
        to:'retsales'
      },
    ],
  },
  {
    key: 'sub5',
    icon: React.createElement(ExclamationCircleOutlined),
    label: 'Damaged Returns',
    children: [
      {
        key: 3,
        label: 'Purchase',
        to:'purchase'
      },
      {
        key: 4,
        label: 'Sales',
        to:'dmgretsales'
      },
    ],
  },
  {
    key: 'sub6',
    icon: React.createElement(SnippetsOutlined),
    label: 'Documents',
    children: [
      {
        key: 5,
        label: 'Invoice',
        to: 'invoice'
      },
      {
        key: 6,
        label: 'Goods Received Notes',
        to: 'rcdnotes'
      },
      {
        key: 7,
        label: 'Goods Delivery Notes',
        to:'dnotes'
      },
      {
        key: 8,
        label: 'Purchase Order',
        to:'order'
      },
      {
        key: 9,
        label: 'Packing Slip',
        to: 'packingslip'
      },
    ],
  },

];

const renderMenuItems = (menuItems) => {
  return menuItems.map((item) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {renderMenuItems(item.children)}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={`/${item.to}`}>{item.label}</Link>
        </Menu.Item>
      );
    }
  });
};


const DashboardLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      {/* Top Header */}
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      </Header>
      <Layout>

        {/* Sidebar */}
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['sub1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
          >
            {renderMenuItems(items)}
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >

          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: '70vh',
              background: colorBgContainer,
            }}
          >

            {/* Pages Section */}
            <Outlet />

          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
        Envicta ©2023
      </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;