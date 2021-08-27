<script>
import appConfig from '@src/app.config'
import store from '@state/store'

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
			phone:"",
		},
		rules: {
			phone: [
			{
				required: true,
				message: 'New phone number is required',
				trigger: ['blur','change'] },
			],
		}
		}
	},
	computed: {
		currentUser() {
			return store.getters['auth/currentUser'] ? store.getters['auth/currentUser'].phone : ""
		}
	},
	methods: {
		  submitForm(formName){
			this.errors = '';
			this.loading = true

			this.$refs[formName].validate((valid) => {
			if (valid) {
				store.dispatch('auth/updatePhone', this.formData)
				.then( response => {
					this.loading = false
					this.$notify({
						title: 'Success',
						message: response.data.message,
						type: 'success'
					});
					this.$router.push('/profile-settings');
				})
				.catch( err => {
					this.loading = false
					if(err.response.data === undefined) {
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
		
			</div>
		</div>
    </div>
</template>
