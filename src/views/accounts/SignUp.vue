<script>
/* eslint-disable */ 
import Vue from 'vue'
import store from '@state/store.js'

export default {
  data() {
      var validatePass2 = (rule, value, callback) => {
        if (this.formData.password_confirmation	 !== this.formData.password) {
          callback(new Error('Password do not match'));
        } else {
          callback();
        }
      }
    return {
      formData : {
        phone: "",
        country:"",
        password:"",
        password_confirmation	:"",
        email:"",
        otp_method:"",
        referral_code:""
      },
      checkBox:"",
      type:'alert-danger',
      loading: false,
      sideImageStyle: {

      },
      errors:[],
      rules: {
        phone: [
          {required: true, message: 'Please phone number is required.', trigger: 'change' },
        ],
        email: [
          {type: 'email', message: 'Please enter a valid email.', trigger: 'change' },
          {required: true, message: 'Please email is required.', trigger: 'change' },
        ],
        otp_method: [
          {required: true, message: 'Please select verification method.', trigger: 'change' },
        ],
        password: [
          {required: true, pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})" , message: 'Password must contains at a Special Case, Upper Case, Lower Case, and a Number.', trigger: ['blur','change'] },
        ],
        country: [
          {required: true, message: 'Please country is required.', trigger: 'change' },
        ],
        password_confirmation	: [
          {validator: validatePass2, trigger: 'blur' },
           {required: true, message: 'Please re-type your password', trigger: 'change' },
        ]
      }
    }
  },
  computed: {
    countryCode(){
      return store.getters['auth/countryCode']
    }
  },
    mounted() {
    this.getFormfieldHeigth()
  },
  methods: {
    submitForm(formName){

         this.errors = [];
         this.loading = true

         this.$refs[formName].validate((valid) => {
          if (valid) {
            store.dispatch('auth/register', this.formData)
              .then( response => {
                this.loading = false
                this.$notify({
                    title: 'Success',
                    message: response.data.message,
                    type: 'success'
                  });
                this.$router.push('/verify-account');
              })
              .catch( err => {
                this.loading = false
                console.log('error', err);
                if(err.response.data == undefined) {
                  this.errors.push("An error occured try again.")
                }
                if(err.response.status === 404) {
                  this.errors = Object.values(err.response.data.data);
                }
              })
          } else {
            this.loading = false;
            return false;
          }

        });
    },
    getFormfieldHeigth() {
      let formFieldHeight = this.$refs.formContainer.clientHeight + "px";
      Vue.set(this.sideImageStyle, 'heigth', formFieldHeight)
    }
  },
}
</script>
<style scoped>
.country_number_container{
  width:100%;
  display: flex;
}
.country{
  width:30%;
}

</style>
<template>
  <div id="mnotify__form" class="signup">
      <div id="mNotify__form_image_container" :style="sideImageStyle">
          <div class="row">
            <div class="col-12">
              <div class="mnotitfy__form_image">
                  <div class="logo_container">
                      <img src="../../assets/mnotify logo.svg" height="30" width="120" alt="">
                  </div>
              </div>
            </div>
          </div>
      </div>

      <div id="mNotify__form_fields_container"  ref="formContainer">
          <div class="mnotify__form_upper_link">
            <p class="">Have an account? <router-link to="/signin" class="account_link">Sign in</router-link> </p>
          </div>
          <div class="mnotify_form__inner__wrapper">
            <div class="mNotify__form_fields_inner_container">
              <h2 class="form_title">Create your mNotify account</h2>
              <hr class="form_line">
              <el-form ref="ruleForm" :model="formData" :rules="rules" >
                
                <div class="form_input_container">
                  <el-form-item label="Country" prop="country">
                  <el-select style="width:100%" v-model="formData.country" filterable placeholder="Select country">
                    <el-option 
                      v-for="(country, key) in countryCode" :key="key" 
                      :label="`${country.flag} ${country.name}`" :value="country.name"></el-option>
                  </el-select>
                </el-form-item>
                </div>
                <div class="form_input_container">
                  <el-form-item label="Phone" prop="phone">
                  <el-input type="text" placeholder="Enter Phone"  v-model="formData.phone"  autocomplete="false"></el-input>
                </el-form-item>
                </div>
               
                 <div class="form_input_container">
                   <el-form-item label="Email Address" prop="email">
                    <el-input type="text" placeholder="Enter your Email Address"  autocomplete="false"  v-model="formData.email"></el-input>
                  </el-form-item>
                </div>
                 <div class="form_input_container">
                   <el-form-item label="Password" prop="password">
                    <el-input type="password" autocomplete="off" placeholder="Enter your password"  v-model="formData.password"></el-input>
                  </el-form-item>
                </div>
                 <div class="form_input_container">
                   <el-form-item label="Confirm Password" prop="password_confirmation">
                    <el-input autocomplete="false" type="password" placeholder="Confirm password"  v-model="formData.password_confirmation"></el-input>
                  </el-form-item>
                </div>
                 <div class="form_input_container">
                   <el-form-item label="Referral Code" prop="referral_code">
                    <el-input type="text"  autocomplete="false" placeholder="Enter Referral Code"  v-model="formData.referral_code"></el-input>
                  </el-form-item>
                </div>
                <div class="form_input_container">
                   <el-form-item label="Receive verification method via voice or sms." prop="otp_method">
                    <el-select style="width:100%" v-model="formData.otp_method" placeholder="Select verification method">
                      <el-option label="voice" value="voice"></el-option>
                        <el-option label="sms" value="sms"></el-option>
                      </el-select>
                    </el-form-item>
                </div>
                 <span v-if="errors.length">
                    <Alert v-for="(error, key) in errors" :key="key" :message="error[0]" :type="type" />
                 </span>
                <div class="terms_and_conditons_container">
                  <p class="terms">  
                    <el-checkbox style="width:15px; height:15px" id="mNotifyTerms" v-model="checkBox"  name="mNotifyTerms"></el-checkbox>
                    I have read and agree to the terms of service.<router-link to="#" id="mNotifyTerms_link"> nMotify terms of service.</router-link></p>
                </div>
                <div class="">
                    <el-form-item>
                      <el-button id="mNotify_form_submit_btn" :loading="loading" type="primary" @click="submitForm('ruleForm')">Continue</el-button>
                    </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
      </div>
  </div>
</template>


