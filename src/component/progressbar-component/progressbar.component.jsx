import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './progressbar.component.css';

export default function Progressbar({ mesSeleccionado, ingreso, gasto }) {
  const valorPorDefecto = 0;
  const porcentajeIngreso = (ingreso - gasto) / ingreso * 100;
  const valor = isNaN(porcentajeIngreso) ? valorPorDefecto : porcentajeIngreso;

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '15vh' }}>
      <ProgressBar className='w-50' now={valor} label={`${valor.toFixed(2)}%`} />
    </div>
  );
}
