import React from 'react';
import { Switch, Route, withRouter} from 'react-router-dom'
import StartPage from './pages/Start'
import QuizPage from "./pages/Quiz";
import FinishPage from "./pages/Finish";
import data from "./services/dataService"

class App extends React.Component {
    state = {
        currentTaskIndex: 0,
        tasks: [],
    }

    repo = new data()

    createOptionsWithCheckedFields = (options) => {
        return [...options].map(item => {
            item['checked'] = false;
            return item;
        })
    }

    createTasksWithAnswers = (tasks) => {
        return [...tasks].map(item => {
            item['options'] = this.createOptionsWithCheckedFields(item['options']);
            return item
        })
    }

    createTasksWithSubmittedField = (tasks) => {
        return [...tasks].map(item => {
            item['submitted']=false;
            return item})
    }

    componentDidMount() {
        const tasks = [... this.repo.getTasks()];
        this.setState({tasks: this.createTasksWithSubmittedField(this.createTasksWithAnswers(tasks))})
    }

    toggleOption = ({taskIndex, optionIndex}) => {
        const {tasks} = this.state;
        tasks[taskIndex].options[optionIndex].checked = !tasks[taskIndex].options[optionIndex].checked;
        this.setState(tasks);
    }

    submit = () => {
        const {tasks, currentTaskIndex} = this.state;
        tasks[currentTaskIndex].submitted = true;

        if (currentTaskIndex < tasks.length -1 ) {
            this.setState({tasks, currentTaskIndex: currentTaskIndex + 1})

        } else {
            this.setState({tasks});
        }
    }

    render() {
        console.log(this.state);
        const {tasks, currentTaskIndex} = this.state;
        return (
            <>
                <div>
                    <h2>App</h2>
                </div>
                <Switch>
                    <Route exact path={'/'}
                           component={StartPage}
                    />
                    <Route exact path={'/quiz'}
                           render={() =>
                               <QuizPage task={tasks[currentTaskIndex]}
                                         toggleOption={this.toggleOption}
                                         taskIndex={currentTaskIndex}
                                         submit={this.submit}
                               />
                           }
                    />
                    <Route exact path={'/result'}
                           component={FinishPage}
                    />
                </Switch>
            </>
        )
    }
}

export default withRouter(App)

