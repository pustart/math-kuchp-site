import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CustomFooter from '../components/Footer/CustomFooter';
import { fetchAPI } from '../lib/api';
import { downloadStrapiMedia } from '../lib/media';
import styles from '../styles/methodicsPage.module.css';
import NoData from '../components/NoData/NoData';

function Methodics({ contacts, methodics }) {
  const map = new Map();

  for (let i = 0; i < methodics.length; i++) {
    const temp = {
      name: methodics[i].attributes.name,
      book: methodics[i].attributes.book,
    };
    if (!map.has(methodics[i].attributes.type)) {
      map.set(methodics[i].attributes.type, [temp]);
    } else {
      map.set(methodics[i].attributes.type, map.get(methodics[i].attributes.type).concat(temp));
    }
  }

  const data = Array.from(map.entries());

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
        <h1>Методические пособия</h1>
        {data.length === 0 ? (
          <div className={styles['no-data']}>
            <NoData text="Методические материалы отсутствуют" />
          </div>
        ) : (
          data.map((entry, index) => (
            <section key={index} className={styles.block}>
              <div className={styles.title}>{entry[0]}</div>
              {entry[1].map((str, ind) => (
                <a key={ind} onClick={() => downloadStrapiMedia(str.book)} className={styles.content}>
                  {str.name}
                </a>
              ))}
            </section>
          ))
        )}
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getServerSideProps() {
  let contacts = null;
  let methodics = null;

  try {
    contacts = await fetchAPI('contact', {
      fields: ['email', 'general_number', 'dean_number', 'address'],
    });

    methodics = await fetchAPI('metodichkis', {
      fields: ['name', 'type'],
      populate: ['book'],
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: contacts.data.attributes,
      methodics: methodics.data,
    },
  };
}

export default Methodics;
