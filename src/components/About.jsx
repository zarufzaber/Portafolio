import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className=" flex flex-col items-center  h-screen w-screen "
    >
      <h2 className="font-semibold text-[40px]">Acerca de mi</h2>

      <div className="flex flex-col items-center justify-center w-screen mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10">
        <p className="text-white">
          Soy un Ingeniero de Sistemas de la Universidad Nacional del Altiplano,
          diversos lenguajes de programación siendo Python, C++ y Node.js
          <br />
          lo que más domino, a la vez tengo conocimiento básico sobre base
          de datos y programación Web con React y Angular, domino el idioma
          <br />
          inglés tanto oral como escrito, a la vez siempre eh destacado en 
          mis estudios permaneciendo siempre en el tercio superior.{" "}
        </p>
        <p className="text-white">
          <br />
          * Conocimientos en lenguajes de programación como C++, Python Node.js. 
          <br />
          * Ingles Avanzado Oral y Escrito.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
