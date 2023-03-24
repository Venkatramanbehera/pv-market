import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";

const Support = (props) => {
  const { isOpen, handleChangeIsOpen } = props;

return(
  <>
    <div className="dashboard-wrapper">
      <SideBar isOpen={isOpen} handleChangeIsOpen={handleChangeIsOpen}/>
      <div className="dashboard-main">
        <div className="sidebar-spacer" />
        <div className={isOpen ? "dashboard-content-open" : "dashboard-content"}>
          <Navbar />
          <div className="section wf-section">
            <div className="contact-sales-grid">
              <div className="simple-text-box">
                <h1>Contact our support team</h1>
              </div>
              <div className="module">
                <div className="module-main large">
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
                            data-name="number"
                            placeholder="027 123 1234"
                            id="number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="_2-fields-split">
                        <div className="field-block">
                          <label htmlFor="Company-Name">Company name*</label>
                          <input
                            type="text"
                            className="text-input w-input"
                            maxLength={256}
                            name="Company-Name"
                            data-name="Company Name"
                            placeholder="Example Co."
                            id="Company-Name"
                            required=""
                          />
                        </div>
                        <div className="field-spacer" />
                        <div className="field-block">
                          <label htmlFor="Company-Size">Company size</label>
                          <input
                            type="number"
                            className="text-input w-input"
                            maxLength={256}
                            name="Company-Size"
                            data-name="Company Size"
                            placeholder={140}
                            id="Company-Size"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="_2-fields-split">
                        <div className="field-block">
                          <label htmlFor="Company-Name-2">Department</label>
                          <input
                            type="text"
                            className="text-input w-input"
                            maxLength={256}
                            name="Company-Name-2"
                            data-name="Company Name 2"
                            placeholder="Product"
                            id="Company-Name-2"
                            required=""
                          />
                        </div>
                        <div className="field-spacer" />
                        <div className="field-block">
                          <label htmlFor="Role">Role</label>
                          <input
                            type="text"
                            className="text-input w-input"
                            maxLength={256}
                            name="Role"
                            data-name="Role"
                            placeholder="Product Owner"
                            id="Role"
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
                      <p className="paragraph-small light">
                        By clicking the button above, you agree to our{" "}
                        <a
                          href="pages/terms-conditions.html"
                          target="_blank"
                          className="simple-link light"
                        >
                          Terms &amp; Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="pages/privacy-policy.html"
                          target="_blank"
                          className="simple-link light"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                    <div className="form-success w-form-done">
                      <div>
                        Your request has been submitted and we will get to you
                        shortly.
                      </div>
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
            <div className="dashboard-footer">
              <p className="paragraph-small light">
                © PV Intelligence All Rights Reserved
                <Link to={"/licenses"} className="simple-link light" />
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
  </>
)};

export default Support;
