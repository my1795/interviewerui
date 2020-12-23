import axios from "axios";
var toWav = require('audiobuffer-to-wav')
const API_URL = "/hruser/";

const positionregister = async (fileUrl,position) => {

    var data = await axios.get(fileUrl, {
        responseType: 'arraybuffer',
        headers: {
            'Accept': 'audio/wav',
        }
    }).then(response => {
        const blob = new Blob([response.data], {
            type: 'audio/wav',
        });
        console.log("Blob size is : "+ blob)
        return blob;
    });


    var reader = new FileReader();
    var base64data;
    reader.readAsDataURL(data);
    reader.onloadend =  function() {
        base64data = reader.result;
        console.log(base64data);
        var bodyFormData = new FormData();
        bodyFormData.set("questionRecording", base64data);
        console.log("Sent blob is : "+ base64data)
        return axios.post(API_URL +"positionregister", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            base64data,
            position,
        }).then(response => {
            alert('*');
            console.log(response);
        });
    }

};


export default {
    positionregister
};
