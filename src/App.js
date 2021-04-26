import React, { useState } from 'react';
import Daily from './components/Daily/Daily';
import NewDaily from './components/NewDaily/NewDaily';
const DUMMY_DAILYTASKS = [
    { id: Math.random().toString(), location: '老长安', task: '日常1', done: false },
    { id: Math.random().toString(), location: '成都', task: '日常2', done: true },
    { id: Math.random().toString(), location: '侠客岛', task: '日常3', done: false },
    { id: Math.random().toString(), location: '老长安', task: '日常4', done: true },
    { id: Math.random().toString(), location: '副本', task: '副本名1', done: false },
    { id: Math.random().toString(), location: '副本', task: '副本名2', done: false }
];

const App = () => {
    const [dailytasks, setDailytasks] = useState(DUMMY_DAILYTASKS);

    const addDailyHandler = (daily) => {
        setDailytasks((prevDailytasks) => {
            return [daily, ...prevDailytasks];
        });
    };
    return (
        <div>
            <NewDaily onAddDaily={addDailyHandler} />
            <Daily dailyTasks={dailytasks} />
        </div>
    );
};

export default App;
