import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
// import profile250 from "../../assets/images/profile250.jpg";
import { Link } from "react-router-dom";
import CompanyProfileContext from "../../contexts/companyProfileContext";
import { saveCompanyProfileRequest } from "../../utils/Requests";


const Profile = (props) => { 
  const { isOpen, handleChangeIsOpen } = props;
  const {companyProfile, setContextCompanyProfile} = useContext(CompanyProfileContext);
  const [tempCompanyProfile, setTempCompanyProfile] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(companyProfile){
      const tempCompanyProfileData = Object.fromEntries(
        Object.entries(companyProfile)
          .filter(([key]) => ['profilePicture','companyName', 'contactName', 'companyFullAddress', 'yearsInBusiness', 'description'].includes(key))
      );
      setTempCompanyProfile(tempCompanyProfileData)
    }
  },[companyProfile])

  function handleInputChange(event) {
    const { name, value } = event.target;
    setTempCompanyProfile(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior

    setLoading(true)
    saveCompanyProfileRequest(tempCompanyProfile).then((response)=>{
      if(response.status === 200){
        setContextCompanyProfile(response.data)
      }else{
        alert(response.data.message)
      }
      setLoading(false)
    }).catch((error)=>{
      alert(error.response.data.message)
      setLoading(false)
    })
  }
  return(
  <>
    <div className="dashboard-wrapper">
      <SideBar isOpen={isOpen} handleChangeIsOpen={handleChangeIsOpen}/>
      <div className="dashboard-main">
        <div className="sidebar-spacer" />
        <div className={isOpen ? "dashboard-content-open" : "dashboard-content"}>
          <Navbar />
          <div className="main-content">
            <div className="container w-container">
              <h1 className="page-title">Your Profile</h1>
            </div>
            <div className="_1-2-5-grid wf-section">
              <div className="module center-align sticky">
                <div className="profile-image large">
                  {/* <img
                    src={companyProfile?.profilePicture}
                    loading="lazy"
                    alt=""
                    className="cover-image"
                  /> */}
                </div>
                <h3 className="no-margin">Nikolai Bain</h3>
                <h5>Designer</h5>
                <div className="profile-buttons-div" />
              </div>
              <div className="module-group">
                <div id="Account-Infomraiton" className="module">
                  <div className="module-header minimal">
                    <h3 className="module-heading">Account Information</h3>
                  </div>
                  <div className="module-main">
                    <div className="settings-label">Profile Picture</div>
                    <button className="button settings w-button">
                      Upload New Picture
                    </button>
                    <p className="paragraph-small no-margin">
                      You can upload images up to 400x400px.
                      <br />
                    </p>
                    <div className="divider" />
                    <div className="w-form">
                      <form className="form" onSubmit={handleSubmit}>
                        <div className="field-block">
                          <label htmlFor="field">Company Name</label>
                          <input
                            type="text"
                            className="text-input filled w-input"
                            maxLength={256}
                            name="companyName"
                            data-name="Name"
                            placeholder=""
                            id="field"
                            required=""
                            value={tempCompanyProfile?.companyName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="field-block">
                          <label htmlFor="field">Company Address</label>
                          <input
                            type="text"
                            className="text-input filled w-input"
                            maxLength={256}
                            name="companyFullAddress"
                            data-name="profile-email"
                            placeholder=""
                            id="field"
                            required=""
                            value={tempCompanyProfile?.companyFullAddress}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="field-block">
                          <label htmlFor="Role-2">
                            Contact Name (Your Name)
                          </label>
                          <input
                            type="tel"
                            className="text-input filled w-input"
                            maxLength={256}
                            name="contactName"
                            data-name="Role 2"
                            placeholder=""
                            id="Role-2"
                            required=""
                            value={tempCompanyProfile?.contactName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="field-block">
                          <label htmlFor="field">
                            Tell us more about your Company
                          </label>
                          <textarea
                            placeholder=""
                            maxLength={5000}
                            data-name="Field"
                            name="description"
                            id="field"
                            className="text-area filled w-input"
                            defaultValue={""}
                            value={tempCompanyProfile?.description}
                            onChange={handleInputChange}
                          />
                        </div>
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          className="button settings w-button"
                          value={loading ? "Please wait...":"submit" }
                          disabled={loading}
                        />
                      </form>
                      <div className="form-success w-form-done">
                        <div>
                          We've updated your account. Please refresh the page.
                        </div>
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
                <div id="Social-Profiles" className="module">
                  <div className="module-header minimal">
                    <h3 className="module-heading">Profile Stats</h3>
                  </div>
                  <div className="module-main">
                    <div className="_50-width">
                      <div className="field-label">Account created</div>
                      <p>5th April 2023</p>
                    </div>
                    <div className="_50-width" />
                    <div className="_50-width" />
                    <div className="_50-width" />
                    <div className="_50-width" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-footer">
              <p className="paragraph-small light">
                © PV Intelligence All Rights Reserved.
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
    {/* [if lte IE 9]><![endif] */}
  </>
)};

export default Profile;
