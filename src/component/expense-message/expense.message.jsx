import React from 'react';

function ExpenseMessage({ gastoPorcentaje }) {
    let message = 'BIEN, AHORRASTE';
    if (gastoPorcentaje >= 50 && gastoPorcentaje < 75) {
        message = 'CUIDADO CON LOS GASTOS HORMIGA';
    } else if (gastoPorcentaje >= 75) {
        message = 'ESTAS DESPILFARRANDO TU DINERO';
    }

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
}

export default ExpenseMessage;
