import { useState, useRef } from "react";

function Prob() {
    const [inputWriter, setInputWriter] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [comment, setComment] = useState([]);
    const writerInputElem = useRef();
    const titleInputElem = useRef();
    const checkInput = () => {
        if (inputWriter.trim().length === 0) {
            writerInputElem.current.focus();
            return false;
        }
        if (inputTitle.trim().length === 0) {
            titleInputElem.current.focus();
            return false;
        }

        return true;
    };
    const addComment = () => {
        // 1. inputWriter, inputTitle의 값이 없으면 return
        if (!checkInput()) return;
        const newData = {
            id: comment.length + 1,
            title: inputTitle,
            writer: inputWriter,
        };
        // 2. comment에 {id: comment.length, title: inputTitle, writer: inputWriter} 추가
        setComment([...comment, newData]);

        // 3. inputWriter, inputTitle의 값을 ''로 변경
        setInputWriter("");
        setInputTitle("");
    };

    const handleKeyPress = (e) => {
        console.log("e", e);
        if (e.key === "Enter") {
            addComment();
        }
    };

    return (
        <>
            <form>
                <label htmlFor="writer">작성자: </label>
                <input
                    ref={writerInputElem}
                    id="writer"
                    value={inputWriter}
                    onChange={(e) => setInputWriter(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <label htmlFor="title">제목: </label>
                {/* 엔터 눌렀을때 작성 클릭되게 */}
                <input
                    ref={titleInputElem}
                    id="title"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button type="button" onClick={addComment}>
                    작성
                </button>
            </form>
            <hr />
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {comment.map((value) => {
                        return (
                            // value : {id: 0, title: "제목1", writer: "작성자1"} 식으로 나오게 만듬.
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Prob;
