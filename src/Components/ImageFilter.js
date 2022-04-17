import React from "react";
import { Icone, IconeTema } from "./UI";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante"></IconeTema>,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades"></IconeTema>,
    Saude: <IconeTema src={saude} alt="Saude"></IconeTema>,
    Transporte: <IconeTema src={transporte} alt="Transporte"></IconeTema>,
    default: <IconeTema src={outros} alt="default"></IconeTema>,
  };

  return Images[type] || Images.default;
};
