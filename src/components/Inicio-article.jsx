import React from "react";
import {BsInstagram,BsGithub} from 'react-icons/bs'
import {RiFacebookFill} from 'react-icons/ri'
import { ArticleIcons } from "./Article-Icons";

export function InicioArticle() {
  return (
    <article className="flex flex-col gap-5 items-center justify-center max-[600px]:gap-3">
      <h1 className="text-[50px] font-bold max-[600px]:text-[25px]">
        Me llamo <span className="text-[#bb6c45]">Elias</span>
      </h1>
      <p className="text-center text-[16px] max-[600px]:text-[15px]">
        Hola, soy un egresado de la carrera de Computación e Informática, Desarrollador Web Junior, autodidacta,
        capaz de poder poner en práctica lo aprendido. Con el gusto de siempre estar al tanto de nuevas tecnologías, muy activo y con buena comunicación.
      </p>
      <div className="flex items-center gap-7">
        <ArticleIcons url='https://www.facebook.com/EliasL.Melgarejo' icon={<RiFacebookFill className="text-[30px] text-black"/>} />
        <ArticleIcons url='https://www.instagram.com/elias_l.m/' icon={<BsInstagram className="text-[30px] text-black" />} />
        <ArticleIcons url='https://github.com/cafesit8' icon={<BsGithub className="text-[30px] text-black" />} />
      </div>
    </article>
  );
}
