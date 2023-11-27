import React from "react";
import { Formik, Form } from "formik";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import Avatar from "../components/Avatar";
import { IconBox } from "./IconBox";
import AppDatePicker from "./DatePicker";
import AppInput from "./Input";
import EventOptions from "./EventOptions";

const eventoptions = [
  {
    label: "Tickets",
    icon: <VideoCameraOutlined />,
    el: <>action</>,
  },
  {
    label: "Tickets",
    icon: <VideoCameraOutlined />,
    el: <>action</>,
  },
  {
    label: "Tickets",
    icon: <VideoCameraOutlined />,
    el: <>action</>,
  },
  {
    label: "Tickets",
    icon: <VideoCameraOutlined />,
    el: <>action</>,
  },

];

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const FormApp = (props) => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Space direction="vertical">
            <Avatar src={url} />

            <AppInput name="title" placeholder="Enter Event Title" />
            <IconBox icon={"cal"} customEl={<AppDatePicker />} />
            <IconBox
              icon={"loc"}
              customEl={
                <AppInput name="location" placeholder="Select Location" />
              }
            />
          <EventOptions options={eventoptions}  />
          </Space>
        </Form>
      </Formik>
    </>
  );
};
export default FormApp;
