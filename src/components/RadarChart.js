import { Radar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend,
    Title,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend
);

const RadarChart = ({ _statOne, _statTwo, _statThree, _statFour, _statFive, _statSix, _statSeven }) => {

    const labels = ['HP ( ' +_statOne + ' )', 'SPD ( ' + _statTwo + ' )', 'ATK ( ' + _statThree + ' )', 'SP-ATK ( ' + _statFour + ' )', 'SP-DEF ( ' + _statFive + ' )', 'DEF ( ' + _statSix + ' )', 'STA ( ' + _statSeven + ' )'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [_statOne, _statTwo, _statThree, _statFour, _statFive, _statSix, _statSeven],
                backgroundColor: 'rgba(255, 178, 63, 0.8)',
                borderColor: 'rgba(255, 178, 63, 1)',
            },
        ],
    };

    const options = {
        events: [],
        responsive: true,
        maintainAspectRatio: true,
        scales:{
            r:{
                grid:{
                    color: 'rgba(153, 74, 46, 1)',
                },
                ticks: {
                    display: false,
                },
                pointLabels: {
                    align: 'center',
                    color: 'rgba(55, 40, 62, 1)',
                    font: {
                        size: 16,
                        family: "Ubuntu",
                    }
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: false,
            },
        },

    };

    return (
        <Radar data={data} options={options} />
    );

};

export default RadarChart;