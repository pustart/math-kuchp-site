import React from 'react';
import {useRouter} from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/oneProfPage.module.css";
import CustomFooter from "../../components/Footer/CustomFooter";
import CustomCollapse from "../../components/Collapse/CustomCollapse";

const OneProfessorPage = () => {

  const router = useRouter()
  const {id} = router.query

  let one = {
    date:"17 февраля,1999",
    name:"Катя",
    content:"Катя - молодец",
    achievments:["1","2","3","4"],
  }
  return (
    <div>
      <Navbar />
      <div className={styles["one-prof-container"]} >
        <div className={styles["image"]} >
          {one.date}
        </div>
        <div className={styles["info"]} >
          <div className={styles["name"]} >
            {one.name}
          </div>
          <div className={styles["text"]} >
            {one.content}
          </div>
          <div className={styles["collapse"]} >
            <hr size="1" color="#E8E8E8"/>
            <CustomCollapse header="Наиболее значимые публикации" data={one.achievments}/>
            <hr size="1" color="#E8E8E8"/>
          </div>
        </div>
      </div>
      <CustomFooter/>
    </div>
  );
};

export default OneProfessorPage;
