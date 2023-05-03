import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/PVMarket-Logo.png";
import collapse from "../../assets/images/Collapse-Icon.svg";
import "./auth.css";
import { useState,useContext } from "react";
import { loginOtpRequest,loginRequest, userDetailsRequest } from "../../utils/Requests";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { SetLoginCookie, parseJwt } from "../../utils/Global";
import CompanyProfileContext from "../../contexts/companyProfileContext";


const SignIn = () => {
  const [isOtp, setIsOtp] = useState(false);
  const [telephone, seTelephone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const {companyProfile, setContextCompanyProfile} = useContext(CompanyProfileContext);
  const handleNextTelephone = () => {
    setLoading(true)
    loginOtpRequest(telephone).then((response)=>{
      if(response.status===200){
        setIsOtp(!isOtp);
      }
      alert(response.data.message)
      setLoading(false)
    }).catch((error)=>{
      alert(error.response.data.message)
      setLoading(false)
    })
  };
  let navigate = useNavigate();
  const handleSubmit = () => {
    const data = {
      otp:otp,
      type:'otp',
      telephone:telephone
    }
    setLoading(true)
    loginRequest(data).then((response)=>{
      console.log(response)
      if(response.status===200){
        const userID = parseJwt(response.data.access_token).userId;
        SetLoginCookie(userID, true);
        getInitialData()
        navigate("/dashboard");
      }
      alert(response.data.message)
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  };

  const getInitialData=()=>{
    userDetailsRequest().then((response)=>{
      if (response.status===200 && response.data && response.data.company_profile){
        setContextCompanyProfile(response.data.company_profile)
      }
    })
  }
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
                  {/* <input
                    type="text"
                    className="simple-input no-margin w-input"
                    maxLength={256}
                    name="Telephone"
                    data-name="Telephone"
                    placeholder=""
                    id="telephone"
                    required=""
                    value={telephone}
                    onChange={(e)=>seTelephone(e.target.value)}
                  /> */}
                  <PhoneInput
                    country={"eg"}
                    enableSearch={true}
                    value={telephone}
                    onChange={(phone) => seTelephone(phone)}
                  />
                  <div className="spacer _24" />
                  <input
                    type="button"
                    defaultValue={loading ? "Please wait..." : "Next" }
                    data-wait="Please wait..."
                    className="button no-margin w-button"
                    disabled={loading}
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
                    name="Otp"
                    data-name="Otp"
                    placeholder=""
                    id="Otp"
                    required=""
                    value={otp}
                    onChange={(e)=>setOtp(e.target.value)}
                  />
                  <div className="spacer _24" />
                  <input
                    type="submit"
                    value={loading ? "Please wait..." : "Submit" }
                    data-wait="Please wait..."
                    className="button no-margin w-button"
                    onClick={handleSubmit}
                    disabled={loading}
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
