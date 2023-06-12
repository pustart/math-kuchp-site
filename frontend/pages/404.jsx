import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CustomFooter from '../components/Footer/CustomFooter';
import styles from '../styles/404.module.css';
import NoData from '../components/NoData/NoData';
import { useRouter } from 'next/navigation';

function Error404() {
  const router = useRouter();
  const contacts = {
    address: "адрес: Университетская пл., д. 1, а. 308,327",
    general_number: "+74732208618",
    dean_number: "2-208-460",
    email: "math.kuchp@gmail.com",
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <main className={styles['no-data']}>
          <NoData text="Ой! Страница не найдена" />
        </main>
        <button type="button" onClick={() => router.push('/')} className={styles['extra-button']}>
          Вернуться на главную
        </button>
      </div>
      <CustomFooter contacts={contacts} />
    </>
  );
}

export default Error404;
