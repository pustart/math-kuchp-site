import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/professorsPage.module.css"
import {useRouter} from "next/navigation";
import {fetchAPI} from "../lib/api";

const Professors = ({contacts,professors}) => {
  console.log(professors)
  const router = useRouter();

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar/>
      <main className={styles["container"]}>
        <h1>О сотрудниках</h1>
        <section className={styles["list"]} >
          {professors.map(prof =>
            <section onClick={() => router.push(`/professors/${encodeURIComponent(prof.id)}`)} className={styles["card"]} >
                <section className={styles["card-picture"]} >
                  Тут будет картинка
                </section>
                <div className={styles["card-content"]} >
                  <section className={styles["card-content-title"]} >
                    {prof.attributes.name}
                  </section>
                  <section className={styles["card-content-text"]} >
                    {prof.attributes.job}
                  </section>
                </div>
            </section>
          )}
        </section>
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
};


export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });
  const profs = await fetchAPI("prepodavatels", {
    fields: ["name", "teachers_eamil", "job", "description","publications"],
  });

  return {
    props: {
      contacts: contacts.data.attributes,
      professors:profs.data,
    },
    revalidate: 1,
  };
}
export default Professors;
