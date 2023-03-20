export const FourOOne = () => (
  <div className="utility-page-wrap">
    <div className="utility-page-content w-password-page w-form">
      <form
        action="/.wf_auth"
        method="post"
        id="email-form"
        name="email-form"
        data-name="Email Form"
        className="utility-page-form w-password-page"
      >
        <h2>Protected Page</h2>
        <input
          type="password"
          className="text-input w-password-page w-input"
          autofocus="true"
          maxLength={256}
          name="pass"
          data-name="field"
          placeholder="Enter your password"
          id="field"
        />
        <input
          type="submit"
          defaultValue="Submit"
          data-wait="Please wait..."
          className="button w-password-page w-button"
        />
        <div className="w-password-page w-form-fail">
          <div>Incorrect password. Please try again.</div>
        </div>
        <div
          style={{ display: "none" }}
          className="w-password-page w-embed w-script"
        >
          <input
            type="hidden"
            name="path"
            defaultValue="<%WF_FORM_VALUE_PATH%>"
          />
          <input
            type="hidden"
            name="page"
            defaultValue="<%WF_FORM_VALUE_PAGE%>"
          />
        </div>
        <div
          style={{ display: "none" }}
          className="w-password-page w-embed w-script"
        ></div>
      </form>
    </div>
  </div>
);
