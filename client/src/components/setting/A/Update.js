import React from 'react'

export const Update = () => {
  return (
    <div class="account-main">
    
    <h1>My Profile</h1>

    <div class="profile-grid">
        <div class="profile-image">
            <label for="input-newProfileImage" hidden=""></label>
            <input accept="image/*" id="input-newProfileImage" name="files" hidden="" type="file" />
            <img src="https://api.coschedule.com/apx/profile/u/691827/200?rev=1665071617" alt="Profile Image"
                title="Profile Image" />

            <button class="button circle large orange" style={{"color": "#d17760"}}
                onclick="document.getElementById('input-newProfileImage').click();" title="Upload New Image"
                type="button">
                <span class="icon-edit"></span>
            </button>
            <button class="button button-flat small" title="Remove Profile Image" type="button">
                Remove Profile Image
            </button>
           
        </div>
        <div class="profile-details">
            <label for="input-userName">
                Profile Name
            </label>
           
            <input data-originalvalue="Udayveer Singh" id="input-userName" placeholder="Profile Name"
                autocomplete="on" type="text" value="Udayveer Singh" />


            <label for="input-email" class="margin-top-20">
                Email Address
            </label>
            <input id="input-email" title="Email Address" disabled="" type="text" value="udayveerus348566@gmail.com" />
           
            <button class="button button-link orange small" type="button" style={{"color": "#d17760"}}>
                Change Email
            </button>

            <label for="input-passwordPlaceholder" class="margin-top-30">
                Password
            </label>
            <input id="input-passwordPlaceholder" value="********************************" disabled=""
                onselect="window.getSelection().empty();" type="text" />
            <button class="button button-link orange small" type="button" style={{"color": "#d17760"}}>
                Change password
            </button>

            <div class="delete-profile">
                <button class="button button-link margin-top-50 small" type="button">
                    Delete My Account
                </button>
            </div>
        </div>
    </div>

    

</div>
  )
}
