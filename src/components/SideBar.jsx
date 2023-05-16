import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import boards from "../assets/images/Boards.svg";
import users from "../assets/images/Users.svg";
import chats from "../assets/images/Chats.svg";
import question from "../assets/images/Question.svg";
import menu from "../assets/images/Menu.svg";
import logo from "../assets/images/PVMarket-Logo.png";
import collapse from "../assets/images/Collapse-Icon.svg";
import house from "../assets/images/House.svg";
import note from "../assets/images/Note.svg";
import envolopeOpen from "../assets/images/EnvelopeOpen.svg";
import calendarBlank from "../assets/images/CalendarBlank.svg";
import { LogOut } from "../utils/Global";
import CompanyProfileContext from "../contexts/companyProfileContext";

const SideBar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { isOpen, handleChangeIsOpen } = props;
  const { companyProfile,setContextCompanyProfile } = useContext(CompanyProfileContext);
  let navigate = useNavigate();

  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  const location = useLocation();
  return (
    <>
      <div
        data-collapse="medium"
        data-animation="over-left"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="sidebar-nav w-nav"
        style={isOpen ? { width: "75px" } : {}}
      >
        <nav
          role="navigation"
          ref={ref}
          className={`dashboard-sidebar w-nav-menu${
            navbarOpen ? " show-menu" : ""
          }`}
          style={isOpen ? { width: "75px" } : {}}
        >
          <div className="sidebar-logo-section">
            {!isOpen ? (
              <Link to={"/dashboard"}>
                <img src={logo} width={150} alt="" className="sidebar-logo" />
              </Link>
            ) : null}

            <div
              className={
                isOpen ? "sidebar-collapse-transform" : "sidebar-collapse"
              }
              onClick={handleChangeIsOpen}
            >
              <img src={collapse} loading="lazy" alt="" />
            </div>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-menu-section bottom-divider">
              <Link
                to={"/dashboard"}
                className={
                  location.pathname === "/dashboard"
                    ? "sidebar-link w-inline-block w--current"
                    : "sidebar-link w-inline-block"
                }
              >
                <img
                  src={house}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                {!isOpen ? (
                  <div className="sidebar-link-text">Dashboard</div>
                ) : null}
              </Link>
              <Link
                to={"/plan"}
                className={
                  location.pathname === "/plan"
                    ? "sidebar-link w-inline-block w--current"
                    : "sidebar-link w-inline-block"
                }
              >
                <img
                  src={note}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                {!isOpen ? <div className="sidebar-link-text">Plan</div> : null}
              </Link>
              <Link
                to={"/wallet"}
                className={
                  location.pathname === "/wallet"
                    ? "sidebar-link w-inline-block w--current"
                    : "sidebar-link w-inline-block"
                }
              >
                <img
                  src={envolopeOpen}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                {!isOpen ? (
                  <div className="sidebar-link-text">Wallet</div>
                ) : null}
              </Link>
              <Link
                to={"/profile"}
                className={
                  location.pathname === "/profile"
                    ? "sidebar-link w-inline-block w--current"
                    : "sidebar-link w-inline-block"
                }
              >
                <img
                  src={calendarBlank}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                {!isOpen ? (
                  <div className="sidebar-link-text">Profile</div>
                ) : null}
              </Link>
              <Link
                to={"/setting"}
                className={
                  location.pathname === "/setting"
                    ? "sidebar-link w-inline-block w--current"
                    : "sidebar-link w-inline-block"
                }
              >
                <img
                  src={boards}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                {!isOpen ? (
                  <div className="sidebar-link-text">Setting</div>
                ) : null}
              </Link>
            </div>
            <div className="sidebar-menu-section bottom-divider">
              <Link
                to={"/topup"}
                className={
                  location.pathname === "/topup"
                    ? "sidebar-link w-inline-block w--current"
                    : "sidebar-link w-inline-block"
                }
              >
                <img
                  src={users}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                {!isOpen ? (
                  <div className="sidebar-link-text">Top up</div>
                ) : null}
              </Link>
              <Link
                to={"/support"}
                className={
                  location.pathname === "/support"
                    ? "sidebar-link w-inline-block w--current"
                    : "sidebar-link w-inline-block"
                }
              >
                <img
                  src={chats}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                {!isOpen ? (
                  <div className="sidebar-link-text">Support</div>
                ) : null}
              </Link>
            </div>
          </div>
          <div className="sidebar-footer">
            <Link
              onClick={() => { LogOut(navigate,setContextCompanyProfile) }}
              className={
                location.pathname === "/"
                  ? "sidebar-link w-inline-block w--current"
                  : "sidebar-link w-inline-block"
              }
            >
              <img
                src={question}
                loading="lazy"
                width={27}
                alt=""
                className="sidebar-icon"
              />
              {!isOpen ? (
                <div className="sidebar-link-text">Log out</div>
              ) : null}
            </Link>
          </div>
        </nav>
        <div className="sidebar-button w-nav-button">
          <img
            src={menu}
            loading="lazy"
            width={22}
            alt=""
            onClick={() => setNavbarOpen((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
