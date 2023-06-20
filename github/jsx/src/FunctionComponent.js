import PropTypes from "prop-types";

const FunctionComponent = ({ name, age, children }) => {
    const classes = "kdt7";
    return (
        <>
            <hr />
            <div>Hello Function Component</div>
            <div>Hello {classes === "kdt7" ? `kdt7기 ${name}입니다.` : "누구세요?"}</div>
            <div>나이는 {`${age}입니다.`}</div>
            <div>{children}</div>
        </>
    );
};

FunctionComponent.defaultProps = {
    name: "무기명",
    age: 20,
};

FunctionComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

export default FunctionComponent;
