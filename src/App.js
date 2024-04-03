import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./Components/Layout/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
