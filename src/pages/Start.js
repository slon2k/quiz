import React from 'react'
import {withRouter} from "react-router";

const StartPage = ({history}) => {
    return (
        <div>
            <h3>Press to start</h3>
            <button onClick={() => history.push('/quiz')}>Start</button>
        </div>

    )
}

export default withRouter(StartPage)