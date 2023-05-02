import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/Footer/CustomFooter";
import { fetchAPI } from "../lib/api";

function News({ contacts }) {
  return (
    <div>
      <Navbar />
      <div>Методические материалы</div>
      <CustomFooter contacts={contacts} />
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

export default News;
