import firebase from 'firebase';
import React, { Component } from 'react';
import Daily from './components/Daily/Daily';
import NewDaily from './components/NewDaily/NewDaily';
import config from './initFirebase';

const DUMMY_DAILYTASKS = [
    { id: Math.random().toString(), location: '老长安', task: '日常1', done: false },
    { id: Math.random().toString(), location: '成都', task: '日常2', done: true },
    { id: Math.random().toString(), location: '侠客岛', task: '日常3', done: false },
    { id: Math.random().toString(), location: '老长安', task: '日常4', done: true },
    { id: Math.random().toString(), location: '副本', task: '副本名1', done: false },
    { id: Math.random().toString(), location: '副本', task: '副本名2', done: false }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyTasks: []
        };
    }

    getUserData = () => {
        let ref = firebase.database().ref('/daily');
        ref.on('value', (snapshot) => {
            const state = snapshot.val();
            this.setState({ dailyTasks: state });
        });
    };

    componentDidMount = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        } else {
            firebase.app(); // if already initialized, use that one
        }
        this.getUserData();
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.writeUserData();
        }
    }
    writeUserData = () => {
        firebase.database().ref('/daily').set(this.state.dailyTasks);
    };
    render() {
        const addDailyHandler = (daily) => {
            this.setState({ dailyTasks: [...this.state.dailyTasks, daily] });
        };

        const deleteDailyHandler = (task) => {
            const newState = this.state.dailyTasks.filter((dailyTask) => dailyTask.task !== task);
            this.setState({ dailyTasks: newState });
        };

        const finishDailyHandler = (task) => {
            const newState = this.state.dailyTasks;
            newState[newState.findIndex((dailyTask) => dailyTask.task === task)].done = true;
            this.setState({ dailyTasks: newState });
        };
        const startNewDayHandler = () => {
            const newState = this.state.dailyTasks;
            newState.map((daily) => (daily.done = false));
            this.setState({ dailyTasks: newState });
        };

        return (
            <div>
                <NewDaily onAddDaily={addDailyHandler} onStartNewDay={startNewDayHandler} />
                <Daily dailyTasks={this.state.dailyTasks} onDeleteDaily={deleteDailyHandler} onDoneDaily={finishDailyHandler} />
            </div>
        );
    }
}

export default App;
