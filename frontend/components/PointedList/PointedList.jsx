import React from 'react';
import styles from './PointedList.module.css';

function PointedList(props) {
  return (
    <ul>
      {props.data.map((listItem, index) => (
        <li key={index} className={styles.text}>{listItem}</li>
      ))}
    </ul>
  );
}

export default PointedList;
