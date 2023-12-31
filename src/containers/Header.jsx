import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

import { openRightDrawer } from "../features/common/rightDrawerSlice";

// eslint-disable-next-line no-unused-vars
import { NavLink, Routes, Link, useLocation } from "react-router-dom";

export function Header() {
  const dispatch = useDispatch();
  const { noOfNotifications, pageTitle } = useSelector((state) => state.header);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  useEffect(() => {
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
    // 👆 false parameter is required for react project
  }, []);

  // Opening right sidebar for notification
  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "Notifications",
        bodyType: "NOTIFICATION",
      })
    );
  };

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div className="navbar flex justify-between bg-base-100 z-999 shadow-md ">
        {/* Menu toogle for mobile view or small screen */}
        <div className="">
          {/* <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <Bars3Icon className="h-5 inline-block w-5" />
          </label> */}
          <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
        </div>

        <div className="order-last">
          {/* Multiple theme selection, uncomment this if you want to enable multiple themes selection, 
                also includes corporate and retro themes in tailwind.config file */}

          {/* <select className="select select-sm mr-4" data-choose-theme>
                    <option disabled selected>Theme</option>
                    <option value="light">Default</option>
                    <option value="dark">Dark</option>
                    <option value="corporate">Corporate</option>
                    <option value="retro">Retro</option>
                </select> */}

          {/* Light and dark theme selection toogle **/}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="business"
            />

            {/* sun icon */}
            <SunIcon className="swap-on fill-current w-6 h-6" />

            {/* moon icon */}
            <MoonIcon className="swap-off fill-current w-6 h-6" />
          </label>

          {/* Notification icon */}
          {/* <button
            className="btn btn-ghost ml-4  btn-circle"
            onClick={() => openNotification()}
          >
            <div className="indicator">
              <BellIcon className="h-6 w-6" />
              {noOfNotifications > 0 ? (
                <span className="indicator-item badge badge-secondary badge-sm">
                  {noOfNotifications}
                </span>
              ) : null}
            </div>
          </button> */}

          {/* Profile icon, opening menu on click */}
          <div className="dropdown dropdown-end ml-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  alt="profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <li className="justify-between">
                <Link to={"/app/settings-profile"}>
                  Profile Settings
                  <span className="badge">New</span>
                </Link>
              </li> */}
              {/* <li className="">
                <Link to={"/app/settings-billing"}>Bill History</Link>
              </li> */}
              {/* <div className="divider mt-0 mb-0"></div> */}
              <li>
                <a onClick={logoutUser}>Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-gray-300" />
      </div>
    </>
  );
}

export default Header;
