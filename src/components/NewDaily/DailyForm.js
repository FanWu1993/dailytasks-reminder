import React, { useState } from 'react';
import './DailyForm.css';

const DailyForm = (props) => {
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enteredTask, setEnteredTask] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredLocation: '',
    //     enteredTask: ''
    // });
    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredLocation: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredLocation: event.target.value };
        // });
    };
    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTask: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTask: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const dailyData = {
            location: enteredLocation,
            task: enteredTask,
            done: false
        };
        props.onSaveDailyData(dailyData);
        setEnteredLocation('');
        setEnteredTask('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-daily__controls'>
                <div className='new-daily__control'>
                    <label>地图</label>
                    <input type='text' value={enteredLocation} onChange={locationChangeHandler}></input>
                </div>
                <div className='new-daily__control'>
                    <label>任务</label>
                    <input type='text' value={enteredTask} onChange={taskChangeHandler}></input>
                </div>
                {/* <div className='new-daily__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'></input>
                </div> */}
            </div>
            <div className='new-daily__actions'>
                <button type='button' onClick={props.onCancel}>
                    取消
                </button>
                <button type='submit'>添加日常</button>
            </div>
        </form>
    );
};

export default DailyForm;
