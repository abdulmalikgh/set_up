<script>
import { authComputed } from '@state/helpers'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
	components: {
		VuePerfectScrollbar,
	},
	props: {
		user: {
			type: Object,
			required: false,
			default: () => ({}),
		},
		isMenuOpened: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			isEnglish: true
		}
	},
	computed: {
		...authComputed,
	},
	methods: {
		toggleMenu() {
			this.$parent.toggleMenu()
		},
		toggleRightSidebar() {
			this.$parent.toggleRightSidebar()
		},
	},
}
</script>
<template>
	<div class="navbar navbar-expand flex-column flex-md-row navbar-custom" id="mNotify-topbar">
		<div class="container-fluid">
			<a href="/" class="navbar-brand mr-0 mr-md-2 logo">
				<span class="logo-lg">
					<img src="@assets/logo.png" alt height="70" />
				</span>
				<span class="logo-sm">
					<img src="@assets/logo.png" alt height="70" />
				</span>
			</a>
			<ul class="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
				<li class>
					<button
						class="button-menu-mobile open-left disable-btn"
						:class="{ open: isMenuOpened }"
						@click="toggleMenu">
						<feather type="menu" class="menu-icon align-middle"></feather>
						<feather type="x" class="close-icon"></feather>
					</button>
				</li>
			</ul>
			<ul class="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
				<li>
					<div class="messages">
						<div class="mNotify-message left__color">
							 <div class="mNotify-icon">
								<feather size="16" type="phone-call"></feather>
							 </div>
							 <div class="mNotify-text">
								 <span class="upper-text">Messages Remaining</span> <br>
								 <span class="amount">24,000  <span class="text-border">1000</span> </span>
							 </div>
						</div>
						<div class="clear__fix">
							<p class="vertical"></p>
						</div>
						<div class="mNotify-message" x>
							 <div class="mNotify-icon">
								 <feather size="16" type="mail"></feather>
							 </div>
							 <div class="mNotify-text">
								 <span class="upper-text">Minutes Remaining</span> <br>
								 <span class="amount">00:00:00</span>
							 </div>
						</div>
					</div>
				</li>
				<li>
					<div class="help mt-4">
						<i class="fas fa-question-circle" style="font-size:24px"></i>
					</div>
				</li>
				<li>
					<b-nav-item-dropdown
						id="globe-tooltip"
						right
						variant="black"
						class="dropdown d-none d-lg-block"
						no-caret
					>
						<template v-slot:button-content>
							<div v-if="isEnglish">
								<span class="align-middle">EN</span>
								<img  height="20" class="ml-3" src="@assets/english.png" alt="english">	
							</div>
							<div v-if="!isEnglish">
								<span class="align-middle">FR</span>
								<img height="20" class="ml-3" src="@src/assets/french.png" alt="french">
							</div>
						</template>
						<b-tooltip target="globe-tooltip" placement="left"
							>Change language</b-tooltip>
						<b-dropdown-item class="text-center" href="#" @click="isEnglish = true">
							<span class="align-middle">EN</span>
							<img  height="12" class="ml-4" src="@assets/english.png" alt="english">
						</b-dropdown-item>
						<b-dropdown-item class="text-center" href="#" @click="isEnglish = false">
							<span class="ali     gn-middle">FR</span>
							<img height="12" class="ml-4" src="@src/assets/french.png" alt="french">
						</b-dropdown-item>
					</b-nav-item-dropdown>
				</li>
				<!-- <li>
					<b-nav-item-dropdown id="nav_bar_dropdown_item" no-caret right>
						<template v-slot:button-content>
							<button id="profile-button">
								Rebecca  <i class="fas fa-chevron-down" style="font-size:18px !important; padding-top:5px; padding-left:7px;"></i>
							</button>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Settings</b-dropdown-item>
						<b-dropdown-item href="#">Developer</b-dropdown-item>
						<b-dropdown-item href="#">Logout</b-dropdown-item>
					</b-nav-item-dropdown>
				</li> -->
			</ul>
		</div>
	</div>
</template>
<style lang="scss">

	.noti-scroll {
		height: 220px;
	}
	.ps > .ps__scrollbar-y-rail {
		width: 8px !important;
		background-color: transparent !important;
	}
	.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y,
	.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y,
	.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
	.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
		width: 6px !important;
	}
	.button-menu-mobile {
		outline: none !important;
	}
	.messages{
		width:330px;
		height: 40px;
		display: flex;
		margin-top: 1em;
		background: #FFFFFF;
		border-radius: 5px;
		padding-bottom: .5em;
		border:1px solid red;
	}
	.mNotify-message{
		width:49%;
		display: flex;
	}
	.clear__fix{
		width:2%;
	}
	.vertical{
		width: 1px;
		background-color: #D4D8E2;
		margin-top: 4px;
		height: 80%;
	}
	.mNotify-icon{
		// padding: 15px;
		display: flex;
		align-items: center;
	}
	.upper-text{
		font-family: Graphik;
		font-style: normal;
		font-weight: normal;
		font-size: 11px;
		line-height: 11px;
		text-transform: capitalize;
		color:#484A4F;
		padding-bottom:-10px;
	}
	.amount{
		font-family: Graphik;
		font-style: normal;
		font-weight: bolder;
		font-size: 14px;
		line-height: 14px;
		color: #484A4F;
	}
	.color{
		background: #F5F5F5;
	}
	.text-border{
		background: #F7921C;
		border-radius: 14px;
		width: 32px!important;
		height: 11px!important;
		font-style: normal;
		font-weight: 500;
		font-size: 8px;
		line-height: 9px;
		color:#fff;
		float: right;
		margin-top:3px;
		text-align: center;
		padding-top: 2px;
	}
	.help{
		padding-right:1.5em;
		padding-left: 3em;
	}
	.profile-button{
		background-color:inherit;
		width:100%;
		height:20px;
	}
</style>
