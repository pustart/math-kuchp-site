import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import { fetchAPI } from "../lib/api";
import styles from "../styles/qaPage.module.css"
import CustomCollapse from "../components/Collapse/CustomCollapse";

function QA({ contacts,questions }) {

  let fakequestions = [
    {
      title:"Нужно ли дополнительно приобретать учебные пособия?",
      questions:["question1", "question2","question3"]
    },
    {
      title:"Нужно ли дополнительно приобретать учебные пособия?",
      questions:["question1", "question2","question3"]
    },
    {
      title:"Нужно ли дополнительно приобретать учебные пособия?",
      questions:["question1", "question2","question3"]
    },
    {
      title:"Нужно ли дополнительно приобретать учебные пособия?",
      questions:["question1", "question2","question3"]
    },
  ]

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar />
      <div className={styles["container"]} >
        <h1>Q&A</h1>
        <hr size="1" color="#E8E8E8" />
        <div className={styles["qa-block"]} >
          {questions.map(questionBlock =>
            <div className={styles["dropdown"]} >
              <CustomCollapse header={questionBlock.attributes.question} data={questionBlock.attributes.answer.split("\n\n")}/>
              <hr size="1" color="#E8E8E8"/>
            </div>
          )}
        </div>
      </div>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });
  const questions = await fetchAPI("vopros-otvets", {
    fields: ["question", "answer"],
  });

  return {
    props: {
      contacts: contacts.data,
      questions:questions.data,
    },
    revalidate: 1,
  };
}

export default QA;
