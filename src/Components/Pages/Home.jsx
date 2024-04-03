import { Link } from "react-router-dom"

const Home = ({

}) => {

    return <>
        <section className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2">
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio culpa perferendis neque sint odit, iste hic? <br /> Sed atque incidunt expedita cupiditate, repudiandae quas repellat et harum, minus dignissimos, laboriosam sapiente!</p>

                <div className="flex flex-col gap-2">
                    <Link to="/users" className="w-fit rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-300 focus:outline-none focus:ring">Users</Link>
                    <Link to="/posts" className="w-fit rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-300 focus:outline-none focus:ring">Posts</Link>
                </div>
            </div>
        </section>
    </>
}

export default Home
