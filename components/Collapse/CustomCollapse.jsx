import React from 'react';
import {Collapse} from "antd";
import PointedList from "../PointedList/PointedList";
const { Panel } = Collapse;
import styles from "./collapse.module.css"
import Icon from "@ant-design/icons";

const CustomCollapse = (props) => {

  const {data,header,pointedList} = props

  const PlusSvg = () => (
    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill="#44BBA8" fillOpacity="0.53"/>
      <line x1="25" y1="15" x2="25" y2="35" stroke="white" strokeWidth="5"/>
      <line x1="15" y1="24.1667" x2="35" y2="24.1667" stroke="white" strokeWidth="5"/>
    </svg>
  );
  const MinusSvg = () => (
    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill="#DCDDDA" fillOpacity="0.53"/>
      <line x1="15" y1="24.1667" x2="35" y2="24.1667" stroke="white" strokeWidth="5"/>
    </svg>
  );
  const PlusIcon = (props) => <Icon component={PlusSvg} {...props} />;
  const MinusIcon = (props) => <Icon component={MinusSvg} {...props} />;
  return (
    <Collapse
      bordered={false}
      expandIconPosition="end"
      expandIcon={({ isActive }) => !isActive ? <PlusIcon /> : <MinusIcon />}
    >
      <Panel className={styles.header} header={header} key="1" >
        {pointedList === true
          ?
          <PointedList data={data} />
          :
          <div className={styles["text"]} >{data}</div>
        }

      </Panel>
    </Collapse>
  );
};

export default CustomCollapse;
