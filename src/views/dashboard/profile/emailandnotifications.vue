<script>
import appConfig from '@src/app.config'

export default {
	page: {
		title: 'email and notification settings',
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
    <div class="col-sm-12 col-md-7 col-lg-8 col-xl-9">
		<div id="account-settings" class="mnotify-card">
			<div  id="side-indicators-content" class="mnotify-card-header">
				<div class="profile-settings-section-header">
					<profilesettingsbtn/>
					<div class="profile-settings-sub-header">
						<h3 class="mnotify-card-header-text py-0 my-0">mail and SMS Notification </h3>
						<p class="profile-description">Set email and all notifications</p>
					</div>
				</div>
			</div>
			<div class="mnotify-card-body">
		
			</div>
		</div>
    </div>
</template>
