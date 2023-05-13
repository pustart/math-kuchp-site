import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import { fetchAPI } from "../lib/api";
import styles from "../styles/newsPage.module.css";
import Link from 'next/link';
import Moment from "react-moment";
import 'moment/locale/ru';

function News({ contacts , news}) {

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar />
      <main className={styles['container']} >
        <h1>Новости</h1>
        <section className={styles['news-block']} >
          {news.map((news,index) =>

            index % 3 === 0 ?
              <section className={styles['new-container']} >
                <Link href={`/news/${encodeURIComponent(news.id)}`} className={styles['title']} >
                  {news.attributes.title}
                </Link>
                <Moment className={styles['date']} locale="ru" format="ll">
                  {news.attributes.publish_date}
                </Moment>
              </section>
              :
              <section className={styles['new-container-right-aligned']} >
                <Link href={`/news/${encodeURIComponent(news.id)}`} className={styles['title']} >
                  {news.attributes.title}
                </Link>
                <Moment className={styles['date']} locale="ru" format="ll">
                  {news.attributes.publish_date}
                </Moment>
              </section>
          )}
        </section>
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });
  const news = await fetchAPI("novosti", {
    fields: ["title", "publish_date", "body"],
    sort: ['publish_date:desc'],
  });

  return {
    props: {
      contacts: contacts.data.attributes,
      news: news.data,
    },
    revalidate: 1,
  };
}

export default News;
