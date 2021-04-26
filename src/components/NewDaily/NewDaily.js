import React from 'react';
import DailyForm from './DailyForm';
import './NewDaily.css';

const NewDaily = (props) => {
    const saveDailyDataHandler = (enteredDailyData) => {
        const dailyData = {
            id: Math.random().toString(),
            ...enteredDailyData
        };
        props.onAddDaily(dailyData);
    };
    return (
        <div className='new-daily'>
            <DailyForm onSaveDailyData={saveDailyDataHandler} />
        </div>
    );
};
export default NewDaily;
