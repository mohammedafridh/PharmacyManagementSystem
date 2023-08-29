import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Typography
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const AddStock = () => {

  const [componentDisabled, setComponentDisabled] = useState(false);

  return (
    <>
      <Title level={3}>Add Stock</Title>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item> */}
        {/* <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item> */}
        <Form.Item>
          <Input placeholder='Packing Slip Id'/>
        </Form.Item>
        {/* <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item> */}
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
            },
            {
              value: '3',
              label: 'Communicated',
            },
            {
              value: '4',
              label: 'Identified',
            },
            {
              value: '5',
              label: 'Resolved',
            },
            {
              value: '6',
              label: 'Cancelled',
            },
          ]}
        />
        </Form.Item>
        <Form.Item>
          <InputNumber placeholder='Number Of Boxes' style={{width:'100%'}}/>
        </Form.Item>
        <Form.Item >
          <InputNumber placeholder='Number Of Units' style={{width:'100%'}}/>
        </Form.Item>
        <Form.Item>
          <InputNumber placeholder='Batch Number' style={{width:'100%'}}/>
        </Form.Item>
        <Form.Item>
          <DatePicker style={{width:'100%'}} placeholder='Manufactured Date'/>
        </Form.Item>
        <Form.Item>
          <DatePicker placeholder='Expiry Date' style={{width:'100%'}}/>
        </Form.Item>
        <Form.Item>
        <Select
          showSearch
          placeholder="Supplier ID"
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
            },
            {
              value: '3',
              label: 'Communicated',
            },
            {
              value: '4',
              label: 'Identified',
            },
            {
              value: '5',
              label: 'Resolved',
            },
            {
              value: '6',
              label: 'Cancelled',
            },
          ]}
        />
        </Form.Item>
        {/* <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item> */}
        {/* <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item> */}
        <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card" >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Document / Slip
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <AddStock />