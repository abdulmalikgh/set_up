<script>
import appConfig from '@src/app.config'
export default {
	page: {
		title: 'change password',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	data() {
		return {
			
		}
	},
}
</script>
<style scoped>
#account-settings{
  height:calc(100vh - 120px);
}
</style>
<template>
    <div class="row justify-content-between page-title align-items-center page__padding">
		<div id="account-settings" class="mnotify-card">
			<div  id="side-indicators-content" class="mnotify-card-header">
				<h3 class="mnotify-card-header-text py-0 my-0">Change Password</h3>
			</div>
			<div class="mnotify-card-body">
				<div class="profile-inner" >
					
				</div>
			</div>
		</div>
    </div>
</template>
