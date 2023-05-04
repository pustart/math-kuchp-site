import { Card, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/mainPage.module.css";
import pieChart from "../public/pieChart.png";
import boyAndGirl from "../public/boyandgirl.png";
import CustomFooter from "../components/Footer/CustomFooter";
import { fetchAPI } from "../lib/api";

const { Title, Paragraph } = Typography;

export default function Home({ contacts }) {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles["about-block"]}>
          <div className={styles["about-block-text"]}>
            <Typography>
              <Title>Кафедра уравнений в частных производных и теории вероятностей</Title>
              <Paragraph>
                Она существует в ВГУ с 1964 года. Основателем кафедры и первым ее заведующим был
                профессор Селим Григорьевич Крейн.
              </Paragraph>
            </Typography>
            <div onClick={() => router.push("/about")} className={styles["extra-button"]}>
              Узнать подробнее
            </div>
          </div>
          <div className={styles["about-block-chart"]}>
            <Image src={pieChart} height={400} width={400} alt="Декоративная картинка." />
          </div>
        </div>

        <div className={styles["main-info"]}>
          <h1 className={styles["main-info-title"]}>Главное о кафедре</h1>
          <div className={styles.cards}>
            <div className={styles.news}>
              <Card onClick={() => router.push("/news")} hoverable className={styles["news-card"]}>
                <div className={styles["card-big-text"]} style={{ marginBottom: "5%" }}>
                  Программа и конспекты к коллоквиуму №3 по курсу Уравнения с частными производным
                </div>
                <div className={styles["card-small-text"]} style={{ marginBottom: "30%" }}>
                  26 декабря, 2017
                </div>
                <div className={styles["card-title"]}>Новости</div>
              </Card>
            </div>
            <div className={styles.qa}>
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
                <div className={styles["card-title"]}>Q&A</div>
                <div className={styles["qa-image"]}>
                  <Image src={boyAndGirl} width={130} height={130} alt="Декоративная картинка." />
                </div>
              </Card>
            </div>
            <div className={styles.about}>
              <Card
                onClick={() => router.push("/about")}
                hoverable
                bordered={false}
                className={styles["about-card"]}
              >
                <div className={styles["card-title"]}>О кафедре</div>
              </Card>
            </div>
            <div className={styles.methodics}>
              <Card
                onClick={() => router.push("/methodics")}
                hoverable
                className={styles["methodics-card"]}
              >
                <div className={styles["card-title"]}>Методички</div>
              </Card>
            </div>
          </div>
        </div>
        <CustomFooter contacts={contacts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });

  return {
    props: {
      contacts: contacts.data,
    },
    revalidate: 1,
  };
}
