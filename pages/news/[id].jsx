import React from 'react';
import {useRouter} from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import CustomFooter from "../../components/Footer/CustomFooter";
import styles from "../../styles/oneNewPage.module.css"

const OneNew = () => {
  const router = useRouter()
  const {id} = router.query

  let one = {
    date:"17 февраля,1999",
    title:"Заголовок",
    content:"Новость о чём то там о чём угодно"
  }
  return (
    <div>
      <Navbar />
        <div className={styles["one-new-container"]} >
          <div className={styles["date"]} >
            {one.date}
          </div>
          <div className={styles["title"]} >
            {one.title}
          </div>
          <div className={styles["content"]} >
            {one.content}
          </div>
        </div>
      <CustomFooter/>
    </div>
  );
};

export default OneNew;
