<script>
import appConfig from '@src/app.config'

export default {
	page: {
		title: 'change language',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	data() {
	return {
           language:'english',
		   color:'#f9aa4d' 
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
.changelanguage button:hover{
    background: #fffaf4;
	transition: all 0.5s;
}
.active{
	background: #fffaf4!important;
}
.changelanguage button p{
    margin-bottom:0px!important;
}
.__text{
	width:100%;
	margin-bottom:0px!important;
	display: flex;
	justify-content:space-between;
}
.feather__icon{
	color:#f9aa4d!important;
    fill:rgba( #f9aa4d,0)!important;
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
                            <button @click="language = 'english'" :class="[language === 'english' ? 'active' : '']">
                                <img  height="16" width="21" class="mr-3" src="@assets/english.png" alt="english">	
                                <p class="__text">English <span><feather class="feather__icon" v-if="language === 'english'"  size="18" type="check"></feather></span> </p>
                            </button>
                            <button @click="language = 'french'" :class="[language === 'french' ? 'active' : '']">
                                <img height="16" width="21" class="mr-3" src="@src/assets/french.png" alt="french">
                                <p class="__text">French <span><feather  class="feather__icon" v-if="language === 'french'" size="18"  type="check"></feather></span></p>
                            </button>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
