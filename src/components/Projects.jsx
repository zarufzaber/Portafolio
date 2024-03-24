import React, { useEffect, useState } from "react";
import WorkImage1 from "../assets/trabajo_1.jpg";
import WorkImage2 from "../assets/trabajo_2.jpg";
import WorkImage3 from "../assets/trabajo_3.jpg";
import WorkImage4 from "../assets/project.jpg";

const Projects = () => {
  const projects = [
    {
      description:
        "La Dirección Regional de Educación de Piura (DREP) es el órgano especializado del Gobierno Regional responsable del servicio educativo, cuya función es planificar, ejecutar y administrar las políticas y planes regionales en materia de educación, cultura, recreación, deporte, ciencias, investigación, innovación y tecnología",
      projectsImageSrc: WorkImage1,
      link: "",
    },
    {
      description:
        "ESSALUD administra los fondos intangibles de la seguridad social en salud, destinado al financiamiento de prestaciones de salud, económicas, sociales y otras del régimen contributivo de la seguridad social en salud y otros seguros de riesgos humanos",
      projectsImageSrc: WorkImage2,
      link: "",
    },
    {
      description:
        "El centro de Enseñanzas y Proyeccion Social 360 o Ceps 360 es un empresa que se encarga de capacitar a diversos profecionales en areas afines y no afines a sus ramas de estudios, esta mepresa cuenta con el respaldo y aprobacion de la DRE-Puno.",
      projectsImageSrc: WorkImage3,
      link: "",
    },

    {
      description:
        "El Primer tabajo que termine con React",
      projectsImageSrc: WorkImage4,
      link: "https://github.com/zarufzaber/Proyecto_1.git",

    },

    {
      description:
        "El Segundo tabajo que termine con React",
      projectsImageSrc: WorkImage4,
      link: "https://github.com/zarufzaber/Proyecto_2.git",
    },
  ];

  return (
    <div
      name="Projects"
      className="h-screen w-screen flex items-center flex-col"
    >
      <h2 className="font-semibold text-[40px]">Trabajos</h2>
      <div className="   gap-4 mt-10 grid grid-cols-3 md:grid-cols-1">
        {projects.map((p) => (
          <div className="relative w-[300px] h-[300px]  border-red-100 border-spacing-1 border p-2 bg-slate-500 ">
            <img className="object-cover " src={p.projectsImageSrc} alt="" />
            <span className="flex flex-col  p-4 absolute  backdrop-blur hover:backdrop-blur-[20px]  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-black">{p.description}</p>
              <div><a href={p.link} ><button>Explorar</button></a></div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
