import React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import Navbar from '../components/Navbar/Navbar';
import CustomFooter from '../components/Footer/CustomFooter';
import { fetchAPI } from '../lib/api';
import styles from '../styles/newsPage.module.css';
import 'moment/locale/ru';
import NoData from '../components/NoData/NoData';

function News({ contacts, news }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <main className={styles.container}>
        <h1>Новости</h1>
        {news.length === 0 ? (
          <div className={styles['no-data']}>
            <NoData text="Нет актуальных новостей" />
          </div>
        ) : (
          <section className={styles['news-block']}>
            {news.map((oneNew, index) => (index % 3 === 0 ? (
              <section key={index} className={styles['new-container']}>
                <Link href={`/news/${encodeURIComponent(oneNew.id)}`} className={styles.title}>
                  {oneNew.attributes.title}
                </Link>
                <Moment className={styles.date} locale="ru" format="ll">
                  {oneNew.attributes.publish_date}
                </Moment>
              </section>
            ) : (
              <section key={index} className={styles['new-container-right-aligned']}>
                <Link href={`/news/${encodeURIComponent(oneNew.id)}`} className={styles.title}>
                  {oneNew.attributes.title}
                </Link>
                <Moment className={styles.date} locale="ru" format="ll">
                  {oneNew.attributes.publish_date}
                </Moment>
              </section>
            )))}
          </section>
        )}
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getServerSideProps() {
  let contacts = null;
  let news  = null;

  try {
    contacts = await fetchAPI('contact', {
      fields: ['email', 'general_number', 'dean_number', 'address'],
    });
    news = await fetchAPI('novosti', {
      fields: ['title', 'publish_date', 'body'],
      sort: ['publish_date:desc'],
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: contacts.data.attributes,
      news: news.data,
    },
  };
}

export default News;
