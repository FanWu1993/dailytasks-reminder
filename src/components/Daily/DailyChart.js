import React from 'react';
import Chart from '../Chart/Chart';

const DailyChart = (props) => {
    const chartDataPoints = [];

    for (const daily of props.dailyTasks) {
        const dailyLocation = daily.location;
        const chartDataPoint = chartDataPoints.find((chartDataPoint) => chartDataPoint.label === dailyLocation);
        if (chartDataPoint === undefined) {
            if (daily.done) {
                chartDataPoints.push({ label: dailyLocation, value: 1, done: 1 });
            } else {
                chartDataPoints.push({ label: dailyLocation, value: 1, done: 0 });
            }
        } else {
            if (daily.done) {
                chartDataPoints[chartDataPoints.indexOf(chartDataPoint)].value += 1;
                chartDataPoints[chartDataPoints.indexOf(chartDataPoint)].done += 1;
            } else {
                chartDataPoints[chartDataPoints.indexOf(chartDataPoint)].value += 1;
            }
        }
    }
    return <Chart dataPoints={chartDataPoints} />;
};

export default DailyChart;
