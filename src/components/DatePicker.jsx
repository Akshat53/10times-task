import { DatePicker, Space, TimePicker, Typography } from "antd";
import React from "react";

const AppDatePicker = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Typography>Start</Typography>
        <DatePicker />
        <TimePicker />
      </Space>
      <Space>
        <Typography>End</Typography>
        <DatePicker />
        <TimePicker />
      </Space>
    </Space>
  );
};

export default AppDatePicker;
