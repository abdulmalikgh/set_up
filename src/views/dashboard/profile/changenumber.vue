<script>
import appConfig from '@src/app.config'

export default {
	page: {
		title: 'change number',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	data() {
	return {
		errors:'',
		loading:false,
		type:'alert-danger',
		formData: {
			old_phone_number:"",
			new_phone_numbesr:"",
		},
		rules: {
			old_phone_number: [
				{required: true, message: 'Current phone number is required', trigger: 'change' },
			],
			new_phone_numbesr: [
			{
				required: true,
				message: 'New phone number is required',
				trigger: ['blur','change'] },
			],
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
						<h3 class="mnotify-card-header-text py-0 my-0">Change Number</h3>
						<p class="profile-description">Change your current phone number to another</p>
					</div>
				</div>
			</div>
			<div class="mnotify-card-body">
				<div class="row profile-settings-form" style="margin-top:2em;">
					<div class="col-sm-11 col-md-10 col-lg-5">
						<p class="profile-see-more">See information about your account.</p>
						<div class="profile-inner">
							<el-form :model="formData" :rules="rules" ref="ruleForm">
								<div class="form_input_container">
									<el-form-item label="Old Phone Number" prop="old_phone_number">
									<el-input type="text" autocomplete="off" placeholder="Current Phone Number"  v-model="formData.old_phone_number"></el-input>
									</el-form-item>
								</div>
								<div class="form_input_container">
									<el-form-item label="New Phone Number" prop="password">
									<el-input type="text" autocomplete="off" placeholder="New Phone Number"  v-model="formData.new_phone_numbesr"></el-input>
									</el-form-item>
								</div>
								<Alert v-if="errors" :message="errors" :type="type" />
								<div class="terms_and_conditons_container mt-5">
									<el-form-item>
									<el-button  id="mNotify_form_submit_btn" :loading="loading" type="primary" @click="submitForm('ruleForm')">Change Number</el-button>
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
