<script>
import Layout from '@layouts/main'
export default {
 name: 'profile',
 components: {
		Layout:Layout
	}
}
</script>
<style scoped>
#profile{
  height:calc(100vh - 120px);
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
</style>
<template>
      <Layout style="background-color:#FBFBFB">
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
             <!-- 
              #
              # DISPLAY PROFILE SETTINGS CONTENTS HERE
            -->
           <router-view />
        </div>
      </Layout>
</template>
