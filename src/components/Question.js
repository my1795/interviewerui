import { useReactMediaRecorder } from "react-media-recorder";
import React, { useState, useRef } from "react";

const Question = () => {
    const [questionMedia, setQuestionMedia] = useState('');
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({
        video: false,
        audio: true,
        type: "audio/wav"
    });

    return (
        <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoplay loop />
        </div>
    );
};
export default Question