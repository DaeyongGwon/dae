import { Link } from "react-router-dom";

export const users = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김유신" },
    { id: 3, name: "유관순" },
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
