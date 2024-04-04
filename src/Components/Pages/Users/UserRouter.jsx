import {
    Route,
    Routes,
} from "react-router-dom"
import IndexUsers from "./IndexUsers";
import UserPage from "./UserPage";

const UserRouter = ({

}) => {

    return <>
        <Routes>
            <Route path="/" element={<IndexUsers />} />
            <Route path="/:userId" element={<UserPage />} />
        </Routes>
    </>
}

export default UserRouter
