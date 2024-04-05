import { Route, Routes } from "react-router-dom"
import IndexPosts from "./IndexPosts"
import PostPage from "./PostPage"
import CreatePost from "./CreatePost"
import PostEdit from "./PostEdit"

const PostsRouter = ({

}) => {

    return <>
        <Routes>
            <Route path="/" element={<IndexPosts />} />
            <Route path="/:postId" element={<PostPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:postId" element={<PostEdit />} />
        </Routes>
    </>
}

export default PostsRouter
