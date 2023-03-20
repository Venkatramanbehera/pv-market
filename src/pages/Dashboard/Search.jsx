export const Search = () => (
  <>
    <div className="dashboard-wrapper">
      <div data-hover="false" data-delay={0} className="new-button w-dropdown">
        <nav className="add-menu w-dropdown-list">
          <a href="plan.html" className="add-link w-inline-block">
            <img
              src="images/Note.svg"
              loading="lazy"
              width={27}
              alt=""
              className="sidebar-icon"
            />
            <div className="sidebar-link-text">New Task</div>
          </a>
          <a href="plan.html" className="add-link w-inline-block">
            <img
              src="images/EnvelopeOpen.svg"
              loading="lazy"
              width={27}
              alt=""
              className="sidebar-icon"
            />
            <div className="sidebar-link-text">New Email</div>
          </a>
          <a href="plan.html" className="add-link w-inline-block">
            <img
              src="images/CalendarBlank.svg"
              loading="lazy"
              width={27}
              alt=""
              className="sidebar-icon"
            />
            <div className="sidebar-link-text">New Event</div>
          </a>
        </nav>
      </div>
      <div
        data-collapse="medium"
        data-animation="over-left"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="sidebar-nav w-nav"
      >
        <nav role="navigation" className="dashboard-sidebar w-nav-menu">
          <div className="sidebar-logo-section">
            <a href="dashboard.html" className="dashboard-logo w-nav-brand">
              <img
                src="images/PVMarket-Logo.png"
                width={150}
                alt=""
                className="sidebar-logo"
              />
            </a>
            <div
              data-w-id="09e608d3-5d29-ea1c-8250-9e1401f1ec35"
              className="sidebar-collapse"
            >
              <img src="images/Collapse-Icon.svg" loading="lazy" alt="" />
            </div>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-menu-section bottom-divider">
              <a href="dashboard.html" className="sidebar-link w-inline-block">
                <img
                  src="images/House.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Dashboard</div>
              </a>
              <link rel="prefetch" href="/" />
              <a href="plan.html" className="sidebar-link w-inline-block">
                <img
                  src="images/Note.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Tasks</div>
              </a>
              <link rel="prefetch" href="/tasks" />
              <a href="wallet.html" className="sidebar-link w-inline-block">
                <img
                  src="images/EnvelopeOpen.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Emails</div>
              </a>
              <link rel="prefetch" href="/emails" />
              <a href="profile.html" className="sidebar-link w-inline-block">
                <img
                  src="images/CalendarBlank.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Calendar</div>
              </a>
              <link rel="prefetch" href="/calender" />
              <a href="settings.html" className="sidebar-link w-inline-block">
                <img
                  src="images/Boards.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Board</div>
              </a>
            </div>
            <div className="sidebar-menu-section bottom-divider">
              <a href="topup.html" className="sidebar-link w-inline-block">
                <img
                  src="images/Users.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Customers</div>
              </a>
              <a href="support.html" className="sidebar-link w-inline-block">
                <img
                  src="images/Chats.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Support</div>
              </a>
            </div>
          </div>
          <div className="sidebar-footer">
            <a
              href="pages/sign-in.html"
              className="sidebar-link w-inline-block"
            >
              <img
                src="images/Question.svg"
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
          <img src="images/Menu.svg" loading="lazy" width={22} alt="" />
        </div>
      </div>
      <div className="dashboard-main">
        <div className="sidebar-spacer" />
        <div className="dashboard-content">
          <div
            data-collapse="all"
            data-animation="default"
            data-duration={0}
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="dashboard-nav w-nav"
          >
            <img
              className="md-hidden"
              src="images/PVMarket-Logo.png"
              width={125}
            />
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
            <a
              href="https://webflow.com/templates/html/dawn-dashboard-website-template"
              target="_blank"
              className="button upgrade w-button"
            >
              Get Template
            </a>
            <div
              data-hover="false"
              data-delay={0}
              className="nav-dropdown w-dropdown"
            >
              <div className="nav-dropdown-toggle w-dropdown-toggle">
                <div className="nav-icon-item" />
              </div>
              <nav className="nav-dropdown-list w-dropdown-list">
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
                        Tasks are now upgraded with a whole bunch more features
                        to make it easier.
                      </p>
                    </div>
                    <div className="notificaiton-element seen">
                      <div className="notification-top">
                        <div className="notification-dot seen" />
                        <div className="notificaiton-title">
                          No Contact Limit
                        </div>
                      </div>
                      <p className="notification-description">
                        You wanted no limit on the contact list, and delivered!
                        The contact list is now unlimited.
                      </p>
                    </div>
                    <a href="#" className="module-button w-button">
                      See all updates
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay={0}
              className="nav-dropdown w-dropdown"
            >
              <div className="nav-dropdown-toggle w-dropdown-toggle">
                <div className="nav-icon-item">
                  <img
                    src="images/Bell.svg"
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
                    <a href="#" className="module-button w-button">
                      See all notifications
                    </a>
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
                data-w-id="b24ef7f8-86e5-1c85-e1c5-b65466441b29"
                className="profile-menu w-dropdown-toggle"
              >
                <div className="profile-image">
                  <img
                    src="images/profile250.jpg"
                    loading="lazy"
                    alt=""
                    className="cover-image"
                  />
                </div>
                <img
                  src="images/CaretDown.svg"
                  loading="lazy"
                  width={15}
                  alt=""
                  className="menu-down"
                />
              </div>
              <nav className="profile-menu-list w-dropdown-list">
                <a href="profile.html" className="profile-menu-link w-nav-link">
                  My Profile
                </a>
                <a
                  href="settings.html"
                  className="profile-menu-link w-nav-link"
                >
                  Settings
                </a>
                <div className="menu-divider" />
                <a
                  href="pages/terms-conditions.html"
                  className="profile-menu-link w-nav-link"
                >
                  Terms &amp; Conditions
                </a>
                <a
                  href="pages/privacy-policy.html"
                  className="profile-menu-link w-nav-link"
                >
                  Privacy Policy
                </a>
                <div className="menu-divider" />
                <a
                  href="pages/sign-in.html"
                  className="profile-menu-link w-nav-link"
                >
                  Log Out
                </a>
              </nav>
            </div>
          </div>
          <div className="dashboard-main-content">
            <div className="w-container">
              <h1 className="page-title">Search Results</h1>
            </div>
          </div>
          <div className="dashboard-footer">
            <p className="paragraph-small light">
              © Dawn All Rights Reserved・&nbsp;Built by&nbsp;
              <a
                href="https://www.nikolaibain.com"
                target="_blank"
                className="simple-link light"
              >
                Nikolai Bain
              </a>
              &nbsp;・&nbsp;Powered by{" "}
              <a
                href="https://webflow.com"
                target="_blank"
                className="simple-link light"
              >
                Webflow
              </a>{" "}
              ・&nbsp;Template{" "}
              <a
                href="template-resources/licenses.html"
                target="_blank"
                className="simple-link light"
              >
                License
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* [if lte IE 9]><![endif] */}
  </>
);
