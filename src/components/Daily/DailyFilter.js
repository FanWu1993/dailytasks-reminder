import React from 'react';
import './DailyFilter.css';

const DailyFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target);
    };

    const locations = ['所有地图', ...props.locations];
    const progresses = ['所有状态', '未完成', '完成'];
    return (
        <div className='daily-filter'>
            <div className='daily-filter__control'>
                <label>Filters</label>
                <select value={props.selected.location} onChange={dropdownChangeHandler}>
                    {locations.map((location) => (
                        <option key={Math.random().toString()} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
                <select value={props.selected.progress} onChange={dropdownChangeHandler}>
                    {progresses.map((progress) => (
                        <option key={Math.random().toString()} value={progress}>
                            {progress}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DailyFilter;
