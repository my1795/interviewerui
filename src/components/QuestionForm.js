import React, {useEffect, useState} from "react";
import Question from "./Question";

const QuestionForm = () => {


    const [questionMedia, setQuestionMedia] = useState('');
    const [reset, setReset] = useState(false);
    useEffect(() => {

    }, [reset]);


    const nextQuestion = () => {
        setReset(true)
        handleMediaBlob(null)
    };
    const handleMediaBlob = (questionMedia) => {
        setQuestionMedia(questionMedia);
        console.log("Parent media " + questionMedia)
    };
    return (
        <div>
            <button onClick={nextQuestion}> Move to Next Question</button>
            <Question parentCallBack={handleMediaBlob} isReset={reset} setReset={setReset}></Question>
            <button> Finish Interview Form</button>
        </div>
    );
};
export default QuestionForm