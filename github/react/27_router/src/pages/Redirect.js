import { useEffect } from "react";
import { userNavigate } from "../lib/user-navigate";
function Redirect() {
    const navi = userNavigate();

    useEffect(() => {
        navi("/");
    }, []);

    return null;
}

export default Redirect;
