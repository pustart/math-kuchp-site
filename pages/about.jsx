import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import {Space, Skeleton, Typography, Card} from "antd";
import classes from "../styles/aboutPage.module.css"
const { Meta } = Card;
import CustomCollapse from "../components/Collapse/CustomCollapse";
import PointedList from "../components/PointedList/PointedList";
import boyAndGirl from "../public/boyandgirl.png";
import Image from "next/image";
const { Title, Paragraph } = Typography;
import cardPic from "../public/graduate's hat and books.svg"
import number1 from "../public/Number1BlackCircle.svg"
import number2 from "../public/Number2BlackCircle.svg"
import number3 from "../public/Number3BlackCircle.svg"

function About() {

  const data1 = [
    "Уравнения с частными производными (д/о и в/о)",
    "Дополнительные главы уравнений с частными производными (д/о)",
    "Метод Фурье решения задач математической физики (д/о и в/о)",
    "Теория вероятностей (д/о и в/о)",
    "Математическая статистика (д/о и в/о)",
    "Теория случайных процессов. (д/о и в/о)",
    "Современное программное обеспечение (д/о и в/о)",
    "Теоретическая механика (в/о)",
    "Автоколебательные процессы (в/о)",
    "Математические методы механических систем (в/о)",
  ]

  return (
    <div>
      <Navbar />
      <div className={classes.container}  >
        <div className={classes.picture} >
          <Space block >
            <Skeleton.Image active />
          </Space>
        </div>
        <div className={classes.aboutBlock} >
          <div className={classes.aboutBlockText} >
            <Typography>
              <Title>Главное о кафедре</Title>
              <Paragraph>
                Кафедра уравнений в частных производных и теории вероятностей существует в ВГУ с 1964 года.
                Основателем кафедры и первым ее заведующим был профессор Селим Григорьевич Крейн.
                Созданию кафедры предшествовали следующие события.
              </Paragraph>
            </Typography>
          </div>
          <div className={classes.aboutBlockCard} >
            <Card
              hoverable
              className={classes.card}
              cover={
                <img
                     style={{
                       borderRadius:200,
                       height:150,
                       width:150,
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
        <div className={classes.historyBlock} >
          <h1>История кафедры</h1>
          <div className={classes.historyBlockText} >
            В 1959г. произошло разделение физико-математического факультета на два: физический и математико-механический. Кафедра математической физики и вычислительной математики (зав.каф. проф. Черпаков П.В.) вначале осталась при математическом факультете, а в 1961 году (пр. 611/ок от 05.10.61г.) разделилась на две кафедры: кафедру математической физики (зав.каф. проф. Черпаков П.В.) на физическом факультете и кафедру вычислительной математики (зав.каф. проф. Крейн С.Г.) на математическом факультете.
            В 1964 г. (пр. № 609 от 03.07.64) кафедра вычислительной математики разделилась на две: кафедру вычислительной математики (и.о.зав.каф.доц. Бессмертных Г.А.) и кафедру уравнений в частных производных и теории вероятностей (зав.каф. проф. Крейн С.Г.).
            В 1969 году из состава кафедры выделилась группа преподавателей, составившая основу новой кафедры математических методов исследования операций на факультете ПММ ВГУ.
            В 1983 году на кафедру перешла группа преподавателей математики подготовительного отделения ВГУ (Н.В.Качур, О.Т.Меркулова, Т.Н.Четверикова, А.Д.Баев), ранее работавшие на кафедре математического анализа. В настоящее время подготовительное отделение закрыто.В 2009/2010 учебном году на кафедре работают: проф. В.П. Глушко (в ВГУ с 1963г.), проф. Глушко А.В. (в ВГУ с 1977г.), проф. Петрова В.Е. (в ВГУ с 1979 г.) доц. Ю.Б. Савченко (в ВГУ с 1968г.), доц. И.В. Михайлова (в ВГУ с 1970г.), доц. С.А. Ткачева (в ВГУ с 1994г.), доцент Провоторов В.В. (в ВГУ с 1991г.), доц. Сухочева Л.И. (0,5 ст., в ВГУ с 1998г.), ст.преп. Н.А. Митягина (в ВГУ с 1966г.), ст.преп. Л.Н. Баркова (в ВГУ с 1970г.), ст. преп. Малютина О.П. (в ВГУ с 1996г.), ст. преп. Голованева Ф.В. (в ВГУ с 1991г.), преп. Петрова Е.В. (в ВГУ с 2003г.), преп. Садчиков П.В.. (в ВГУ с 2005г.), преп. Рябенко А.С. (в ВГУ с 2008 г.), вед.инж. Безручкина Л.В. (в ВГУ с 1977г.).В различные периоды на кафедре работали проф. Ю.И. Петунин, доц. Махортов С.Д., доц. О.И. Прозоровская, доц. Л.Г. Афанасьева, доц. Н.Н. Гудович, доц. А.П. Алабовская, доц. О.М. Смелянский, асс. Л.Н. Глушанкова, асс. В.П. Богатова, асс. И.И. Окунев, доц. Н.А. Кузнецова, доц. И.Б. Ледовская, доц. В.А. Погореленко, доц. Г.Б. Савченко, доц. Дубровская А.П., доц. Ю.Г. Курицын, ст.преп. Н.В. Качур, ст.преп. Т.Н. Четверикова, преп. М.М. Пономарев, ст.преп. О.Е. Киселева.
            Основные направления научных исследований на кафедре были заложены ее основателем – профессором С.Г. Крейном. Круг его научных интересов всегда был весьма широк и разнообразен: функциональный анализ, дифференциальные уравнения, математическая физика. Многие важнейшие достижения в указанных областях были сделаны С.Г.Крейном и его учениками в период работы на кафедре. Его ученики и последователи продолжают под руководством проф. В.П. Глушко развивать одно из его научных направлений: приложения функционального анализа к решению задач математической физики. Основные усилия здесь были сосредоточены на изучении уравнений в частных производных с существенно переменными коэффициентами (Глушко В.П., Савченко Ю.Б., Баев А.Д., Махортов С.Д., Ткачева С.А. и др.). По этой тематике на кафедре было защищено 15 кандидатских диссертаций. В связи с приходом в 2001 году на кафедру проф. А.В. Глушко на кафедре начались исследования по изучению асимптотических свойств решений начальных и начально-краевых задач для систем линейных уравнений в частных производных. По этой тематике защищено 2 кандидатские диссертации.
            Начиная с середины пятидесятых годов на математическом факультете велись научные исследования в области теории вероятностей и математической статистики. Основоположниками этого направления (теории массового обслуживания) является А.В. Мартынов и его ученица Л.Г. Афанасьева. В период работы Л.Г.Афанасьевой в ВГУ (1966-1977 гг.) ею получено ряд важных научных результатов, над развитием которых сейчас продолжают работать ее ученики (И.В.Михайлова).
            Все преподаватели кафедры имеют базовое образование, а направление их научных исследований соответствует преподаваемым дисциплинам.
            Аспирантура на кафедре существует с момента ее основания. Руководителем аспирантуры до 1971 года был проф. С.Г. Крейн. Под его руководством за этот период защитили кандидатские диссертации Лаптев Г.И., Семенов Е.М., Осипов В.Б., Фролов Н.Н., Зарубин А.Г., Шихватов С.Г., Скляднев С.А., Савченко Ю.Б., Зубова С.П., Трофимов В.П., Гудович Н.Н., Овчинников В.И., Цветкова Г. и др.
            После перехода в 1971г. проф. С.Г. Крейна на работу в ВЛТИ, аспирантурой на кафедре руководил проф. В.П. Глушко. Под его руководством закончили аспирантуру 19 человек.В настоящее время с аспирантами и соискателями на кафедре работают профессоры А.В. Глушко, В.Е. Петрова, А.Д. Баев.Выпускники аспирантуры кафедры работают в различных вузах г. Воронежа и других городов Российской Федерации, а также в зарубежных странах.
            В 2008/2009 учебном году в аспирантуре кафедры обучаются А.С. Рябенко, Е.Л. Свиридова, М. Ордян.Кафедра осуществляет специализированную подготовку студентов дневного отделения математического факультета по специализациям уравнения в частных производных и теория вероятностей.
            С 1993 года кафедра осуществляет подготовку магистров наук из числа выпускников кафедры по направлению: «Математика», специализация «Уравнения в частных производных»
          </div>
        </div>
        <div className={classes.courses} >
            <h1>Курсы, которые читаются на кафедре</h1>
            <hr/>
            <CustomCollapse data={data1} header="На математическом факультете" />
            <br/>
            <CustomCollapse  data={data1} header="На прочих факультетах" />
        </div>
        <div className={classes.specialCoursesTitle} >
          <h1>Спецкурсы</h1>
        </div>
        <div className={classes.specialCourses} >
          <div className={classes.specialCoursesBac} >
            <Card className={classes.specialCoursesBacCard} >
              <div className={classes.cardNumber} >
                <Image src={number1} width={40} height={40} alt="number1" />
              </div>
              <div className={classes.cardTitle} >
                Для бакалавров
              </div>
              <div className={classes.cardList}>
                <PointedList data={data1} />
              </div>
            </Card>
          </div>
          <div className={classes.specialCoursesMaster} >
            <Card className={classes.specialCoursesMasterCard} >
              <div className={classes.cardNumber} >
                <Image src={number2} width={40} height={40} alt="number2" />
              </div>
              <div className={classes.cardTitle} >
                Для магистров
              </div>
              <div>
                <PointedList data={data1} />
              </div>
            </Card>
          </div>
          <div className={classes.specialCoursesSpec} >
            <Card className={classes.specialCoursesSpecCard} >
              <div className={classes.cardNumber} >
                <Image src={number3} width={40} height={40} alt="number3" />
              </div>
              <div className={classes.cardTitle} >
                Для cпециалистов
              </div>
              <div>
                <PointedList data={data1} />
              </div>
            </Card>
          </div>
          <div className={classes.specialCoursesPic} >
            <Card className={classes.specialCoursesPicCard} >
              <div>
                <Image src={cardPic} width={350} alt="graduate" />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <CustomFooter/>
    </div>
  );
}

export default About;
