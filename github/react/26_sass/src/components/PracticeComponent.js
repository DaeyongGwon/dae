import "../styles/Practice56.scss";
import styled, { keyframes } from "styled-components";

const Practice56 = styled.div`
    display: flex;
    flex-direction: column;
`;

const moveClockwise = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Circle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    margin: 5px;
    width: 100px;
    height: 100px;
    text-align: center;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    animation: ${moveClockwise} ${(props) => props.moveDuration}s linear infinite;
`;

function PracticeComponent() {
    return (
        <>
            <Practice56>
                <Circle bgColor="pink" moveDuration={10}>
                    1
                </Circle>
                <Circle bgColor="yellow" moveDuration={20}>
                    1
                </Circle>
                <Circle bgColor="green" moveDuration={30}>
                    1
                </Circle>
            </Practice56>
        </>
    );
}

export default PracticeComponent;
