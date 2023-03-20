export const StyleGuide = () => (
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
            <a href="../dashboard.html" className="dashboard-logo w-nav-brand">
              <img
                src="../images/PVMarket-Logo.png"
                width={150}
                alt=""
                className="sidebar-logo"
              />
            </a>
            <div
              data-w-id="9c0041da-08f1-6f98-cd1b-f85affa39f76"
              className="sidebar-collapse"
            >
              <img src="../images/Collapse-Icon.svg" loading="lazy" alt="" />
            </div>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-menu-section bottom-divider">
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/TextT.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Typography</div>
              </a>
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/TextAlignLeft.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Rich Text</div>
              </a>
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/CircleHalf.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Colours</div>
              </a>
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/BrowsersSimple.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Buttons</div>
              </a>
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/Triangle.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Icons</div>
              </a>
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/Pencil.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Forms</div>
              </a>
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/Browsers.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Tabs</div>
              </a>
            </div>
            <div className="sidebar-menu-section bottom-divider">
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/SquaresFour.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Layouts</div>
              </a>
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/Cube.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Module Blocks</div>
              </a>
              <a href="#" className="sidebar-link w-inline-block">
                <img
                  src="../images/CornersOut.svg"
                  loading="lazy"
                  width={27}
                  alt=""
                  className="sidebar-icon"
                />
                <div className="sidebar-link-text">Spacers</div>
              </a>
            </div>
          </div>
        </nav>
        <div className="sidebar-button w-nav-button">
          <img src="../images/Menu.svg" loading="lazy" width={22} alt="" />
        </div>
      </div>
      <div className="dashboard-main">
        <div className="sidebar-spacer" />
        <div className="dashboard-content">
          <div
            data-collapse="none"
            data-animation="default"
            data-duration={400}
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="dashboard-nav w-nav"
          >
            <div className="nav-spacer" />
            <a href="../dashboard.html" className="nav-link cta w-nav-link">
              Back to Home
            </a>
          </div>
          <div className="main-section wf-section">
            <div className="wrapper">
              <div id="Module-Elements" className="ds-section">
                <div className="ds-section-header">
                  <h3 className="ds-title">Module Blocks</h3>
                  <p className="ds-description">
                    Different building blocks that can be used across the
                    different dashboard pages
                  </p>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-4">
                    <h5>Info Block</h5>
                    <div className="module">
                      <div className="module-header minimal">
                        <h3 className="module-heading">New Customers</h3>
                      </div>
                      <div className="module-main">
                        <div className="module-number">12</div>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                  <div className="column desk-2 tab-0">
                    <div className="spacer _24" />
                  </div>
                  <div className="column desk-5">
                    <h5>Info Block</h5>
                    <div className="module">
                      <div className="module-header">
                        <h3 className="module-heading">New Tickets</h3>
                      </div>
                      <div className="module-main">
                        <div className="empty-module-insert">
                          <img
                            src="../images/Check.svg"
                            loading="lazy"
                            width={27}
                            alt=""
                            className="empty-icon"
                          />
                          <div>
                            No new <br />
                            tickets
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-5">
                    <h5>Schedule Block</h5>
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
                              <a
                                href="#"
                                className="filter-option w-dropdown-link"
                              >
                                Last Week
                              </a>
                              <a
                                href="#"
                                className="filter-option w-dropdown-link"
                              >
                                This Month
                              </a>
                            </nav>
                          </div>
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
                            id="w-node-_4d980848-6ee5-77ca-678c-ee7f595486b0-80f34a30"
                            className="schedule-div"
                          >
                            <div>Prepare Orders</div>
                          </div>
                          <div
                            id="w-node-_4d980848-6ee5-77ca-678c-ee7f595486b3-80f34a30"
                            className="schedue-time"
                          >
                            <div>11 AM</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                  <div className="column desk-1 tab-0">
                    <div className="spacer _24" />
                  </div>
                  <div className="column desk-5">
                    <h5>Tasks Block</h5>
                    <div className="module">
                      <div className="module-header">
                        <h3 className="module-heading">Tasks</h3>
                        <div className="module-filters">
                          <a
                            href="../plan.html"
                            className="module-button add w-button"
                          >
                            +
                          </a>
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
                                data-w-id="4d980848-6ee5-77ca-678c-ee7f595486c7"
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
                                Link styles have the wrong colours on mobile,
                                titles…
                              </p>
                            </div>
                            <div className="checkbox-element">
                              <label
                                data-w-id="4d980848-6ee5-77ca-678c-ee7f595486d0"
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
                          </form>
                          <div className="w-form-done">
                            <div>
                              Thank you! Your submission has been received!
                            </div>
                          </div>
                          <div className="w-form-fail">
                            <div>
                              Oops! Something went wrong while submitting the
                              form.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer _48">
                      <div className="spacer _48" />
                    </div>
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-5">
                    <h5>Email Block</h5>
                    <div className="module">
                      <div className="module-header">
                        <h3 className="module-heading">Latest Emails</h3>
                        <a
                          href="../wallet.html"
                          className="module-button w-button"
                        >
                          See All
                        </a>
                      </div>
                      <div className="module-main">
                        <div>
                          <div>
                            <div className="notification-top">
                              <div className="notification-dot" />
                              <div className="notificaiton-title">
                                AudioHunt
                              </div>
                              <div className="email-time">1:34pm</div>
                            </div>
                            <p className="notification-subtitle">
                              New music is out!
                            </p>
                            <p className="notification-description">
                              The playlist made just for you, every Friday
                            </p>
                          </div>
                          <div className="email-element">
                            <div className="notification-top">
                              <div className="notification-dot" />
                              <div className="notificaiton-title">
                                Gooble Accounts
                              </div>
                              <div className="email-time">9:39am</div>
                            </div>
                            <p className="notification-subtitle">
                              Security alert
                            </p>
                            <p className="notification-description">
                              A new device from New York has signed in
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                  <div className="column desk-1 tab-0">
                    <div className="spacer _24" />
                  </div>
                  <div className="column desk-5">
                    <h5>Kanban Block</h5>
                    <div className="module">
                      <div className="module-header minimal">
                        <h3 className="module-heading">To Do</h3>
                      </div>
                      <div className="module-main">
                        <div className="board-element">
                          <h3 className="module-heading">
                            Provide new lunch options
                          </h3>
                        </div>
                        <div className="board-element">
                          <h3 className="module-heading">
                            Get new watercooler
                          </h3>
                        </div>
                        <div className="add-card">
                          <div>+ Add a card</div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-5">
                    <h5>Settings Block</h5>
                    <div id="Edit-Profile" className="module">
                      <div className="module-header minimal">
                        <h3 className="module-heading">Account Settings</h3>
                      </div>
                      <div className="module-main">
                        <div className="settings-div">
                          <div className="settings-label">Language</div>
                          <div
                            data-hover="false"
                            data-delay={0}
                            className="account-dropdown w-dropdown"
                          >
                            <div className="settings-dropdown-toggle w-dropdown-toggle">
                              <div className="filter-dropdown-icon w-icon-dropdown-toggle" />
                              <div>English</div>
                            </div>
                            <nav className="filter-dropdown-3 w-dropdown-list">
                              <a
                                href="#"
                                className="filter-option w-dropdown-link"
                              >
                                English
                              </a>
                              <a
                                href="#"
                                className="filter-option w-dropdown-link"
                              >
                                French
                              </a>
                              <a
                                href="#"
                                className="filter-option w-dropdown-link"
                              >
                                Spanish
                              </a>
                              <a
                                href="#"
                                className="filter-option w-dropdown-link"
                              >
                                German
                              </a>
                            </nav>
                          </div>
                        </div>
                        <div className="w-form">
                          <form
                            data-name="Email Form"
                            name="email-form"
                            id="email-form"
                            method="get"
                            className="form"
                          >
                            <div className="divider" />
                            <label className="w-checkbox checkbox-element">
                              <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" />
                              <input
                                type="checkbox"
                                defaultChecked=""
                                name="checkbox-4"
                                data-name="Checkbox 4"
                                id="checkbox"
                                style={{
                                  opacity: 0,
                                  position: "absolute",
                                  zIndex: -1,
                                }}
                              />
                              <span
                                htmlFor="checkbox-4"
                                className="checkbox-label w-form-label"
                              >
                                Opt out of recommendations based on your
                                activity
                              </span>
                            </label>
                          </form>
                          <div className="form-success w-form-done">
                            <div>
                              Thank you! Your message has been received!
                            </div>
                          </div>
                          <div className="form-error w-form-fail">
                            <div>
                              Oops! Something went wrong. Please fill in the
                              required fields and try again.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                  <div className="column desk-1 tab-0">
                    <div className="spacer _24" />
                  </div>
                  <div className="column desk-5">
                    <h5>Menu Block</h5>
                    <div id="Edit-Profile" className="module">
                      <div className="menu-list-section">
                        <a href="#" className="menu-link w-inline-block">
                          <div className="sidebar-link-text">
                            Account Settings
                          </div>
                        </a>
                        <a href="#" className="menu-link w-inline-block">
                          <div className="sidebar-link-text">Password</div>
                        </a>
                        <a href="#" className="menu-link w-inline-block">
                          <div className="sidebar-link-text">
                            Email Notifications
                          </div>
                        </a>
                        <a href="#" className="menu-link w-inline-block">
                          <div className="sidebar-link-text">
                            Desktop Notifications
                          </div>
                        </a>
                        <a href="#" className="menu-link w-inline-block">
                          <div className="sidebar-link-text">Close Account</div>
                        </a>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-11">
                    <h5>Calendar Block</h5>
                    <div className="module">
                      <div
                        data-delay={4000}
                        data-animation="cross"
                        className="calender w-slider"
                        data-autoplay="false"
                        data-easing="ease"
                        data-hide-arrows="false"
                        data-disable-swipe="false"
                        data-autoplay-limit={0}
                        data-nav-spacing={3}
                        data-duration={500}
                        data-infinite="true"
                      >
                        <div className="calender-mask w-slider-mask">
                          <div className="calender-month w-slide">
                            <div className="module-header minimal">
                              <h3 className="calender-title">February 2021</h3>
                            </div>
                            <div className="module-main">
                              <div className="calender-row head">
                                <h4 className="grid-header">Sun</h4>
                                <h4 className="grid-header">Mon</h4>
                                <h4 className="grid-header">Tue</h4>
                                <h4 className="grid-header">Wed</h4>
                                <h4 className="grid-header">Thu</h4>
                                <h4 className="grid-header">Fri</h4>
                                <h4 className="grid-header">Sat</h4>
                              </div>
                              <div className="calender-row">
                                <div className="calender-square grey">
                                  <div className="calender-number">31</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number light">1</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number blue">2</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">3</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number light">4</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">5</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">6</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">7</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">8</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">9</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">10</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">11</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number light">
                                    12
                                  </div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number light">
                                    13
                                  </div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">14</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">15</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number">16</div>
                                </div>
                                <div className="calender-square">
                                  <div className="calender-number blue">17</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="calender-left-arrow w-slider-arrow-left">
                          <div className="w-icon-slider-left" />
                        </div>
                        <div className="calender-right-arrow w-slider-arrow-right">
                          <div className="w-icon-slider-right" />
                        </div>
                        <div className="slide-nav w-slider-nav w-round" />
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                  <div className="column desk-1 tab-0">
                    <div className="spacer _24" />
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-11">
                    <h5>List Block</h5>
                    <div className="module">
                      <div className="module-main">
                        <div className="grid-section">
                          <div className="customer-row head">
                            <div className="checkbox-grid w-form">
                              <form
                                id="email-form"
                                name="email-form"
                                data-name="Email Form"
                                method="get"
                              >
                                <label
                                  data-w-id="4d980848-6ee5-77ca-678c-ee7f595487b8"
                                  className="w-checkbox checkbox-field-simple"
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
                                    className="hidden-checkbox-label w-form-label"
                                  >
                                    Fix CSS styling on mobile
                                  </span>
                                </label>
                              </form>
                              <div className="w-form-done">
                                <div>
                                  Thank you! Your submission has been received!
                                </div>
                              </div>
                              <div className="w-form-fail">
                                <div>
                                  Oops! Something went wrong while submitting
                                  the form.
                                </div>
                              </div>
                            </div>
                            <h4 className="grid-header">Customer</h4>
                            <h4 className="grid-header">Email</h4>
                            <h4 className="grid-header mob-hidden">Number</h4>
                          </div>
                          <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                              <div role="listitem" className="w-dyn-item">
                                <div className="customer-row">
                                  <div className="checkbox-grid w-form">
                                    <form
                                      id="email-form"
                                      name="email-form"
                                      data-name="Email Form"
                                      method="get"
                                    >
                                      <label
                                        data-w-id="4d980848-6ee5-77ca-678c-ee7f595487ce"
                                        className="w-checkbox checkbox-field-simple"
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
                                          className="hidden-checkbox-label w-form-label"
                                        >
                                          Fix CSS styling on mobile
                                        </span>
                                      </label>
                                    </form>
                                    <div className="w-form-done">
                                      <div>
                                        Thank you! Your submission has been
                                        received!
                                      </div>
                                    </div>
                                    <div className="w-form-fail">
                                      <div>
                                        Oops! Something went wrong while
                                        submitting the form.
                                      </div>
                                    </div>
                                  </div>
                                  <div />
                                  <div />
                                  <div className="grid-block mob-hidden">
                                    <div />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-dyn-empty">
                              <div>No items found.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                  <div className="column desk-1 tab-0">
                    <div className="spacer _24" />
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-11">
                    <h5>Tab List Block</h5>
                    <div className="module">
                      <div
                        data-duration-in={300}
                        data-duration-out={100}
                        data-current="Tab 1"
                        data-easing="ease"
                        className="w-tabs"
                      >
                        <div className="module-tabs w-tab-menu">
                          <a
                            data-w-tab="Tab 1"
                            className="tab w-inline-block w-tab-link w--current"
                          >
                            <div>All</div>
                          </a>
                          <a
                            data-w-tab="Tab 5"
                            className="tab w-inline-block w-tab-link"
                          >
                            <div>New</div>
                          </a>
                          <a
                            data-w-tab="Tab 2"
                            className="tab w-inline-block w-tab-link"
                          >
                            <div>Open</div>
                          </a>
                          <a
                            data-w-tab="Tab 4"
                            className="tab w-inline-block w-tab-link"
                          >
                            <div>Issues</div>
                          </a>
                        </div>
                        <div className="module-main w-tab-content">
                          <div
                            data-w-tab="Tab 1"
                            className="w-tab-pane w--tab-active"
                          >
                            <div className="grid-section">
                              <div className="support-row head">
                                <div className="checkbox-grid w-form">
                                  <form
                                    id="email-form"
                                    name="email-form"
                                    data-name="Email Form"
                                    method="get"
                                  >
                                    <label
                                      data-w-id="4d980848-6ee5-77ca-678c-ee7f595487fb"
                                      className="w-checkbox checkbox-field-simple"
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
                                        className="hidden-checkbox-label w-form-label"
                                      >
                                        Fix CSS styling on mobile
                                      </span>
                                    </label>
                                  </form>
                                  <div className="w-form-done">
                                    <div>
                                      Thank you! Your submission has been
                                      received!
                                    </div>
                                  </div>
                                  <div className="w-form-fail">
                                    <div>
                                      Oops! Something went wrong while
                                      submitting the form.
                                    </div>
                                  </div>
                                </div>
                                <h4 className="grid-header">Ticket #</h4>
                                <h4 className="grid-header mob-hidden">Date</h4>
                                <h4 className="grid-header">Customer</h4>
                                <h4 className="grid-header">Status</h4>
                              </div>
                              <div className="w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                  <div role="listitem" className="w-dyn-item">
                                    <div className="support-row">
                                      <div className="checkbox-grid w-form">
                                        <form
                                          id="email-form"
                                          name="email-form"
                                          data-name="Email Form"
                                          method="get"
                                        >
                                          <label
                                            data-w-id="4d980848-6ee5-77ca-678c-ee7f59548813"
                                            className="w-checkbox checkbox-field-simple"
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
                                              className="hidden-checkbox-label w-form-label"
                                            >
                                              Fix CSS styling on mobile
                                            </span>
                                          </label>
                                        </form>
                                        <div className="w-form-done">
                                          <div>
                                            Thank you! Your submission has been
                                            received!
                                          </div>
                                        </div>
                                        <div className="w-form-fail">
                                          <div>
                                            Oops! Something went wrong while
                                            submitting the form.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid-number-block">
                                        <div>#</div>
                                        <div />
                                      </div>
                                      <div className="grid-block mob-hidden">
                                        <div />
                                      </div>
                                      <div />
                                      <div>
                                        <div className="tag new">New</div>
                                        <div className="tag">Open</div>
                                        <div className="tag issues">Issues</div>
                                        <div className="tag closed">Closed</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-dyn-empty">
                                  <div>No items found.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-w-tab="Tab 5" className="w-tab-pane">
                            <div className="grid-section">
                              <div className="support-row head">
                                <div className="checkbox-grid w-form">
                                  <form
                                    id="email-form"
                                    name="email-form"
                                    data-name="Email Form"
                                    method="get"
                                  >
                                    <label
                                      data-w-id="4d980848-6ee5-77ca-678c-ee7f59548835"
                                      className="w-checkbox checkbox-field-simple"
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
                                        className="hidden-checkbox-label w-form-label"
                                      >
                                        Fix CSS styling on mobile
                                      </span>
                                    </label>
                                  </form>
                                  <div className="w-form-done">
                                    <div>
                                      Thank you! Your submission has been
                                      received!
                                    </div>
                                  </div>
                                  <div className="w-form-fail">
                                    <div>
                                      Oops! Something went wrong while
                                      submitting the form.
                                    </div>
                                  </div>
                                </div>
                                <h4 className="grid-header">Ticket #</h4>
                                <h4 className="grid-header mob-hidden">Date</h4>
                                <h4 className="grid-header">Customer</h4>
                                <h4 className="grid-header">Status</h4>
                              </div>
                              <div className="w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                  <div role="listitem" className="w-dyn-item">
                                    <div className="support-row">
                                      <div className="checkbox-grid w-form">
                                        <form
                                          id="email-form"
                                          name="email-form"
                                          data-name="Email Form"
                                          method="get"
                                        >
                                          <label
                                            data-w-id="4d980848-6ee5-77ca-678c-ee7f5954884d"
                                            className="w-checkbox checkbox-field-simple"
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
                                              className="hidden-checkbox-label w-form-label"
                                            >
                                              Fix CSS styling on mobile
                                            </span>
                                          </label>
                                        </form>
                                        <div className="w-form-done">
                                          <div>
                                            Thank you! Your submission has been
                                            received!
                                          </div>
                                        </div>
                                        <div className="w-form-fail">
                                          <div>
                                            Oops! Something went wrong while
                                            submitting the form.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid-number-block">
                                        <div>#</div>
                                        <div />
                                      </div>
                                      <div className="grid-block mob-hidden">
                                        <div />
                                      </div>
                                      <div />
                                      <div>
                                        <div className="tag new">New</div>
                                        <div className="tag">Open</div>
                                        <div className="tag issues">Issues</div>
                                        <div className="tag closed">Closed</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-dyn-empty">
                                  <div>No items found.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-w-tab="Tab 2" className="w-tab-pane">
                            <div className="grid-section">
                              <div className="support-row head">
                                <div className="checkbox-grid w-form">
                                  <form
                                    id="email-form"
                                    name="email-form"
                                    data-name="Email Form"
                                    method="get"
                                  >
                                    <label
                                      data-w-id="4d980848-6ee5-77ca-678c-ee7f5954886f"
                                      className="w-checkbox checkbox-field-simple"
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
                                        className="hidden-checkbox-label w-form-label"
                                      >
                                        Fix CSS styling on mobile
                                      </span>
                                    </label>
                                  </form>
                                  <div className="w-form-done">
                                    <div>
                                      Thank you! Your submission has been
                                      received!
                                    </div>
                                  </div>
                                  <div className="w-form-fail">
                                    <div>
                                      Oops! Something went wrong while
                                      submitting the form.
                                    </div>
                                  </div>
                                </div>
                                <h4 className="grid-header">Ticket #</h4>
                                <h4 className="grid-header mob-hidden">Date</h4>
                                <h4 className="grid-header">Customer</h4>
                                <h4 className="grid-header">Status</h4>
                              </div>
                              <div className="w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                  <div role="listitem" className="w-dyn-item">
                                    <div className="support-row">
                                      <div className="checkbox-grid w-form">
                                        <form
                                          id="email-form"
                                          name="email-form"
                                          data-name="Email Form"
                                          method="get"
                                        >
                                          <label
                                            data-w-id="4d980848-6ee5-77ca-678c-ee7f59548887"
                                            className="w-checkbox checkbox-field-simple"
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
                                              className="hidden-checkbox-label w-form-label"
                                            >
                                              Fix CSS styling on mobile
                                            </span>
                                          </label>
                                        </form>
                                        <div className="w-form-done">
                                          <div>
                                            Thank you! Your submission has been
                                            received!
                                          </div>
                                        </div>
                                        <div className="w-form-fail">
                                          <div>
                                            Oops! Something went wrong while
                                            submitting the form.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid-number-block">
                                        <div>#</div>
                                        <div />
                                      </div>
                                      <div className="grid-block mob-hidden">
                                        <div />
                                      </div>
                                      <div />
                                      <div>
                                        <div className="tag new">New</div>
                                        <div className="tag">Open</div>
                                        <div className="tag issues">Issues</div>
                                        <div className="tag closed">Closed</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-dyn-empty">
                                  <div>No items found.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-w-tab="Tab 4" className="w-tab-pane">
                            <div className="grid-section">
                              <div className="support-row head">
                                <div className="checkbox-grid w-form">
                                  <form
                                    id="email-form"
                                    name="email-form"
                                    data-name="Email Form"
                                    method="get"
                                  >
                                    <label
                                      data-w-id="4d980848-6ee5-77ca-678c-ee7f595488a9"
                                      className="w-checkbox checkbox-field-simple"
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
                                        className="hidden-checkbox-label w-form-label"
                                      >
                                        Fix CSS styling on mobile
                                      </span>
                                    </label>
                                  </form>
                                  <div className="w-form-done">
                                    <div>
                                      Thank you! Your submission has been
                                      received!
                                    </div>
                                  </div>
                                  <div className="w-form-fail">
                                    <div>
                                      Oops! Something went wrong while
                                      submitting the form.
                                    </div>
                                  </div>
                                </div>
                                <h4 className="grid-header">Ticket #</h4>
                                <h4 className="grid-header mob-hidden">Date</h4>
                                <h4 className="grid-header">Customer</h4>
                                <h4 className="grid-header">Status</h4>
                              </div>
                              <div className="w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                  <div role="listitem" className="w-dyn-item">
                                    <div className="support-row">
                                      <div className="checkbox-grid w-form">
                                        <form
                                          id="email-form"
                                          name="email-form"
                                          data-name="Email Form"
                                          method="get"
                                        >
                                          <label
                                            data-w-id="4d980848-6ee5-77ca-678c-ee7f595488c1"
                                            className="w-checkbox checkbox-field-simple"
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
                                              className="hidden-checkbox-label w-form-label"
                                            >
                                              Fix CSS styling on mobile
                                            </span>
                                          </label>
                                        </form>
                                        <div className="w-form-done">
                                          <div>
                                            Thank you! Your submission has been
                                            received!
                                          </div>
                                        </div>
                                        <div className="w-form-fail">
                                          <div>
                                            Oops! Something went wrong while
                                            submitting the form.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid-number-block">
                                        <div>#</div>
                                        <div />
                                      </div>
                                      <div className="grid-block mob-hidden">
                                        <div />
                                      </div>
                                      <div />
                                      <div>
                                        <div className="tag new">New</div>
                                        <div className="tag">Open</div>
                                        <div className="tag issues">Issues</div>
                                        <div className="tag closed">Closed</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-dyn-empty">
                                  <div>No items found.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer _48" />
                  </div>
                  <div className="column desk-1 tab-0">
                    <div className="spacer _24" />
                  </div>
                </div>
                <div className="horizontal-line design-system" />
              </div>
              <div id="Spacers" className="ds-section">
                <div className="ds-section-header">
                  <h3 className="ds-title">Spacers</h3>
                  <p className="ds-description">
                    Spacer elements using the 8-pt grid to give sections more
                    room to breathe.
                  </p>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-9">
                    <div>
                      <h5>16 px</h5>
                      <div className="visible-spacer">
                        <div className="spacer _16" />
                      </div>
                    </div>
                    <div>
                      <h5>24 px</h5>
                      <div className="visible-spacer">
                        <div className="spacer _24" />
                      </div>
                    </div>
                  </div>
                  <div className="column desk-9">
                    <div>
                      <h5>32 px</h5>
                      <div className="visible-spacer">
                        <div className="spacer _32" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-9">
                    <div>
                      <h5>48 PX</h5>
                      <div className="visible-spacer">
                        <div className="spacer _48" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-9">
                    <div>
                      <h5>64 PX</h5>
                      <div className="visible-spacer">
                        <div className="spacer _64" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-9">
                    <div>
                      <h5>80 PX</h5>
                      <div className="visible-spacer">
                        <div className="spacer _80" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-9">
                    <div>
                      <h5>96 PX</h5>
                      <div className="visible-spacer">
                        <div className="spacer _96" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ds-columns align-top">
                  <div className="column desk-9">
                    <div>
                      <h5>128 PX</h5>
                      <div className="visible-spacer">
                        <div className="spacer _128" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line design-system" />
              </div>
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
                href="../template-resources/licenses.html"
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
