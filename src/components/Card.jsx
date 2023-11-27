import React from "react";
import { Card } from "antd";

const Cards = (props) => {
  const { label } = props;
  return (
    <Card
      style={{
        width: 300,
        height: 400,
        background: "#ffd89b" /* fallback for old browsers */,
        background: "-webkit-linear-gradient(to right, #ffd89b, #19547b)",
        background: "linear-gradient(to right, #ffd89b, #19547b)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{label}</h1>
    </Card>
  );
};

export default Cards;
