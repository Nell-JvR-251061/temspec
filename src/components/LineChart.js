import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState, useEffect } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Tooltip,
    elements
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Tooltip
);

const LineChart = ({_tem, _visibility}) => {

    
    let tem = _tem;
    let visibility = _visibility;


    const levels = [1, 5, 15, 25, 50, 75, 100];
    const labels = ['HP', 'SPD', 'STA', 'ATK', 'spATK', 'DEF', 'spDEF'];
    const colours = ['rgba(0, 255, 0, 1)', 'rgba(255, 212, 0, 1)', 'rgba(255, 128, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 123, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 170, 255, 1)'];


    let tempDataSets = [];
    
    const TemStats = (tem) => {
        let returnVar = [];
        returnVar[0] = tem.stats.hp;
        returnVar[1] = tem.stats.spd;
        returnVar[2] = tem.stats.sta;
        returnVar[3] = tem.stats.atk;
        returnVar[4] = tem.stats.spatk;
        returnVar[5] = tem.stats.def;
        returnVar[6] = tem.stats.spdef;

        return returnVar;
    }

    let temStats = TemStats(tem);

    for (let o = 0; o < temStats.length; o++) {
        let levelArray = [];

        for (let i = 0; i < levels.length; i++) {
            let randomSV = Math.floor(Math.random() * (51));
            levelArray[i] = Math.round(((((1.5 * temStats[o]) + randomSV + 1 / 5) * levels[i]) / 100) + ((randomSV * temStats[o] * levels[i]) / 25000) + 10);
        }

        tempDataSets[o] = {
            label: labels[o],
            data: levelArray,
            borderColor: colours[o],
            backgroundColor: colours[o],
            hidden: visibility[o]
        }
    }



    const data = {
        labels: levels,
        datasets: tempDataSets,
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Level',
                    color: 'rgba(232, 242, 242, 1)',
                    font: {
                        size: 24,
                        family: "Unbounded",
                    },
                },
                grid: {
                    color: 'rgba(232, 242, 242, 1)',
                },
                ticks: {
                    color: 'rgba(232, 242, 242, 1)',
                    font: {
                        size: 16,
                        family: "Ubuntu",
                    }
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Stat',
                    color: 'rgba(232, 242, 242, 1)',
                    font: {
                        size: 24,
                        family: "Unbounded",
                    },
                },
                grid: {
                    color: 'rgba(232, 242, 242, 1)',
                },
                ticks: {
                    color: 'rgba(232, 242, 242, 1)',
                    font: {
                        size: 16,
                        family: "Ubuntu",
                    },
                },
            }
        },
        elements: {
            point: {
                pointStyle: 'circle',
                radius: 5,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgba(154, 116, 140, 1)',
                titleFont: {
                    family: "Ubuntu",
                },
                titleAlign: 'center',
            },
        },

    };

    return (
        <Line data={data} options={options} />
    );

};

export default LineChart;