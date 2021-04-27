import React from 'react';
import './DailyList.css';
import DailyTask from './DailyTask';

const DailyList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='daily-list__fallback'>么得日常啦!</h2>;
    }

    return (
        <ul className='daily-list'>
            {props.items
                // .filter((daily) => (daily.location = filteredLocation))
                .map((daily) => (
                    <DailyTask
                        key={daily.id}
                        location={daily.location}
                        task={daily.task}
                        done={daily.done}
                        onDeleteDaily={props.onDeleteDaily}
                        onDoneDaily={props.onDoneDaily}
                    />
                ))}
        </ul>
    );
};

export default DailyList;
