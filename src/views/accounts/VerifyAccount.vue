<template>
   <div id="mnotify__form">
      <div id="mNotify__form_image_container">
          <div class="side-image-background">
              <div class="logo_container">
                  <img src="../../assets/mnotify logo.svg" height="30" width="120" alt="">
              </div>
          </div>
      </div>
      <div id="mNotify__signin__form_fields_container"  ref="formContainer">
          <div class="mnotify__form_upper_link">
            <p class="text_right_corner">Don’t have an account? <router-link to="/signup" class="account_link">Sign Up</router-link> </p>
          </div>
          <div class="mnotify_form__inner__wrapper">
            <div class="mNotify__form_fields_inner_container">
              <h2 class="form_title">Verify your account</h2>
              <hr class="form_line">
                <p class="reset_password_text">We have sent an authentication code to <strong>{{currentUser.phone}}</strong></p>
                <p class="wrong_number"><button @click="returnToLogin">Wrong number?</button> </p>
                <el-form action="">
                    <div class="pin__input__container">
                      <div class="form_input_container veriy_account_input_text_padding_right verify_pin">
                        <el-form-item prop="number1">
                          <el-input type="text" autocomplete="false" maxlength="1" v-model="formData.number1"></el-input>
                        </el-form-item>
                      </div>
                      <div class="form_input_container veriy_account_input_text_padding_right verify_pin">
                        <el-form-item prop="number1">
                          <el-input type="text" autocomplete="false"  maxlength="1" v-model="formData.number2"></el-input>
                        </el-form-item>
                      </div>
                      <div class="form_input_container veriy_account_input_text_padding_right verify_pin">
                        <el-form-item prop="number1">
                          <el-input type="text" autocomplete="false" maxlength="1" v-model="formData.number3"></el-input>
                        </el-form-item>
                      </div>
                      <div class="form_input_container verify_pin">
                        <el-form-item prop="number1">
                          <el-input type="text" autocomplete="false" maxlength="1" v-model="formData.number4"></el-input>
                        </el-form-item>
                      </div>
                    </div>
                    <p class="enter_authentication mb-4">Please enter the authentication code </p>
                    <div v-if="errors"><Alert :message="errors" :type="type" /></div>
                    <div class="pt-2">
                      <el-form-item>
                      <el-button  id="mNotify_form_submit_btn" :loading="loading" type="primary" @click="submitForm">Submit</el-button>
                    </el-form-item>
                    </div>
                      
                    <div v-if="timerCount > 0">
                      <strong>Remaining Time {{timerCountInMinuteSecond}}</strong>
                    </div>
                    <div  class="bottom_texts">
                        <p class="did_not_receive_code">Didn’t recieve the code, </p>
                        <p class="resend_code"><button data-toggle="modal" class="mr-3 resend-code" v-b-modal.modal-prevent-closing>Resend code</button></p>
                        <p class="call_instead"> <img height="20px" width="20px" src="../../assets/Calling.png" alt="calling" style="margin-right:10px"> Call instead</p>
                    </div>
                </el-form>
            </div>
          </div>
      </div>
      <!-- modal content -->
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="Resend account activation code"
          @show="resetModal"
          @hidden="resetModal"
          centered 
          button-size="sm"
        >
        <div>
         <p class="resendto"> Resend verification code to <strong>{{currentUser.phone}}</strong> </p>
        </div>
        <el-form>
           <el-form-item label="Please select verification method" prop="otp_method">
            <el-select style="width:100%" v-model="resendCode" placeholder="Select verification method">
              <el-option label="voice" value="voice"></el-option>
                <el-option label="sms" value="sms"></el-option>
              </el-select>
               <small class="text-danger" v-if="resendError">{{resendError}}</small>
            </el-form-item>
        </el-form>
        <template #modal-footer="{ ok, cancel}">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
          <b-button size="sm" class="continue" @click="resendVerificationCode">
            <b-spinner v-if="resendLoading" small label="Loading..."></b-spinner> Continue
          </b-button>
        </template>
    </b-modal>
      <!-- end of modal content -->
  </div>
</template>

<script>
import store from '@state/store'

export default {
  name:'verify-account',
  data() {
    return {
      formData: {
        number1:'',
        number2:'',
        number3:'',
        number4:''
      },
      showModal: false,
      resendCode:'',
      loading: false,
      errors: "",
      type:'alert-danger',
      timerCount: 120,
      resendError: '',
      resendLoading:''
    }
  },
  computed: {
    currentUser() {
      return store.getters['auth/currentUser']
    },
    timerCountInMinuteSecond(){
      let minutes = Math.floor(this.timerCount / 60)
      let seconds = Math.floor(this.timerCount%60)
      return `${minutes} : ${seconds}`
    }
  },
  watch: {
      timerCount: {
          handler(value) {
              if (value > 0) {
                  setTimeout(() => {
                      this.timerCount--;
                  }, 1000);
              }
          },
          immediate: true
      }
  },
  methods:{
    resendVerificationCode(){
      this.resendLoading = true
      this.resendError = ""

      if(!this.resendCode) {
        this.resendError = "Please Select Activation method"
        this.resendLoading = false 
        return false;
      }
      let data = {
        phone: this.currentUser.phone,
        otp_method: this.resendCode
      }
      store.dispatch('auth/resendActivationCode',data)
        .then( response => {
          this.$notify({
              title: 'Success',
              message: response.data.message,
              type: 'success'
            });
            this.$refs['modal'].hide()
            this.formData = {}
            setTimeout(function(){window.location.reload()},200);
        })
        .catch( err => {
          if(err.response.data === undefined) {
            this.resendError = "An error occured try again."
          }
          if(err.response.status === 404) {
            this.resendError = err.response.data.data
          }
        })
        .finally(() => {this.resendLoading = false})
    },
    resetModal(){
      this.resendCode = null
      this.resendError = null
      this.loading = false
    },
    submitForm(){
      this.loading = true
      this.errors = ""
      if(!this.formData.number1 || !this.formData.number2 || !this.formData.number3 || !this.formData.number4) {
         this.errors = "Please Enter authentication code"
         this.loading = false
         return
      }
      let authCode = this.formData.number1 + this.formData.number2 + this.formData.number3 + this.formData.number4
      let data = {code: authCode}
      store.dispatch('auth/activateAccount',data)
            .then( response => {
              this.loading = false
              this.$notify({
                  title: 'Success',
                  message: response.data.message,
                  type: 'success'
                });
              this.$router.push('/login-type');
            })
            .catch( err => {
              this.loading = false
              if(err.response.data === undefined) {
                this.errors = "An error occured try again."
              }
              if(err.response.status === 404) {
                this.serrors = err.response.data.data
              }
            })
    },
    returnToLogin() {
      this.$router.push('/signin')
    }
  }
}
</script>
<style scoped>
.enter_authentication{
  font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #484A4F;
}
.continue{
    background-color:#6D22F2;
}
.resendto{
  color: #484A4F;
}
</style>

