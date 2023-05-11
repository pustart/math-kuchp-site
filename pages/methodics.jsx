import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import { fetchAPI } from "../lib/api";
import styles from "../styles/methodicsPage.module.css"

function Methodics({ contacts }) {

  let fakeData = [
    {
      id:1,
      title:"Довузовская работа / Вступительные экзамены",
      data: ["методичка 1","методичка 2","методичка 3","методичка 4"],
    },
    {
      id:2,
      title:"Материалы для аттестаций",
      data: ["методичка 1","методичка 2","методичка 3","методичка 4"],
    },
    {
      id:3,
      title:"Методички",
      data: ["методичка 1","методичка 2","методичка 3","методичка 4"],
    },
  ]

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar />
      <div className={styles["container"]} >
        <h1>Методические пособия</h1>
        {fakeData.map(block =>
          <div className={styles["block"]} >
            <div className={styles["title"]}>
              {block.title}
            </div>
            {block.data.map(str =>
              <a className={styles["content"]} >
                {str}
              </a>
            )}
          </div>
        )}
      </div>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });

  return {
    props: {
      contacts: contacts.data,
    },
    revalidate: 1,
  };
}

export default Methodics;
