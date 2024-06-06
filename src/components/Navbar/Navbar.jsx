import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User Logged Out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/updateProfile">Update Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-10"
            src="https://i.ibb.co/mTt7Cbm/landscape.png"
            alt=""
          />
          <a className="btn btn-ghost text-xl">Land Legacy</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            
            <div
              className="tooltip  tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-customTeal ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
            <div className="ml-3">
              <a
                onClick={handleLogout}
                className="btn btn-sm btn-error text-white"
              >
                Sign Out
              </a>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
