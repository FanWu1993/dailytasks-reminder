import React, { useState } from 'react';
import Card from '../UI/Card';
import './Daily.css';
import DailyChart from './DailyChart';
import DailyFilter from './DailyFilter';
import DailyList from './DailyList';

const Daily = (props) => {
    const [filteredLocation, setFilteredLocation] = useState('所有地图');
    const [filteredProgress, setFilteredProgress] = useState('所有状态');
    const filtered = {
        location: filteredLocation,
        progress: filteredProgress
    };
    const filterChangeHandler = (target) => {
        if (target.firstChild.value === '所有状态') {
            setFilteredProgress(target.value);
        } else {
            setFilteredLocation(target.value);
        }
    };

    const locations = [...new Set(props.dailyTasks.map((daily) => daily.location))];

    let filteredDailyTasks =
        filteredLocation === '所有地图'
            ? props.dailyTasks
            : props.dailyTasks.filter((daily) => {
                  return daily.location === filteredLocation;
              });
    filteredDailyTasks =
        filteredProgress === '所有状态'
            ? filteredDailyTasks
            : filteredDailyTasks.filter((daily) => {
                  return daily.done === (filteredProgress === '完成' ? true : false);
              });

    return (
        <div>
            <Card className='daily'>
                <DailyFilter locations={locations} selected={filtered} onChangeFilter={filterChangeHandler} />
                <DailyChart dailyTasks={filteredDailyTasks} />
                <DailyList items={filteredDailyTasks} onDeleteDaily={props.onDeleteDaily} onDoneDaily={props.onDoneDaily} />
            </Card>
        </div>
    );
};

export default Daily;
