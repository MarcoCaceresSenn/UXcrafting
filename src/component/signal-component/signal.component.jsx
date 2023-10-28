import './signal.component.css'

export default function SignalComponent({ gasto, categoria }) {
    return (
        <div>
            <div className="mt-5 bg-sign rounded p-2">
                <div className="color-text"><h3 className="text-center"> Imagina cuánto podrías haber ahorrado </h3></div>
                <div className="color-text"><h1 className="text-center text-bold">S/.{`${gasto.toFixed(2)}`}</h1></div>
                <div className="color-text"><h2 className="text-center"><strong> se fueron en: {categoria}</strong></h2></div>
            </div>
            <div>
                <h4 className='text-center mt-5 color-text'>Comienza a tomar el control de tus finanzas hoy mismo y toma decisiones más inteligentes sobre tus gastos.</h4>
            </div>
        </div>

    );
}