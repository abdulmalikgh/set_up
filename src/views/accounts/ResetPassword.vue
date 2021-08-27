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
            <p class="text_right_corner">Don’t have an account? <router-link to="/signup" class="account_link">Sign Up</router-link> </p>
          </div>
          <div class="mnotify_form__inner__wrapper">
            <div class="mNotify__form_fields_inner_container">
              <h2 class="form_title">Reset your password</h2>
              <hr class="form_line">
              <p class="reset_password_text">Enter the phone number associated with your account and we’ll send you a link to reset your password</p>
                <el-form  ref="ruleForm" :model="formData" :rules="rules" >
                  <div class="country__number__input">
                    <!-- <div class="form_input_container country">
                      <el-form-item label="Code" prop="country">
                      <el-select style="width:100%" v-model="formData.country" filterable placeholder="Select country">
                        <el-option 
                          v-for="(country, key) in countryCode" :key="key" 
                          :label="`${country.flag} ${country.name}`" :value="country.name"></el-option>
                      </el-select>
                      </el-form-item>
                    </div> -->
                    <div class="form_input_container number mb-3">
                      <el-form-item label="Phone" prop="phone">
                        <el-input type="text" placeholder="Enter Phone"  v-model="formData.phone"  autocomplete="false"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div>
                     <Alert v-if="errors" :message="errors" :type="type" />
                    <el-form-item>
                      <el-button id="mNotify_form_submit_btn" @click="submitForm('ruleForm')" :loading="loading" type="primary">Reset</el-button>
                    </el-form-item>
                  </div>
                  <div class="text-center return_to_login mt-2">
                      <router-link to="/signin" class=""> Return to sign in</router-link>
                  </div> 
                </el-form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import store from '@state/store.js'
export default {
  data() {
    return {
      formData: {
        phone:''
      },
      rules: {
          phone: [
          {required: true, message: 'Please phone number is required.', trigger: 'change' },
        ],
      },
      loading: false,
      errors: '',
       type:'alert-danger',
    }
  },
  computed:{
    countryCode(){
      return store.getters['auth/countryCode']
    }
  },
  methods: {
        submitForm(formName){

         this.errors = "";
         this.loading = true

         this.$refs[formName].validate((valid) => {
          if (valid) {
            store.dispatch('auth/resetPassword', this.formData)
              .then( response => {
                console.log('response', response)
                this.loading = false
              })
              .catch( err => {
                this.loading = false
                console.log('err', err)

                if(err.response.status === 404) {
                  this.errors = err.response.data.data;
                }

                // if(err.response?.data == undefined) {
                //   this.errors = "Network Error."
                // }
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
.country__number__input{
  display: flex;
  justify-content: space-between;
}
.country{
  width:30%;
}
.number{
  width:100%;
}
</style>

