import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Components/Pages/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
