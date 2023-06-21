import { useState } from "react";

function Practice49() {
    const [text, setText] = useState("검정색");
    const [color, setColor] = useState("black");

    const redFunc = () => {
        setText("빨간색");
        setColor("red");
    };

    const blueFunc = () => {
        setText("파란색");
        setColor("blue");
    };

    return (
        <>
            <h1 style={{ color: color }}>{text}</h1>
            <button onClick={redFunc}>빨간색</button>
            <button onClick={blueFunc}>파란색</button>
        </>
    );
}

export default Practice49;
