<script>
import appConfig from '@src/app.config'
export default ({
    name:'account-settings',
    page: {
		title: 'account-settings',
		meta: [{ name: 'description', content: appConfig.description }],
	},
    data(){
        return {

        }
    }
})
</script>
<style scopde  lang="scss">
#account-settings{
  height:calc(100vh - 120px);
}
ul{
    margin:0px!important;
    padding:0px!important;
}
ul li{
    list-style: none;
}
ul li h3{
    font-weight: 500!important;
    font-size: 12px;
    line-height: 22px;
    color: #484A4F;
    margin-bottom:0px!important;
}
ul li div{
    margin-top:24px;
}
ul li p{
    margin-bottom:0px!important;
    font-weight: normal;
    font-size: 10px;
    line-height: 140%;
    color: #979797;
}
a{
    color:normal;
    text-decoration:none;   
}
</style>
<template>
    <div class="col-sm-12 col-md-7 col-lg-8 col-xl-9">
        <div id="account-settings" class="mnotify-card">
            <div  id="side-indicators-content" class="mnotify-card-header">
                <h3 class="mnotify-card-header-text py-0 my-0">Billing summary</h3>
            </div>
            <div class="mnotify-card-body">
                <div class="billing-card-inner">
                    <ul>
                        <li>
                        <router-link to="/change-password">
                            <div>
                                <h3 class="header">Change password <feather size="18" style="fill:#484A4F; float:right" type="arrow-right"></feather></h3>
                                <p class="text">change the password of the account</p>
                            </div>
                        </router-link>
                        </li>
                        <li>
                            <router-link to="#">
                                <div>
                                    <h3 class="header">Change Number <feather size="18" style="fill:#484A4F; float:right" type="arrow-right"></feather></h3>
                                    <p class="text">change the phone number associated with account</p>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#">
                                <div>
                                    <h3 class="header">Language settings <feather size="18" style="fill:#484A4F; float:right" type="arrow-right"></feather></h3>
                                    <p class="text">Change the language</p>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#">
                                <div>
                                    <h3 class="header">Email and SMS Notification <feather size="18" style="fill:#484A4F; float:right" type="arrow-right"></feather></h3>
                                    <p class="text">Set email all notifications</p>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#">
                                <div>
                                    <h3 class="header">Account Defaults<feather size="18" style="fill:#484A4F; float:right" type="arrow-right"></feather></h3>
                                    <p class="text">Change account defaults settings</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
