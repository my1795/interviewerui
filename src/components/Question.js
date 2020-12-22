import {useReactMediaRecorder} from "react-media-recorder";
import React, {useEffect, useState} from "react";

const Question = (props) => {
    const [parentStatus, setParentStatus] = useState('');
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        clearBlobUrl
    } = useReactMediaRecorder({
        video: false,
        audio: true,
        type: "audio/wav"
    });

    useEffect(() => {
        if (mediaBlobUrl) {
            props.parentCallBack(mediaBlobUrl)
        }

    }, [mediaBlobUrl]);

    useEffect(() => {
        if (props.isReset) {
            console.log("passed reset: " + props.isReset)
            clearBlobUrl()
            console.log("mediaUrl: " + mediaBlobUrl)
            props.setReset(false)
        }
    }, [props.isReset]);
    return (
        <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoplay loop/>
        </div>
    );
};
export default Question