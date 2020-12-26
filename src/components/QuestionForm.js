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


    const [questionMedia, setQuestionMedia] = useState(null);
    const [answerMedia, setAnswerMedia] = useState(null);
    const [position, setPosition] = useState('defaultPosition');
    const [candidateEmail, setCandidateEmail] = useState('');
    const [reset, setReset] = useState(false);


    useEffect(() => {
        console.log("Current User is :" +JSON.stringify(currentUser))
    }, [reset]);

    const onChangePosition = (e) => {
        const position = e.target.value;
        setPosition(position);
    };
    const onChaneCandidateEmail = (e) => {
        const position = e.target.value;
        setCandidateEmail(candidateEmail);
    };
    const handlePosition = (e) => {

    }
    const nextQuestion = async () => {
        if(questionMedia == null || answerMedia == null){
            alert("Please set inputs")
        }
        setReset(true)
        await DataService.positionregister(questionMedia,position)
        await DataService.answerRegister(answerMedia, localStorage.getItem("idealAnswerID" ))


        const id = await
        console.log("Answer id in form "+ localStorage.getItem("idealAnswerID" ))
        console.log("Result of first request " +id)

        localStorage.removeItem("idealAnswerID")
        handleQuestionMediaBlob(null)
        handleAnswerMediaBlob(null)
    };
    const handleQuestionMediaBlob = (media) => {
        setQuestionMedia(media)
    };
    const handleAnswerMediaBlob = (media) => {
        setAnswerMedia(media)
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
                <div className="form-group">
                    <label htmlFor="username">CandidateEmail</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={candidateEmail}
                        onChange={onChaneCandidateEmail}
                    />
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
            <button onClick={nextQuestion}> Move to Next Question</button>
            <Question parentCallBack={handleQuestionMediaBlob} isReset={reset} setReset={setReset}></Question>
            <Answer parentCallBack={handleAnswerMediaBlob} isReset={reset} setReset={setReset}></Answer>
            <button> Finish Interview Form</button>
        </div>
    );
};
export default QuestionForm