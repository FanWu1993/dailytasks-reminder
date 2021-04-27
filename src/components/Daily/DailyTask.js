import React, { useState } from 'react';
import Card from '../UI/Card';
import './DailyTask.css';

const DailyTask = (props) => {
    const [done, setDone] = useState(props.done);
    const clickHandler = (event) => {
        if (!done) {
            setDone(!done);
            props.onDoneDaily(event.target.parentNode.firstChild.innerText);
        }
    };
    const deleteHandler = (event) => {
        if (window.confirm('确定要删除？')) {
            props.onDeleteDaily(event.target.parentNode.firstChild.innerText);
            // .target.parentNode.firstChild.innerText
        }
    };
    return (
        <li>
            <Card className='daily-item'>
                <div className='daily-date'>{props.location}</div>
                <div className='daily-item__description '>
                    <h2>{props.task}</h2>
                    <div onClick={clickHandler} className='daily-item__price'>
                        {!done ? '未完成' : '完成'}
                    </div>{' '}
                    <div onClick={deleteHandler} className='daily-item__price'>
                        删除
                    </div>
                </div>
            </Card>
        </li>
    );
};

export default DailyTask;
