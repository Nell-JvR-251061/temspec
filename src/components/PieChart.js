import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as ChartJS,
    ArcElement,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Legend,
    ChartDataLabels,
);

const PieChart = ({ _statOne, _statTwo }) => {

    const data = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [_statOne, _statTwo],
                backgroundColor: ['rgb(154 116 140)',' rgb(232 242 242)'],
            },
        ],
    };

    const options = {
        events: [],
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                align: 'center',
                anchor: 'center',
                color: '#994a2e',
                font: { weight: 'bold', size: '24px'},
                formatter: (value, context) => {
                    let returnVar
                    if(value === _statOne){
                        returnVar = "Male\n " + value + "%";
                    }
                    else{
                        returnVar = "Female\n   " + value + "%";
                    }
                    return returnVar;
                }
            }
        },
    };

    return (
        <div className='pie-display'>
            <Pie data={data} options={options} />
        </div>
    );


};

export default PieChart;
