export const Instructions = () => (
  <>
    <div
      data-collapse="all"
      data-animation="default"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="simple-nav w-nav"
    >
      <a href="../dashboard.html" className="dashboard-logo w-nav-brand">
        <img
          src="../images/PVMarket-Logo.png"
          width={150}
          alt=""
          className="sidebar-logo"
        />
      </a>
      <div className="nav-spacer" />
      <a
        href="../dashboard.html"
        className="nav-link cta margin-right w-nav-link"
      >
        Back to Dashboard
      </a>
      <div
        data-hover="false"
        data-delay={0}
        className="nav-dropdown w-dropdown"
      >
        <div className="nav-dropdown-toggle w-dropdown-toggle" />
        <nav className="nav-dropdown-list w-dropdown-list">
          <div className="module">
            <div className="module-main">
              <div className="notificaiton-element">
                <div className="notification-top">
                  <div className="notification-dot" />
                  <div className="notificaiton-title">Email Snooze</div>
                </div>
                <p className="notification-description">
                  Emails can now be snoozed to be seen at a later time.
                </p>
              </div>
              <div className="notificaiton-element seen">
                <div className="notification-top">
                  <div className="notification-dot seen" />
                  <div className="notificaiton-title">Smarter Tasks</div>
                </div>
                <p className="notification-description">
                  Tasks are now upgraded with a whole bunch more features to
                  make it easier.
                </p>
              </div>
              <div className="notificaiton-element seen">
                <div className="notification-top">
                  <div className="notification-dot seen" />
                  <div className="notificaiton-title">No Contact Limit</div>
                </div>
                <p className="notification-description">
                  You wanted no limit on the contact list, and delivered! The
                  contact list is now unlimited.
                </p>
              </div>
              <a href="#" className="module-button w-button">
                See all updates
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div
        data-hover="false"
        data-delay={0}
        className="nav-dropdown w-dropdown"
      >
        <div className="nav-dropdown-toggle w-dropdown-toggle">
          <div className="nav-icon-item">
            <img
              src="../images/Bell.svg"
              loading="lazy"
              width={27}
              alt=""
              className="nav-icon"
            />
            <div className="bell-dot" />
          </div>
        </div>
        <nav className="nav-dropdown-list w-dropdown-list">
          <div className="module">
            <div className="module-main">
              <div className="notificaiton-element">
                <div className="notification-top">
                  <div className="notification-dot" />
                  <div className="notificaiton-title">3 new emails</div>
                </div>
                <p className="notification-description">
                  From AudioHunt, Domains R Us, and Google Accounts.
                </p>
              </div>
              <div className="notificaiton-element seen">
                <div className="notification-top">
                  <div className="notification-dot seen" />
                  <div className="notificaiton-title">4 new orders</div>
                </div>
                <p className="notification-description">
                  There are new orders to be fulfilled.
                </p>
              </div>
              <div className="notificaiton-element seen">
                <div className="notification-top">
                  <div className="notification-dot seen" />
                  <div className="notificaiton-title">5 new tickets</div>
                </div>
                <p className="notification-description">
                  There are new tickets to be checked.
                </p>
              </div>
              <a href="#" className="module-button w-button">
                See all notifications
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div
        data-hover="false"
        data-delay={0}
        className="profile-menu-dropdown w-dropdown"
      >
        <div
          data-w-id="071f15f1-7dc5-0a4f-9c97-67534b35b4f2"
          className="profile-menu w-dropdown-toggle"
        >
          <div className="profile-image">
            <img
              src="../images/profile250.jpg"
              loading="lazy"
              alt=""
              className="cover-image"
            />
          </div>
          <img
            src="../images/CaretDown.svg"
            loading="lazy"
            width={15}
            alt=""
            className="menu-down"
          />
        </div>
        <nav className="profile-menu-list w-dropdown-list">
          <a href="../profile.html" className="profile-menu-link w-nav-link">
            My Profile
          </a>
          <a href="../settings.html" className="profile-menu-link w-nav-link">
            Settings
          </a>
          <div className="menu-divider" />
          <a href="../pages/help.html" className="profile-menu-link w-nav-link">
            Help Center
          </a>
          <a
            href="../pages/contact-sales.html"
            className="profile-menu-link w-nav-link"
          >
            Report an Issue
          </a>
          <a
            href="../pages/terms-conditions.html"
            className="profile-menu-link w-nav-link"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="../pages/privacy-policy.html"
            className="profile-menu-link w-nav-link"
          >
            Privacy Policy
          </a>
          <a
            href="../template-resources/licenses.html"
            className="profile-menu-link w-nav-link"
          >
            Licenses
          </a>
          <a
            href="../template-resources/instructions.html"
            aria-current="page"
            className="profile-menu-link w-nav-link w--current"
          >
            Instructions
          </a>
          <div className="menu-divider" />
          <a
            href="../pages/sign-in.html"
            className="profile-menu-link w-nav-link"
          >
            Log Out
          </a>
        </nav>
      </div>
    </div>
    <div className="main-content">
      <div className="container smaller w-container">
        <div id="Edit-Profile" className="module">
          <div className="module-main large">
            <h1>Instructions</h1>
            <p className="paragraph-small">Last updated March 2021</p>
            <div href="" className="rich-text w-richtext">
              <p>‍</p>
              <p>
                This template is made to be used as a starter for dashboard
                websites or applications. You can either export the code be
                built and used outside of Webflow, or build in Webflow by adding
                on functionality through Integrations.
              </p>
              <p>‍</p>
              <h3>Not included</h3>
              <p>
                This template does not include any data feeds or membership
                functionality.{" "}
              </p>
              <p>
                To add working membership functionality, add in{" "}
                <a
                  href="https://www.memberstack.com/builder/webflow"
                  target="_blank"
                >
                  Memberstack
                </a>
                . You can find a tutorial on how to install it{" "}
                <a href="https://help.memberstack.com/en/articles/3992058-tutorial-webflow-memberstack">
                  here
                </a>
                .{" "}
              </p>
              <p>
                To add working data feeds, integrate with{" "}
                <a href="https://zapier.com">Zapier </a>and set up a database
                system such as with <a href="https://airtable.com">Airtable</a>{" "}
                or <a href="http://sheets.google.com/">Google Sheets</a>.
              </p>
              <p>‍</p>
              <h3>Modules</h3>
              <p>
                Modules (like this one) don't have any padding. This is so they
                can be used in different ways by adding whatever content you
                need to add. If you want to use the module for a basic content
                use such as this one, you can add a div block inside it and add
                the class <em>"Module Main".</em>
              </p>
              <p>
                For smaller modules, you can add a div above the main section
                and give it the class <em>"Module Header"</em>. Once you've
                added content, the result will look like this:
              </p>
            </div>
            <div className="module">
              <div className="module-header">
                <h3 className="module-heading">New Tickets</h3>
              </div>
              <div className="module-main">
                <div className="empty-module-insert">
                  <img
                    src="../images/Check.svg"
                    loading="lazy"
                    width={27}
                    alt=""
                    className="empty-icon"
                  />
                  <div>
                    No new <br />
                    tickets
                  </div>
                </div>
              </div>
            </div>
            <div href="" className="rich-text w-richtext">
              <p>‍</p>
              <p>
                The modules will fit the size of the div it is put in, so the
                best way to layout pages is using grid layouts, which you can
                find examples of the in the{" "}
                <a href="../template-resources/style-guide.html">Style Guide</a>{" "}
                page.
              </p>
              <p>‍</p>
              <h3>Interactions</h3>
              <p>
                There are a couple of minor interactions that make elements
                disappear, such as for the tasks, and on the Edit Dashboard
                page. These can be tweaked or removed by clicking on the element
                that has the interaction, and editing it from the interaction
                panel.
              </p>
              <figure className="w-richtext-align-floatleft w-richtext-figure-type-image">
                <div>
                  <img
                    src="../images/Screen-Shot-2021-02-26-at-5.20.43-AM.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </figure>
              <p>‍</p>
              <p>‍</p>
              <p>‍</p>
              <p>‍</p>
              <p>‍</p>
              <p>‍</p>
              <p>‍</p>
              <p>‍</p>
              <p>‍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dashboard-footer">
      <p className="paragraph-small light">
        © Dawn All Rights Reserved・&nbsp;Built by&nbsp;
        <a
          href="https://www.nikolaibain.com"
          target="_blank"
          className="simple-link light"
        >
          Nikolai Bain
        </a>
        &nbsp;・&nbsp;Powered by{" "}
        <a
          href="https://webflow.com"
          target="_blank"
          className="simple-link light"
        >
          Webflow
        </a>{" "}
        ・&nbsp;Template{" "}
        <a
          href="../template-resources/licenses.html"
          target="_blank"
          className="simple-link light"
        >
          License
        </a>
      </p>
    </div>
    {/* [if lte IE 9]><![endif] */}
  </>
);
