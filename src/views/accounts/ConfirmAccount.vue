<template>
   <div id="mnotify__form">
      <div id="mNotify__form_image_container">
          <div class="side-image-background">
              <div class="logo_container">
                  <img src="../../assets/mnotify logo.svg" height="30" width="120" alt="">
              </div>
          </div>
      </div>
      <div id="mNotify__signin__form_fields_container">
          <div class="mnotify__form_upper_link">
            <p class="text_right_corner">Don’t have an account? <router-link to="/account/signup" class="account_link">Sign Up</router-link> </p>
          </div>
          <div class="mNotify__signin__form_fields_container">
            <div class="mNotify__form_fields_inner_container">
              <h2 class="form_title">Reset your password</h2>
               <p class="reset_password_text pb-2">We have sent you a temporary password, check your phone, and enter </p>
              <hr class="form_line">
                <el-form action="">
                  <div class="form_input_container tel_input text-center">
                    <input class="reset_pin input_text_padding_right" type="text" placeholder="">
                    <input class="reset_pin input_text_padding_right" type="text" placeholder="">
                    <input class="reset_pin input_text_padding_right_long" type="text" placeholder="">
                    <input class="reset_pin input_text_padding_right" type="text" placeholder="">
                    <input class="reset_pin input_text_padding_right" type="text" placeholder="">
                    <input class="reset_pin" type="text" placeholder="">
                  </div>
                  <div class="mt-2">
                    <button class="mNotify_form_submit_btn">Login</button>
                  </div>
                  <div class="text-center return_to_login">
                      <router-link to="/account/login" class="">Return to sign in</router-link>
                  </div>
                </el-form>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        number1:'',
        number2:'',
        number3:'',
        number4:''
      }
    }
  }
}
</script>

