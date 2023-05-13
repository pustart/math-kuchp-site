import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import { fetchAPI } from "../lib/api";
import {downloadStrapiMedia} from "../lib/media"
import styles from "../styles/methodicsPage.module.css"

function Methodics({ contacts,methodics }) {

  const map = new Map();

  for (let i = 0; i < methodics.length;i++){
    let temp = {
      name: methodics[i].attributes.name,
      book: methodics[i].attributes.book,
    }
    if(!map.has(methodics[i].attributes.type)){
      map.set(methodics[i].attributes.type,[temp])
    }else{
      map.set(methodics[i].attributes.type, map.get(methodics[i].attributes.type).concat(temp))
    }
  }

  let data = Array.from(map.entries());


  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <Navbar />
      <main className={styles["container"]} >
        <h1>Методические пособия</h1>
        {data.map(entry =>
          <section className={styles["block"]} >
            <div className={styles["title"]}>
              {entry[0]}
            </div>
            {entry[1].map(str =>
              <a onClick={() => downloadStrapiMedia(str.book)} className={styles["content"]} >
                {str.name}
              </a>
            )}
          </section>
        )}
      </main>
      <CustomFooter contacts={contacts} />
    </div>
  );
}

export async function getStaticProps() {
  const contacts = await fetchAPI("contact", {
    fields: ["email", "general_number", "dean_number", "address"],
  });

  const methodics = await fetchAPI("metodichkis", {
    fields: ["name", "type"],
    populate:["book"],
  });

  return {
    props: {
      contacts: contacts.data.attributes,
      methodics:methodics.data,
    },
    revalidate: 1,
  };
}

export default Methodics;
