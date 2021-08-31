<script>
import appConfig from '@src/app.config'

export default {
	page: {
		title: 'default account settings',
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
.default-header{
	font-family: Graphik;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 22px;
	color: #484A4F;
}
.default-description{
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 140%;
	color: #979797;
}
.btn{
	outline:none;
	border:none;
	background-color:transparent;
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 22px;
	color: #484A4F;
}
.btn:active {
	outline:none;
	border:none;
}
.dropdown-item{
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 22px;
	color: #484A4F;
}
</style>
<template>
    <div class="col-sm-12 col-md-7 col-lg-8 col-xl-9">
		<div id="account-settings" class="mnotify-card">
			<div  id="side-indicators-content" class="mnotify-card-header">
				<div class="profile-settings-section-header">
					<profilesettingsbtn/>
					<div class="profile-settings-sub-header">
						<h3 class="mnotify-card-header-text py-0 my-0">Change account defaults </h3>
						<p class="profile-description"></p>
					</div>
				</div>
			</div>
			<div class="mnotify-card-body">
				<div class="row justify-content-between" style="margin-top:2em;">
					<div class="col-md-6">
						<h3 class="default-header">Default home workspace</h3>
						<p class="default-description">Choose the default home workspace</p>
					</div>
					<div class="col-md-6 d-flex justify-content-end">
						<div class="dropdown">
							<button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Messages workspace &nbsp; <i class="fas fa-chevron-down"></i>
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" href="#">Always ask</a>
								<a class="dropdown-item" href="#">Messages workspace</a>
								<a class="dropdown-item" href="#">Voice workspace</a>
								<a class="dropdown-item" href="#">Whatsapp workspace</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
