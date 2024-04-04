import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Components/Pages/Home";
import UserRouter from "./Components/Pages/Users/UserRouter";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/*" element={<UserRouter />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
