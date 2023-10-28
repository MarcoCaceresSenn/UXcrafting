import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive: true,
    maintainAspectRatio: false,
};

export default function Pies({ data }) {
    const { totalIngresos, totalGastos } = data;

    const chartData = {
        labels: ['Total Ingresos', 'Total Gastos'],
        datasets: [
            {
                data: [totalIngresos, totalGastos],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)', // Color para Ingresos
                    'rgba(255, 99, 132, 0.2)', // Color para Gastos
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)', // Color para Ingresos
                    'rgba(255, 99, 132, 1)', // Color para Gastos
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={chartData} options={options} />
}
