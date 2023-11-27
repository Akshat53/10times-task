import React from "react";
import { Space } from "antd";
import styles from "./components.module.css";

export const IconBox = (props) => {
  const { icon, customEl } = props;
  return (
    <Space>
      <div>{icon}</div>
      <div className={styles.customEl}>{customEl}</div>
    </Space>
  );
};
