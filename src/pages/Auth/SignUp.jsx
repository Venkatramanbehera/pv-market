const SignUp = () => (
  <>
    <div className="center-card-container">
      <div
        data-w-id="df4cd933-feb9-dc4d-e842-84be2411378c"
        // style={{ opacity: 0 }}
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
        <h2>Get Started</h2>
        <p>Sign up in just a couple of quick steps.</p>
        <div className="spacer _16" />
        <div className="w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            redirect="/onboarding"
            data-redirect="/onboarding"
            method="get"
            className="sign-up-form"
          >
            <label htmlFor="Subscriber-Name">Name</label>
            <input
              type="email"
              className="simple-input no-margin w-input"
              maxLength={256}
              name="Subscriber-Name"
              data-name="Subscriber Name"
              placeholder="Enter your name"
              id="Subscriber-Name"
            />
            <div className="spacer _16" />
            <label htmlFor="Subscriber-Email-3">Email</label>
            <input
              type="email"
              className="simple-input no-margin w-input"
              maxLength={256}
              name="Subscriber-Email"
              data-name="Subscriber Email"
              placeholder="Enter your email"
              id="Subscriber-Email"
              required=""
            />
            <div className="spacer _24" />
            <input
              type="submit"
              defaultValue="Sign Up"
              data-wait="Please wait..."
              className="button large w-button"
            />
          </form>
          <div className="form-success w-form-done">
            <div>Check your email for next steps</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <p className="paragraph-small light">
          By clicking the button above, you agree to our{" "}
          <a
            href="../pages/terms-conditions.html"
            target="_blank"
            className="simple-link light"
          >
            Terms &amp; Conditions
          </a>{" "}
          and{" "}
          <a
            href="../pages/privacy-policy.html"
            target="_blank"
            className="simple-link light"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>

    {/* [if lte IE 9]><![endif] */}
  </>
);

export default SignUp;
