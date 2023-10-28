import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

export default function Progressbar({ mesSeleccionado, valor }) {
  const valorPorDefecto = 0;
  const valorActual = valor || valorPorDefecto;

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
      <ProgressBar className="w-50" now={valorActual} label={`${valorActual}%`} />
    </div>
  );
}
