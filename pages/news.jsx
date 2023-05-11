import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import { fetchAPI } from "../lib/api";
import styles from "../styles/newsPage.module.css";
import {useRouter} from "next/navigation";
import Link from 'next/link';

function News({ contacts , news}) {

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar />
      <div className={styles['container']} >
        <h1>Новости</h1>
        <div className={styles['news-block']} >
          {news.map((news,index) =>

            index % 3 === 0 ?
              <div className={styles['new-container']} >
                <Link href={`/news/${encodeURIComponent(news.id)}`} className={styles['title']} >
                  {news.attributes.title}
                </Link>
                <div className={styles['date']} >
                  {news.attributes.publish_date}
                </div>
              </div>
              :
              <div className={styles['new-container-right-aligned']} >
                <Link href={`/news/${encodeURIComponent(news.id)}`} className={styles['title']} >
                  {news.attributes.title}
                </Link>
                <div className={styles['date']} >
                  {news.attributes.publish_date}
                </div>
              </div>
          )}
        </div>
      </div>
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
  });

  return {
    props: {
      contacts: contacts.data,
      news: news.data,
    },
    revalidate: 1,
  };
}

export default News;
