import React from 'react'
import './CreatePurchaseOrder.css'
import { Button, Select, Input, InputNumber } from 'antd';

const CreatePurchaseOrder = () => {
  return (
    <div className="createPurchaseOrderContents">
      <form className="insertForm">

        <Select
          showSearch
          style={{
            width: '50%',
          }}
          placeholder="Select Supplier"
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


        <div className="CreatePurchaseInputs">
          <Select
            showSearch
            style={{
              width: '70%',
            }}
            placeholder="Select Item"
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
          <InputNumber placeholder='No of Boxes' style={{ width: '50%' }} />
          <InputNumber placeholder='No of Units (optional)' style={{ width: '50%' }} />

          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </div>

      </form>
    </div>
  )
}

export default CreatePurchaseOrder