import { type } from "@testing-library/user-event/dist/type";
import { useReducer, useState } from "react";

const initialState = {
    questions: [
        {
            id: 1,
            question: 'What is the capital of Australia?',
            options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
            answer: 'Canberra',
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            answer: 'Mars',
        },
        // Add more questions here
        // ...
    ],
    currentQuestion: 0,
    selectedOption: '',
    score: 0,
    showScore: false,
};



function question(state, action) {
    switch (action.type) {
        case 'SELECT_OPTION':
            return {
                ...state,
                selectedOption: action.payload.option,
                currentQuestion: state.currentQuestion + 1,
                score: isCorrect(action.payload.option, state.questions[state.currentQuestion].answer) ? state.score + 1 : state.score,
                showScore: isEnd(state.currentQuestion + 1, state.questions.length)
            }
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                showScore: isEnd(state.currentQuestion + 1, state.questions.length)
            }
        case 'RESTART_QUIZ':
            return {
                ...state,
                currentQuestion: 0,
                score: 0
            }
        default:
            throw new Error()
    }
}

function isCorrect(option, answer) {
    return option === answer
}

function isEnd(current, questionsLenght) {
    console.log(questionsLenght);
    return current >= questionsLenght
}


function ShowQuestion({ question, handleOptionSelect, handleNextQuestion, showScore, restart }) {
    return (
        <>
            <h1>Question{question.id}</h1>
            <p>{question.question}</p>
            {question.options.map(option => (
                <button key={option} onClick={() => handleOptionSelect(option)}>{option}</button>
            ))}<br></br>
            <button onClick={() => handleNextQuestion()}>next</button>
            <button onClick={() => { showScore() }}>show score</button>
            <button onClick={() => { restart() }}>restart</button>
        </>
    )
}

function ShowScore({ restart, score }) {
    return (
        <>
            <h1>Yourscore: {score}/2</h1>
            <button onClick={restart()}>restart</button>
        </>
    )
}
function Question() {
    const [state, dispatch] = useReducer(question, initialState)

    function handleOptionSelect(option) {
        dispatch({ type: 'SELECT_OPTION', payload: { option } })
    }

    function handleNextQuestion() {
        dispatch({ type: 'NEXT_QUESTION' })
    }

    function showScore() {
        console.log(state.score);
    }

    function restart() {
        dispatch({ type: 'RESTART_QUIZ' })
    }

    return (
        <>
            {state.showScore ? (
                <ShowScore score={state.score} restart={restart} />
            ) : (
                <ShowQuestion
                    question={state.questions[state.currentQuestion]}
                    handleOptionSelect={handleOptionSelect}
                    handleNextQuestion={handleNextQuestion}
                    showScore={showScore}
                    restart={restart}/>
            )}
        </>
    );
}


export default Question;
