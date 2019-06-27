const tasks = [
    {
        id: '1',
        question: "How can you access the state of a component from inside of a member function?",
        options: [
            {text: "this.getState()", correct: false},
            {text: "this.prototype.stateValue", correct: false},
            {text: "this.state", correct: true},
            {text: "this.values", correct: false},
        ]
    },
    {
        id: '2',
        question: "ReactJS is developed by _____?",
        options: [
            {text: "Amazon", correct: false},
            {text: "Facebook", correct: true},
            {text: "Google", correct: false},
            {text: "Microsoft", correct: false},
        ]
    },
]

export default class data {
    getTasks = () => {
        return tasks
    }
}