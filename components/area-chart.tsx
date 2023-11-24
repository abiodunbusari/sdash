import React from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsiveness: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: false,
            suggestedMin: 80,
            suggestedMax: 140,
            stepSize: 20,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            fill: 'origin', // Fills the area below the line
            label: 'Green Line',
            data: labels.map(() => faker.number.int({ min: 80, max: 140 })),
            borderColor: 'rgb(53, 162, 205)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.4,
        },
        {
            fill: 'origin', // Fills the area below the line
            label: 'Red Line',
            data: labels.map(() => faker.datatype.number({ min: 80, max: 140 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0)', // Set to fully transparent
            tension: 0.4,
        },
    ],
};

export function AreaChart() {
    return (
        <div className='w-full'>
            <Line options={options} data={data} />
        </div>
    );
}
