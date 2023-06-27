import "./App.css";
import Origin from "./components/Origin";
// import StyledComponent from "./components/StyledComponent";
import PracticeComponent from "./components/PracticeComponent";
// import SassComponent from "./components/SassComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            {/* <Origin /> */}
            {/* <SassComponent /> */}
            {/* <StyledComponent /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PracticeComponent />} />
                    <Route path="/origin" element={<Origin />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
