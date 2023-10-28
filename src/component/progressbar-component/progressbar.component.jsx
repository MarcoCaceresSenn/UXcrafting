import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./progressbar.component.css";
import Button from "../button-component/button.component.jsx";

export default function Progressbar({ mesSeleccionado, ingreso, gasto }) {
  const valorPorDefecto = 0;
  const porcentajeGasto = (gasto / ingreso) * 100;
  const valor = isNaN(porcentajeGasto) ? valorPorDefecto : porcentajeGasto;

  return (
    <div>
      <div className="d-flex justify-content-center">
        <p className="gastos">Gastos: {gasto}</p>
        <p className="ingreso">Ingresos: {ingreso}</p>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "5vh" }}
      >
        <ProgressBar
          className="w-100"
          now={valor}
          label={`${valor.toFixed(2)}%`}
        />
      </div>

      <div className="espacio">
        <h1 className="texto-card">Descubre qué hubiera pasado si gestionabas mejor tu dinero</h1>
      </div>
      <Button porcentaje={valor} />
    </div>
  );
}
