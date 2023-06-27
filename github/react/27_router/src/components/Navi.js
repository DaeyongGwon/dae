import { Link } from "react-router-dom";

function Navi() {
    return (
        <>
            <ul>
                <li>
                    <Link to={"/"}>HOME</Link>
                </li>
                <li>
                    <Link to={"/about"}>ABOUT</Link>
                </li>
            </ul>
        </>
    );
}

export default Navi;
