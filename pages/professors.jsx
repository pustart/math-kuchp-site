import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/professorsPage.module.css"
import {useRouter} from "next/navigation";

const Professors = () => {
  const router = useRouter();

  let profs = [
    {
      id:1,
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      id:2,
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
    {
      job:"Старший преподаватель",
      name:"Татьяна какая-нибудь"
    },
  ]

  return (
    <div>
      <Navbar/>
      <div className={styles["container"]}>
        <h1>О сотрудниках</h1>
        <div className={styles["list"]} >
          {profs.map(prof =>
            <div onClick={() => router.push(`/professors/${encodeURIComponent(prof.id)}`)} className={styles["card"]} >
                <div  className={styles["card-picture"]} >
                  Тут будет картинка
                </div>
                <div className={styles["card-content"]} >
                  <div className={styles["card-content-title"]} >
                    {prof.name}
                  </div>
                  <div className={styles["card-content-text"]} >
                    {prof.job}
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
      <CustomFooter/>
    </div>
  );
};

export default Professors;
