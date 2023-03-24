import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/PVMarket-Logo.png";
import collapse from "../../assets/images/Collapse-Icon.svg";
import "./auth.css";
import { useState } from "react";

const SignIn = () => {
  const [isOtp, setIsOtp] = useState(false);
  const handleNextTelephone = () => {
    setIsOtp(!isOtp);
  };
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="center-card-container">
        <div className="center-card">
          <div id="signin-back" className="signin-back" onClick={() => {}}>
            <img src={collapse} loading="lazy" alt="" />
          </div>
          <Link to={"/dashboard"} className="center-image w-inline-block">
            <img src={logo} loading="lazy" width={150} alt="" />
          </Link>
          <div className="spacer _16" />
          <h2>Sign In</h2>
          <p>Welcome back, it's good to see you.</p>
          <div className="spacer _16" />
          <div className="w-form">
            <div id="email-form" className="sign-up-form">
              {!isOtp ? (
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
                  <input
                    type="button"
                    defaultValue="Next"
                    data-wait="Please wait..."
                    className="button no-margin w-button"
                    onClick={handleNextTelephone}
                  />
                </div>
              ) : (
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
                    onClick={handleSubmit}
                  />
                </div>
              )}
            </div>
            <div className="form-success w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <p className="paragraph-small">
            Forgot your telephone?{" "}
            <Link to={"/password_reset"}>Try with Email</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
