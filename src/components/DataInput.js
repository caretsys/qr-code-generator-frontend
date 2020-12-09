import React from "react";
import { Form, Input, Button } from "antd";

const DataInput = ({ handleSubmit, state }) => {
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="data">
        <Input.TextArea rows={4} placeholder="All your data goes here...." />
      </Form.Item>
      <Form.Item>
        <Button loading={state} type="primary" htmlType="submit">
          Generate QR
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DataInput;
