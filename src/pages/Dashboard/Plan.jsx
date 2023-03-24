import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
const Plan = (props) => {
  const { isOpen, handleChangeIsOpen } = props;

  return(
  <>
    <div className="dashboard-wrapper">
      <SideBar isOpen={isOpen} handleChangeIsOpen={handleChangeIsOpen}/>
      <div className="dashboard-main">
        <div className="sidebar-spacer" />
        <div className={isOpen ? "dashboard-content-open" : "dashboard-content"}>
          <Navbar />
          <div className="">
            <div className="section wf-section">
              <div className="container center-align w-container">
                <h1>Choose a new plan</h1>
                <div className="spacer _48" />
                <div className="pricing-columns">
                  <div
                    data-w-id="2015071b-deb6-3265-0415-3c0cffbb1db9"
                    // style={{ opacity: 0 }}
                    className="price-card blue"
                  >
                    <div className="pricing-header">
                      <h2>Bronze - 100</h2>
                      <p className="paragraph">
                        Get 100 qualified, verified and ready to go homeowner
                        and school leads.
                      </p>
                    </div>
                    <h3 className="price-text">
                      $125<span className="regular">/month</span>
                    </h3>
                    <p className="paragraph-small-2">billed annually.</p>
                    <div className="spacer-2 _24" />
                    <Link to={"/dashboard"} className="button w-button">
                      Current plan
                    </Link>
                    <div className="spacer-2 _24" />
                    <div className="tick-list w-richtext">
                      <ul role="list">
                        <li>Cost per lead = $15</li>
                        <li>Access to solar report</li>
                        <li>Emails &amp; Telephone of client</li>
                        <li>Full electricity report of client</li>
                      </ul>
                    </div>
                    <ul id="pricing-rum" role="list" className="tooltip-list" />
                    <div className="tick-list w-richtext">
                      <ul role="list">
                        <li>Customer profiles</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    data-w-id="2015071b-deb6-3265-0415-3c0cffbb1de3"
                    // style={{ opacity: 0 }}
                    className="price-card"
                  >
                    <div className="pricing-header">
                      <h2>Silver - 300</h2>
                      <p>
                        Get 300 qualified, verified and ready to go homeowner
                        and school leads.
                      </p>
                    </div>
                    <h3 className="price-text">
                      $250<span className="regular">/month</span>
                    </h3>
                    <p className="paragraph-small-2">billed annually.</p>
                    <div className="spacer-2 _24" />
                    <Link
                      to={"/contactsales"}
                      className="button secondary w-button"
                    >
                      Upgrade
                    </Link>
                    <div className="spacer-2 _24" />
                    <div className="tick-list w-richtext">
                      <ul role="list">
                        <li>Cost per lead = $10</li>
                        <li>Higher conversion rate</li>
                        <li>Homeowner dashboard</li>
                        <li>Access to solar report</li>
                        <li>Emails &amp; Telephone of client</li>
                        <li>Address of client</li>
                        <li>Full electricity report of client</li>
                        <li>Loan payment calculation</li>
                        <li>Export CSV, PDF</li>
                        <li>Customer profiles</li>
                        <li>Unlimited storage</li>
                      </ul>
                    </div>
                    <ul id="pricing-rum" role="list" className="tooltip-list" />
                  </div>
                  <div
                    data-w-id="c06d122a-d69f-12a7-8d4f-4f1be70d0696"
                    // style={{ opacity: 0 }}
                    className="price-card"
                  >
                    <div className="pricing-header">
                      <h2>Gold -1000</h2>
                      <p>
                        Get 1,000 qualified, verified and ready to go homeowner
                        and school leads.
                      </p>
                    </div>
                    <h3 className="price-text">
                      $420<span className="regular">/month</span>
                    </h3>
                    <p className="paragraph-small-2">billed annually.</p>
                    <div className="spacer-2 _24" />
                    <a
                      href="pages/contact-sales.html"
                      className="button secondary w-button"
                    >
                      Upgrade
                    </a>
                    <div className="spacer-2 _24" />
                    <div className="tick-list w-richtext">
                      <ul role="list">
                        <li>Cost per lead = $5</li>
                        <li>Higher conversion rate</li>
                        <li>Homeowner dashboard</li>
                        <li>Access to solar report</li>
                        <li>Emails &amp; Telephone of client</li>
                        <li>Address of client</li>
                        <li>Full electricity report of client</li>
                        <li>Loan payment calculation</li>
                        <li>Export CSV, PDF</li>
                        <li>Customer profiles</li>
                        <li>Unlimited storage</li>
                        <li>Support and onboarding</li>
                      </ul>
                    </div>
                    <ul id="pricing-rum" role="list" className="tooltip-list">
                      <li
                        data-w-id="c06d122a-d69f-12a7-8d4f-4f1be70d06bb"
                        className="tooltip-list-item"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-hover="false"
          data-delay={0}
          className="new-button w-dropdown"
        >
          <nav className="add-menu w-dropdown-list">
            <a
              href="plan.html"
              aria-current="page"
              className="add-link w-inline-block w--current"
            >
              <img
                src="images/Note.svg"
                loading="lazy"
                width={27}
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">New Task</div>
            </a>
            <a
              href="plan.html"
              aria-current="page"
              className="add-link w-inline-block w--current"
            >
              <img
                src="images/EnvelopeOpen.svg"
                loading="lazy"
                width={27}
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">New Email</div>
            </a>
            <a
              href="plan.html"
              aria-current="page"
              className="add-link w-inline-block w--current"
            >
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
    <div className="dashboard-footer">
      <p className="paragraph-small light">
        © PV Intelligence Reserved
        <a
          href="template-resources/licenses.html"
          target="_blank"
          className="simple-link light"
        />
      </p>
    </div>
    {/* [if lte IE 9]><![endif] */}
  </>
)};
export default Plan;
