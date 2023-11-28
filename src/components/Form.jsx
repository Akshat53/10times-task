import React, { useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import {
  GlobalOutlined,
  ArrowUpOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Input, Space, Col, Row } from "antd";
import Avatar from "../components/Avatar";
import { IconBox } from "./IconBox";
import AppDatePicker from "./DatePicker";
import Card from "./Card";
import AppInput from "./Input";
import EventOptions from "./EventOptions";
import Switch from "../components/Switch";
import Dropdown from "../components/Dropdwon";
import Themes from "../components/Themes";
import {
  EditOutlined,
  DownOutlined,
  SmileOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";
import Button from "../components/Button";
import moment from "moment";
import {
  capacityOptions,
  ticketOptions,
  timeFormat,
  visiblityOtptions,
  colorOptions,
  typefaceOptions,
  avatarOptions,
} from "../constants";
import dayjs from "dayjs";

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const FormApp = (props) => {
  const formikRef = useRef();
  return (
    <>
      <Formik
        initialValues={{
          userId: "",
          eventTitle: "New Event 1999",
          startDate: dayjs(),
          endDate: dayjs(),
          location: "",
          ticketRate: "free",
          approval: false,
          capicity: "Unlimited",
          visibility: "public",
          theme: "",
          color: "Gray",
          typeFace: "Default",
        }}
        innerRef={formikRef}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleSubmit,
          handleChange,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col span={12}>
                <Space direction="vertical">
                  <Avatar
                    options={avatarOptions}
                    name="userId"
                    value={values.userId}
                    onChange={(e) => setFieldValue("userId", e.target.value)}
                  />

                  <AppInput
                    name="eventTitle"
                    placeholder="Enter Event Title"
                    value={values.eventTitle}
                    onChange={handleChange}
                  />
                  <IconBox
                    icon={"cal"}
                    customEl={
                      <AppDatePicker
                        startname="startDate"
                        endname="endDate"
                        setFieldValue={setFieldValue}
                        values={values}
                      />
                    }
                  />
                  <IconBox
                    icon={"loc"}
                    customEl={
                      <AppInput
                        name="location"
                        placeholder="Select Location"
                        value={values.location}
                        onChange={handleChange}
                      />
                    }
                  />
                  <EventOptions
                    options={[
                      {
                        label: "Tickets",
                        icon: <VideoCameraOutlined />,
                        el: (
                          <>
                            <Dropdown
                              label={
                                values.ticketRate
                                  ? values.ticketRate === "free"
                                    ? values.ticketRate
                                    : values.ticketRate
                                  : "Free"
                              }
                              icon={<EditOutlined />}
                              options={ticketOptions}
                              onChange={({ key }) => {
                                setFieldValue("ticketRate", key);
                              }}
                            />
                          </>
                        ),
                      },
                      {
                        label: "Required Approval",
                        icon: <UserOutlined />,
                        el: (
                          <Switch
                            onChange={(val) => {
                              setFieldValue("approval", val);
                            }}
                            checked={values.approval}
                          />
                        ),
                      },
                      {
                        label: "Capacity",
                        icon: <ArrowUpOutlined />,
                        el: (
                          <>
                            <Dropdown
                              label={values.capicity}
                              icon={<EditOutlined />}
                              options={capacityOptions}
                              onChange={({ key }) => {
                                setFieldValue("capicity", key);
                              }}
                            />
                          </>
                        ),
                      },
                      {
                        label: "Visibility",
                        icon: <GlobalOutlined />,
                        el: (
                          <>
                            <Dropdown
                              label={values.visibility}
                              icon={<ArrowsAltOutlined />}
                              options={visiblityOtptions}
                              onChange={({ key }) => {
                                setFieldValue("visibility", key);
                              }}
                            />
                          </>
                        ),
                      },
                    ]}
                  />
                  <Button type="submit" label="Create Event" />
                </Space>
              </Col>
              <Col span={12}>
                <Space direction="vertical">
                  <Card label={"Your Are Invited"} />
                  <Themes />
                  <EventOptions
                    options={[
                      {
                        label: "Color",
                        icon: <CheckCircleFilled />,
                        el: (
                          <>
                            <Dropdown
                              label={values.color}
                              icon={<ArrowsAltOutlined />}
                              options={colorOptions}
                              onChange={({ key }) => {
                                setFieldValue("color", key);
                              }}
                            />
                          </>
                        ),
                      },
                      {
                        label: "Typeface",
                        icon: (
                          <>
                            <b>Ag</b>
                          </>
                        ),
                        el: (
                          <>
                            <Dropdown
                              label={values.typeFace}
                              icon={<ArrowsAltOutlined />}
                              options={typefaceOptions}
                              onChange={({ key }) => {
                                setFieldValue("typeFace", key);
                              }}
                            />
                          </>
                        ),
                      },
                    ]}
                  />
                </Space>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormApp;
