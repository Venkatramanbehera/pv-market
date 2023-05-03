import React, { useState } from "react";
import bell from "../assets/images/Bell.svg";
import profileimg from "../assets/images/profile250.jpg";
import caretDown from "../assets/images/CaretDown.svg";
import logo from "../assets/images/PVMarket-Logo.png";
import menu from "../assets/images/Menu.svg";
import { Link } from "react-router-dom";
import { logoutAPICall } from "../utils/Requests";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../utils/Global";
const Navbar = () => {
  const [notificationModal, setNotificationModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  let navigate = useNavigate();
  const handleOpenNotificationModal = () => {
    setNotificationModal(!notificationModal);
  };
  const handleProfileModal = () => {
    setProfileModal(!profileModal);
  };
  return (
    <>
    
      <div
        data-collapse="all"
        data-animation="default"
        data-duration={0}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="dashboard-nav w-nav"
      >
        <img className="md-hidden" src={logo} width={125} alt="" />

        <form action="/search" className="search w-form">
          <input
            type="submit"
            defaultValue="Search"
            className="search-button w-button"
          />
          <input
            type="search"
            className="search-input w-input"
            maxLength={256}
            name="query"
            placeholder="Search"
            id="search"
            required=""
          />
        </form>
        <div className="nav-spacer" />
        <Link to={"/topup"} className="button upgrade w-button">
          Top up Lead
        </Link>
        <div
          data-hover="false"
          data-delay={0}
          className="nav-dropdown w-dropdown"
        >
          <div
            className={
              notificationModal
                ? `nav-dropdown-toggle w-dropdown-toggle w--open`
                : "nav-dropdown-toggle w-dropdown-toggle"
            }
          >
            <div className="nav-icon-item" />
          </div>
          <nav
            className={
              notificationModal
                ? "nav-dropdown-list w-dropdown-list w--open"
                : "nav-dropdown-list w-dropdown-list"
            }
          >
            <div className="module heavy-shadow">
              <div className="module-main">
                <div className="notificaiton-element">
                  <div className="notification-top">
                    <div className="notification-dot" />
                    <div className="notificaiton-title">Email Snooze</div>
                  </div>
                  <p className="notification-description">
                    Emails can now be snoozed to be seen at a later time.
                  </p>
                </div>
                <div className="notificaiton-element seen">
                  <div className="notification-top">
                    <div className="notification-dot seen" />
                    <div className="notificaiton-title">Smarter Tasks</div>
                  </div>
                  <p className="notification-description">
                    Tasks are now upgraded with a whole bunch more features to
                    make it easier.
                  </p>
                </div>
                <div className="notificaiton-element seen">
                  <div className="notification-top">
                    <div className="notification-dot seen" />
                    <div className="notificaiton-title">No Contact Limit</div>
                  </div>
                  <p className="notification-description">
                    You wanted no limit on the contact list, and delivered! The
                    contact list is now unlimited.
                  </p>
                </div>
                <Link to={"#"} className="module-button w-button">
                  See all updates
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div
          data-hover="false"
          data-delay={0}
          className="nav-dropdown w-dropdown"
        >
          <div
            className="nav-dropdown-toggle w-dropdown-toggle"
            onClick={handleOpenNotificationModal}
          >
            <div className="nav-icon-item">
              <img
                src={bell}
                loading="lazy"
                width={27}
                alt=""
                className="nav-icon"
              />
              <div className="bell-dot" />
            </div>
          </div>
          <nav className="nav-dropdown-list w-dropdown-list">
            <div className="module heavy-shadow">
              <div className="module-main">
                <div className="notificaiton-element">
                  <div className="notification-top">
                    <div className="notification-dot" />
                    <div className="notificaiton-title">3 new emails</div>
                  </div>
                  <p className="notification-description">
                    From AudioHunt, Domains R Us, and Google Accounts.
                  </p>
                </div>
                <div className="notificaiton-element seen">
                  <div className="notification-top">
                    <div className="notification-dot seen" />
                    <div className="notificaiton-title">4 new orders</div>
                  </div>
                  <p className="notification-description">
                    There are new orders to be fulfilled.
                  </p>
                </div>
                <div className="notificaiton-element seen">
                  <div className="notification-top">
                    <div className="notification-dot seen" />
                    <div className="notificaiton-title">5 new tickets</div>
                  </div>
                  <p className="notification-description">
                    There are new tickets to be checked.
                  </p>
                </div>
                <Link className="module-button w-button">
                  See all notifications
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div
          data-hover="false"
          data-delay={0}
          className="profile-menu-dropdown w-dropdown"
        >
          <div
            className={
              profileModal
                ? "profile-menu w-dropdown-toggle w--open"
                : "profile-menu w-dropdown-toggle"
            }
          >
            <div className="profile-image" onClick={handleProfileModal}>
              <img
                src={profileimg}
                loading="lazy"
                alt=""
                className="cover-image"
              />
            </div>
            <img
              src={caretDown}
              loading="lazy"
              width={15}
              alt=""
              className="menu-down"
            />
          </div>
          <nav
            className={
              profileModal
                ? "profile-menu-list w-dropdown-list w--open"
                : "profile-menu-list w-dropdown-list"
            }
          >
            <Link to={"/profile"} className="profile-menu-link w-nav-link">
              My Profile
            </Link>
            <Link to={"/setting"} className="profile-menu-link w-nav-link">
              Settings
            </Link>
            <div className="menu-divider" />
            <Link
              to={"/termscondition"}
              className="profile-menu-link w-nav-link"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to={"/privacypolicy"}
              className="profile-menu-link w-nav-link"
            >
              Privacy Policy
            </Link>
            <div className="menu-divider" />
            <Link onClick={()=>{LogOut(navigate)}} className="profile-menu-link w-nav-link">
              Log Out
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
