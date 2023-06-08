import React, { useState } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';
import Image from 'next/image';
import { DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import pic from '../../public/logo.png';
import styles from './Navbar.module.css';
import useResponsive from '../../utils/useResponsive';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Navbar() {
  const router = useRouter();

  const windowSize = useResponsive();

  const items = [
    {
      label: (
        <Link className={styles.link} href="/about">
          О кафедре
        </Link>
      ),
      key: 'main',
    },
    {
      label: (
        <Link className={styles.link} href="/news">
          Новости
        </Link>
      ),
      key: 'app',
    },
    {
      label: (
        <div className={styles['students-dropdown']}>
          Студентам
          <DownOutlined style={{ marginLeft: '5%' }} />
        </div>
      ),
      key: 'SubMenu',
      children: [
        {
          label: (
            <Link className={styles.link} href="/students">
              Списки студентов
            </Link>
          ),
        },
        {
          label: (
            <Link className={styles.link} href="/methodics">
              Методички
            </Link>
          ),
        },
        {
          label: (
            <Link className={styles.link} href="/qa">
              Q&A
            </Link>
          ),
        },
      ],
    },
    {
      label: (
        <Link className={styles.link} href="/professors">
          Преподаватели
        </Link>
      ),
      key: 'professors',
    },
  ];
  const [current, setCurrent] = useState('');
  const onClickHandler = (e) => {
    setCurrent(e.key);
  };

  const [opened, setOpened] = useState(false);

  return (
    <Layout className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.emblem}>
          <div className={styles['emblem-pic']}>
            {windowSize.width > 600 ? (
              <Image
                width={150}
                height={150}
                src={pic}
                alt="Логотип математического факультета ВГУ."
              />
            ) : (
              <Image
                width={100}
                height={100}
                src={pic}
                alt="Логотип математического факультета ВГУ."
              />
            )}
          </div>
          <div onClick={() => router.push('/')} className={styles['emblem-text']}>
            Кафедра уравнений в частных производных и теории вероятностей
          </div>
        </div>
        {windowSize.width > 600 ? (
          <div className={styles.menu}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#44BBA8',
                },
              }}
            >
              <Menu
                className={styles.navbar}
                style={{ border: 'none', width: 500, marginTop: 35 }}
                theme="light"
                onClick={onClickHandler}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
              />
            </ConfigProvider>
          </div>
        )
          : (
            <div className={styles.menu}>
              <div
                onClick={() => setOpened((prevState) => !prevState)}
                className={opened ? styles['burger-btn-hidden'] : styles['burger-btn']}
              >
                <span className={styles['burger-btn-span']} />
              </div>
              <HamburgerMenu setOpen={setOpened} open={opened} />
            </div>
          )}
      </div>
    </Layout>
  );
}

export default Navbar;
