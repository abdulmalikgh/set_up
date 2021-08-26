<template>
   <div id="mnotify__form">
      <div id="mNotify__form_image_container">
          <div class="side-image-background">
              <div class="logo_container">
                  <img src="../../assets/mnotify logo.svg" height="30" width="120" alt="">
              </div>
          </div>
      </div>
      <div id="mNotify__form_fields_container"  ref="formContainer">
          <div class="mnotify__form_upper_link">
            <p class="text_right_corner">Don’t have an account? <router-link to="/account/signup" class="account_link">Sign Up</router-link> </p>
          </div>
          <div class="mnotify_form__inner__wrapper">
            <div class="mNotify__form_fields_inner_container">
             <h2 class="form_title">Refer friends. Get rewards.</h2>
            <hr class="form_line">
            <p class="reset_password_text pb-4">Introduce a friend to mNotify to earn <strong>$10</strong> worth of credit</p>
                <form action="">
                     <label class="form_input_label share_link_label " for="share">Share my referral code with friends</label>
              <div class="form_input_share_container">
                <input class="form_input_share" type="text" placeholder="https://apps.mnotify.net/referral/dorcas">
                <button>
                    <img width="25" height="25" src="../../assets/Stroke 1.png" alt="">
                </button>
              </div>
              <div class="return_to_login">
                 <p class="share_your_code">Share Your Code</p>
              </div>
              <div class="share_icons">
                  <button>
                      <img  width="20px" height="20px" src="../../assets/whatssap.png" alt="">
                  </button>
                  <button>
                       <img  width="20px" height="20px" src="../../assets/messenger.png" alt="">
                  </button>
                  <button>
                      <img  width="20px" height="20px" src="../../assets/twitter.png" alt="">
                  </button>
                  <button>
                      <img src="../../assets/dot.png" alt="">
                      <img src="../../assets/dot.png" alt="">
                      <img src="../../assets/dot.png" alt="">
                  </button>
              </div>
                </form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

