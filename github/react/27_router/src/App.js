import { Outlet } from "react-router-dom";
import "./App.css";
import Navi from "./components/Navi";
import User from "./pages/User";

function App() {
    return (
        <>
            <Navi />
            <Outlet />
        </>
    );
}

export default App;
