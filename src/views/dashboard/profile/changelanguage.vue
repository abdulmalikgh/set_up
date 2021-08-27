<script>
import appConfig from '@src/app.config'

export default {
	page: {
		title: 'change language',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	data() {
	return {
            
		}
	},
	methods: {

	}
}
</script>
<style scoped>
#account-settings{
  height:calc(100vh - 120px);
}
.changelanguage{
    display: flex;
    flex-direction: column;
}
.changelanguage button{
    display: flex;
    padding-top:12px;
    padding-bottom: 12px;
    padding-left: 12px;
    outline:none;
    border:none;
    background: transparent;
    border:5px;
}
.changelanguage button:hover, .active{
    background: #F7921C;
    opacity: 0.05;
}
.changelanguage button p{
    margin-bottom:0px!important;
}
</style>
<template>
    <div class="col-sm-12 col-md-7 col-lg-8 col-xl-9">
		<div id="account-settings" class="mnotify-card">
			<div  id="side-indicators-content" class="mnotify-card-header">
				<div class="profile-settings-section-header">
					<profilesettingsbtn/>
					<div class="profile-settings-sub-header">
						<h3 class="mnotify-card-header-text py-0 my-0">Change Language</h3>
						<!-- <p class="profile-description">Change your current phone number to another</p> -->
					</div>
				</div>
			</div>
			<div class="mnotify-card-body">
				<div class="row profile-settings-form" style="margin-top:2em;">
					<div class="col-sm-11 col-md-10 col-lg-5">
						<p class="profile-see-more">please select your preferred language</p>
						<div class="profile-inner">
							<div class="changelanguage">
                            <button>
                                <img  height="16" width="21" class="mr-3" src="@assets/english.png" alt="english">	
                                <p class="align-middle">English</p>
                            </button>
                            <button>
                                <img height="16" width="21" class="mr-3" src="@src/assets/french.png" alt="french">
                                <p class="align-middle">French</p>
                            </button>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
