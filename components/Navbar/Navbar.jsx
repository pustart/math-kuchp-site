import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Image from "next/image";
import classes from "./Navbar.module.css";
import pic from "../../public/logo.png";

function Navbar() {
  function getItem(label, key, children, icon, type) {
    return {
      key,
      children,
      label,
      icon,
      type,
    };
  }

  const items = [
    {
      label: "О кафедре",
      key: "main",
    },
    {
      label: "Новости",
      key: "app",
    },
    getItem("Студентам", "SubMenuForStudents", [
      getItem("Списки студентов", "1"),
      getItem("Методички", "2"),
      getItem("Q&A", "3"),
    ]),
    {
      label: "Преподаватели",
      key: "professors",
    },
  ];
  const [current, setCurrent] = useState("");
  const onClickHandler = (e) => {
    setCurrent(e.key);
  };
  return (
    <Layout className={classes.layout}>
      <div className={classes.header}>
        <div className={classes.emblem}>
          <div className={classes.emblemPic}>
            <Image width={150} height={150} src={pic} alt="emblem" />
          </div>
          <div className={classes.emblemText}>
            Кафедра уравнений в частных производных и теории вероятностей
          </div>
        </div>

        <div className={classes.menu}>
          <Menu
            className={classes.navbar}
            style={{ border: "none", width: 500, marginTop: 35 }}
            theme="light"
            onClick={onClickHandler}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Navbar;
