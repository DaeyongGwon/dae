import styled from "styled-components";
const Origin = styled.div`
    display: flex;
`;

const Circle = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
`;

const StyledComponent = () => {
    return (
        <>
            <Origin>
                <Circle bgColor="purple"></Circle>
                <Circle bgColor="white" style={{ position: "absolute", width: "40px", height: "40px", left: "20px", top: "20px" }}></Circle>
                <Circle bgColor="black" style={{ position: "absolute", width: "20px", height: "20px", left: "20px", top: "25px" }}></Circle>
                <Circle bgColor="navy" style={{ right: "25px", top: "40px" }}></Circle>
                <Circle bgColor="blue" style={{ right: "55px", top: "80px" }}></Circle>
                <Circle bgColor="green" style={{ right: "75px", top: "80px" }}></Circle>
                <Circle bgColor="yellow" style={{ right: "95px", top: "80px" }}></Circle>
            </Origin>
        </>
    );
};

export default StyledComponent;
