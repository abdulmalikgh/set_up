<template>
  <div id="mnotify__form">
      <div id="mNotify__form_image_container">
          <div class="row">
            <div class="col-12">
              <div class="side-image-background">
                  <div class="logo_container">
                      <img src="../../assets/mnotify logo.svg" height="30" width="120" alt="">
                  </div>
              </div>
            </div>
          </div>
      </div>
      <div id="mNotify__signin__form_fields_container" class="">
          <div class="mnotify__form_upper_link">
            <p class="text_right_corner">Don’t have an account? <router-link to="/signup" class="account_link">Sign Up</router-link> </p>
          </div>
          <div class="mnotify_form__inner__wrapper">
            <div class="mNotify__form_fields_inner_container" id="form__inner">
              <h2 class="form_title">Sign in to your account</h2>
              <hr class="form_line">
                <el-form :model="formData" :rules="rules" ref="ruleForm">
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
                    <Alert v-if="errors" :message="errors" :type="type" />
                  <div class="mt-2">
                    <el-form-item>
                      <router-link to="/forget-password" class="account_link float-right">Forgot your password ?</router-link>
                    </el-form-item>
                  </div>
                  <div class="terms_and_conditons_container">
                    <el-form-item>
                      <el-button  id="mNotify_form_submit_btn" :loading="loading" type="primary" @click="submitForm('ruleForm')">Login</el-button>
                    </el-form-item>
                  </div>
                </el-form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import store from '@state/store'
export default {
  data() {
    return {
      formData: {
        email:"",
        password:"",
      },
      errors:'',
      loading: false,
      type:'alert-danger',
      rules: {
        email: [
          {type: 'email', message: 'Please enter a valid email.', trigger: 'change' },
          {required: true, message: 'Please email is required.', trigger: 'change' },
        ],
        password: [
          {
            required: true, pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})" , 
            message: 'Password must contains at least a Special Case, Upper Case, Lower Case, and a Number.',
            trigger: ['blur','change'] },
        ],
      }
    }
  },
  computed: {
      countryCode(){
      return store.getters['auth/countryCode']
    }
  },
  methods: {
    submitForm(formName){

         this.errors = '';
         this.loading = true

         this.$refs[formName].validate((valid) => {
          if (valid) {
            store.dispatch('auth/login', this.formData)
              .then( response => {
                this.loading = false
                this.$notify({
                    title: 'Success',
                    message: response.data.message,
                    type: 'success'
                  });
                this.$router.push('/overview');
              })
              .catch( err => {
                this.loading = false
                if(err.response.data == undefined) {
                  this.errors = ['Network error try again']
                }
                if(err.response && err.response.status === 404) {
                  this.errors = err.response.data.data.error;
                }
              })
          } else {
            this.loading = false;
            return false;
          }

        });
    },
  }
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
#form__inner{
  margin-top: -2em!important;
}

</style>