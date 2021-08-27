<script>
import appConfig from '@src/app.config'
export default {
	page: {
		title: 'change password',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	data() {
		
		var validatePass2 = (rule, value, callback) => {
		if (this.formData.password_confirmation	 !== this.formData.password) {
		callback(new Error('Password do not match'));
		} else {
		callback();
		}
	}
	return {
		errors:'',
		loading:false,
		type:'alert-danger',
		formData: {
			old_password:"",
			password:"",
			password_confirmation:""
		},
		rules: {
			old_phone_number: [
				{required: true, message: 'Current password is required.', trigger: 'change' },
			],
			password: [
			{
				required: true, pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})" , 
				message: 'Password must contains at least a Special Case, Upper Case, Lower Case, and a Number.',
				trigger: ['blur','change'] },
			],
			password_confirmation	: [
				{validator: validatePass2, trigger: 'blur' },
				{required: true, message: 'Please re-type your password', trigger: 'change' },
			]
		}
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
#account-settings{
  height:calc(100vh - 120px);
}


</style>
<template>
    <div class="col-sm-12 col-md-7 col-lg-8 col-xl-9">
		<div id="account-settings" class="mnotify-card">
			<div  id="side-indicators-content" class="mnotify-card-header">
				<div class="profile-settings-section-header">
					<profilesettingsbtn/>
					<div class="profile-settings-sub-header">
						<h3 class="mnotify-card-header-text py-0 my-0">Change Password</h3>
						<p class="profile-description">Update your password</p>
					</div>
				</div>
			</div>
			<div class="mnotify-card-body">
				<div class="row profile-settings-form">
					<div class="col-sm-11 col-md-10 col-lg-5">
						<div class="profile-inner">
							<el-form :model="formData" :rules="rules" ref="ruleForm">
								<div class="form_input_container">
									<el-form-item label="Current Password" prop="old_password">
									<el-input type="password" autocomplete="off" placeholder="New Password"  v-model="formData.old_password"></el-input>
									</el-form-item>
								</div>
								<div class="form_input_container">
									<el-form-item label="New Password" prop="password">
									<el-input type="password" autocomplete="off" placeholder="New Password"  v-model="formData.password"></el-input>
									</el-form-item>
								</div>
								<div class="form_input_container">
									<el-form-item label="Confirm Password" prop="password">
									<el-input type="password" autocomplete="off" placeholder="Confirm Password"  v-model="formData.password_confirmation"></el-input>
									</el-form-item>
								</div>
								<Alert v-if="errors" :message="errors" :type="type" />
								<div class="terms_and_conditons_container mt-5">
									<el-form-item>
									<el-button  id="mNotify_form_submit_btn" :loading="loading" type="primary" @click="submitForm('ruleForm')">Change Password</el-button>
									</el-form-item>
								</div>
							</el-form>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
