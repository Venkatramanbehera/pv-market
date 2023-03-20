export const FourOFour = () => (
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
      <a href="dashboard.html" className="dashboard-logo w-nav-brand">
        <img
          src="images/PVMarket-Logo.png"
          width={150}
          alt=""
          className="sidebar-logo"
        />
      </a>
      <div className="nav-spacer" />
      <a href="dashboard.html" className="nav-link cta margin-right w-nav-link">
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
              src="images/Bell.svg"
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
              src="images/profile250.jpg"
              loading="lazy"
              alt=""
              className="cover-image"
            />
          </div>
          <img
            src="images/CaretDown.svg"
            loading="lazy"
            width={15}
            alt=""
            className="menu-down"
          />
        </div>
        <nav className="profile-menu-list w-dropdown-list">
          <a href="profile.html" className="profile-menu-link w-nav-link">
            My Profile
          </a>
          <a href="settings.html" className="profile-menu-link w-nav-link">
            Settings
          </a>
          <div className="menu-divider" />
          <a
            href="pages/terms-conditions.html"
            className="profile-menu-link w-nav-link"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="pages/privacy-policy.html"
            className="profile-menu-link w-nav-link"
          >
            Privacy Policy
          </a>
          <a
            href="template-resources/instructions.html"
            className="profile-menu-link w-nav-link"
          >
            Instructions
          </a>
          <div className="menu-divider" />
          <a href="pages/sign-in.html" className="profile-menu-link w-nav-link">
            Log Out
          </a>
        </nav>
      </div>
    </div>
    <div className="utility-page-wrap">
      <div className="utility-page-content w-form">
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <div className="spacer _16" />
        <a href="dashboard.html" className="button w-button">
          Back to Home
        </a>
      </div>
    </div>
  </>
);
