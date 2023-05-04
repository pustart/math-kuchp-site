import React from "react";
import { Collapse } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import PointedList from "../PointedList/PointedList";
import styles from "./collapse.module.css";

const { Panel } = Collapse;

function CustomCollapse(props) {
  const { data, header } = props;

  return (
    <Collapse expandIconPosition="end" expandIcon={() => <PlusCircleOutlined />}>
      <Panel className={styles.header} header={header} key="1">
        <PointedList data={data} />
      </Panel>
    </Collapse>
  );
}

export default CustomCollapse;
