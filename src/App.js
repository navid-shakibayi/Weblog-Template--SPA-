import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Components/Pages/Home";
import UserRouter from "./Components/Pages/Users/UserRouter";
import PostsRouter from "./Components/Pages/Posts/PostsRouter";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/*" element={<UserRouter />} />
                    <Route path="/posts/*" element={<PostsRouter />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
