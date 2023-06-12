import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import CustomFooter from '../components/Footer/CustomFooter';
import styles from '../styles/studentsPage.module.css';
import CustomCheckboxList from '../components/CheckboxList/CustomCheckboxList';
import { fetchAPI } from '../lib/api';
import NoData from '../components/NoData/NoData';
import useResponsive from '../utils/useResponsive';
import { calcWidth } from '../utils/calcWidth';
import studentsPhoto from '../public/students.webp';

function Students({ contacts, students }) {
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
      map.set(
        students[i].attributes.study_year,
        map.get(students[i].attributes.study_year).concat(temp),
      );
    }
  }

  map.forEach((values) => {
    values.sort(compareNumbers);
  });

  const sortedStudents = Array.from(map.entries());

  const listData = Array.from(map.keys());

  const [radioValue, setRadioValue] = useState(listData[0]);

  const windowSize = useResponsive();

  const widthSmall = calcWidth(windowSize.width, 0.92);
  const widthBig = calcWidth(windowSize.width, 0.75);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Navbar />
      <main className={styles.container}>
        <h1>Списки студентов</h1>
        <figure className={styles.image}>
          {windowSize.width > 600 ? (
            <NextImage height={500} width={widthBig} src={studentsPhoto} alt="students" />
          ) : (
            <NextImage height={160} width={widthSmall} src={studentsPhoto} alt="students" />
          )}
        </figure>
        {students.length === 0 ? (
          <div className={styles['no-data']}>
            <NoData text="Нет данных о студентах" />
          </div>
        ) : (
          <section className={styles.block}>
            <section className={styles.dropdown}>
              <CustomCheckboxList
                data={listData}
                setListValue={setRadioValue}
                title="Год обучения"
              />
            </section>
            <section className={styles.list}>
              {sortedStudents.map((people, index) => (people[0] === radioValue ? (
                <section key={index}>
                  {people[1].map((value, ind) => (
                    <section key={ind}>
                      <h2>{value.course}</h2>
                      <div style={{ marginTop: '2%' }}>
                        <ReactMarkdown className={styles.text} children={value.student_list} />
                      </div>
                    </section>
                  ))}
                </section>
              )
                : <></>))}
            </section>
          </section>
        )}
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getServerSideProps() {
  let contacts = null;
  let students = null;

  try {
    contacts = await fetchAPI('contact', {
      fields: ['email', 'general_number', 'dean_number', 'address'],
    });
    students = await fetchAPI('spisok-studentovs', {
      fields: ['course', 'study_year', 'student_list', 'sort_id'],
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: contacts.data.attributes,
      students: students.data,
    },
  };
}
export default Students;
