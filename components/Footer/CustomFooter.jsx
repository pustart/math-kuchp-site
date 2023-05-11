import React from "react";
import { Typography, Layout } from "antd";
import Image from "next/image";
import styles from "./footer.module.css";
import logo from "../../public/Vgu_logo_svg.svg";
import voronezh from "../../public/Group 87.svg";
import state from "../../public/Group 89.svg";
import university from "../../public/Group 88.svg";
import vk from "../../public/VK.svg";

const { Paragraph } = Typography;
const { Footer } = Layout;

function CustomFooter({ contacts }) {
  return (
    <Footer className={styles.footer}>
      <div className={styles["footer-info"]}>
        <Typography>
          <Paragraph className={styles["footer-alter-text"]}>Адрес</Paragraph>
          <Paragraph className={styles["footer-alter-text"]}>{contacts.attributes.address}</Paragraph>
          <Paragraph className={styles["footer-alter-text"]}>Телефон</Paragraph>
          <Paragraph className={styles["footer-alter-text"]}>
            {contacts.attributes.general_number}
          </Paragraph>
        </Typography>
        <Typography>
          <Paragraph className={styles["footer-text"]}>Деканат</Paragraph>
          <Paragraph className={styles["footer-text"]}>{contacts.attributes.dean_number}</Paragraph>
          <Paragraph className={styles["footer-text"]}>Почта</Paragraph>
          <Paragraph className={styles["footer-text"]}>{contacts.attributes.email}</Paragraph>
        </Typography>
      </div>
      <hr className={styles["footer-line"]} />
      <div className={styles["footer-emblem-block"]}>
        <div>
          <div>
            <a href="http://www.vsu.ru/" target="_blank" className={styles["footer-link"]}>
              <Image src={logo} alt="Логотип ВГУ." />
              <div className={styles["footer-link-university"]}>
                <Image src={voronezh} alt="Воронежский" />
                <Image src={state} alt="Государственный" />
                <Image src={university} alt="Университет" />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.socials}>
          <Typography>
            <Paragraph className={styles["footer-text"]}>Социальные сети</Paragraph>
            <a href="https://vk.com/math_vsu">
              <Image src={vk} alt="Группа во ВКонатке." />
            </a>
          </Typography>
        </div>
      </div>
    </Footer>
  );
}

export default CustomFooter;
