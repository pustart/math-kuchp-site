import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HamburgerMenu.module.css';
import cross from '../../public/Cross.svg';

function HamburgerMenu(props) {
  const items = [
    {
      text: 'О кафедре',
      link: '/about',
    },
    {
      text: 'Новости',
      link: '/news',
    },
    {
      text: 'Студентам',
      children: [
        {
          text: 'Cписки студентов',
          link: '/students',
        },
        {
          text: 'Методички',
          link: '/methodics',
        },
        {
          text: 'Q&A',
          link: '/qa',
        },
      ],
    },
    {
      text: 'Преподаватели',
      link: '/professors',
    },
  ];

  return (
    <div>
      <main className={props.open ? styles['menu-active'] : styles.menu}>
        <section className={styles['menu-content']}>
          <div
            onClick={() => props.setOpen((prevState) => !prevState)}
            className={props.open ? styles['burger-close-btn'] : styles['burger-close-btn-hidden']}
          >
            <Image src={cross} width={20} height={20} alt="close_button" />
          </div>
          {items.map((item, index) => (Object.prototype.hasOwnProperty.call(item, 'link') ? (
            <section key={index} style={{ width: '100%' }}>
              <Link className={styles['menu-item']} href={item.link}>
                {item.text}
              </Link>
              <hr className={styles['menu-hr']} />
            </section>
          ) : (
            <section key={index} style={{ width: '100%' }}>
              <div className={styles['menu-item']}>{item.text}</div>
              <hr className={styles['menu-hr']} />
              <div className={styles['menu-children-container']}>
                {item.children.map((child, index) => (
                  <Link key={index} className={styles['menu-child']} href={child.link}>
                    {child.text}
                  </Link>
                ))}
              </div>
              <hr className={styles['menu-hr']} />
            </section>
          )))}
        </section>
      </main>
    </div>
  );
}

export default HamburgerMenu;
