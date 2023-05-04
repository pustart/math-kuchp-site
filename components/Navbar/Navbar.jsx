import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Image from "next/image";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import pic from "../../public/logo.png";

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
        <div className={styles["students-dropdown"]}>
          Студентам
          <DownOutlined style={{ marginLeft: "5%" }} />
        </div>
      ),
      key: "SubMenu",
      children: [
        {
          label: "Списки студентов",
        },
        {
          label: "Методички",
        },
        {
          label: "Q&A",
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
    <Layout className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.emblem}>
          <div className={styles["emblem-pic"]}>
            <Image width={150} height={150} src={pic} alt="Логотип математического факультета ВГУ." />
          </div>
          <div onClick={() => router.push("/")} className={styles["emblem-text"]}>
            Кафедра уравнений в частных производных и теории вероятностей
          </div>
        </div>

        <div className={styles.menu}>
          <Menu
            className={styles.navbar}
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
