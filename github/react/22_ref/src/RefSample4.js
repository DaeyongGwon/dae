import React from "react";

class RefSample4 extends React.Component {
    myInput = React.createRef();

    handleFocus = () => {
        this.myInput.current.focus();
    };

    render() {
        return (
            <>
                <p>클래스형 컴포넌트에서 버튼 클릭시 input focusing 2번째 방법</p>
                <input type="text" ref={this.myInput} />
                <button onClick={this.handleFocus}>버튼</button>
            </>
        );
    }
}

export default RefSample4;
