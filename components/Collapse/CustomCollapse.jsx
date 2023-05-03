import React from 'react';
import {Collapse} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import PointedList from "../PointedList/PointedList";
const { Panel } = Collapse;
import classes from "./collapse.module.css"

const CustomCollapse = (props) => {

  const {data,header} = props

  return (
    <Collapse
      expandIconPosition="end"
      expandIcon={() => <PlusCircleOutlined />}
    >
      <Panel className={classes.header} header={header} key="1" >
        <PointedList data={data} />
      </Panel>
    </Collapse>
  );
};

export default CustomCollapse;
