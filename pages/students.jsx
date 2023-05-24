import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/studentsPage.module.css";
import CustomCheckboxList from "../components/CheckboxList/CustomCheckboxList";
import { fetchAPI } from "../lib/api";
import NoData from "../components/NoData/NoData";
import useResponsive from "../utils/useResponsive";
import {calcWidth} from "../utils/calcWidth";
import ReactMarkdown from "react-markdown";
import CustomImage from "../components/CustomImage/CustomImage";

function Students({ contacts, students,history}) {
  const map = new Map();

  function compareNumbers(a, b) {
    return a.sort_id - b.sort_id;
  }

  for (let i = 0; i < students.length; i++) {
    const temp = {
      course: students[i].attributes.course,
      student_list: students[i].attributes.student_list,
      sort_id: students[i].attributes.sort_id,
    };
    if (!map.has(students[i].attributes.study_year)) {
      map.set(students[i].attributes.study_year, [temp]);
    } else {
      map.set(students[i].attributes.study_year, map.get(students[i].attributes.study_year).concat(temp));
    }
  }

  map.forEach((values,keys) => {
    values.sort(compareNumbers)
  })

  let sortedStudents = Array.from(map.entries());

  const listData = Array.from(map.keys());

  const [radioValue,setRadioValue] = useState(listData[0]);

  const windowSize = useResponsive();

  let widthSmall = calcWidth(windowSize.width,0.92)
  let widthBig = calcWidth(windowSize.width,0.75)

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <Navbar />
      <main className={styles.container}>
        <h1>Списки студентов</h1>
        <figure className={styles.image}>
          {windowSize.width > 600
            ?
              <CustomImage height={500} width={widthBig} image={history.timetable}/>
            :
              <CustomImage height={160} width={widthSmall} image={history.timetable}/>
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
              {sortedStudents.map((people) =>
                people[0] === radioValue
                  ?
                  <section>
                    {people[1].map(value =>
                      <section>
                        <h2>{value.course}</h2>
                        <div style={{ marginTop: "2%" }}>
                          <ReactMarkdown children={value.student_list} />
                        </div>
                      </section>
                    )}
                  </section>
                :
                <></>
              )}
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
    fields: ["course", "study_year", "student_list","sort_id"],
  });
  const history = await fetchAPI("istoriya-kafedry", {
    fields: [],
    populate: ["timetable"],
  });

  return {
    props: {
      history:history.data.attributes,
      contacts: contacts.data.attributes,
      students: students.data,
    },
    revalidate: 1,
  };
}
export default Students;
