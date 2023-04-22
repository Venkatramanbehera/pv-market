import { Link } from "react-router-dom";
import logo from "../../assets/images/PVMarket-Logo.png";
const ContactSales = () => (
  <>
    <div
      data-collapse="small"
      data-animation="default"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="nav-bar w-nav"
    >
      <div className="nav-container w-container">
        <div className="logo-div">
          <a href="../dashboard.html" className="nav-logo w-inline-block">
            <img src={logo} width={150} alt="" className="logo" />
          </a>
        </div>
        <nav role="navigation" className="nav-content simple w-nav-menu">
          <div className="nav-cta-button-container">
            <div className="paragraph-small">Want to see our plans?</div>
            <Link to={"/plan"} className="nav-link cta w-nav-link">
              Go to plans
            </Link>
          </div>
        </nav>
        <div className="menu-button w-nav-button">
          <img
            src="../images/White-Menu.svg"
            loading="lazy"
            width={24}
            alt=""
            className="menu-icon"
          />
        </div>
      </div>
    </div>
    <div className="wrapper">
      <div className="section wf-section">
        <div className="contact-sales-grid">
          <div className="simple-text-box">
            <h1>Contact our sales team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
              <br />
            </p>
            <p>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
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
                      href="../pages/terms-conditions.html"
                      target="_blank" rel="noreferrer"
                      className="simple-link light"
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="../pages/privacy-policy.html"
                      target="_blank" rel="noreferrer"
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
  </>
);

export default ContactSales;
