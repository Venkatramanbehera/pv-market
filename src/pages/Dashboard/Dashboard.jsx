import note from "../../assets/images/Note.svg";
import envolopeOpen from "../../assets/images/EnvelopeOpen.svg";
import calendarBlank from "../../assets/images/CalendarBlank.svg";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

// dashboard-content{
//   margin-left: -145px;
// }

const Dashboard = (props) => {
  const { isOpen, handleChangeIsOpen } = props;

  const [settingValue, setSettingValue] = useState("");
  const [activePanel, setActivePanel] = useState("export");
  const handleChangeSettings = (e) => {
    console.log("eee", e.target.value);
    setSettingValue(e.target.value);
    setActivePanel(e.target.value);
  };

  return (
    <div className="dashboard-wrapper">
      <SideBar isOpen={isOpen} handleChangeIsOpen={handleChangeIsOpen} />
      <div className="dashboard-main">
        <div className="sidebar-spacer" />
        <div
          className={isOpen ? "dashboard-content-open" : "dashboard-content"}
        >
          <Navbar />
          <div className="dashboard-main-content">
            <div className="dashboard-page-header">
              <h2>Market Place</h2>
              <div className="settings-div">
                <select
                  className="actionSelect"
                  value={settingValue}
                  onChange={handleChangeSettings}
                >
                  <option value="action">Action</option>
                  <option value="contacted">Move to contacted list</option>
                  <option value="approved">Move to approved list</option>
                  <option value="uninterested">
                    Move to uninterested list
                  </option>
                  <option value="export">Export CSV</option>
                </select>
              </div>
            </div>
            <div className="_4-grid wf-section">
              <div
                className={
                  activePanel === "export"
                    ? "new-leads module module-card  blue"
                    : "new-leads module module-card"
                }
                id="new-leads"
                onClick={() => {
                  setActivePanel("export");
                }}
              >
                <div className="module-header minimal">
                  <h3 className="module-heading">New Leads</h3>
                </div>
                <div className="module-main">
                  <div className="module-number">40</div>
                </div>
              </div>
              <div
                className={
                  activePanel === "contacted"
                    ? "new-leads module module-card  blue"
                    : "new-leads module module-card"
                }
                id="contacted"
                onClick={() => {
                  setActivePanel("contacted");
                }}
              >
                <div className="module-header minimal">
                  <h3 className="module-heading">Contacted</h3>
                </div>
                <div className="module-main">
                  <div className="module-number">28</div>
                </div>
              </div>
              <div
                className={
                  activePanel === "approved"
                    ? "new-leads module module-card  blue"
                    : "new-leads module module-card"
                }
                id="approved"
                onClick={() => {
                  setActivePanel("approved");
                }}
              >
                <div className="module-header minimal">
                  <h3 className="module-heading">Approved</h3>
                </div>
                <div className="module-main">
                  <div className="module-number">17</div>
                </div>
              </div>
              <div
                className={
                  activePanel === "uninterested"
                    ? "new-leads module module-card  blue"
                    : "new-leads module module-card"
                }
                id="uninterested"
                onClick={() => {
                  setActivePanel("uninterested");
                }}
              >
                <div className="module-header minimal">
                  <h3 className="module-heading">Uninterested</h3>
                </div>
                <div className="module-main">
                  <div className="module-number">11</div>
                </div>
              </div>
            </div>
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
                          data-w-id="9e34cfdf-1f8f-fb1e-0e9c-02e82c46c14d"
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
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <h4 className="grid-header sm-hidden">Name</h4>
                    <h4 className="grid-header md-hidden">Homeowner</h4>
                    <h4 className="grid-header sm-hidden">Address</h4>
                    <h4 id="" className="grid-header sm-hidden">
                      {" "}
                      Number
                    </h4>
                    <h4
                      id="w-node-_52aceb15-e625-7f7f-7f28-b0c27c9f0da2-9af34a0e"
                      className="grid-header sm-hidden"
                    >
                      {" "}
                      Document
                    </h4>
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="full-customer-row">
                          <div className="checkbox-grid w-form">
                            <form
                              id="email-form"
                              name="email-form"
                              data-name="Email Form"
                              method="get"
                            >
                              <label
                                data-w-id="9e34cfdf-1f8f-fb1e-0e9c-02e82c46c165"
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
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                          <Link
                            to={"/detailcustomer"}
                            className="customer-element sm-hidden"
                          >
                            <div className="name-truncate">Short Name</div>
                            <div className="address-truncate">
                              234 Grennan avenue, Texas, 02061
                            </div>
                            <div>1 254 221 0567</div>
                            <div>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ marginRight: 10 }}
                              >
                                <path
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth={2}
                                  d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"
                                />
                              </svg>
                            </div>
                          </Link>
                          <a
                            href="./detail_customer.html"
                            className="customer-element md-hidden"
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="name-truncate">Short Name</div>
                              <div style={{ marginLeft: 20 }}>
                                1 254 221 0567
                              </div>
                            </div>
                            <div className="address-truncate">
                              234 Grennan avenue, Texas, 02061
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="full-customer-row">
                          <div className="checkbox-grid w-form">
                            <form
                              id="email-form"
                              name="email-form"
                              data-name="Email Form"
                              method="get"
                            >
                              <label
                                data-w-id="9e34cfdf-1f8f-fb1e-0e9c-02e82c46c165"
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
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                          <a
                            href="./detail_customer.html"
                            className="customer-element sm-hidden"
                          >
                            <div className="name-truncate">
                              Kofi Mbuk Kofi Mbuk Kofi Mbuk
                            </div>
                            <div className="address-truncate">
                              234 Grennan avenue, Texas, 02061, USA. ABCDFEFCVDF
                            </div>
                            <div>1 254 221 0567</div>
                            <div>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ marginRight: 10 }}
                              >
                                <path
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth={2}
                                  d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"
                                />
                              </svg>
                            </div>
                          </a>
                          <a
                            href="./detail_customer.html"
                            className="customer-element md-hidden"
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="name-truncate">
                                Kofi Mbuk Kofi Mbuk Kofi Mbuk
                              </div>
                              <div style={{ marginLeft: 20 }}>
                                1 254 221 0567
                              </div>
                            </div>
                            <div className="address-truncate">
                              234 Grennan avenue, Texas, 02061, USA.
                            </div>
                          </a>
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
              © PV Intelligence All Rights Reserved
              <Link to={"license"} className="simple-link light" />
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
                src={note}
                loading="lazy"
                width={27}
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">New Task</div>
            </a>
            <a href="plan.html" className="add-link w-inline-block">
              <img
                src={envolopeOpen}
                loading="lazy"
                width={27}
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">New Email</div>
            </a>
            <a href="plan.html" className="add-link w-inline-block">
              <img
                src={calendarBlank}
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
  );
};

export default Dashboard;
