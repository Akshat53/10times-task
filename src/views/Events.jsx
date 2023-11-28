import React from "react";
import { Space, Row, Col } from "antd";
import Header from "../components/Head";
import Timeline from '../components/Timeline'

const Events = () => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        background: "rgb(255,255,255)",
        backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        height : "100vh",
      }}
    >
      <Row>
        <Col span={24}>
          <Header label={'Events'} />
        </Col>
      </Row>
      <Row>
        <Col>
        <Timeline/>
       </Col>
      </Row>
    </Space>
  );
};

export default Events;
