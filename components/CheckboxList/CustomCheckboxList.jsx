import React from 'react';
import {Checkbox} from 'antd';

const CustomCheckboxList = (props) => {

  const onChange = (checkedValues) => {
    //props.onChange();
    //console.log('checked = ', checkedValues);
  };

  let options = ["1","2","3"]

  return (

    <div>
      <h3>{props.title}</h3>
      <Checkbox.Group
        style={{
          width: '100%',
          display:"flex",
          flexDirection:"column",
          alignItems:"flex-start",
        }}
        onChange={() => onChange}
        options={options}
      />
    </div>
  )
};

export default CustomCheckboxList;
