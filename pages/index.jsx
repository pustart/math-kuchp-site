import {Card, Typography} from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import classes from "../styles/mainPage.module.css";
import pieChart from "../public/pieChart.png";
import boyAndGirl from "../public/boyandgirl.png";
import CustomFooter from "../components/Footer/CustomFooter";

const { Title, Paragraph } = Typography;
export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.aboutBlock}>
          <div className={classes.aboutBlockText}>
            <Typography>
              <Title>Кафедра уравнений в частных производных и теории вероятностей</Title>
              <Paragraph>
                Она существует в ВГУ с 1964 года. Основателем кафедры и первым ее заведующим был
                профессор Селим Григорьевич Крейн.
              </Paragraph>
            </Typography>
            <button onClick={() => router.push("/about")} className={classes.extraButton} >
                Узнать подробнее
            </button>
          </div>
          <div className={classes.aboutBlockChart}>
            <Image src={pieChart} height={400} width={400} alt="pieChart" />
          </div>
        </div>

        <div className={classes.mainInfo}>
          <h1>Главное о кафедре</h1>
          <div className={classes.cards}>
            <div className={classes.news}>
              <Card onClick={() => router.push("/news")} hoverable className={classes.newsCard}>
                <div className={classes.cardBigText} style={{ marginBottom: "5%" }}>
                  Программа и конспекты к коллоквиуму №3 по курсу Уравнения с частными производным
                </div>
                <div className={classes.cardSmallText} style={{ marginBottom: "30%" }}>
                  26 декабря, 2017
                </div>
                <div className={classes.cardTitle}>Новости</div>
              </Card>
            </div>
            <div className={classes.QA}>
              <Card
                onClick={() => router.push("/qa")}
                bodyStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                hoverable
                className={classes.qaCard}
              >
                <div className={classes.cardTitle}>Q&A</div>
                <div className={classes.qaImage}>
                  <Image src={boyAndGirl} width={130} height={130} alt="boyAndGirl" />
                </div>
              </Card>
            </div>
            <div className={classes.about}>
              <Card onClick={() => router.push("/about")} hoverable bordered={false} className={classes.aboutCard}>
                <div className={classes.cardTitle}>О кафедре</div>
              </Card>
            </div>
            <div className={classes.methodics}>
              <Card
                onClick={() => router.push("/methodics")}
                hoverable
                className={classes.methodicsCard}
              >
                <div className={classes.cardTitle}>Методички</div>
              </Card>
            </div>
          </div>
        </div>
        <CustomFooter />
      </div>
    </div>
  );
}
