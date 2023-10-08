import { NavLink } from "react-router-dom";

const Navber = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline font-bold" : ""
          }
        >
          Home
        </NavLink>
        </li>

      <li>
      <NavLink
          to="/programme"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline font-bold" : ""
          }
        >
        Programme
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
          }
        >
          Log In
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/signup"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline font-bold" : ""
          }
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Institute of PH</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navber;
