import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"

const PostEdit = ({

}) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [firstLoading, setFirstLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { postId } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.org/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                setFirstLoading(false)
                setError(null)
                setTitle(post.title)
                setContent(post.content)
            }).catch(err => {
                setError(err.message)
                setFirstLoading(false)
            })
    }, [post])


    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body: content,
                userId: 1,
                id: post.id
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Good job!",
                    text: "Post update successfully!",
                    icon: "success"
                });
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }

    return <>
        <section className="max-w-7xl mx-auto px-5">
            <h1 className="text-3xl font-bold mb-6">Edit Post :</h1>

            {firstLoading && <div className="grid min-h-[140px] w-full overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24">
                    <path
                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                    </path>
                </svg>
            </div>}

            {post && <form
                className="lg:max-w-2xl sm:max-w-screen-sm"
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className="flex flex-col mb-6">
                    <label
                        htmlFor="title"
                        className="text-2xl mb-2"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="border-2 border-indigo-700 focus:outline-none bg-gray-100 p-2 text-xl text-zinc-600 rounded-lg shadow-lg"
                        onChange={(e) => setTitle(e.target.value)}
                        defaultValue={title}
                    />
                    <p className="text-red-400 mt-2">{title ? '' : 'Title is required'}</p>
                </div>

                <div className="flex flex-col mb-6">
                    <label
                        htmlFor="content"
                        className="text-2xl mb-2"
                    >
                        Content
                    </label>
                    <textarea
                        id="content"
                        cols="30"
                        rows="10"
                        className="border-2 border-indigo-700 focus:outline-none bg-gray-100 p-2 text-xl text-zinc-600 rounded-lg shadow-lg"
                        onChange={(e) => setContent(e.target.value)}
                        defaultValue={content}
                    ></textarea>
                    <p className="text-red-400 mt-2">{content ? '' : 'Content is required'}</p>
                </div>

                <button
                    type="submit"
                    className="w-fit rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition enabled:hover:bg-red-300 focus:outline-none focus:ring disabled:opacity-50 disabled:hover:none flex gap-2"
                    disabled={title == '' || content == ''}
                >
                    Edit
                    {loading && <div>
                        <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                            width="18" height="18">
                            <path
                                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                            </path>
                        </svg>
                    </div>}
                </button>
                {error && <p>Can not connect to server</p>}
            </form>}
        </section>
    </>
}

export default PostEdit
