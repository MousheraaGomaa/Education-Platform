import { Bar } from "react-chartjs-2"
import {
    Chart,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import styles from './bar-chart.module.css'

Chart.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const BarChart = () => {
    const plugin = {
        beforeInit(chart) {
            // reference of original fit function
            const originalFit = chart.legend.fit;
            console.log(chart.legend.fit)
            // override the fit function
            chart.legend.fit = function fit() {
                // call original function and bind scope in order to use `this` correctly inside it
                originalFit.bind(chart.legend)();
                // increase the width to add more space
                this.height += 30;
            };
        }
    };
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Study',
                data: [1, 2, 4],
                backgroundColor: '#A9834F',
            },
            {
                label: 'Exam',
                data: [3, 4, 6],
                backgroundColor: '#F8EFE2',
                borderRadius: 10,
            }
        ]
    }
    const options = {
        scales: {
            x: {
                stacked: true,
                ticks: {
                    font: {
                        size: 12,
                        weight: 600,
                        family: 'Poppins'
                    },
                    color: '#9B9CA1',
                },
                grid: {
                    display: false,
                }
            },
            y: {
                ticks: {
                    callback: function (value) {
                        return value + ' Hr';
                    },
                    beginAtZero: true,
                    font: {
                        size: 12,
                        weight: 600,
                        family: 'Poppins'
                    },
                    color: '#9B9CA1',
                },
                grid: {
                    borderDash: [5, 5]
                }
            }
        },
        plugins: {
            legend: {
                align: 'start',
                labels: {
                    font: {
                        size: 18,
                        weight: 700
                    },
                    boxWidth: 20,
                    boxHeight: 20,
                    color: '#9B9CA1',
                    useBorderRadius: true,
                    borderRadius: 5,

                },
            },
            tooltip: {
                mode: 'index',
            },
        }
    }
    return (
        <div className={styles?.["bar-chart-container"]} >
            <Bar data={data} options={options} plugins={[plugin]} />
        </div>
    )
}



export default BarChart;


// barThickness:50

