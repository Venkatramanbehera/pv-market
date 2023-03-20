import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";

const TopUp = () => (
  <>
    <div className="dashboard-wrapper">
      <SideBar />
      <div className="dashboard-main">
        <div className="sidebar-spacer" />
        <div className="dashboard-content">
          <Navbar />
          <div id="Edit-Profile" className="module">
            <div className="module-header minimal">
              <h3 className="module-heading">Top Up</h3>
            </div>
            <div className="module-main">
              <h1 className="module-heading">Choose a top up value</h1>
              <div className="settings-div">
                <div className="settings-label">Select</div>
                <select
                  name="languageSelect"
                  id="languageSelect"
                  style={{ width: 260 }}
                >
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="German">German</option>
                </select>
                {/* <div data-hover="false" data-delay="0" class="account-dropdown w-dropdown">
          <div class="settings-dropdown-toggle w-dropdown-toggle">
            <div class="filter-dropdown-icon w-icon-dropdown-toggle"></div>
            <div>English</div>
          </div>
          <nav class="filter-dropdown-3 w-dropdown-list">
            <a href="#" class="filter-option w-dropdown-link">English</a>
            <a href="#" class="filter-option w-dropdown-link">French</a>
            <a href="#" class="filter-option w-dropdown-link">Spanish</a>
            <a href="#" class="filter-option w-dropdown-link">German</a>
          </nav>
        </div> */}
              </div>
              <div className="settings-div">
                <div className="settings-label">Frequency</div>
                <select
                  name="frequencySelect"
                  id="frequencySelect"
                  style={{ width: 260 }}
                >
                  <option value="English">Every 6-months</option>
                  <option value="French">Every 3-months</option>
                  <option value="German">Every month</option>
                  <option value="German">None</option>
                </select>
                {/* <div class="settings-label">Frequency</div>
        <div data-hover="false" data-delay="0" class="account-dropdown w-dropdown">
          <div class="settings-dropdown-toggle w-dropdown-toggle">
            <div class="filter-dropdown-icon w-icon-dropdown-toggle"></div>
            <div>New Zealand</div>
          </div>
          <nav class="filter-dropdown-3 w-dropdown-list">
            <a href="#" class="filter-option w-dropdown-link">America</a>
            <a href="#" class="filter-option w-dropdown-link">North Korea</a>
            <a href="#" class="filter-option w-dropdown-link">Russia</a>
            <a href="#" class="filter-option w-dropdown-link">Australia</a>
            <a href="#" class="filter-option w-dropdown-link">New Zealand</a>
            <a href="#" class="filter-option w-dropdown-link">South Africa</a>
          </nav>
        </div> */}
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
                  <a
                    data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92218"
                    data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92218"]'
                    href="#"
                    className="button button-primary w-button"
                  >
                    Top up now
                  </a>
                </form>
                <div className="form-success w-form-done">
                  <div>Thank you! Your message has been received!</div>
                </div>
                <div className="form-error w-form-fail">
                  <div>
                    Oops! Something went wrong. Please fill in the required
                    fields and try again.
                  </div>
                </div>
              </div>
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
                  <div className="divider" />
                </form>
                <div className="form-success w-form-done">
                  <div>Thank you! Your message has been received!</div>
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
      <div className="dashboard-footer">
        <p className="paragraph-small light">
          © PV Intelligence. All Rights Reserved.
          <a
            href="template-resources/licenses.html"
            target="_blank"
            className="simple-link light"
          />
        </p>
      </div>
    </div>
  </>
);

export default TopUp;
