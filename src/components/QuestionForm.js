import React, {useEffect, useRef, useState} from "react";
import Question from "./Question";
import Answer from "./Answer";
import AuthService from "../services/auth.service";
import DataService from "../services/data.service";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
const QuestionForm = () => {
    const currentUser = AuthService.getCurrentUser();

    const form = useRef();
    const checkBtn = useRef();


    const [questionMedia, setQuestionMedia] = useState('');
    const [answerMedia, setAnswerMedia] = useState('');
    const [position, setPosition] = useState('defaultPosition');
    const [reset, setReset] = useState(false);


    useEffect(() => {
        console.log("Current User is :" +JSON.stringify(currentUser))
    }, [reset]);

    const onChangePosition = (e) => {
        const position = e.target.value;
        setPosition(position);
    };
    const handlePosition = (e) => {

    }
    const nextQuestion = () => {
        setReset(true)
        DataService.positionregister(questionMedia,position)
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
            <Form onSubmit={handlePosition} ref={form}>
            <div className="form-group">
                <label htmlFor="username">Postion</label>
                <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={position}
                    onChange={onChangePosition}
                />
            </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
            <button onClick={nextQuestion}> Move to Next Question</button>
            <Question parentCallBack={handleMediaBlob} isReset={reset} setReset={setReset}></Question>
            <Answer parentCallBack={handleMediaBlob} isReset={reset} setReset={setReset}></Answer>
            <button> Finish Interview Form</button>
        </div>
    );
};
export default QuestionForm