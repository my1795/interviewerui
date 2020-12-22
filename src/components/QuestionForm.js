import React, {useEffect, useState} from "react";
import Question from "./Question";
import Answer from "./Answer";
const QuestionForm = () => {


    const [questionMedia, setQuestionMedia] = useState('');
    const [answerMedia, setAnswerMedia] = useState('');
    const [reset, setReset] = useState(false);
    useEffect(() => {

    }, [reset]);


    const nextQuestion = () => {
        setReset(true)
        handleMediaBlob(null,null)
    };
    const handleMediaBlob = (questionMedia,answerMedia) => {
        setQuestionMedia(questionMedia)
        setAnswerMedia(answerMedia)
        console.log("Parent questionMedia  " + questionMedia)
        console.log("Parent answerMedia " + answerMedia)
    };
    return (
        <div>
            <button onClick={nextQuestion}> Move to Next Question</button>
            <Question parentCallBack={handleMediaBlob} isReset={reset} setReset={setReset}></Question>
            <Answer parentCallBack={handleMediaBlob} isReset={reset} setReset={setReset}></Answer>
            <button> Finish Interview Form</button>
        </div>
    );
};
export default QuestionForm