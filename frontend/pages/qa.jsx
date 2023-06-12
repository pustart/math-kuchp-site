import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CustomFooter from '../components/Footer/CustomFooter';
import { fetchAPI } from '../lib/api';
import styles from '../styles/qaPage.module.css';
import CustomCollapse from '../components/Collapse/CustomCollapse';
import NoData from '../components/NoData/NoData';

function QA({ contacts, questions }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <main className={styles.container}>
        <h1>Q&A</h1>
        {questions.length === 0 ? (
          <div className={styles['no-data']}>
            <NoData text="Нет актуальных вопросов" />
          </div>
        ) : (
          <section>
            <hr size="1" color="#E8E8E8" />
            <section className={styles['qa-block']}>
              {questions.map((questionBlock, index) => (
                <div key={index} className={styles.dropdown}>
                  <CustomCollapse
                    pointedList={false}
                    header={questionBlock.attributes.question}
                    data={questionBlock.attributes.answer.split('\n\n')}
                  />
                  <hr size="1" color="#E8E8E8" />
                </div>
              ))}
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
  let questions = null;

  try {
    contacts = await fetchAPI('contact', {
      fields: ['email', 'general_number', 'dean_number', 'address'],
    });
    questions = await fetchAPI('vopros-otvets', {
      fields: ['question', 'answer'],
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: contacts.data.attributes,
      questions: questions.data,
    },
  };
}

export default QA;
