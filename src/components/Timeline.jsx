import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';
import EventCard from './EventCard';
const App = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
   
      <Timeline
      
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: < >
            
             <EventCard
                title={"Events"}
                time={"12:50PM"}
                postedBy={"octa"}
                mode={"virtual"}
                src={
                  "https://printfieldonline.com/wp-content/uploads/2019/11/posters-1.jpg"
                }
              ></EventCard>
             
            </>,
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
      
        ]}
      />
    </>
  );
};
export default App;