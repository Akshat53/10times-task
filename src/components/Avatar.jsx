import React from 'react';
import { Dropdown, Button } from 'antd';
import { Avatar, Space } from 'antd';

const App = (props) => {
 const { label = "Select",
  options = [],
  onChange,
} = props;
    <Dropdown
    menu={{
      items: options,
      onClick: onChange,
    }}
      placement="bottomRight"
      arrow
    >
    <Avatar src={props.src} />
   
    
    </Dropdown>
};
  
export default App;