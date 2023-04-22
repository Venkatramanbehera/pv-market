export const EditDashboard = () => (
  <>
    <div className="dashboard-wrapper">
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
              target="_blank" rel="noreferrer"
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
            <div className="dashboard-page-header">
              <h2>Editing Dashboard</h2>
              <a href="dashboard.html" className="button page blue w-button">
                Finish Editing
              </a>
            </div>
            <div className="_4-grid wf-section">
              <div className="module blue">
                <div className="module-header minimal">
                  <h3 className="module-heading">New Orders</h3>
                  <div
                    data-w-id="16ca4274-4d06-adb2-a98b-6079407a713f"
                    className="x-button"
                  >
                    <div>+</div>
                  </div>
                </div>
                <div className="module-main">
                  <div className="module-number blue">4</div>
                </div>
              </div>
              <div className="module">
                <div className="module-header minimal">
                  <h3 className="module-heading">New Customers</h3>
                  <div
                    data-w-id="43abd582-51b5-8287-b2a8-95f005ec1f87"
                    className="x-button"
                  >
                    <div>+</div>
                  </div>
                </div>
                <div className="module-main">
                  <div className="module-number">12</div>
                </div>
              </div>
              <div className="module">
                <div className="module-header minimal">
                  <h3 className="module-heading">Open</h3>
                  <div
                    data-w-id="aecac88b-77fc-cb26-aa05-6757a2078066"
                    className="x-button"
                  >
                    <div>+</div>
                  </div>
                </div>
                <div className="module-main">
                  <div className="module-number">23</div>
                </div>
              </div>
              <div className="module">
                <div className="module-header minimal">
                  <h3 className="module-heading">On Hold</h3>
                  <div
                    data-w-id="b5e12812-4717-4359-c4fc-0f83c455cb2a"
                    className="x-button"
                  >
                    <div>+</div>
                  </div>
                </div>
                <div className="module-main">
                  <div className="module-number">8</div>
                </div>
              </div>
            </div>
            <div className="_2-grid wf-section">
              <div className="module">
                <div className="module-header">
                  <h3 className="module-heading">Schedule</h3>
                  <div className="module-filters">
                    <div
                      data-hover="false"
                      data-delay={0}
                      className="module-dropdown w-dropdown"
                    >
                      <div className="dropdown-toggle w-dropdown-toggle">
                        <div className="filter-dropdown-icon w-icon-dropdown-toggle" />
                        <div>Today</div>
                      </div>
                      <nav className="filter-dropdown-3 w-dropdown-list">
                        <a href="#" className="filter-option w-dropdown-link">
                          Last Week
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          This Month
                        </a>
                      </nav>
                    </div>
                  </div>
                  <div
                    data-w-id="7ce852e6-25c7-699c-c8de-20f0a087dac9"
                    className="x-button"
                  >
                    <div>+</div>
                  </div>
                </div>
                <div className="module-main">
                  <div className="w-layout-grid schedule-grid">
                    <div className="schedue-time">
                      <div>9 AM</div>
                    </div>
                    <div className="schedule-div current">
                      <div>Task Review</div>
                    </div>
                    <div className="schedue-time">
                      <div>10 AM</div>
                    </div>
                    <div
                      id="w-node-_959a354b-02a4-d6ee-e036-3d5fa50113ba-4df34a1b"
                      className="schedule-div"
                    >
                      <div>Prepare Orders</div>
                    </div>
                    <div
                      id="w-node-_959a354b-02a4-d6ee-e036-3d5fa50113bd-4df34a1b"
                      className="schedue-time"
                    >
                      <div>11 AM</div>
                    </div>
                    <div className="schedue-time">
                      <div>12 PM</div>
                    </div>
                    <div
                      id="w-node-_959a354b-02a4-d6ee-e036-3d5fa50113c3-4df34a1b"
                      className="schedule-div"
                    >
                      <div>Update Website</div>
                    </div>
                    <div className="schedue-time">
                      <div>1 PM</div>
                    </div>
                    <div
                      id="w-node-_959a354b-02a4-d6ee-e036-3d5fa50113c9-4df34a1b"
                      className="schedule-div blank"
                    />
                    <div className="schedue-time">
                      <div>2 PM</div>
                    </div>
                    <div className="schedule-div">
                      <div>Skype with Jason</div>
                    </div>
                    <div className="schedue-time">
                      <div>3 PM</div>
                    </div>
                    <div
                      id="w-node-_959a354b-02a4-d6ee-e036-3d5fa50113d3-4df34a1b"
                      className="schedule-div blank"
                    />
                    <div className="schedue-time">
                      <div>4 PM</div>
                    </div>
                    <div
                      id="w-node-_959a354b-02a4-d6ee-e036-3d5fa50113d7-4df34a1b"
                      className="schedule-div"
                    >
                      <div>Send Orders</div>
                    </div>
                    <div className="schedue-time">
                      <div>5 PM</div>
                    </div>
                    <div
                      id="w-node-_959a354b-02a4-d6ee-e036-3d5fa50113dd-4df34a1b"
                      className="schedule-div blank"
                    />
                  </div>
                </div>
              </div>
              <div className="module">
                <div className="module-header">
                  <h3 className="module-heading">Tasks</h3>
                  <div className="module-filters">
                    <a href="plan.html" className="module-button add w-button">
                      +
                    </a>
                  </div>
                  <div
                    data-w-id="e7f8c127-130b-1bfd-d54c-db2c2ef3e28a"
                    className="x-button"
                  >
                    <div>+</div>
                  </div>
                </div>
                <div className="module-main">
                  <div className="w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                    >
                      <div className="checkbox-element">
                        <label
                          data-w-id="4033bb17-797a-ce2d-56e3-42cfe9ddcf0a"
                          className="w-checkbox checkbox-top"
                        >
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-8"
                            name="checkbox-8"
                            data-name="Checkbox 8"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="checkbox-8"
                            className="task-title w-form-label"
                          >
                            Fix CSS styling on mobile
                          </span>
                          <div className="tag task">Urgent</div>
                        </label>
                        <p className="task-description">
                          Link styles have the wrong colours on mobile, titles…
                        </p>
                      </div>
                      <div className="checkbox-element">
                        <label
                          data-w-id="4033bb17-797a-ce2d-56e3-42cfe9ddcf11"
                          className="w-checkbox checkbox-top"
                        >
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-8"
                            name="checkbox-8"
                            data-name="Checkbox 8"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="checkbox-8"
                            className="task-title w-form-label"
                          >
                            Fix javascript filtering issue
                          </span>
                        </label>
                        <p className="task-description">
                          there is a filtering issue on the customers page
                        </p>
                      </div>
                      <div className="checkbox-element">
                        <label
                          data-w-id="4033bb17-797a-ce2d-56e3-42cfe9ddcf18"
                          className="w-checkbox checkbox-top"
                        >
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-7"
                            name="checkbox-7"
                            data-name="Checkbox 7"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="checkbox-7"
                            className="task-title w-form-label"
                          >
                            Change homepage &nbsp;illustration
                          </span>
                          <div className="tag task">Urgent</div>
                        </label>
                      </div>
                      <div className="checkbox-element">
                        <label
                          data-w-id="4033bb17-797a-ce2d-56e3-42cfe9ddcf1d"
                          className="w-checkbox checkbox-top"
                        >
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-6"
                            name="checkbox-6"
                            data-name="Checkbox 6"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="checkbox-6"
                            className="task-title w-form-label"
                          >
                            Send monthly invoices
                          </span>
                        </label>
                      </div>
                      <div className="checkbox-element">
                        <label
                          data-w-id="4033bb17-797a-ce2d-56e3-42cfe9ddcf22"
                          className="w-checkbox checkbox-top"
                        >
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-8"
                            name="checkbox-8"
                            data-name="Checkbox 8"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="checkbox-8"
                            className="task-title w-form-label"
                          >
                            Help support with tickets
                          </span>
                        </label>
                        <p className="task-description">
                          Ask Jamie which ones are most urgent
                        </p>
                      </div>
                      <div className="checkbox-element">
                        <label
                          data-w-id="4033bb17-797a-ce2d-56e3-42cfe9ddcf29"
                          className="w-checkbox checkbox-top"
                        >
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-5"
                            name="checkbox-5"
                            data-name="Checkbox 5"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="checkbox-5"
                            className="task-title w-form-label"
                          >
                            Recalculate MRR
                          </span>
                        </label>
                      </div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="_2-1-grid wf-section">
              <div className="module">
                <div className="module-header">
                  <h3 className="module-heading">Latest Emails</h3>
                  <a href="wallet.html" className="module-button w-button">
                    See All
                  </a>
                  <div
                    data-w-id="13783405-4a60-1806-b07a-2c982c1b3c7f"
                    className="x-button"
                  >
                    <div>+</div>
                  </div>
                </div>
                <div className="module-main">
                  <div className="notificaiton-element">
                    <div className="notification-top">
                      <div className="notification-dot" />
                      <div className="notificaiton-title">AudioHunt</div>
                    </div>
                    <p className="notification-subtitle">New music is out!</p>
                    <p className="notification-description">
                      The playlist made just for you, every Friday
                    </p>
                  </div>
                  <div className="notificaiton-element">
                    <div className="notification-top">
                      <div className="notification-dot" />
                      <div className="notificaiton-title">Domains R Us</div>
                    </div>
                    <p className="notification-subtitle">
                      Your domain will expire soon
                    </p>
                    <p className="notification-description">
                      Your domain “nicehats.com” is set to expire
                    </p>
                  </div>
                  <div className="notificaiton-element">
                    <div className="notification-top">
                      <div className="notification-dot" />
                      <div className="notificaiton-title">Gooble Accounts</div>
                    </div>
                    <p className="notification-subtitle">Security alert</p>
                    <p className="notification-description">
                      A new device from New York has signed in
                    </p>
                  </div>
                </div>
              </div>
              <div className="module">
                <div className="module-header">
                  <h3 className="module-heading">Notifications</h3>
                  <div
                    data-w-id="a4524501-d470-ec88-ca40-96ba225d3206"
                    className="x-button"
                  >
                    <div>+</div>
                  </div>
                </div>
                <div className="module-main">
                  <div className="empty-module-insert">
                    <img
                      src="images/Check.svg"
                      loading="lazy"
                      width={27}
                      alt=""
                      className="empty-icon"
                    />
                    <div>
                      No new <br />
                      notifications
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-footer">
            <p className="paragraph-small light">
              © Dawn All Rights Reserved・&nbsp;Built by&nbsp;
              <a
                href="https://www.nikolaibain.com"
                target="_blank" rel="noreferrer"
                className="simple-link light"
              >
                Nikolai Bain
              </a>
              &nbsp;・&nbsp;Powered by{" "}
              <a
                href="https://webflow.com"
                target="_blank" rel="noreferrer"
                className="simple-link light"
              >
                Webflow
              </a>{" "}
              ・&nbsp;Template{" "}
              <a
                href="template-resources/licenses.html"
                target="_blank" rel="noreferrer"
                className="simple-link light"
              >
                License
              </a>
            </p>
          </div>
        </div>
        <div
          data-hover="false"
          data-delay={0}
          className="new-button w-dropdown"
        >
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
      </div>
    </div>
    {/* [if lte IE 9]><![endif] */}
  </>
);
