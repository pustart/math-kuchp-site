import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import styles from "../styles/studentsPage.module.css"
import pic from "../public/logo.png";
import Image from "next/image";
import CustomCheckboxList from "../components/CheckboxList/CustomCheckboxList";

const Students = () => {

  let students = [
    {
      title:"3 курс",
      people:["Баскакова Диана Владимировна",
        "Бугаев Сергей Викторович",
        "Воробьева Алина Вадимовна",
        "Голикова Анна Викторовна",
        "Грезнева Анастасия Сергеевна",
        "Забабурина Юлия Геннадьевна",
        "Литвинов Кирилл Юрьевич",
        "Мельникова Анастасия Сергеевна",
        "Родионова Александра Вадимовна",
        "Строева Мария Юрьевна"
      ],
    },
    {
      title:"4 курс",
      people:["Баскакова Диана Владимировна",
        "Бугаев Сергей Викторович",
        "Воробьева Алина Вадимовна",
        "Голикова Анна Викторовна",
        "Грезнева Анастасия Сергеевна",
        "Забабурина Юлия Геннадьевна",
        "Литвинов Кирилл Юрьевич",
        "Мельникова Анастасия Сергеевна",
        "Родионова Александра Вадимовна",
      ],
    },
    {
      title:"Магистры 2 курса",
      people:["Баскакова Диана Владимировна",
        "Бугаев Сергей Викторович",
        "Воробьева Алина Вадимовна",
        "Голикова Анна Викторовна",
        "Бугаев Сергей Викторович",
        "Воробьева Алина Вадимовна",
        "Бугаев Сергей Викторович",
        "Воробьева Алина Вадимовна",
        "Голикова Анна Викторовна",
        "Грезнева Анастасия Сергеевна",
        "Забабурина Юлия Геннадьевна",
        "Литвинов Кирилл Юрьевич"
      ],
    },
  ]

  const aspirants = {
      title:"Аспиранты кафедры",
      people:["Баскакова Диана Владимировна",
        "Бугаев Сергей Викторович",
        "Воробьева Алина Вадимовна",
      ],
  }



  return (
    <div>
      <Navbar/>
      <div className={styles["container"]} >
        <h1>Списки студентов</h1>
        <div className={styles["image"]} >
            <Image src={pic}  height={400} width={1450} sizes="(max-width: 2000px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"  placeholder="blur" alt="pic"
            />
        </div>
        <div className={styles["block"]} >
          <div className={styles["dropdown"]} >
            <CustomCheckboxList title="Год обучения"/>
          </div>
          <div className={styles["list"]} >
            {students.map(course =>
              <div>
                <h2>{course.title}</h2>
                <div>
                  {course.people.map(man =>
                    <div className={styles["list-item"]} >
                      {man}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className={styles["asp"]} >
            <h2>{aspirants.title}</h2>
            <div className={styles["list-item"]} >
              {aspirants.people }
            </div>
          </div>
        </div>

      </div>
      <CustomFooter/>
    </div>
  );
};

export default Students;
