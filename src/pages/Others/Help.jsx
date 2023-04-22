import { Link } from "react-router-dom";
import bell from "../../assets/images/Bell.svg";

export const Help = () => (
  <>
    <div
      data-collapse="all"
      data-animation="default"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="simple-nav w-nav"
    >
      <a href="../dashboard.html" className="dashboard-logo w-nav-brand">
        <img
          src="../images/PVMarket-Logo.png"
          width={150}
          alt=""
          className="sidebar-logo"
        />
      </a>
      <div className="nav-spacer" />
      <Link to={"/dashboard"}>
        <a
          href="../dashboard.html"
          className="nav-link cta margin-right w-nav-link"
        >
          Back to Dashboard
        </a>
      </Link>
      <div
        data-hover="false"
        data-delay={0}
        className="nav-dropdown w-dropdown"
      >
        <div className="nav-dropdown-toggle w-dropdown-toggle" />
        <nav className="nav-dropdown-list w-dropdown-list">
          <div className="module">
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
              src="../images/Bell.svg"
              loading="lazy"
              width={27}
              alt=""
              className="nav-icon"
            />
            <div className="bell-dot" />
          </div>
        </div>
        <nav className="nav-dropdown-list w-dropdown-list">
          <div className="module">
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
          data-w-id="071f15f1-7dc5-0a4f-9c97-67534b35b4f2"
          className="profile-menu w-dropdown-toggle"
        >
          <div className="profile-image">
            <img
              src="../images/profile250.jpg"
              loading="lazy"
              alt=""
              className="cover-image"
            />
          </div>
          <img
            src="../images/CaretDown.svg"
            loading="lazy"
            width={15}
            alt=""
            className="menu-down"
          />
        </div>
        <nav className="profile-menu-list w-dropdown-list">
          <a href="../profile.html" className="profile-menu-link w-nav-link">
            My Profile
          </a>
          <a href="../settings.html" className="profile-menu-link w-nav-link">
            Settings
          </a>
          <div className="menu-divider" />
          <a
            href="../pages/help.html"
            aria-current="page"
            className="profile-menu-link w-nav-link w--current"
          >
            Help Center
          </a>
          <a
            href="../pages/contact-sales.html"
            className="profile-menu-link w-nav-link"
          >
            Report an Issue
          </a>
          <a
            href="../pages/terms-conditions.html"
            className="profile-menu-link w-nav-link"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="../pages/privacy-policy.html"
            className="profile-menu-link w-nav-link"
          >
            Privacy Policy
          </a>
          <a
            href="../template-resources/licenses.html"
            className="profile-menu-link w-nav-link"
          >
            Licenses
          </a>
          <a
            href="../template-resources/instructions.html"
            className="profile-menu-link w-nav-link"
          >
            Instructions
          </a>
          <div className="menu-divider" />
          <a
            href="../pages/sign-in.html"
            className="profile-menu-link w-nav-link"
          >
            Log Out
          </a>
        </nav>
      </div>
    </div>
    <div className="wrapper">
      <div className="main-content">
        <div className="container w-container">
          <h1 className="page-title">Help Center</h1>
          <div className="module-group">
            <div className="module">
              <div className="module-main large">
                <h3 className="module-heading large">How can we help?</h3>
                <div className="spacer _24" />
                <form action="/search" className="help-search w-form">
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
                    placeholder="Search for a topic"
                    id="search"
                    required=""
                  />
                </form>
                <h3 className="module-heading">All topics</h3>
                <div className="spacer _16" />
                <div className="_3-grid wf-section">
                  <div className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Account</h3>
                    </div>
                    <div className="module-main">
                      <ul role="list" className="link-list">
                        <Link to={"/helppage"}>
                          <li>
                            <a href="../pages/help-page.html">
                              Change account details
                            </a>
                          </li>
                        </Link>
                        <Link to={"/helppage"}>
                          <li>
                            <a href="../pages/help-page.html">
                              Update password
                            </a>
                          </li>
                        </Link>
                        <Link to={"/helppage"}>
                          <li>
                            <a href="../pages/help-page.html">
                              Edit email notifications
                            </a>
                          </li>
                        </Link>
                        <Link to={"/helppage"}>
                          <li>
                            <a href="../pages/help-page.html">
                              Delete your account
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                  <div className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Billing &amp; Pricing</h3>
                    </div>
                    <div className="module-main">
                      <ul role="list" className="link-list">
                        <li>
                          <a href="../pages/help-page.html">Update plan</a>
                        </li>
                        <li>
                          <a href="../pages/help-page.html">
                            Change payment details
                          </a>
                        </li>
                        <li>
                          <a href="../pages/help-page.html">Request refund</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Security</h3>
                    </div>
                    <div className="module-main">
                      <ul role="list" className="link-list">
                        <li>
                          <a href="../pages/help-page.html">
                            Change account details
                          </a>
                        </li>
                        <li>
                          <a href="#">Update password</a>
                        </li>
                        <li>
                          <a href="#">Edit email notifications</a>
                        </li>
                        <li>
                          <a href="#">Delete your account</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Using Dawn</h3>
                    </div>
                    <div className="module-main">
                      <ul role="list" className="link-list">
                        <li>
                          <a href="../pages/help-page.html">
                            Learn about tasks
                          </a>
                        </li>
                        <li>
                          <a href="../pages/help-page.html">
                            Learn about the calender
                          </a>
                        </li>
                        <li>
                          <a href="../pages/help-page.html">
                            Learn about the board
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Teams</h3>
                    </div>
                    <div className="module-main">
                      <ul role="list" className="link-list">
                        <li>
                          <a href="../pages/help-page.html">
                            Remove members from team
                          </a>
                        </li>
                        <li>
                          <a href="#">Update password</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Device Types</h3>
                    </div>
                    <div className="module-main">
                      <ul role="list" className="link-list">
                        <li>
                          <a href="#">Change account details</a>
                        </li>
                        <li>
                          <a href="#">Update password</a>
                        </li>
                        <li>
                          <a href="#">Edit email notifications</a>
                        </li>
                        <li>
                          <a href="#">Delete your account</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Our Apps</h3>
                    </div>
                    <div className="module-main">
                      <ul role="list" className="link-list">
                        <li>
                          <a href="#">Change account details</a>
                        </li>
                        <li>
                          <a href="#">Update password</a>
                        </li>
                        <li>
                          <a href="#">Edit email notifications</a>
                        </li>
                        <li>
                          <a href="#">Delete your account</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Rules and Policies</h3>
                    </div>
                    <div className="module-main">
                      <ul role="list" className="link-list">
                        <li>
                          <a href="#">Change account details</a>
                        </li>
                        <li>
                          <a href="#">Delete your account</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="module">
              <div className="module-main large">
                <h3 className="module-heading large">
                  Can't find what you're looking for?
                  <br />
                  Email us below.
                </h3>
                <div className="spacer _24" />
                <div className="w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    className="form"
                  >
                    <div className="_2-fields-split">
                      <div className="field-block">
                        <label htmlFor="name">First name*</label>
                        <input
                          type="text"
                          className="text-input w-input"
                          maxLength={256}
                          name="name"
                          data-name="Name"
                          placeholder="Your first name"
                          id="field"
                          required=""
                        />
                      </div>
                      <div className="field-spacer" />
                      <div className="field-block">
                        <label htmlFor="profile-email">Last name*</label>
                        <input
                          type="text"
                          className="text-input w-input"
                          maxLength={256}
                          name="name"
                          data-name="Name"
                          placeholder="Your last name"
                          id="field"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="_2-fields-split">
                      <div className="field-block">
                        <label htmlFor="name">Email*</label>
                        <input
                          type="email"
                          className="text-input w-input"
                          maxLength={256}
                          name="profile-email"
                          data-name="profile-email"
                          placeholder="example@email.com"
                          id="field"
                          required=""
                        />
                      </div>
                      <div className="field-spacer" />
                      <div className="field-block">
                        <label htmlFor="number">Phone number</label>
                        <input
                          type="tel"
                          className="text-input w-input"
                          maxLength={256}
                          name="number"
                          data-name="Number"
                          placeholder="027 123 1234"
                          id="number"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="field-block">
                      <label htmlFor="Username">How can we help?</label>
                      <textarea
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                        maxLength={5000}
                        data-name="Field"
                        name="field"
                        id="field"
                        className="text-area full-width w-input"
                        defaultValue={""}
                      />
                    </div>
                    <input
                      type="submit"
                      defaultValue="Submit"
                      data-wait="Please wait..."
                      className="button w-button"
                    />
                  </form>
                  <div className="form-success w-form-done">
                    <div>Thank you for your email.</div>
                  </div>
                  <div className="form-error w-form-fail">
                    <div>
                      Oops! Something went wrong. Please fill in the required
                      fields and try again.
                    </div>
                  </div>
                </div>
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
          href="../template-resources/licenses.html"
          target="_blank" rel="noreferrer"
          className="simple-link light"
        >
          License
        </a>
      </p>
    </div>
    {/* [if lte IE 9]><![endif] */}
  </>
);
