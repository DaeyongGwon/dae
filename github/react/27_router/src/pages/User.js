import { Link } from "react-router-dom";

export const users = [
    { id: 1, name: "홍길동", comment: [{ text: "안녕하세요" }] },
    { id: 2, name: "김유신", comment: [{ text: "반갑습니다" }] },
    { id: 3, name: "유관순", comment: [{ text: "배고파요" }] },
];
function User() {
    return (
        <>
            <ul>
                {users.map((value) => {
                    return (
                        <li key={value.id}>
                            <Link to={`/user/${value.id}`}>{value.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default User;
