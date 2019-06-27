import React from 'react'

const StartPage = ({history}) => {
    return (
        <div>
            <h3>Press to start</h3>
            <button onClick={() => history.push('/quiz')}>Start</button>
        </div>

    )
}

export default StartPage