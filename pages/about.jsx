import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import {Space, Skeleton, Typography, Card} from "antd";
import styles from "../styles/aboutPage.module.css"
import CustomCollapse from "../components/Collapse/CustomCollapse";
import PointedList from "../components/PointedList/PointedList";
import { fetchAPI } from "../lib/api";
import Image from "next/image";
const { Meta } = Card;
const { Title, Paragraph } = Typography;
import cardPic from "../public/graduate's hat and books.svg"
import number1 from "../public/Number1BlackCircle.svg"
import number2 from "../public/Number2BlackCircle.svg"
import number3 from "../public/Number3BlackCircle.svg"

function About({ contacts,about,mathCourses,otherCourses,bacCourses,masterCourses,specCourses}) {

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.picture}>
          <Space block>
            <Skeleton.Image active />
          </Space>
        </div>
        <div className={styles["about-block"]}>
          <div className={styles["about-block-text"]}>
            <Typography>
              <Title>Главное о кафедре</Title>
              <Paragraph>
                Кафедра уравнений в частных производных и теории вероятностей существует в ВГУ с
                1964 года. Основателем кафедры и первым ее заведующим был профессор Селим
                Григорьевич Крейн. Созданию кафедры предшествовали следующие события.
              </Paragraph>
            </Typography>
          </div>
          <div className={styles["about-block-card"]}>
            <Card
              hoverable
              className={styles.card}
              cover={
                <img
                  style={{
                    borderRadius: 200,
                    height: 150,
                    width: 150,
                  }}
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Крейн Селим Григорьевич" description="Основатель и заведующий кафедры" />
            </Card>
          </div>
        </div>
        <div className={styles["history-block"]}>
          <h1>История кафедры</h1>
          <div className={styles["history-block-text"]}>
            {about.attributes.history}
          </div>
        </div>
        <div className={styles.courses} >
            <h1>Курсы, которые читаются на кафедре</h1>
            <hr size="1" color="#E8E8E8"/>
            <CustomCollapse data={mathCourses.attributes.math_courses.split("\n")} header={mathCourses.attributes.title} />
            <hr size="1" color="#E8E8E8"/>
            <CustomCollapse  data={otherCourses.attributes.other_courses.split("\n")} header={otherCourses.attributes.title} />
            <hr size="1" color="#E8E8E8"/>
        </div>
        <div className={styles["special-courses-title"]}>
          <h1>Спецкурсы</h1>
        </div>
        <div className={styles["special-courses"]}>
          <div className={styles["special-courses-bac"]}>
            <Card className={styles["special-courses-bac-card"]}>
              <div className={styles["card-number"]}>
                <Image src={number1} width={40} height={40} alt="Номер один." />
              </div>
              <div className={styles["card-title"]}>{bacCourses.attributes.for_bachelor}</div>
              <div className={styles["card-list"]}>
                <PointedList data={bacCourses.attributes.courses.split("\n")} />
              </div>
            </Card>
          </div>
          <div className={styles["special-courses-master"]}>
            <Card className={styles["special-courses-master-card"]}>
              <div className={styles["card-number"]}>
                <Image src={number2} width={40} height={40} alt="Номер два." />
              </div>
              <div className={styles["card-title"]}>{masterCourses.attributes.for_masters}</div>
              <div>
                <PointedList data={masterCourses.attributes.courses.split("\n")} />
              </div>
            </Card>
          </div>
          <div className={styles["special-courses-spec"]}>
            <Card className={styles["special-courses-spec-card"]}>
              <div className={styles["card-number"]}>
                <Image src={number3} width={40} height={40} alt="Номер три." />
              </div>
              <div className={styles["card-title"]}>{specCourses.attributes.for_specialists}</div>
              <div>
                <PointedList data={specCourses.attributes.courses.split("\n")} />
              </div>
            </Card>
          </div>
          <div className={styles["special-courses-pic"]}>
            <Card className={styles["special-courses-pic-card"]}>
              <div>
                <Image src={cardPic} width={350} alt="Декоративная картинка." />
              </div>
            </Card>
          </div>
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
  const history = await fetchAPI("istoriya-kafedry", {
    fields: ["history"],
  });
  const mathCourses = await fetchAPI("kursy-matematicheskogo-fakulteta", {
    fields: ["math_courses","title"],
  });
  const otherCourses = await fetchAPI("prochie-kursy", {
    fields: ["other_courses","title"],
  });
  const bacCourses = await fetchAPI("speczkursy-dlya-bakalavrov", {
    fields: ["courses","for_bachelor"],
  });
  const masterCourses = await fetchAPI("speczkursy-dlya-magistrov", {
    fields: ["courses","for_masters"],
  });
  const specCourses = await fetchAPI("speczkursy-dlya-speczialistov", {
    fields: ["courses","for_specialists"],
  });



  return {
    props: {
      contacts: contacts.data,
      about: history.data,
      mathCourses:mathCourses.data,
      otherCourses:otherCourses.data,
      bacCourses:bacCourses.data,
      masterCourses:masterCourses.data,
      specCourses:specCourses.data,
    },
    revalidate: 1,
  };
}

export default About;
