import React, { useState } from 'react';
import Card from '../UI/Card';
import './DailyTask.css';

const DailyTask = (props) => {
    const [done, setDone] = useState(props.done);
    const clickHandler = () => {
        if (!done) {
            setDone(!done);
        }
    };
    return (
        <Card className='daily-item'>
            <div className='daily-date'>{props.location}</div>
            <div className='daily-item__description '>
                <h2>{props.task}</h2>
                <div onClick={clickHandler} className='daily-item__price'>
                    {!done ? '未完成' : '完成'}
                </div>
            </div>
        </Card>
    );
};

export default DailyTask;
