import { useState } from "react";

function Practice49_2() {
    const [value, setValue] = useState({
        color: "black",
        text: "검정색",
    });

    const redFunc = () => {
        setValue({
            color: "red",
            text: "빨간색",
        });
    };

    const blueFunc = () => {
        setValue({
            color: "blue",
            text: "파란색",
        });
    };

    return (
        <>
            <h1 style={{ color: value.color }}>{value.text}</h1>
            <button onClick={redFunc}>빨간색</button>
            <button onClick={blueFunc}>파란색</button>
        </>
    );
}

export default Practice49_2;
