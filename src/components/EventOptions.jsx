import { Space } from "antd";
import React from "react";
import ActionTab from "./ActionTab";

const EventOptions = (props) => {
  const { options = [], label } = props;
  return (
    <Space direction="vertical">
      {options.map((item, i) => {
        return (
          <ActionTab
            key={i}
            icon={item.icon}
            label={item.label}
            actionEl={item.el}
          />
        );
      })}
    </Space>
  );
};

export default EventOptions;
