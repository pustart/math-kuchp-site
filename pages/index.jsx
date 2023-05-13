import { Card, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/mainPage.module.css";
import pieChart from "../public/pieChart.png";
import boyAndGirl from "../public/boyandgirl.png";
import CustomFooter from "../components/Footer/CustomFooter";
import { fetchAPI } from "../lib/api";
import 'moment/locale/ru';
import Moment from "react-moment";
import React from "react";


export default function Home({ contacts,freshNew }) {
  const router = useRouter();

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar />
      <main className={styles.container}>
        <section className={styles["about-block"]}>
          <div className={styles["about-block-text"]}>
            <section>
              <h1>Кафедра уравнений в частных производных и теории вероятностей</h1>
              <p>
                Она существует в ВГУ с 1964 года. Основателем кафедры и первым ее заведующим был
                профессор Селим Григорьевич Крейн.
              </p>
            </section>
            <button onClick={() => router.push("/about")} className={styles["extra-button"]} >
                Узнать подробнее
            </button>
            <button onClick={() => router.push("/news")} className={styles["news-button"]} >
              Новости о кафедре
            </button>
          </div>
          <figure className={styles["about-block-chart"]}>
            <Image src={pieChart} height={400} width={400} alt="Декоративная картинка." />
          </figure>
        </section>

        <section className={styles["main-info"]}>
          <h1>Главное о кафедре</h1>
          <main className={styles.cards}>
            <section className={styles.news}>
              <Card
                onClick={() => router.push("/news")}
                hoverable
                className={styles["news-card"]}
                bodyStyle={{
                  width: "100%",
                  height: "87%",
                  display: "flex",
                  flexDirection:"column"
                }}
              >
                <section className={styles["card-big-text"]} >
                  {freshNew.title}
                </section>
                <section className={styles["card-small-text"]} >
                  <Moment locale="ru" format="ll">
                    {freshNew.publish_date}
                  </Moment>
                </section>
                <section className={styles["card-news-title"]}>Новости</section>
              </Card>
            </section>
            <section className={styles.qa}>
              <Card
                onClick={() => router.push("/qa")}
                bodyStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                hoverable
                className={styles["qa-card"]}
              >
                <section className={styles["card-title"]}>Q&A</section>
                <figure className={styles["qa-image"]}>
                  <Image src={boyAndGirl} width={130} height={130} alt="Декоративная картинка." />
                </figure>
              </Card>
            </section>
            <section className={styles.about}>
              <Card
                onClick={() => router.push("/about")}
                hoverable
                bordered={false}
                className={styles["about-card"]}
              >
                <div className={styles["card-title"]}>О кафедре</div>
              </Card>
            </section>
            <section className={styles.methodics}>
              <Card
                onClick={() => router.push("/methodics")}
                hoverable
                className={styles["methodics-card"]}
              >
                <div className={styles["card-title"]}>Методички</div>
              </Card>
            </section>
          </main>
        </section>
        <CustomFooter contacts={contacts} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });
  const news = await fetchAPI("novosti", {
    fields: ["title", "publish_date", "body"],
    sort: ['publish_date:desc'],
  });
  console.log(news.data[0])

  return {
    props: {
      contacts: contacts.data.attributes,
      freshNew:news.data[0].attributes,
    },
    revalidate: 1,
  };
}
