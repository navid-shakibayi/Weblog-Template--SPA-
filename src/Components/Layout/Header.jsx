import { NavLink } from "react-router-dom"

const Header = ({

}) => {

    const ctaStyle = "block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
    const ctaActiveStyle = "block rounded-lg bg-red-300 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-200 focus:outline-none focus:ring"

    return <>
        <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 classNameName="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Navid!</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <NavLink
                            to="/"
                            className={(navData) => navData.isActive ? `${ctaActiveStyle}` : `${ctaStyle}`}
                        >
                            <span className="text-sm font-medium"> Home </span>
                        </NavLink>

                        <NavLink
                            to="/users"
                            className={(navData) => navData.isActive ? `${ctaActiveStyle}` : `${ctaStyle}`}
                        >
                            Users
                        </NavLink>

                        <NavLink
                            to="/posts"
                            className={(navData) => navData.isActive ? `${ctaActiveStyle}` : `${ctaStyle}`}
                        >
                            Posts
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header
