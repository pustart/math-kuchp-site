import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {Layout, Menu } from "antd";
import Image from "next/image";
import classes from "./Navbar.module.css";
import pic from "../../public/logo.png";
import {DownOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";
import Link from "next/link";

function Navbar() {
  const router = useRouter();

  const items = [
    {
      label: <Link className={classes["link"]} href="/about">О кафедре</Link>,
      key: "main",
    },
    {
      label: <Link className={classes["link"]} href="/news">Новости</Link>,
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
          label:<Link className={classes["link"]} href="/students">Списки студентов</Link> ,
        },
        {
          label: <Link className={classes["link"]} href="/methodics">Методички</Link>,
        },
        {
          label: <Link className={classes["link"]} href="/qa">Q&A</Link>
        },
      ],
    },
    {
      label: <Link className={classes["link"]} href="/professors">Преподаватели</Link>,
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
