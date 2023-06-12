import React from 'react';
import styles from './NoData.module.css';

function NoData(props) {
  return <section className={styles.text}>{props.text}</section>;
}

export default NoData;
