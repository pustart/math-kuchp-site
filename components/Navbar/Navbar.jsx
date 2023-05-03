import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {Layout, Menu } from "antd";
import Image from "next/image";
import classes from "./Navbar.module.css";
import pic from "../../public/logo.png";
import {DownOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";

function Navbar() {
  const router = useRouter();

  const items = [
    {
      label: "О кафедре",
      key: "main",
    },
    {
      label: "Новости",
      key: "app",
    },
    {
      label: (
        <div  className={classes.studentsDropdown} >
          Студентам
          <DownOutlined style={{marginLeft:"5%"}} />
        </div>
      ),
      key: 'SubMenu',
      children: [
        {
          label: 'Списки студентов',
        },
        {
          label: 'Методички',
        },
        {
          label: 'Q&A'
        },
      ],
    },
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
            <Image width={150} height={150} src={pic} alt="emblem"/>
          </div>
          <div onClick={() => router.push("/")} className={classes.emblemText}>
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
