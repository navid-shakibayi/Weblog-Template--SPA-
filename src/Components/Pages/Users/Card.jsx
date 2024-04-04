import { Link } from "react-router-dom"

const Card = ({
    users,
}) => {

    return <>
        <section className="flex flex-col gap-6 px-5 md:grid grid-cols-2 xl:grid-cols-3 mt-6">
            {users.map(user => {
                return <Link to={`/users/${user.id}`} key={user.id} className="w-full hover:shadow-lg transition duration-500 hover:scale-105 cursor-pointer">
                    <div className="">
                        <p className="bg-indigo-700 text-white px-2 py-1 text-xl font-medium rounded-t-lg">{user.name}</p>
                        <ul className="flex flex-col divide-y-4 divide-indigo-300 border-b-4 border-x-4 border-indigo-300 rounded-b">
                            <li className="px-2 py-1 text-lg">Username : {user.username}</li>
                            <li className="px-2 py-1 text-lg">Email : {user.email}</li>
                            <li className="px-2 py-1 text-lg">Phone : {user.phone}</li>
                        </ul>
                    </div>
                </Link>
            })}
        </section>
    </>
}

export default Card
