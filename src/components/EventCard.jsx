import React from "react";
import { Card, Space, Row, Col, Flex } from "antd";
import Styles from "../components/components.module.css";

const EventCard = (props) => {
  const { title, time, postedBy, mode, name, src } = props;
  return (
    <Space direction="vertical" size={16}>
      <Card
        style={{
          width: "700px",
          borderRadius: "15px",
          height: "200px",
        }}
        title={title}
      >
        <Row className={Styles.eventCard}>
          <Col>
            <p>{time}</p>
            <p>{postedBy}</p>
            <p>{mode}</p>
          </Col>
          <Col>
            {" "}
            <img src={src} width="100%" height="100px" alt={name} />
          </Col>
        </Row>
      </Card>
    </Space>
  );
};

export default EventCard;
