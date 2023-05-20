import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/professorsPage.module.css";
import { fetchAPI } from "../lib/api";
import NoData from "../components/NoData/NoData";
import CustomImage from "../components/CustomImage/CustomImage";

function Professors({ contacts, professors }) {
  const router = useRouter();

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <Navbar />
      <main className={styles.container}>
        <h1>О сотрудниках</h1>
        {professors.length === 0
          ?
            <div className={styles["no-data"]}>
              <NoData text="Нет данных о преподавателях" />
            </div>
          :
            <section className={styles.list}>
              {professors.map((prof) =>
                <section
                  onClick={() => router.push(`/professors/${encodeURIComponent(prof.id)}`)}
                  className={styles.card}
                >
                  {prof.attributes.picture.data === null
                    ?
                      <section className={styles["card-picture-placeholder"]}></section>
                    :
                      <CustomImage width={150}  height={150} image={prof.attributes.picture}  className={styles["card-picture"]}/>
                  }

                  <div className={styles["card-content"]}>
                    <section className={styles["card-content-title"]}>{prof.attributes.name}</section>
                    <section className={styles["card-content-text"]}>{prof.attributes.job}</section>
                  </div>
                </section>
              )}
            </section>
        }
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });
  const profs = await fetchAPI("prepodavatels", {
    fields: ["name", "teachers_eamil", "job", "description", "publications"],
    populate: ["picture"],
  });

  return {
    props: {
      contacts: contacts.data.attributes,
      professors: profs.data,
    },
    revalidate: 1,
  };
}
export default Professors;
