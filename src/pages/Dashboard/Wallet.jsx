import { useState } from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";

const Wallet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectDemoTypeModal, setSelectDemoTypeModal] = useState(false);
  const [step, setStep] = useState(0);
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleChangeDemoTypeModal = () => {
    setSelectDemoTypeModal(!selectDemoTypeModal);
  };

  return (
    <>
      <div className="dashboard-wrapper">
        <SideBar />
        <div className="dashboard-main">
          <div className="sidebar-spacer" />
          <div className="dashboard-content">
            <Navbar />
            <div className="main-content">
              <div className="container w-container">
                <h1 className="page-title">Payments</h1>
              </div>
              <div className="_1-5-5-grid wf-section">
                <div className="module sticky">
                  <div className="menu-list-section">
                    <div className="module-header minimal">
                      <h3 className="module-heading" style={{ fontSize: 20 }}>
                        Add payment method
                      </h3>
                    </div>
                    <div
                      data-duration-in={300}
                      data-duration-out={100}
                      data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921ea"
                      data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921ea"]'
                      data-current="Tab 1"
                      data-easing="ease"
                      className="payment-method-tabs w-tabs"
                    >
                      <div
                        data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921eb"
                        data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921eb"]'
                        className="payment-method-tab-menu w-tab-menu"
                        role="tablist"
                      >
                        <a
                          data-w-tab="Tab 1"
                          data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921ec"
                          data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921ec"]'
                          className="payment-method-tab w-inline-block w-tab-link w--current"
                          id="w-tabs-1-data-w-tab-0"
                          href="#w-tabs-1-data-w-pane-0"
                          role="tab"
                          aria-controls="w-tabs-1-data-w-pane-0"
                          aria-selected="true"
                        >
                          <div
                            data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921ed"
                            data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921ed"]'
                          >
                            <div
                              data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921ee"
                              data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921ee"]'
                            >
                              <strong
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921ef"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921ef"]'
                              >
                                Credit card
                              </strong>
                            </div>
                            <div
                              data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921f1"
                              data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921f1"]'
                              className="hint grey-text"
                            >
                              MasterCard or Visa
                            </div>
                          </div>
                          <img
                            src="https://uploads-ssl.webflow.com/5d2f26e24904ea2ed96c0fac/5d599abb8602dbdaff976d6e_icons8-bank-cards-100%20(1).png"
                            width={30}
                            data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921f3"
                            data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921f3"]'
                            alt=""
                          />
                        </a>
                        <a
                          data-w-tab="Tab 2"
                          data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921f4"
                          data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921f4"]'
                          className="payment-method-tab w-inline-block w-tab-link"
                          id="w-tabs-1-data-w-tab-1"
                          href="#w-tabs-1-data-w-pane-1"
                          role="tab"
                          aria-controls="w-tabs-1-data-w-pane-1"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          <div
                            data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921f5"
                            data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921f5"]'
                          >
                            <div
                              data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921f6"
                              data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921f6"]'
                            >
                              <strong
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921f7"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921f7"]'
                              >
                                Paypal
                              </strong>
                            </div>
                            <div
                              data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921f9"
                              data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921f9"]'
                              className="hint grey-text"
                            >
                              Online payment
                            </div>
                          </div>
                          <img
                            src="https://uploads-ssl.webflow.com/5d2f26e24904ea2ed96c0fac/5d599aca8602db8108976eb5_icons8-paypal-100%20(4).png"
                            width={30}
                            data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921fb"
                            data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921fb"]'
                            alt=""
                          />
                        </a>
                      </div>
                      <div
                        data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921fc"
                        data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921fc"]'
                        className="payment-method-content w-tab-content"
                      >
                        <div
                          data-w-tab="Tab 1"
                          data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921fd"
                          data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921fd"]'
                          className="w-tab-pane w--tab-active"
                          id="w-tabs-1-data-w-pane-0"
                          role="tabpanel"
                          aria-labelledby="w-tabs-1-data-w-tab-0"
                          style={{
                            opacity: 1,
                            transition: "opacity 300ms ease 0s",
                          }}
                        >
                          <div
                            data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921fe"
                            data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921fe"]'
                            className="w-form"
                          >
                            <form
                              method="get"
                              name="email-form"
                              data-name="Email Form"
                              data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf921ff"
                              data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf921ff"]'
                              id="email-form"
                              aria-label="Email Form"
                            >
                              <div
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92200"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92200"]'
                                className="form-group"
                              >
                                <label
                                  htmlFor="name"
                                  data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92201"
                                  data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92201"]'
                                  className="label"
                                >
                                  Card number
                                </label>
                                <input
                                  className="input w-input"
                                  maxLength={256}
                                  name="name-4"
                                  data-name="Name 4"
                                  placeholder="4444 4444 4444 4444"
                                  data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92203"
                                  data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92203"]'
                                  type="tel"
                                  id="name-4"
                                />
                                <div
                                  data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92204"
                                  data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92204"]'
                                  className="form-group"
                                >
                                  <div
                                    data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92205"
                                    data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92205"]'
                                    className="row padding w-row"
                                  >
                                    <div
                                      data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92206"
                                      data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92206"]'
                                      className="col padding w-col w-col-6 w-col-small-6 w-col-tiny-6"
                                      style={{ padding: 0 }}
                                    >
                                      <label
                                        htmlFor="name"
                                        data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92207"
                                        data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92207"]'
                                        className="label"
                                      >
                                        Expiration date
                                      </label>
                                      <input
                                        className="input w-input"
                                        maxLength={256}
                                        name="name-4"
                                        data-name="Name 4"
                                        placeholder="02 / 2019"
                                        data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92209"
                                        data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92209"]'
                                        type="text"
                                        id="name-4"
                                      />
                                    </div>
                                    <div
                                      data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220a"
                                      data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220a"]'
                                      className="col padding w-col w-col-6 w-col-small-6 w-col-tiny-6"
                                      style={{ padding: 0 }}
                                    >
                                      <label
                                        htmlFor="name"
                                        data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220b"
                                        data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220b"]'
                                        className="label"
                                      >
                                        CVC/CVV
                                      </label>
                                      <input
                                        className="input w-input"
                                        maxLength={256}
                                        name="name-4"
                                        data-name="Name 4"
                                        placeholder={444}
                                        data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220d"
                                        data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220d"]'
                                        type="text"
                                        id="name-4"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <label
                                    htmlFor="name"
                                    data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92201"
                                    data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92201"]'
                                    className="label"
                                  >
                                    Discount code
                                  </label>
                                  <label
                                    htmlFor="name"
                                    data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92201"
                                    data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92201"]'
                                    className="label"
                                  >
                                    Optional
                                  </label>
                                </div>
                                <input
                                  className="input w-input"
                                  maxLength={256}
                                  name="name-4"
                                  data-name="Name 4"
                                  placeholder=""
                                  data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92203"
                                  data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92203"]'
                                  id="name-4"
                                />
                              </div>
                              <input
                                type="submit"
                                data-wait="Please wait..."
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220e"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220e"]'
                                className="button button-primary w-button"
                                defaultValue="Add payment details"
                              />
                            </form>
                            <div
                              data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220f"
                              data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220f"]'
                              className="success-message w-form-done"
                              tabIndex={-1}
                              role="region"
                              aria-label="Email Form success"
                            >
                              <div
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92210"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92210"]'
                              >
                                Thank you! Your submission has been received!
                              </div>
                            </div>
                            <div
                              data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92212"
                              data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92212"]'
                              className="error-message w-form-fail"
                              tabIndex={-1}
                              role="region"
                              aria-label="Email Form failure"
                            >
                              <div
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92213"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92213"]'
                              >
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-w-tab="Tab 2"
                          data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92215"
                          data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92215"]'
                          className="w-tab-pane"
                          id="w-tabs-1-data-w-pane-1"
                          role="tabpanel"
                          aria-labelledby="w-tabs-1-data-w-tab-1"
                          style={{}}
                        >
                          <p
                            data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92216"
                            data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92216"]'
                          >
                            Proceed to PayPal.
                          </p>
                          <a
                            data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92218"
                            data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92218"]'
                            href="#"
                            className="button button-primary w-button"
                          >
                            Add payment details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="module-group">
                  <div id="Edit-Profile" className="module">
                    <div className="module-header minimal">
                      <h3 className="module-heading" style={{ fontSize: 20 }}>
                        Payment method
                      </h3>
                    </div>
                    {/* <div class="module-main"> */}
                    <div
                      data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a6f"
                      data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a6f"]'
                      className="current-method-container"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/5d2f26e24904ea2ed96c0fac/5d8100449593d0c28996c3e4_icons8-visa-100.png"
                        width={40}
                        data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a70"
                        data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a70"]'
                        alt=""
                        className="current-method-icon"
                      />
                      <div
                        data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a71"
                        data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a71"]'
                        className="current-method-details"
                      >
                        <div
                          data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a72"
                          data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a72"]'
                          className="hint text-heading-grey"
                        >
                          **** **** **** **** 4444
                        </div>
                        <div
                          data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a74"
                          data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a74"]'
                          className="hint"
                        >
                          Expires 02/19
                        </div>
                      </div>
                      <button
                        data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a76"
                        data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a76"]'
                        href="#"
                        className="edit-current-method modal-action w-inline-block"
                        onClick={handleOpenModal}
                      ></button>
                      <div
                        data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba5"
                        data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba5"]'
                        className={
                          isModalOpen
                            ? "modal modal--open"
                            : "modal modal--hide"
                        }
                      >
                        <div
                          data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba6"
                          data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba6"]'
                          className="modal-mask"
                        />
                        <div
                          data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba7"
                          data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba7"]'
                          className="modal-container"
                        >
                          <button
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba8"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba8"]'
                            href="#"
                            className="modal-close w-inline-block"
                            onClick={handleOpenModal}
                          ></button>
                          <div
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba9"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba9"]'
                            className="modal-title"
                          >
                            <h4
                              data-w-id="da32af5d-cebf-942c-643a-c06377bc2baa"
                              data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2baa"]'
                              className="text-center"
                            >
                              Remove payment method
                            </h4>
                            <p
                              data-w-id="da32af5d-cebf-942c-643a-c06377bc2bac"
                              data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bac"]'
                              className="text-center"
                            >
                              Are you sure you want to Remove payment method?
                            </p>
                          </div>
                          <div
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2bae"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bae"]'
                          >
                            <button
                              className="button-block button button-primary w-button"
                              onClick={handleOpenModal}
                            >
                              Cancel
                            </button>
                            <button
                              data-w-id="da32af5d-cebf-942c-643a-c06377bc2bb1"
                              data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bb1"]'
                              href="#"
                              className="button-block button button-outline w-button"
                            >
                              Remove card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: 18 }}>
                      <button
                        data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92218"
                        data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92218"]'
                        href="#"
                        className="button button-primary w-button"
                        onClick={handleChangeDemoTypeModal}
                      >
                        Show sample overlay
                      </button>
                    </div>
                    <div
                      className={
                        !selectDemoTypeModal
                          ? "modal modal--option modal--hide"
                          : "modal modal--option modal--open"
                      }
                    >
                      <div
                        data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba6"
                        data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba6"]'
                        className="modal-mask"
                      />
                      <div
                        data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba7"
                        data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba7"]'
                        className="modal-container"
                      >
                        <button
                          onClick={handleChangeDemoTypeModal}
                          className="modal-close w-inline-block"
                        ></button>
                        <div id="demo-select">
                          <div
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba9"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba9"]'
                            className="modal-title"
                          >
                            <h4
                              data-w-id="da32af5d-cebf-942c-643a-c06377bc2baa"
                              data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2baa"]'
                              className="text-center"
                            >
                              Select Demo Type
                            </h4>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 10,
                              }}
                            >
                              <select
                                name="demoSelect"
                                id="demoSelect"
                                style={{ width: 260 }}
                                // onchange="changeDemo()"
                              >
                                <option value="bronze">Bronze - 100</option>
                                <option value="silver">Silver - 300</option>
                                <option value="gold">Gold - 1000</option>
                              </select>
                              <h3 className="price-text">
                                <span id="price-cost">$125</span>
                                <span className="regular">/month</span>
                              </h3>
                              <p
                                className="paragraph-small-2"
                                style={{ margin: 0 }}
                              >
                                billed annually.
                              </p>
                            </div>
                            <div className="spacer-2 _24" />
                            <div
                              className="tick-list w-richtext"
                              id="bronze-list"
                            >
                              <ul role="list">
                                <li>Cost per lead = $15</li>
                                <li>Access to solar report</li>
                                <li>Emails &amp; Telephone of client</li>
                                <li>Full electricity report of client</li>
                                <li>Customer profiles</li>
                              </ul>
                            </div>
                            <div
                              className="tick-list w-richtext"
                              id="silver-list"
                            >
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
                            <div
                              className="tick-list w-richtext"
                              id="gold-list"
                            >
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
                          </div>
                          <div
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2bae"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bae"]'
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            {/* <a
                              data-w-id="da32af5d-cebf-942c-643a-c06377bc2baf"
                              data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2baf"]'
                              href="#"
                              className="button-block button button-primary w-button"
                              onclick="onNext()"
                            >
                              Next
                            </a> */}
                            <div>
                              <span>
                                <a style={{ cursor: "pointer" }}>
                                  Free for 72 hours
                                </a>
                              </span>
                              <span> | </span>
                              <span>
                                <a style={{ cursor: "pointer" }}>
                                  Cancel Anytime
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div id="demo-payment" style={{ position: "relative" }}>
                          <div
                            id="demo-back"
                            className="demo-back"
                            // onclick="demoPrev()"
                          >
                            <img
                              src="images/Collapse-Icon.svg"
                              loading="lazy"
                              alt=""
                              style={{ opacity: "0.8" }}
                            />
                          </div>
                          <div
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba9"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba9"]'
                            className="modal-title"
                          >
                            <h4
                              data-w-id="da32af5d-cebf-942c-643a-c06377bc2baa"
                              data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2baa"]'
                              className="text-center"
                            >
                              Add payment method
                            </h4>
                            <div
                              data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92200"
                              data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92200"]'
                              className="form-group"
                            >
                              <label
                                htmlFor="name"
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92201"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92201"]'
                                className="label"
                              >
                                Card number
                              </label>
                              <input
                                className="input w-input"
                                maxLength={256}
                                name="name-4"
                                data-name="Name 4"
                                placeholder="4444 4444 4444 4444"
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92203"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92203"]'
                                type="tel"
                                id="name-4"
                              />
                              <div
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92204"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92204"]'
                                className="form-group"
                              >
                                <div
                                  data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92205"
                                  data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92205"]'
                                  className="row padding w-row"
                                >
                                  <div
                                    data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92206"
                                    data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92206"]'
                                    className="col padding w-col w-col-6 w-col-small-6 w-col-tiny-6"
                                    style={{ padding: 0 }}
                                  >
                                    <label
                                      htmlFor="name"
                                      data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92207"
                                      data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92207"]'
                                      className="label"
                                    >
                                      Expiration date
                                    </label>
                                    <input
                                      className="input w-input"
                                      maxLength={256}
                                      name="name-4"
                                      data-name="Name 4"
                                      placeholder="02 / 2019"
                                      data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92209"
                                      data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92209"]'
                                      type="text"
                                      id="name-4"
                                    />
                                  </div>
                                  <div
                                    data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220a"
                                    data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220a"]'
                                    className="col padding w-col w-col-6 w-col-small-6 w-col-tiny-6"
                                    style={{ padding: 0 }}
                                  >
                                    <label
                                      htmlFor="name"
                                      data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220b"
                                      data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220b"]'
                                      className="label"
                                    >
                                      CVC/CVV
                                    </label>
                                    <input
                                      className="input w-input"
                                      maxLength={256}
                                      name="name-4"
                                      data-name="Name 4"
                                      placeholder={444}
                                      data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220d"
                                      data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220d"]'
                                      type="text"
                                      id="name-4"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <label
                                  htmlFor="name"
                                  data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92201"
                                  data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92201"]'
                                  className="label"
                                >
                                  Discount code
                                </label>
                                <label
                                  htmlFor="name"
                                  data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92201"
                                  data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92201"]'
                                  className="label"
                                  style={{ fontSize: 12 }}
                                >
                                  Optional
                                </label>
                              </div>
                              <input
                                className="input w-input"
                                maxLength={256}
                                name="name-4"
                                data-name="Name 4"
                                placeholder=""
                                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf92203"
                                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf92203"]'
                                id="name-4"
                              />
                            </div>
                          </div>
                          <div
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2bae"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bae"]'
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <a
                              data-w-id="da32af5d-cebf-942c-643a-c06377bc2baf"
                              data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2baf"]'
                              href="#"
                              className="button-block button button-primary w-button"
                            >
                              Start Demo
                            </a>
                            <div>
                              <span>
                                <a style={{ cursor: "pointer" }}>
                                  Free for 72 hours
                                </a>
                              </span>
                              <span> | </span>
                              <span>
                                <a style={{ cursor: "pointer" }}>
                                  Cancel Anytime
                                </a>
                              </span>
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
                  © DPV Intelligence. All Rights Reserved.{" "}
                  <a
                    href="template-resources/licenses.html"
                    target="_blank"
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
    </>
  );
};
export default Wallet;
