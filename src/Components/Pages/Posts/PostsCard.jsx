import { Link } from "react-router-dom"

const PostsCard = ({
    posts,
}) => {

    return <>
        <section className="flex flex-col gap-6 md:grid grid-cols-2 xl:grid-cols-3 mt-6">
            {posts.map(item => {
                return <Link to={`/posts/${item.id}`} key={item.id} className="w-full hover:shadow-lg transition duration-500 hover:scale-105 cursor-pointer">
                    <div className="">
                        <p className="bg-indigo-700 text-white px-2 py-1 text-xl font-medium rounded-t-lg line-clamp-1">{item.title}</p>
                        <ul className="flex flex-col divide-y-4 divide-indigo-300 border-b-4 border-x-4 border-indigo-300 rounded-b">
                            <li className="px-2 py-1 text-lg line-clamp-6">{item.content}</li>
                        </ul>
                    </div>
                </Link>
            })}
        </section>
    </>
}

export default PostsCard
