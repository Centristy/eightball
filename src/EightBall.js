import './EightBall.css';
import React, { useState } from "react";
import defaultMessages from "./messages.json";


function EightBall({messages = defaultMessages}) {

    const [message, setAnswer] = useState({
        msg: "8",
        color: "black",
    });


    function handleClick(evt) {

        let randomIndex = Math.floor(Math.random() * messages.length);

        setAnswer(messages[randomIndex]);
    }



    return (


    <div class="ball" style={{ color: message.color }} >
        <button onClick={handleClick}  >ASK YOUR QUESTION</button>

        <p>{message.msg}</p>

    </div>

    )
}

export default EightBall