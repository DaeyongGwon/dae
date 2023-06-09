import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./User";
function UserDetail() {
    const { userId } = useParams();
    return (
        <>
            <div>
                접속하신 고객 {userId}의 성함은 : {users[Number(userId) - 1].name}
            </div>
            <Link to={"comment"}>comment</Link>
            <Outlet
                context={{
                    name: users[Number(userId) - 1].name,
                    comment: users[Number(userId) - 1].comment,
                }}
            />
        </>
    );
}

export default UserDetail;
