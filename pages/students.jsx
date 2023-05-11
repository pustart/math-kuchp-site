import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/studentsPage.module.css"
import pic from "../public/logo.png";
import Image from "next/image";
import CustomCheckboxList from "../components/CheckboxList/CustomCheckboxList";
import {fetchAPI} from "../lib/api";

const Students = ({ contacts,students }) => {

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar/>
      <div className={styles["container"]} >
        <h1>Списки студентов</h1>
        <div className={styles["image"]} >
            <Image src={pic}  height={400} width={1450} sizes="(max-width: 2000px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"  placeholder="blur" alt="pic"
            />
        </div>
        <div className={styles["block"]} >
          <div className={styles["dropdown"]} >
            <CustomCheckboxList title="Год обучения"/>
          </div>
          <div className={styles["list"]} >
            {students.map(people =>
              <div>
                <h2>{people.attributes.course}</h2>
                <div style={{marginTop:"2%"}} >
                  {people.attributes.student_list.split("\n").map(man =>
                    <div className={styles["list-item"]} >
                      {man}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
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
      contacts: contacts.data,
      students:students.data,
    },
    revalidate: 1,
  };
}
export default Students;
