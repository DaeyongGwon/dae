import { useOutletContext } from "react-router-dom";
function Comment() {
    const { name, comment } = useOutletContext();
    console.log("data", name, comment);
    return (
        <>
            <div>이름은 : {name}</div>
            {comment.map((value, index) => {
                return <div key={index}>댓글 : {value.text}</div>;
            })}
        </>
    );
}
export default Comment;
