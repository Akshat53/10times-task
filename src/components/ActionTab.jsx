import { Space } from "antd";
import React from "react";

const ActionTab = (props) => {
  const { icon, label, actionEl } = props;
  return (
    <Space >
      
      <div>{icon}</div>
      <div>{label}</div>
      <div>{actionEl}</div>
    </Space>
  );
};

export default ActionTab;
