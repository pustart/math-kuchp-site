import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/studentsPage.module.css"
import pic from "../public/logo.png";
import Image from "next/image";
import CustomCheckboxList from "../components/CheckboxList/CustomCheckboxList";
import {fetchAPI} from "../lib/api";
import studentsPic from "../public/students.webp"

const Students = ({ contacts,students }) => {

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar/>
      <main className={styles["container"]} >
        <h1>Списки студентов</h1>
        <figure className={styles["image"]} >
            <Image src={studentsPic}  height={500} width={1450}
               placeholder="blur" alt="pic"
            />
        </figure>
        <section className={styles["block"]} >
          <section  className={styles["dropdown"]} >
            <CustomCheckboxList  title="Год обучения"/>
          </section>
          <section className={styles["list"]} >
            {students.map(people =>
              <section>
                <h2>{people.attributes.course}</h2>
                <div style={{marginTop:"2%"}} >
                  {people.attributes.student_list.split("\n").map(man =>
                    <div className={styles["list-item"]} >
                      {man}
                    </div>
                  )}
                </div>
              </section>
            )}
          </section>
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
  const students = await fetchAPI("spisok-studentovs", {
    fields: ["course", "study_year", "student_list"],
  });

  return {
    props: {
      contacts: contacts.data.attributes,
      students:students.data,
    },
    revalidate: 1,
  };
}
export default Students;
