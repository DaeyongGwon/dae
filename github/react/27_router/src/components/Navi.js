import { Link, useNavigate } from "react-router-dom";

function Navi() {
    const navi = useNavigate();

    const onClick = () => {
        navi("/");
    };
    return (
        <>
            <ul>
                <li>
                    <Link to={"/"}>HOME</Link>
                </li>
                <li>
                    <Link to={"/about"}>ABOUT</Link>
                </li>
                <li>
                    <Link to={"/user"}>User</Link>
                </li>
                <li>
                    <button onClick={onClick}>Redirect</button>
                    <Link to={"/about"}>Redirect</Link>
                </li>

                <li>
                    <Link to={"https://www.naver.com"}>네이버</Link>
                </li>
            </ul>
        </>
    );
}

export default Navi;
