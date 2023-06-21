import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Food from "./Food";
import Book from "./book";
import Test4 from "./Test4";
import "./App.css";
const name = "코카";
const animal = "강아지";
const title = "Hello World!";

function App() {
    return (
        <>
            <div>
                이것은 div입니다.
                <h3>이것은 div안에 있는 h3태그 입니다.</h3>
            </div>
            <hr />
            <h2>
                제 반려 동물의 이름은 <u>{name}</u>입니다. <u>{name}</u>는 <u>{animal}</u>입니다.
            </h2>
            <hr />
            <h2>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</h2>
            <hr />
            {(() => {
                const a = 10;
                const b = 5;
                return a > b && <h2>a가 b보다 큽니다.</h2>;
            })()}
            <hr />
            <div className="test">
                <div className="center">
                    <h2>{title}</h2>
                </div>
                <label htmlFor="userId">아이디 : </label>
                <input className="input" type="text" placeholder="아이디를 입력해주세요" />
                <br />
                <label htmlFor="userId">비밀번호 : </label>
                <input className="input" type="password" placeholder="비밀번호를 입력해주세요" />
            </div>
            <hr />
            <div className="box">
                <div className="red"></div>
                <div className="orange"></div>
                <div className="yellow"></div>
                <div className="green"></div>
                <div className="blue"></div>
                <div className="navy"></div>
                <div className="purple"></div>
            </div>
            <hr />
            <ClassComponent name={"권대용"} age={26} />

            <FunctionComponent name={"권대용"} />

            <Food food="사과"></Food>
            <Book title="나의 하루는 4시 40분에 시작된다." author="김유진" price="13,500" type="자기계발서"></Book>

            <Test4 text="콘솔 띄우기 성공!"></Test4>
        </>
    );
}

export default App;
