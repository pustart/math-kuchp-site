import React from 'react';
import {useRouter} from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import CustomFooter from "../../components/Footer/CustomFooter";
import styles from "../../styles/oneNewPage.module.css"
import {fetchAPI} from "../../lib/api";
import Moment from "react-moment";
import 'moment/locale/ru';

const OneNew = ({contacts,oneNew}) => {

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
        <Navbar />
        <main className={styles["one-new-container"]} >
          <section className={styles["date"]} >
            <Moment locale="ru" format="ll">
              {oneNew.publish_date}
            </Moment>
          </section>
          <h1 className={styles["title"]} >
            {oneNew.title}
          </h1>
          <section className={styles["content"]} >
            {oneNew.body}
          </section>
        </main>
        <CustomFooter contacts={contacts} />
    </div>
  );
};

export async function getServerSideProps(context) {

  const oneNew = await fetchAPI(`novosti/${context.query.id}`, {
    fields: ["title", "publish_date", "body"],
  });
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });

  return {
    props: {
      contacts: contacts.data.attributes,
      oneNew: oneNew.data.attributes,
    },
  };
}


export default OneNew;
