import React, { useState } from 'react';
import { ConfigProvider, Radio } from 'antd';

function CustomCheckboxList(props) {
  const [value, setValue] = useState(props.data[0]);

  const onChange = (e) => {
    setValue(e.target.value);
    props.setListValue(e.target.value);
  };

  const options = props.data;

  return (
    <div>
      <h3>{props.title}</h3>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#44BBA8',
          },
        }}
      >
        <Radio.Group
          value={value}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <Radio key={index} value={option}>{option}</Radio>
          ))}
        </Radio.Group>
      </ConfigProvider>
    </div>
  );
}

export default CustomCheckboxList;
