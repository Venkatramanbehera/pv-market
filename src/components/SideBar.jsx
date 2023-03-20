import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChangeIsOpen = () => {
    setIsOpen(!isOpen);
  };
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
          className="dashboard-sidebar w-nav-menu"
          style={isOpen ? { width: "75px" } : {}}
        >
          <div className="sidebar-logo-section">
            {!isOpen ? (
              <Link to={"/dashboard"}>
                <img src={logo} width={150} alt="" className="sidebar-logo" />
              </Link>
            ) : null}

            <div
              data-w-id="09e608d3-5d29-ea1c-8250-9e1401f1ec35"
              className="sidebar-collapse"
              onClick={handleChangeIsOpen}
            >
              <img src={collapse} loading="lazy" alt="" />
            </div>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-menu-section bottom-divider">
              <Link
                to={"/dashboard"}
                className="sidebar-link w-inline-block w--current"
              >
                <img
                  src={house}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Dashboard</div>
              </Link>
              <Link to={"/plan"} className="sidebar-link w-inline-block">
                <img
                  src={note}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Plan</div>
              </Link>
              <Link to={"/wallet"} className="sidebar-link w-inline-block">
                <img
                  src={envolopeOpen}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Wallet</div>
              </Link>
              <Link to={"/profile"} className="sidebar-link w-inline-block">
                <img
                  src={calendarBlank}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Profile</div>
              </Link>
              <Link to={"/setting"} className="sidebar-link w-inline-block">
                <img
                  src={boards}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Setting</div>
              </Link>
            </div>
            <div className="sidebar-menu-section bottom-divider">
              <Link to={"/topup"} className="sidebar-link w-inline-block">
                <img
                  src={users}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Top up</div>
              </Link>
              <Link to={"/support"} className="sidebar-link w-inline-block">
                <img
                  src={chats}
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Support</div>
              </Link>
            </div>
          </div>
          <div className="sidebar-footer">
            <a
              href="pages/sign-in.html"
              className="sidebar-link w-inline-block"
            >
              <img
                src={question}
                loading="lazy"
                width={27}
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">Log out</div>
            </a>
          </div>
        </nav>
        <div className="sidebar-button w-nav-button">
          <img src={menu} loading="lazy" width={22} alt="" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
