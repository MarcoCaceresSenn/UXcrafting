import ProgressBar from 'react-bootstrap/ProgressBar';
import './progressbar.component.css';

const valoresPorMes = {
    'Enero': 10,
    'Febrero': 20,
    'Marzo': 30,
    'Abril': 40,
    'Mayo': 50,
    'Junio': 60,
    'Julio': 70,
    'Agosto': 80,
    'Septiembre': 90,
    'Octubre': 100,
    'Noviembre': 90,
    'Diciembre': 80,
};

export default function Progressbar({ mesSeleccionado }) {
    const valorPorDefecto = 0;
    const valor = valoresPorMes[mesSeleccionado] || valorPorDefecto;

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '20vh' }}>
            <ProgressBar className="w-50" now={valor} label={`${valor}%`} />
        </div>
    );
}
