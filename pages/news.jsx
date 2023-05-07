import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/newsPage.module.css";
import {useRouter} from "next/navigation";
import Link from 'next/link';
function News() {

  let fakeData = [
    {
      id:1,
      title:"Новость 1",
      date:"17 июля 2001"
    },
    {
      id:2,
      title:"Новость 2",
      date:"17 июля 2001"
    },
    {
      id:3,
      title:"Новость 3",
      date:"17 июля 2001"
    },
    {
      id:4,
      title:"Новость 4",
      date:"17 июля 2001"
    },
    {
      id:5,
      title:"Новость 5",
      date:"17 июля 2001"

    },
    {
      id:6,
      title:"Новость 6",
      date:"17 июля 2001"
    }
  ]

  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className={styles['container']} >
        <h1>Новости</h1>
        <div className={styles['news-block']} >

            {fakeData.map(news =>
                <div className={styles['new-container']} >
                  <Link href={`/news/${encodeURIComponent(news.id)}`} className={styles['title']} >
                    {news.title}
                  </Link>
                  <div className={styles['date']} >
                    {news.date}
                  </div>
                </div>
            )}
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

export default News;
