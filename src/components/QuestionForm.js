import { useReactMediaRecorder } from "react-media-recorder";
import React, {useState, useRef, useEffect} from "react";
import Question from "./Question";
import AuthService from "../services/auth.service";
import {Link} from "react-router-dom";
const QuestionForm = () => {


    const [questionMedia, setQuestionMedia] = useState('');
    const [answerMedia, setAnswerMedia] = useState(null);
    const [isNextQuestion, setIsNextQuestion] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(<Question></Question>);
    useEffect(() => {
        console.log("props: ")
        console.log(JSON.stringify())
    }, [currentQuestion]);


    const nextQuestion = () => {
        if(!isNextQuestion ){
            alert('Process is not completed! check your inputs')
        }
        else{
            // current question will be send to back end service
            console.log("Question is sent to back end");

        }
    };
    return (
        <div>
            <button onClick={nextQuestion}> Move to Next Question</button>
            {currentQuestion}
            <button> Finish Interview Form</button>
        </div>
    );
};
export default QuestionForm