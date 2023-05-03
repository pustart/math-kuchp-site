import React from 'react';
import classes from "./PointedList.module.css"

const PointedList = (props) => {
  return (
    <ul>
      {props.data.map(listItem =>
        <li className={classes.text} >{listItem}</li>
      )}
    </ul>
  );
};

export default PointedList;
