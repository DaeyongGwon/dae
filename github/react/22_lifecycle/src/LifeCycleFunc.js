import { useState, useEffect } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

function LifeCycleFunc() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false);

    const changeNumber = () => {
        setNumber(number + 1);
    };

    const changeVisible = () => {
        setVisible(!visible);
    };

    useEffect(() => {}, [number, visible]);

    return (
        <>
            <button onClick={changeNumber}>PLUS</button>
            <button onClick={changeVisible}>ON/OFF</button>
            <h1>{visible && <LifeCycleFuncChild number={number} />}</h1>
        </>
    );
}
export default LifeCycleFunc;
