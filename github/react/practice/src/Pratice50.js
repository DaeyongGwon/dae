import React, { useState } from "react";

export default function Pratice50() {
    const [visible, setVisible] = useState();

    const visibleFunc = () => {
        setVisible(false);
    };
    return (
        <>
            <button onClick={visibleFunc}>Toggle</button>
            <h1>{visible && "안녕하세요"}</h1>
        </>
    );
}
