import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

import { Bar } from "react-chartjs-2";
export const WeeklyBarchart = () => {
    const data = {
        labels: ["", "", "", "", "", ""],
        datasets: [
            {
                label: "764",
                data: [55, 20, 35, 45, 35, 48,],
                backgroundColor: "#876AFE",
                // borderWidth: 1,
                barPercentage: 0.3,
                categoryPercentage: 0.5,
                borderRadius: 20,
                width: 12
            },
        ],
    };

    const options = {
        responsiveness: true,
        plugins: {

            title: {
                display: false
            },
            legend: {
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
                grid: {
                    display: false,
                    drawBorder: false,
                },
                display: false,
            },
        },
    };

    // const config = {
    //   type: "bar",
    //   data: data,
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //         Ticks: false,
    //       },
    //     },
    //   },
    // };
    return (
        <div >
            <Bar data={data} options={options}></Bar>
        </div>
    );
};