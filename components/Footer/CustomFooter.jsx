import React from 'react';
import { Typography, Layout } from 'antd';
import Image from 'next/image';
import styles from './footer.module.css';
import vk from '../../public/VK.svg';

import vgu from '../../public/Group 91.svg';
import vguSmall from '../../public/VGU.svg';
import useResponsive from '../../utils/useResponsive';

const { Paragraph } = Typography;
const { Footer } = Layout;

function CustomFooter({ contacts }) {
  const windowSize = useResponsive();

  return (
    <Footer className={styles.footer}>
      <section className={styles['footer-info']}>
        <Typography>
          <Paragraph className={styles['footer-alter-text']}>Адрес</Paragraph>
          <Paragraph className={styles['footer-alter-text']}>{contacts.address}</Paragraph>
          <Paragraph className={styles['footer-alter-text']}>Телефон</Paragraph>
          <Paragraph className={styles['footer-alter-text']}>{contacts.general_number}</Paragraph>
        </Typography>
        <Typography>
          <Paragraph className={styles['footer-text']}>Деканат</Paragraph>
          <Paragraph className={styles['footer-text']}>{contacts.dean_number}</Paragraph>
          <Paragraph className={styles['footer-text']}>Почта</Paragraph>
          <Paragraph className={styles['footer-text']}>{contacts.email}</Paragraph>
        </Typography>
      </section>
      <hr className={styles['footer-line']} />
      <section className={styles['footer-emblem-block']}>
        <section>
          <div>
            <a href="http://www.vsu.ru/" target="_blank" className={styles['footer-link']}>
              <div className={styles['footer-link-university']}>
                {windowSize.width > 600 ? (
                  <Image src={vgu} className={styles['logo-svg']} alt="Логотип вгу" />
                ) : (
                  <Image src={vguSmall} className={styles['logo-svg']} alt="Логотип вгу" />
                )}
              </div>
            </a>
          </div>
        </section>
        <section className={styles.socials}>
          <Typography>
            <Paragraph className={styles['footer-text-socials']}>Социальные сети</Paragraph>
            <a target="_blank" href="https://vk.com/math_vsu">
              <Image src={vk} alt="Группа во ВКонатке." />
            </a>
          </Typography>
        </section>
      </section>
    </Footer>
  );
}

export default CustomFooter;
