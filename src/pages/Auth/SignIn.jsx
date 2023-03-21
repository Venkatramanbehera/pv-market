import { Link } from "react-router-dom";
import logo from "../../assets/images/PVMarket-Logo.png"
import collapse from "../../assets/images/Collapse-Icon.svg"
import "./auth.css"

const SignIn = () => (
  <>
    <div className="center-card-container">
      <div
        data-w-id="df4cd933-feb9-dc4d-e842-84be2411378c"
        style={{
          // opacity: 0,
        }}
        className="center-card"
      >
        <div id="signin-back" className="signin-back" onclick="prev()">
          <img src={collapse} loading="lazy" alt="" />
        </div>
        <a href="../dashboard.html" className="center-image w-inline-block">
          <img
            src={logo}
            loading="lazy"
            width={150}
            alt=""
          />
        </a>
        <div className="spacer _16" />
        <h2>Sign In</h2>
        <p>Welcome back, it's good to see you.</p>
        <div className="spacer _16" />
        <div className="w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            redirect="/profile"
            data-redirect="/profile"
            method="get"
            className="sign-up-form"
          >
            <div id="phoneScreen">
              <label htmlFor="Subscriber-Email-3" className="field-label">
                Telephone
              </label>
              <input
                type="text"
                className="simple-input no-margin w-input"
                maxLength={256}
                name="Subscriber-Email"
                data-name="Subscriber Email"
                placeholder=""
                id="telephone"
                required=""
              />
              <div className="spacer _24" />
              <Link to={"/dashboard"}>
              <input
                type="button"
                defaultValue="Next"
                data-wait="Please wait..."
                className="button no-margin w-button"
                onclick="next()"
              />
              </Link>
            </div>
            <div id="otpScreen">
              <label htmlFor="Subscriber-Email-3" className="field-label">
                Enter 4-digit pin
              </label>
              <input
                type="text"
                className="simple-input no-margin w-input"
                maxLength={256}
                name="Subscriber-Email"
                data-name="Subscriber Email"
                placeholder=""
                id="verficationCode"
                required=""
              />
              <div className="spacer _24" />
              <input
                type="submit"
                defaultValue="Sign In"
                data-wait="Please wait..."
                className="button no-margin w-button"
              />
            </div>
          </form>
          <div className="form-success w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <p className="paragraph-small">
          Forgot your telephone?{" "}
          <Link to={"/password_reset"}>
          <a href="../pages/password-reset.html" className="simple-link">
            Try with Email
          </a>
          .
          </Link>
        </p>
      </div>
    </div>
  </>
);

export default SignIn;
