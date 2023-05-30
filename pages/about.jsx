import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import {Card} from "antd";
import styles from "../styles/aboutPage.module.css"
import CustomCollapse from "../components/Collapse/CustomCollapse";
import PointedList from "../components/PointedList/PointedList";
import { fetchAPI } from "../lib/api";
import Image from "next/image";
import cardPic from "../public/graduate's hat and books.svg"
import number1 from "../public/Number1BlackCircle.svg"
import number2 from "../public/Number2BlackCircle.svg"
import number3 from "../public/Number3BlackCircle.svg"
import ReactMarkdown from "react-markdown";
import {getStrapiMedia} from "../lib/media";
import {calcWidth} from "../utils/calcWidth";
import NextImage from "next/image";
import useResponsive from "../utils/useResponsive";
import CustomImage from "../components/CustomImage/CustomImage";
import Error from 'next/error';
const { Meta } = Card;

function About({contacts, about, mathCourses, otherCourses, bacCourses, masterCourses, specCourses,}) {
  if (!contacts || !about || !mathCourses || !otherCourses || !bacCourses || !masterCourses || !specCourses) {
    return <Error statusCode={404}></Error>;;
  }
  const windowSize = useResponsive();

  let widthSmall = calcWidth(windowSize.width,0.9)
  let widthBig = calcWidth(windowSize.width,0.75)

  let photoWidth;

  photoWidth = windowSize.width > 600 ? 180 : 120

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <Navbar />
      <main className={styles.container}>
        <figure className={styles.picture}>
          {windowSize.width > 600
              ?
              <CustomImage
                style={{borderRadius: 20}}
                height={500}
                width={widthBig}
                image={about.photo}
                alt="main"
              />
              :
              <CustomImage
                style={{borderRadius: 20}}
                height={250}
                width={widthSmall}
                image={about.photo}
                alt="main"
              />
          }
        </figure>
        <section className={styles["about-block"]}>
          <div className={styles["about-block-text"]}>
            <section>
              <h1>Главное о кафедре</h1>
              <p>
                Кафедра уравнений в частных производных и теории вероятностей существует в ВГУ с
                1964 года. Основателем кафедры и первым ее заведующим был профессор Селим
                Григорьевич Крейн. Созданию кафедры предшествовали следующие события.
              </p>
            </section>
          </div>
          <div className={styles["about-block-card"]}>
            <Card
              hoverable
              className={styles.card}
              cover={
                <NextImage
                  width={photoWidth}
                  height={photoWidth}
                  style={{borderRadius:"50%",width:photoWidth}}
                  src={getStrapiMedia(about.director)}
                  alt="Фотография зав. кафедры"
                />
              }
            >
              <Meta title={about.director_name} description="Заведующий кафедры" />
            </Card>
          </div>
        </section>
        <section className={styles["history-block"]}>
          <h1>История кафедры</h1>
          <div className={styles["history-block-text"]}>
            <ReactMarkdown children={about.history} />
          </div>
        </section>
        <section className={styles.courses}>
          <h1>Курсы, которые читаются на кафедре</h1>
          <hr size="1" color="#E8E8E8"/>
          <CustomCollapse pointedList data={mathCourses.math_courses.split("\n")} header={mathCourses.title} />
          <hr size="1" color="#E8E8E8"/>
          <CustomCollapse pointedList data={otherCourses.other_courses.split("\n")} header={otherCourses.title} />
          <hr size="1" color="#E8E8E8"/>
        </section>
        <section className={styles["special-courses-title"]}>
          <h1>Спецкурсы</h1>
        </section>
        <section className={styles["special-courses"]}>
          <div className={styles["special-courses-bac"]}>
            <Card className={styles["special-courses-bac-card"]}>
              <figure className={styles["card-number"]} >
                <Image src={number1} width={40} height={40} alt="Номер один." />
              </figure>
              <div className={styles["card-title"]}>{bacCourses.for_bachelor}</div>
              <div className={styles["card-list"]}>
                <PointedList data={bacCourses.courses.split("\n")} />
              </div>
            </Card>
          </div>
          <div className={styles["special-courses-master"]}>
            <Card className={styles["special-courses-master-card"]}>
              <figure className={styles["card-number"]}>
                <Image src={number2} width={40} height={40} alt="Номер два." />
              </figure>
              <div className={styles["card-title"]}>{masterCourses.for_masters}</div>
              <div>
                <PointedList data={masterCourses.courses.split("\n")} />
              </div>
            </Card>
          </div>
          <div className={styles["special-courses-spec"]}>
            <Card className={styles["special-courses-spec-card"]}>
              <figure className={styles["card-number"]}>
                <Image src={number3} width={40} height={40} alt="Номер три." />
              </figure>
              <div className={styles["card-title"]}>{specCourses.for_specialists}</div>
              <div>
                <PointedList data={specCourses.courses.split("\n")} />
              </div>
            </Card>
          </div>
          <div className={styles["special-courses-pic"]}>
            <Card className={styles["special-courses-pic-card"]}>
              <figure>
                {windowSize.width > 600
                  ?
                    <Image src={cardPic} width={350} alt="Декоративная картинка." />
                  :
                    <Image src={cardPic} width={250} alt="Декоративная картинка." />
                }
              </figure>
            </Card>
          </div>
        </section>
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getStaticProps() {
  let contacts = undefined;
  let history = undefined;
  let mathCourses = undefined;
  let otherCourses = undefined;
  let bacCourses = undefined;
  let masterCourses = undefined;
  let specCourses = undefined;

  try {
    contacts = await fetchAPI("contact", {
      fields: ["email", "general_number", "dean_number", "address"],
    });
    history = await fetchAPI("istoriya-kafedry", {
      fields: ["history", "director_name"],
      populate: ["director", "photo"],
    });
    mathCourses = await fetchAPI("kursy-matematicheskogo-fakulteta", {
      fields: ["math_courses", "title"],
    });
    otherCourses = await fetchAPI("prochie-kursy", {
      fields: ["other_courses", "title"],
    });
    bacCourses = await fetchAPI("speczkursy-dlya-bakalavrov", {
      fields: ["courses", "for_bachelor"],
    });
    masterCourses = await fetchAPI("speczkursy-dlya-magistrov", {
      fields: ["courses", "for_masters"],
    });
    specCourses = await fetchAPI("speczkursy-dlya-speczialistov", {
      fields: ["courses", "for_specialists"],
    });
  } catch (error) {
    return {
      props: {
        contacts: null,
        about: null,
        mathCourses: null,
        otherCourses: null,
        bacCourses: null,
        masterCourses: null,
        specCourses: null,
      },
      revalidate: 1,
    };
  }

  return {
    props: {
      contacts: contacts.data.attributes,
      about: history.data.attributes,
      mathCourses: mathCourses.data.attributes,
      otherCourses: otherCourses.data.attributes,
      bacCourses: bacCourses.data.attributes,
      masterCourses: masterCourses.data.attributes,
      specCourses: specCourses.data.attributes,
    },
    revalidate: 1,
  };
}

export default About;
