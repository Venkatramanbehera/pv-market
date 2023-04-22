import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["English", "French", "Spanish", "German"];
const options3 = ["Daily", "Weekly", "Bi-Weekly", "Monthly"];
const options2 = [
  "New Zealand",
  "America",
  "North Korea",
  "Russia",
  "Australia",
  "South Africa",
];

const Settings = (props) => {
  const { isOpen, handleChangeIsOpen } = props;

  return (
    <>
      <div className="dashboard-wrapper">
        <SideBar isOpen={isOpen} handleChangeIsOpen={handleChangeIsOpen} />
        <div className="dashboard-main">
          <div className="sidebar-spacer" />
          <div className={isOpen ? "dashboard-content-open" : "dashboard-content"}>
            <Navbar />
            <div className="main-content">
              <div className="container w-container">
                <h1 className="page-title">Settings</h1>
              </div>
              <div className="_1-2-5-grid wf-section">
                <div className="module sticky">
                  <div className="menu-list-section">
                    <Link to={"#"} className="menu-link w-inline-block">
                      <div className="sidebar-link-text">Account Settings</div>
                    </Link>
                    <a href="#" className="menu-link w-inline-block">
                      <div className="sidebar-link-text">Email Notifications</div>
                    </a>
                  </div>
                </div>
                <div className="module-group">
                  <div id="Edit-Profile" className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Account Settings</h3>
                    </div>
                    <div className="module-main">
                      <div className="settings-div">
                        <div className="settings-label">Language</div>
                        <Dropdown options={options} />
                      </div>
                      <div className="settings-div">
                        <div className="settings-label">Country</div>
                        <Dropdown options={options2} />
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
                            <span htmlFor="checkbox-4" className="w-form-label">
                              Opt out of recommendations based on your activity
                            </span>
                          </label>
                        </form>
                        <div className="form-success w-form-done">
                          <div>Thank you! Your message has been received!</div>
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
                  <div id="Email-Notifications" className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading">Email Notifications</h3>
                    </div>
                    <div className="module-main">
                      <div className="w-form">
                        <form
                          data-name="Email Form"
                          name="email-form"
                          id="email-form"
                          method="get"
                          className="form"
                        >
                          <label className="w-checkbox checkbox-element">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                            <input
                              type="checkbox"
                              data-name="Checkbox 5"
                              name="checkbox-5"
                              id="checkbox"
                              style={{
                                opacity: 0,
                                position: "absolute",
                                zIndex: -1,
                              }}
                            />
                            <span htmlFor="checkbox-5" className="w-form-label">
                              Receive emails about a new order
                            </span>
                          </label>
                          <label className="w-checkbox checkbox-element">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" />
                            <input
                              type="checkbox"
                              defaultChecked=""
                              name="checkbox-5"
                              data-name="Checkbox 5"
                              id="checkbox"
                              style={{
                                opacity: 0,
                                position: "absolute",
                                zIndex: -1,
                              }}
                            />
                            <span htmlFor="checkbox-5" className="w-form-label">
                              Receive emails about a new customer
                            </span>
                          </label>
                          <label className="w-checkbox checkbox-element">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                            <input
                              type="checkbox"
                              data-name="Checkbox 5"
                              name="checkbox-5"
                              id="checkbox"
                              style={{
                                opacity: 0,
                                position: "absolute",
                                zIndex: -1,
                              }}
                            />
                            <span htmlFor="checkbox-5" className="w-form-label">
                              Receive emails when something in your account
                              changes
                            </span>
                          </label>
                          <label className="w-checkbox checkbox-element">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                            <input
                              type="checkbox"
                              data-name="Checkbox 5"
                              name="checkbox-5"
                              id="checkbox"
                              style={{
                                opacity: 0,
                                position: "absolute",
                                zIndex: -1,
                              }}
                            />
                            <span htmlFor="checkbox-5" className="w-form-label">
                              Receive emails when there is a new computer sign-on
                            </span>
                          </label>
                          <label className="w-checkbox checkbox-element">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                            <input
                              type="checkbox"
                              data-name="Checkbox 5"
                              name="checkbox-5"
                              id="checkbox"
                              style={{
                                opacity: 0,
                                position: "absolute",
                                zIndex: -1,
                              }}
                            />
                            <span htmlFor="checkbox-5" className="w-form-label">
                              Receive emails from us about product updates
                            </span>
                          </label>
                        </form>
                        <div className="form-success w-form-done">
                          <div>Thank you! Your message has been received!</div>
                        </div>
                        <div className="form-error w-form-fail">
                          <div>
                            Oops! Something went wrong. Please fill in the
                            required fields and try again.
                          </div>
                        </div>
                      </div>
                      <div className="settings-div">
                        <div className="settings-label">
                          Notification frequency
                        </div>
                        <Dropdown options={options3} />
                      </div>
                    </div>
                  </div>
                  <div className="module red">
                    <div className="module-header minimal">
                      <h3 className="module-heading red">Close Account</h3>
                    </div>
                    <div className="module-main">
                      <p>
                        Are you sure you want your account to be deleted? <br />
                        This action can't be undone.
                      </p>
                      <div className="w-form">
                        <form
                          data-name="Email Form"
                          name="email-form"
                          id="email-form"
                          method="get"
                          className="form"
                        >
                          <label className="w-checkbox checkbox-element">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                            <input
                              type="checkbox"
                              data-name="Checkbox 4"
                              name="checkbox-4"
                              id="checkbox"
                              style={{
                                opacity: 0,
                                position: "absolute",
                                zIndex: -1,
                              }}
                            />
                            <span htmlFor="checkbox-4" className="w-form-label">
                              I'm absolutely sure I want my account to be deleted
                            </span>
                          </label>
                          <input
                            type="submit"
                            defaultValue="Delete My Account"
                            data-wait="Please wait..."
                            className="button delete w-button"
                          />
                        </form>
                        <div className="form-success w-form-done">
                          <div>We're sorry to see you go.</div>
                        </div>
                        <div className="form-error w-form-fail">
                          <div>Oops! Something went wrong. Try again later.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-footer">
                <p className="paragraph-small light">
                  © DPV Intelligence. All Rights Reserved.
                  <a
                    href="template-resources/licenses.html"
                    target="_blank" rel="noreferrer"
                    className="simple-link light"
                  />
                </p>
              </div>
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
  )
};

export default Settings;
