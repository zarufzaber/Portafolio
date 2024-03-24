import React from "react";
import javascript from "../assets/technologies/javascript.png";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import mysql from "../assets/technologies/mysql.png";
import nodejs from "../assets/technologies/nodejs.png";
import reactjs from "../assets/technologies/reactjs.png";
import github from "../assets/technologies/github.png";

const Experience = () => {
  const technologies = [
    {
      name: "javascript",
      imageSrc: javascript,
    },
    {
      name: "css",
      imageSrc: css,
    },
    {
      name: "html",
      imageSrc: html,
    },
    {
      name: "mysql",
      imageSrc: mysql,
    },
    {
      name: "nodejs",
      imageSrc: nodejs,
    },
    {
      name: "reactjs",
      imageSrc: reactjs,
    },
    {
      name: "github",
      imageSrc: github,
    },
  ];

  return (
    <div
      name="Experience"
      className=" h-screen w-full flex flex-col items-center justify-center"
    >
      <h2 className="font-semibold text-[40px]">Experiencia</h2>
      <div className="w-screen content-center  grid-cols-3 gap-8 grid  mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10">
        {technologies.map((t) => (
          <div key={t.name} className="flex justify-center items-center">
            <img src={t.imageSrc} alt="Technologie" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
