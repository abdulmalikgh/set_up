<script>
import appConfig from '@src/app.config'
export default ({
   name:'profie-home',
    page: {
		title: 'Account-settings',
		meta: [{ name: 'description', content: appConfig.description }],
	},
    data(){
        return {

        }
    }
})
</script>
<style scoped lang="scss">
#profile, #account-settings{
  height:calc(100vh - 120px);
}
.profile-inner{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:3rem;
}
.avatar{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 102.2px;
    height: 102.2px;
    left: 374.13px;
    background: #979797;
    opacity: 0.2;
    border-radius: 50%;
    margin-bottom:1rem;
}
.avatar-text{
    font-weight: 600;
    font-size: 30px;
    line-height: 33px!important;
    color: #484A4F;
    margin-bottom:0px!important;
}
.email p{
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #575761;
}
button{
    width:100%;
    height:38px;
}
.upload-information{
    width:100%;
    padding-top:1em;
    display: flex;
    justify-content:center;
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
@media screen and (max-width: 768px) {
    #profile, #account-settings{
    height:100%;
    padding-bottom:3em;
}
}
@media screen and  (max-width:768px) and (min-width:400px) {
    button{
    width:240px;
    height:38px;
    }
}
a{
    color:normal;
    text-decoration:none;   
}
</style>
<template>

        <div class="row justify-content-between page-title align-items-center">
            <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3">

                <div id="profile" class="mnotify-card">
                    <div  id="side-indicators-content" class="mnotify-card-header">
                        <h3 class="mnotify-card-header-text py-0 my-0">Profile</h3>
                    </div>
                    <div class="mnotify-card-body">
                        <div class="profile-inner" >
                            <div class="avatar">
                                <p class="avatar-text">RA</p>
                            </div>
                            <div class="email">
                                <p>Rebecca@gmail.com</p>
                            </div>
                            <div class="upload-information">
                                <el-button type="primary">
                                    Update information
                                </el-button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-12 col-md-7 col-lg-8 col-xl-9">
                <div id="account-settings" class="mnotify-card">
                    <div  id="side-indicators-content" class="mnotify-card-header">
                        <h3 class="mnotify-card-header-text py-0 my-0">Billing summary</h3>
                    </div>
                    <div class="mnotify-card-body">
                        <div class="billing-card-inner">
                            <ul>
                                <li>
                                <router-link to="#">
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
        </div>
    </Layout>
</template>
