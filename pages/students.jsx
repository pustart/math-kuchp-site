import React, {useState} from "react";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/studentsPage.module.css";
import CustomCheckboxList from "../components/CheckboxList/CustomCheckboxList";
import { fetchAPI } from "../lib/api";
import studentsPic from "../public/students.webp";
import NoData from "../components/NoData/NoData";
import useResponsive from "../utils/useResponsive";
import {calcWidth} from "../utils/calcWidth";

function Students({ contacts, students }) {

  const map = new Map();

  for (let i = 0; i < students.length; i++) {
    const temp = {
      course: students[i].attributes.course,
      student_list: students[i].attributes.student_list,
    };
    if (!map.has(students[i].attributes.study_year)) {
      map.set(students[i].attributes.study_year, [temp]);
    } else {
      map.set(students[i].attributes.study_year, map.get(students[i].attributes.study_year).concat(temp));
    }
  }

  const listData = Array.from(map.keys());

  const [radioValue,setRadioValue] = useState(listData[0]);


  const windowSize = useResponsive();

  let widthSmall = calcWidth(windowSize.width,0.9)
  let widthBig = calcWidth(windowSize.width,0.75)

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <Navbar />
      <main className={styles.container}>
        <h1>Списки студентов</h1>
        <figure className={styles.image}>
          {windowSize.width > 600
            ?
              <Image src={studentsPic} height={500} width={widthBig} placeholder="blur" alt="pic" />
            :
              <Image src={studentsPic} height={200} width={widthSmall} placeholder="blur" alt="pic" />
          }
        </figure>
        {students.length === 0 ? (
          <div className={styles["no-data"]}>
            <NoData text="Нет данных о студентах" />
          </div>
        ) : (
          <section className={styles.block}>
            <section className={styles.dropdown}>
              <CustomCheckboxList data={listData}  setListValue={setRadioValue} title="Год обучения" />
            </section>
            <section className={styles.list}>
              {students.map((people) => (
                people.attributes.study_year === radioValue
                  ?
                  <section>
                    <h2>{people.attributes.course}</h2>
                    <div style={{ marginTop: "2%" }}>
                      {people.attributes.student_list.split("\n").map((man) => (
                        <div className={styles["list-item"]}>{man}</div>
                      ))}
                    </div>
                  </section>
                :
                <></>
              ))}
            </section>
          </section>
        )}
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });
  const students = await fetchAPI("spisok-studentovs", {
    fields: ["course", "study_year", "student_list"],
  });

  return {
    props: {
      contacts: contacts.data.attributes,
      students: students.data,
    },
    revalidate: 1,
  };
}
export default Students;
