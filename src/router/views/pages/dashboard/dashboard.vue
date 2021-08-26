<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'


export default {
	page: {
		title: 'Overview',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout:Layout
	},
	data() {
		return {
			
		}
	},
}
</script>
<style scoped>
.number{
	font-weight: bolder;
	font-size: 42px;
	line-height: 46px;
	text-transform: capitalize;
	color: #56585F;
}
.title{
	font-weight: normal;
	font-size: 14px;
	line-height: 15px;
	text-transform: capitalize;
	color: #484A4F;	
}
.billing-summary{
	height:420px;
}
.campaigne{
	height:330px;
}
.senderid{
	height:782px;
}
.no-data{
	margin-top:auto;
	margin-bottom:auto;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	height:inherit;
}
.no-data-header{
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 100%;
	text-align: center;
	color: #051C50;
}
.no-data-text{
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 15px;
	text-align: center;
	text-transform: capitalize;
	color: #484A4F;
}
.billing-card-inner{
	height:316px;
}
.campaigne-card-inner{
	height:226px;
}
.senderid-card-inner{
	height:678px;
}
</style>
<template>
	<Layout style="background-color:#FBFBFB">
		<div class="row justify-content-between page-title align-items-center page__padding">
			<div class="col-sm-6 col-6 col-md-3">
				<div class="">
					<p class="number">0</p>
				</div>
				<div class="">
					<p class="title">Campaigns</p>
				</div>
			</div>
			<div class="col-sm-6 col-6 col-md-3">
				<div class="">
					<p class="number">0</p>
				</div>
				<div class="">
					<p class="title">Contacts</p>
				</div>
			</div>
			<div class="col-sm-6 col-6 col-md-3">
				<div class="">
					<p class="number">0</p>
				</div>
				<div class="">
					<p class="title">Groups</p>
				</div>
			</div>
			<div class="col-sm-6 col-6 col-md-3">
				<div class="">
					<p class="number">0</p>
				</div>
				<div class="">
					<p class="title">Credit Used</p>
				</div>
			</div>
		</div>
		<div class="row mb-5">
			<div class="col-md-8">
				<div class="row">
					<div class="col-12">
						<div class="billing-summary mnotify-card">
							<div class="mnotify-card-header">
								<h3 class="mnotify-card-header-text">Billing summary</h3>
							</div>
							<div class="mnotify-card-body">
								<div class="billing-card-inner">
									<div class="no-data">
										<h3 class="no-data-header">No data avalaible</h3>
										<p class="no-data-text">Send messages to view data</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="campaigne mnotify-card">
							<div class="mnotify-card-header">
								<h3 class="mnotify-card-header-text">Recent SMS Campaign</h3>
							</div>
							<div class="campaigne-card-inner">
								<div class="no-data">
									<h3 class="no-data-header">No data avalaible</h3>
									<p class="no-data-text">Send messages to view data</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="row">
					<div class="col-12">
						<div class="senderid mnotify-card">
							<div class="mnotify-card-header">
								<h3 class="mnotify-card-header-text">Sender ID</h3>
							</div>
							<div class="mnotify-card-body">
								<div class="senderid-card-inner">
									<div class="no-data">
										<h3 class="no-data-header">No data avalaible</h3>
										<p class="no-data-text">Register new sender ID </p>
										<el-button type="primary" style="width: 158px; height: 38px;border-radius: 5px;font-weight: 600;font-size: 14px;">Add Sender ID</el-button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
