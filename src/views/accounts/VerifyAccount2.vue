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
              <h2 class="form_title">Verify your account</h2>
              <hr class="form_line">
                 <p class="reset_password_text pb-2">How would you want to recieve your authentication code </p>
                   <div class="form_input_container form_message_type mb-3 mt-2 text-center">
                    <input type="text" class="message_type" placeholder="Text message">
                    <input type="text" class="message_type" placeholder="Voice message">
                  </div>
                <form action="">
                 
                   <p class="enter_auth_code">Please enter the authentication code</p>
                    <div class="form_input_container tel_input text-center">
                      <input class="reset_pin input_text_padding_right" type="text" placeholder="">
                      <input class="reset_pin input_text_padding_right" type="text" placeholder="">
                      <input class="reset_pin input_text_padding_right_long" type="text" placeholder="">

                      <input class="reset_pin input_text_padding_right" type="text" placeholder="">
                      <input class="reset_pin input_text_padding_right" type="text" placeholder="">
                      <input class="reset_pin" type="text" placeholder="">
                    </div>
                    <div>
                      <button class="form_action_btn">Login</button>
                    </div>
                    <div class="text-center return_to_login">
                        <router-link to="/account/login" class=""> Return to sign in</router-link>
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
<style lang="scss" scoped>

</style>
