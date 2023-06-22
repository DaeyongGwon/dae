import { useRef } from "react";

function RefSample() {
    //1. ref객체 생성
    const inputRef = useRef(null);
    const handleFocus = () => {
        //3. useRef로 생성한 ref객체의 current속성을 통해 DOM에
        //   접근하여 focus() 메서드를 실행
        inputRef.current.focus();
    };
    const handleDisable = () => {
        inputRef.current.disabled = true;
    };
    return (
        <>
            <p>버튼 클릭시 input에 focus 처리</p>
            {/* 2. 선택하고싶은 DOM에 ref prop 설정 */}
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>버튼</button>
            <button onClick={handleDisable}>버튼</button>
        </>
    );
}

export default RefSample;
