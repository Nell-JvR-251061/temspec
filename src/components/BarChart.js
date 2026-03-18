import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
    ChartDataLabels,
);

const BarChart = ({ _statOne, _statTwo }) => {

    const data = {
        labels: ['Now', 'Stuff', 'stuff'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [_statOne],
                backgroundColor: 'rgb(154 116 140)',
            },
            {
                label: 'Dataset 2',
                data: [_statTwo],
                backgroundColor: 'rgb(232 242 242)',
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        events: [],
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                categoryPercentage: 1,
                stacked: true,
                grid: {
                    display: false
                },
                display: false,
            },
            y: {
                stacked: true,
                grid: {
                    display: false
                },
                display: false,
                barPercentage: 1,
                categoryPercentage: 1,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                align: 'center',
                anchor: 'center',
                color: '#994a2e',
                font: { weight: 'bold', size: '16px'},
                formatter: (value, context) => {
                    let num = 0;
                    if (value < 0) {
                        num = -value;
                    }
                    else {
                        num = value;
                    }
                    return num;
                }
            }
        },
    };

    return (
        <div className='bar-display'>
            <Bar data={data} options={options} />
        </div>
    );


};

export default BarChart;
