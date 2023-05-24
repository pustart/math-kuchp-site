import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/oneProfPage.module.css";
import CustomFooter from "../../components/Footer/CustomFooter";
import CustomCollapse from "../../components/Collapse/CustomCollapse";
import { fetchAPI } from "../../lib/api";
import CustomImage from "../../components/CustomImage/CustomImage";
import useResponsive from "../../utils/useResponsive";
import {calcWidth} from "../../utils/calcWidth";
import ReactMarkdown from "react-markdown";

function OneProfessorPage({ contacts, profs }) {

  const windowSize = useResponsive();

  let width = calcWidth(windowSize.width,0.9)

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <Navbar />
      <main className={styles["one-prof-container"]}>
        {windowSize.width > 600
          ?
            <CustomImage className={styles.image} image={profs.picture} />
          :
            <CustomImage width={width} className={styles.image} image={profs.picture} />
        }

        <section className={styles.info}>
          <section className={styles.name}>{profs.name}</section>
          <ReactMarkdown className={styles.text} children={profs.description}  />
          <section className={styles.email}>
            <h4 className={styles.h4}>email:</h4>
            <div style={{marginLeft:"5%"}} >
              {profs.teachers_email}
            </div>
          </section>
          <section className={styles.collapse}>
            <hr size="1" color="#E8E8E8" />
            <CustomCollapse
              pointedList
              header="Наиболее значимые публикации"
              data={profs.publications.split("\n")}
            />
            <hr size="1" color="#E8E8E8" />
          </section>
        </section>
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });

  const profs = await fetchAPI(`prepodavatels/${context.query.id}`, {
    fields: ["name", "teachers_email", "job", "description", "publications"],
    populate: ["picture"],
  });

  return {
    props: {
      contacts: contacts.data.attributes,
      profs: profs.data.attributes,
    },
  };
}
export default OneProfessorPage;
