import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./progressbar.component.css";
import Button from "../button-component/button.component.jsx";

export default function Progressbar({ mesSeleccionado, ingreso, gasto }) {
  const valorPorDefecto = 0;
  const porcentajeIngreso = ((ingreso - gasto) / ingreso) * 100;
  const valor = isNaN(porcentajeIngreso) ? valorPorDefecto : porcentajeIngreso;

  console.log(valor);

  return (
    <div>
      <div className="d-flex justify-content-center">
      <p className="gastos">Gastos</p>
      <p className="ingreso">Ingresos</p>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "5vh" }}  
      >
   
        <ProgressBar
          className="w-50"
          now={valor}
          label={`${valor.toFixed(2)}%`}
        />
         
      </div>
      <Button porcentaje={valor} />
    </div>
  );
}
