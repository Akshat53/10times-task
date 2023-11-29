// TimelineComponent
import React, { useState, useEffect } from "react";
import { Timeline } from "antd";
import EventCard from "./EventCard";
import moment from "moment";

const AppTimeline = ({ selectedOption }) => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Fetch the data from localStorage on component mount
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(storedData);
  }, []);

  const filteredEvents = formData.filter((event) => {
    const eventDate = moment(event.startDate);
    const now = moment();

    if (selectedOption === "Upcoming") {
      return eventDate.isAfter(now);
    } else if (selectedOption === "Past") {
      return eventDate.isBefore(now);
    }
    return true;
  });

  return (
    <Timeline mode="left">
      {filteredEvents.map((dataItem, index) => (
        <Timeline.Item key={index} label={<><div><p style={{color:"gray",fontFamily:"cursive",fontSize:"17px",display:"flex",justifyContent:"space-evenly"}}>{moment(dataItem.startDate).format("MMMM Do,")}<br></br>
        {moment(dataItem.startDate).format("dddd")}
        </p></div></>}>
          <EventCard
            title={dataItem.eventTitle}
            time={moment(dataItem.startDate).format("h:mm A")}
            postedBy={dataItem.userId}
            mode={dataItem.visibility}
            src={''}
            badge={"invited"}
          />
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default AppTimeline;
