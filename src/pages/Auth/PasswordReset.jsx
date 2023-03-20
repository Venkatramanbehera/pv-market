const PasswordReset = () => (
  <>
    <div className="center-card-container">
      <div
        data-w-id="df4cd933-feb9-dc4d-e842-84be2411378c"
        className="center-card"
      >
        <a href="../dashboard.html" className="center-image w-inline-block">
          <img
            src="../images/PVMarket-Logo.png"
            loading="lazy"
            width={150}
            alt=""
          />
        </a>
        <div className="spacer _16" />
        <h2>Password Reset</h2>
        <p>Enter your email below and we will send you a reset link.</p>
        <div className="spacer _16" />
        <div className="w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
            className="sign-up-form"
          >
            <label htmlFor="Subscriber-Email-3" className="field-label">
              Email
            </label>
            <input
              type="email"
              className="simple-input no-margin w-input"
              maxLength={256}
              name="Subscriber-Email"
              data-name="Subscriber Email"
              placeholder="name@company.com"
              id="Subscriber-Email"
              required=""
            />
            <div className="spacer _16" />
            <input
              type="submit"
              defaultValue="Reset Password"
              data-wait="Please wait..."
              className="button no-margin w-button"
            />
          </form>
          <div className="form-success w-form-done">
            <div>Success! Check your email.</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PasswordReset;
