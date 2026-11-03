import { PolarArea } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    ArcElement,
    Legend,
    ChartDataLabels,
);

const PolarChart = ({ _statOne, _statTwo, _statThree, _statFour, _statFive, _statSix, _statSeven }) => {

    const labels = ['ATK', 'DEF', 'HP', 'spATK', 'SPD', 'spDEF', 'STA'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [_statOne, _statTwo, _statThree, _statFour, _statFive, _statSix, _statSeven],
                backgroundColor: ['rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',],
            },
        ],
    };

    const options = {
        events: [],
        responsive: true,
        scales:{
            r:{
                grid:{
                    display: false
                },
                ticks:{
                    display: false
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                align: 'end',
                anchor: 'center',
                offset: 20,
                color: '#ffb23f',
                font: { weight: 'bold', size: '18px' },
                formatter: (value, context) => {
                    let returnVar;
                    let label = context.chart.data.labels[context.dataIndex];
                    if(value > 5 ){
                        returnVar = label + " " + (value-4);
                    }
                    else{
                        returnVar = (value-4);
                    }
                    return returnVar;
                }
            }
        },
    };

    return (
        <div className='polar-display'>
            <PolarArea data={data} options={options} />
        </div>
    );


};

export default PolarChart;
