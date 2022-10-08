import React from 'react'
const Account = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light m-5 mt-5">
        <a className="navbar-brand" href="#">
          setting
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Team Members
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Social Profiles
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Comapany
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Billing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Account
              </a>
            </li>
          </ul>

        </div>
      </nav>
      <div class="account-details">

        <div class="account-details-section">
          <h3>Account Details</h3>

          <div class="user-details-container">
            <div class="user-profile-picture">
              <img src="https://api.coschedule.com/apx/profile/u/691827/64?rev=1665071617" class="img-circle" alt="User Profile" />
            </div>
            <div class="user-info">
              <h4>Udayveer Singh</h4>
              <h5>udayveerus348566@gmail.com</h5>

              <div class="margin-top-auto">
                <button class="button orange flat" type="button">Update My Details</button>
                <span class="margin-left-right-5">|</span>
                <button class="button orange flat" type="button">Change Password</button>
              </div>
            </div>
          </div>
        </div>

        <div class="account-details-section">
          <div id="ember250" class="ember-view"><div class="notification-preferences">
            <h3>My Notification Preferences</h3>
            <div class="np-grid-container np-header-grid">
              <div class="np-grid-item np-column-header"></div>
              <div class="np-grid-item np-column-header">Web App</div>
              <div class="np-grid-item np-column-header">Email</div>
              <div class="np-grid-item np-column-header">Browser</div>
            </div>
            <div id="ember251" class="collapsible-item collapsed ember-view">
              <div class="np-grid-container np-content-grid">
                <div class="np-grid-item np-section-header np-section-toggle" data-test="Content">
                  <i class="icon-chevron-up"></i>
                  Projects
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="dashboard-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="email-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="browser-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
              </div>

              <div id="ember252" class="ember-view np-grid-container"><div class="np-grid-item np-name">The status of a project or post changes</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember253" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember254" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember255" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
              <div id="ember256" class="ember-view np-grid-container"><div class="np-grid-item np-name">I am added as a contributor to a project</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember257" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember258" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember259" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
              <div id="ember260" class="ember-view np-grid-container"><div class="np-grid-item np-name">I am assigned as the owner of a project</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember261" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember262" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember263" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
            </div>
            <div id="ember264" class="collapsible-item collapsed ember-view">
              <div class="np-grid-container np-content-grid">
                <div class="np-grid-item np-section-header np-section-toggle" data-test="Tasks">
                  <i class="icon-chevron-up"></i>
                  Tasks
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="dashboard-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="email-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="browser-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
              </div>

              <div id="ember265" class="ember-view np-grid-container"><div class="np-grid-item np-name">A task is assigned to me</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember266" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember267" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember268" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
              <div id="ember269" class="ember-view np-grid-container"><div class="np-grid-item np-name">Someone completes my task or a task that I have assigned</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember270" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember271" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember272" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
              <div id="ember273" class="ember-view np-grid-container"><div class="np-grid-item np-name">My task due date changed</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input disabled="" id="ember274" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                  <div class="hint-hover bottom">
                    In-app notifications are not available for this notification type
                  </div>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember275" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input disabled="" id="ember276" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                  <div class="hint-hover bottom">
                    Browser notifications are not available for this notification type
                  </div>
                </div></div>
              <div id="ember277" class="ember-view np-grid-container"><div class="np-grid-item np-name">My task is due tomorrow</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input disabled="" id="ember278" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                  <div class="hint-hover bottom">
                    In-app notifications are not available for this notification type
                  </div>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember279" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input disabled="" id="ember280" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                  <div class="hint-hover bottom">
                    Browser notifications are not available for this notification type
                  </div>
                </div></div>
            </div>
            <div id="ember281" class="collapsible-item collapsed ember-view">
              <div class="np-grid-container np-content-grid">
                <div class="np-grid-item np-section-header np-section-toggle" data-test="Discussions">
                  <i class="icon-chevron-up"></i>
                  Discussions
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="dashboard-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="email-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="browser-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
              </div>

              <div id="ember282" class="ember-view np-grid-container"><div class="np-grid-item np-name">A new comment is made on an item I am contributing to</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember283" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember284" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember285" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
              <div id="ember286" class="ember-view np-grid-container"><div class="np-grid-item np-name">Someone mentions me in a comment</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember287" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember288" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember289" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
              <div id="ember290" class="ember-view np-grid-container"><div class="np-grid-item np-name">Someone reacted to my comment</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember291" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember292" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember293" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
            </div>
            <div id="ember294" class="collapsible-item collapsed ember-view">
              <div class="np-grid-container np-content-grid">
                <div class="np-grid-item np-section-header np-section-toggle" data-test="SocialMessages">
                  <i class="icon-chevron-up"></i>
                  Social Messages
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="dashboard-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="email-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="browser-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
              </div>

              <div id="ember295" class="ember-view np-grid-container"><div class="np-grid-item np-name">There was a problem with your social message</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember296" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember297" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember298" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div></div>
            </div>
            <div id="ember299" class="collapsible-item collapsed ember-view">
              <div class="np-grid-container np-content-grid">
                <div class="np-grid-item np-section-header np-section-toggle" data-test="WeeklyDigest">
                  <i class="icon-chevron-up"></i>
                  Weekly Digest
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="dashboard-checkbox" class="orange-checkbox checkbox" disabled="" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="email-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="browser-checkbox" class="orange-checkbox checkbox" disabled="" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
              </div>

              <div id="ember300" class="ember-view np-grid-container"><div class="np-grid-item np-name">Receive a weekly digest of my team's activity</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input disabled="" id="ember301" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                  <div class="hint-hover bottom">
                    In-app notifications are not available for this notification type
                  </div>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember302" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input disabled="" id="ember303" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                  <div class="hint-hover bottom">
                    Browser notifications are not available for this notification type
                  </div>
                </div></div>
            </div>
            <div id="ember304" class="collapsible-item collapsed ember-view">
              <div class="np-grid-container np-content-grid">
                <div class="np-grid-item np-section-header np-section-toggle" data-test="RequeueWeeklyDigest">
                  <i class="icon-chevron-up"></i>
                  ReQueue Weekly Digest
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="dashboard-checkbox" class="orange-checkbox checkbox" disabled="" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="email-checkbox" class="orange-checkbox checkbox" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column np-section-header">
                  <input id="browser-checkbox" class="orange-checkbox checkbox" disabled="" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
              </div>

              <div id="ember305" class="ember-view np-grid-container"><div class="np-grid-item np-name">Receive a weekly digest of my ReQueue activity</div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input disabled="" id="ember306" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                  <div class="hint-hover bottom">
                    In-app notifications are not available for this notification type
                  </div>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input id="ember307" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                </div>
                <div class="np-grid-item np-setting-column hint-hover-target">
                  <input disabled="" id="ember308" class="orange-checkbox checkbox ember-checkbox ember-view" type="checkbox" />
                  <label class="checkbox"></label>
                  <div class="hint-hover bottom">
                    Browser notifications are not available for this notification type
                  </div>
                </div></div>
            </div>
          </div></div>
        </div>

        <div class="account-details-section">
          <div class="connected-services">
            <h3>My Connected Services</h3>

            <div class="width-100 text-align-center">
              <span class="gray-4-text">No Services Connected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
