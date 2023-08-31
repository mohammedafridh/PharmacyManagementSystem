import React from 'react'
import { useState } from "react";
import { Typography, Form, Select, Row, Col, DatePicker, InputNumber, Button, Table, Space, Tag, Input } from "antd";

const Sales = () => {

  const { Title } = Typography;

  const columns = [
    {
      title: 'SKU Number',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Number Of Units (qty)',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Boxes',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];


  return (
    <>
      <div style={{ width: '90%', margin: '0px auto' }}>
        <Title level={3} className='text-center'>Dispatch Items</Title>
        <Row className='justify-content-between'>
          <Col span={11}>
            <Form.Item>
              <DatePicker placeholder='Current Date' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Input showCount maxLength={20} placeholder='Address'></Input>
          </Col>

        </Row>
        <Row className='justify-content-between'>
          <Col span={6}>
            <Form.Item>
              <Select
                showSearch
                placeholder="SKU Number"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                  {
                    value: '1',
                    label: 'Not Identified',
                  },
                  {
                    value: '2',
                    label: 'Closed',
                  }
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item>
              <InputNumber placeholder='Number Of Boxes' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <InputNumber placeholder='Number Of Units (Optional)' style={{ width: '100%' }} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Button type='primary' block>Add</Button>
          </Col>

        </Row>
      </div>
      <div className="order-list">
        <Row className='justify-content-between'>
          <Title level={5}>Order Details</Title>       
          <Button type='link'>Reset</Button>
        </Row>
        <div className="table-container">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}

export default Sales