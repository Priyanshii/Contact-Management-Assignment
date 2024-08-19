import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useCovidHistoricalData } from '../services/covidData.query';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { monthNames } from '../utils/Constant';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DataPoints {
    cases: number[];
    deaths: number[];
    recovered: number[];
}

const LineChart: React.FC = () => {
    const { data, isLoading, error } = useCovidHistoricalData();

    const [dataPointsLabel, setDataPointsLabel] = useState<string[]>([]);
    const [dataPointsValues, setDataPointsValues] = useState<DataPoints>({
        cases: [],
        deaths: [],
        recovered: [],
    });

    useEffect(() => {
        if (data?.cases) {
            const caseEntries = Object.entries(data.cases).map(([dateStr, value]) => {
                const [month, day, year] = dateStr.split("/").map(Number);
                return {
                    date: new Date(year + 2000, month - 1, day),
                    value: value as number,
                };
            });

            const labels = caseEntries.map(({ date }) =>
                `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
            );

            const values = caseEntries.map(({ value }) => value);
            const recoveredValues = Object.entries(data?.recovered).map(([dateStr, value]) => value as number);
            const deathValues = Object.entries(data?.deaths).map(([dateStr, value]) => value as number);

            setDataPointsLabel(labels);
            setDataPointsValues(prevState => ({
                ...prevState,
                cases: values,
                recovered: recoveredValues,
                deaths: deathValues
            }));
        }
    }, [data]);

    // if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;

    // Labels and DataSets for the Line Chart
    const chartData = {
        labels: dataPointsLabel,
        datasets: [
            {
                label: 'COVID-19 Cases Over Time',
                data: dataPointsValues?.cases,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                pointRadius: 0,
            },
            {
                label: 'COVID-19 Deaths Over Time',
                data: dataPointsValues?.deaths,
                fill: false,
                borderColor: 'rgba(255, 76, 48, 1)',
                backgroundColor: 'rgba(255, 76, 48, 0.2)',
                pointRadius: 0,
            },
            {
                label: 'COVID-19 Recovered Over Time',
                data: dataPointsValues?.recovered,
                fill: false,
                borderColor: 'rgba(46, 204, 113, 1)',
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                pointRadius: 0,
            },
        ],
    };

    //Configurations for Line Chart
    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 5 / 3,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'COVID-19 Cases Fluctuations Over Time',
                font: {
                    size: 20,
                },
            },
        },
        elements: {
            line: {
                tension: 0.1,
            },
            point: {
                radius: 0,
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Date',
                },
                ticks: {
                    maxTicksLimit: 15
                }
            },
            y: {
                beginAtZero: true,
                min: 0,
                type: 'linear',
                title: {
                    display: true,
                    text: 'Number of Cases',
                },
                ticks: {
                    maxTicksLimit: 15,
                }
            },
        },
    };

    return (
        <div className='w-[100%] md:w-[90%] lg:w-[70%] min-w-[600px]'>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;
