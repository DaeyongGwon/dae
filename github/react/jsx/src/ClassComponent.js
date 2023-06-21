import React from "react";
import PropTypes from "prop-types";
// another way to import React
// import { Component } from "react";
// class ClassComponent extends Component

class ClassComponent extends React.Component {
    render() {
        const classes = "kdt7";
        const { name, age } = this.props;
        return (
            <>
                <div>Hello Class Component</div>
                <div>Hello {classes === "kdt7" ? `${name}` : "누구세요?"}</div>
                <div>나이는 {`${age}`}</div>
            </>
        );
    }
}

ClassComponent.defaultProps = {
    name: "대용",
    age: 20,
};

ClassComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};
export default ClassComponent;
