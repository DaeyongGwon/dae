import React from "react";
import PropTypes from "prop-types";

class Test4 extends React.Component {
    handleClick = () => {
        console.log("콘솔 띄우기 성공!");
    };

    render() {
        const { text } = this.props;

        return (
            <>
                <hr />
                <h2>App 컴포넌트에서 넘겨준 text props입니다.</h2>
                <p>{text}</p>
                <button type="button" onClick={this.handleClick}>
                    콘솔 메세지
                </button>
            </>
        );
    }
}

Test4.defaultProps = {
    text: "이건 기본 text props입니다.",
};

Test4.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Test4;
