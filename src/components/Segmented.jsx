import React from "react";
import { Segmented } from "antd";

const Segment = (props) => {
  const { options = [] } = props;
  return (
    <>
    <Segmented options={options} />
    </>
  );
};

export default Segment;
