import { Card } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Moment from 'react-moment';
import React from 'react';
import Error from 'next/error';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/mainPage.module.css';
import pieChart from '../public/pieChart.png';
import boyAndGirl from '../public/boyandgirl.png';
import CustomFooter from '../components/Footer/CustomFooter';
import { fetchAPI } from '../lib/api';
import 'moment/locale/ru';
import useResponsive from '../utils/useResponsive';

export default function Home({ contacts, freshNew }) {
  if (!contacts) {
    return <Error statusCode={404} />;
  }
  const router = useRouter();

  const windowSize = useResponsive();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Navbar />
      <main className={styles.container}>
        <section className={styles['about-block']}>
          <div className={styles['about-block-text']}>
            <section>
              <h1>Кафедра уравнений в частных производных и теории вероятностей</h1>
              <p>
                Она существует в ВГУ с 1964 года. Основателем кафедры и первым ее заведующим был
                профессор Селим Григорьевич Крейн.
              </p>
            </section>
            <button type="button" onClick={() => router.push('/about')} className={styles['extra-button']}>
              Узнать подробнее
            </button>
            <button type="button" onClick={() => router.push('/news')} className={styles['news-button']}>
              Новости о кафедре
            </button>
          </div>
          <figure className={styles['about-block-chart']}>
            {windowSize.width > 1400 ? (
              <Image src={pieChart} height={400} width={400} alt="Декоративная картинка." />
            ) : (
              <Image src={pieChart} height={300} width={300} alt="Декоративная картинка." />
            )}
          </figure>
        </section>

        <section className={styles['main-info']}>
          <h1>Главное о кафедре</h1>
          <main className={styles.cards}>
            <section className={styles.news}>
              <Card
                onClick={() => router.push('/news')}
                hoverable
                className={styles['news-card']}
                bodyStyle={{
                  width: '100%',
                  height: '87%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {freshNew === null ? (
                  <section className={styles['card-big-text']}>Актуальных новостей нет</section>
                ) : (
                  <section className={styles['card-big-text']}>{freshNew.title}</section>
                )}
                {freshNew === null ? (
                  <section className={styles['card-small-text']} />
                ) : (
                  <section className={styles['card-small-text']}>
                    <Moment locale="ru" format="ll">
                      {freshNew.publish_date}
                    </Moment>
                  </section>
                )}
                <section className={styles['card-news-title']}>Новости</section>
              </Card>
            </section>
            <section className={styles.qa}>
              <Card
                onClick={() => router.push('/qa')}
                bodyStyle={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                hoverable
                className={styles['qa-card']}
              >
                <section className={styles['card-title']}>Q&A</section>
                <figure className={styles['qa-image']}>
                  <Image src={boyAndGirl} width={130} height={130} alt="Декоративная картинка." />
                </figure>
              </Card>
            </section>
            <section className={styles.about}>
              <Card
                onClick={() => router.push('/about')}
                hoverable
                bordered={false}
                className={styles['about-card']}
              >
                <div className={styles['card-title']}>О кафедре</div>
              </Card>
            </section>
            <section className={styles.methodics}>
              <Card
                onClick={() => router.push('/methodics')}
                hoverable
                className={styles['methodics-card']}
              >
                <div className={styles['card-title']}>Методички</div>
              </Card>
            </section>
          </main>
        </section>
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getServerSideProps() {
  let contacts;
  let news;

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
      props: {
        contacts: null,
        freshNew: null,
      },
    };
  }

  if (news.data.length === 0) {
    return {
      props: {
        contacts: contacts.data.attributes,
        freshNew: null,
      },
    };
  }

  return {
    props: {
      contacts: contacts.data.attributes,
      freshNew: news.data[0].attributes,
    },
  };
}
