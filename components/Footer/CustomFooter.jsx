import React from "react";
import { Typography, Layout } from "antd";
import Image from "next/image";
import classes from "./footer.module.css";
import logo from "../../public/Vgu_logo_svg.svg";
import voronezh from "../../public/Group 87.svg";
import state from "../../public/Group 89.svg";
import university from "../../public/Group 88.svg";
import vk from "../../public/VK.svg";

const { Paragraph } = Typography;
const { Footer } = Layout;

function CustomFooter() {
  return (
      <Footer className={classes.footer}>
        <div className={classes.footerInfo}>
          <Typography>
            <Paragraph className={classes.footerText}>Адрес</Paragraph>
            <Paragraph className={classes.footerText}>Воронеж, Университетская пл., 1</Paragraph>
            <Paragraph className={classes.footerText}>Телефон</Paragraph>
            <Paragraph className={classes.footerText}>+7 (XXX) XXX-XX-XX</Paragraph>
          </Typography>
          <Typography>
            <Paragraph className={classes.footerText}>Деканат</Paragraph>
            <Paragraph className={classes.footerText}>каб. XXX X-XXX-XXX X-XXX-XXX</Paragraph>
            <Paragraph className={classes.footerText}>Почта</Paragraph>
            <Paragraph className={classes.footerText}>math.kuchp@gmail.com</Paragraph>
          </Typography>
        </div>
        <hr className={classes.footerLine} />
        <div className={classes.footerEmblemBlock}>
          <div>
            <div>
              <a href="http://www.vsu.ru/" target="_blank" className={classes.footerLink}>
                <Image src={logo} alt="logo" />
                <div className={classes.footerLinkUniversity}>
                  <Image src={voronezh} alt="voronezh" />
                  <Image src={state} alt="state" />
                  <Image src={university} alt="university" />
                </div>
              </a>
            </div>
          </div>
          <div className={classes.socials}>
            <Typography>
              <Paragraph className={classes.footerText}>Социальные сети</Paragraph>
              <a href="https://vk.com/math_vsu">
                <Image src={vk} alt="vk" />
              </a>
            </Typography>
          </div>
        </div>
      </Footer>
  );
}

export default CustomFooter;
