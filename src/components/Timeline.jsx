import React, { useState } from "react";
import { Flex, Radio, Timeline } from "antd";
import EventCard from "./EventCard";
const App = () => {
  const [mode, setMode] = useState("alternate");

  return (
    <>
      <Timeline
        mode={mode}
        items={[
          {
            label: (
              <>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly",fontFamily:"lucida console" ,fontSize:"18px",fontWeight:"400" }}
                >
                  <p style={{ color: "black" }}>
                    <b>16 DEC</b>

                    <span style={{ display: "block", color:"gray"}}> Wednesday</span>
                  </p>
                </div>
              </>
            ),
            children: (
              <>
                <div style={{ display: "flex", padding: "0px 100px",fontFamily:"sans-serif"}}>
                  <EventCard
                    title={
                      "Builder's Roundtable: How Ai is Trasforming eCommerce"
                    }
                    time={"12:50PM"}
                    postedBy={"octa"}
                    mode={"virtual"}
                    src={
                      "https://printfieldonline.com/wp-content/uploads/2019/11/posters-1.jpg"
                    }
                    badge={'invited'}
                  ></EventCard>
                </div>
              </>
            ),
          },
          {},
        ]}
      />
    </>
  );
};
export default App;
