import React, { useState } from 'react';
import DailyForm from './DailyForm';
import './NewDaily.css';

const NewDaily = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveDailyDataHandler = (enteredDailyData) => {
        const dailyData = {
            id: Math.random().toString(),
            ...enteredDailyData
        };
        props.onAddDaily(dailyData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    const startNewDayHandler = () => {
        props.onStartNewDay();
    };

    return (
        <div className='new-daily'>
            {!isEditing && (
                <div>
                    <button onClick={startEditingHandler}>添加新日常</button>
                    <button onClick={startNewDayHandler}>开启新一天</button>
                </div>
            )}
            {isEditing && <DailyForm onCancel={stopEditingHandler} onSaveDailyData={saveDailyDataHandler} />}
        </div>
    );
};
export default NewDaily;
