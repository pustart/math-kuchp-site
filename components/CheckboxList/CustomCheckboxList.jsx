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

      >
        {options.map((option,index) =>
          index === 0 ?
          <Checkbox style={{marginLeft:8}} >{option}</Checkbox>
            :
          <Checkbox  >{option}</Checkbox>
        )}
      </Checkbox.Group>
    </div>
  )
};

export default CustomCheckboxList;
