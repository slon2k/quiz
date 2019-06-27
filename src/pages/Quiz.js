import React from 'react'
import Question from "../components/Question";
import Options from "../components/Options";
import {Redirect} from "react-router";

class QuizPage extends React.Component {

    render () {
        const {history, task, taskIndex, toggleOption, submit} = this.props
        console.log('history ', history);
        console.log('task ', task);
        const {question} = task === undefined ? '' : task;
        const {options} = task === undefined ? [] : task;

        if(taskIndex ===1 )
            return <Redirect to='/result'/>

        return (
            <div>
                <Question text={question}/>
                <Options options={options}
                         taskIndex = {taskIndex}
                         toggleOption = {toggleOption}
                />
                <button onClick={() => submit()}>Submit</button>

            </div>
        )
    }
}

export default QuizPage