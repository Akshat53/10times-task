import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Row, Space } from "antd";
import Styles from "../components/components.module.css";
import AppCounterBadage from "../components/Badage";
import {
  VideoCameraOutlined,
  GitlabFilled,
  ClockCircleFilled,
} from "@ant-design/icons";

const EventCard = (props) => {
  const { title, time, postedBy, mode, badge, src } = props;
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('eventFormData');
    if (dataFromLocalStorage) {
      const parsedData = JSON.parse(dataFromLocalStorage);
      setStoredData(parsedData);
    }
  }, []);

  return (
    <Space direction="vertical" size={16}>
      <Badge.Ribbon text={badge}>
        <Card
          style={{
            width: "700px",
            borderRadius: "15px",
          }}
        >
          <Row className={Styles.eventCard}>
            <Col>
              <h3>{title}</h3>
              <p className={Styles.font}>
                <ClockCircleFilled /> {time}
              </p>
              <p className={Styles.font}>
                <GitlabFilled /> {postedBy}
              </p>
              <p className={Styles.font}>
                <VideoCameraOutlined /> {mode}
              </p>
              {storedData && (
                <p className={Styles.font}>
                  Retrieved data from local storage: {storedData.userId}
                  {/* Display other retrieved data */}
                </p>
              )}
              <AppCounterBadage />
            </Col>
            {src && ( // Check if src exists before rendering the image column
              <Col style={{ padding: "30px 20px" }}>
                <img
                //   src={src}
                  width="100%"
                  height="100px"
                  alt={title} // Changed alt to title for accessibility
                  style={{ borderRadius: "200px" }}
                />
              </Col>
            )}
          </Row>
        </Card>
      </Badge.Ribbon>
    </Space>
  );
};

export default EventCard;
