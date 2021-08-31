<style scoped lang="scss">
#profile{
  height:calc(100vh - 120px);
}
.upload-information{
    width:100%;
    padding-top:1em;
    display: flex;
    justify-content:center;
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
#update-information{
    width:100%;
    height:40px;
    background: #6D22F2;
    border-radius: 5px; 
    color: #F6F6F6;
    outline:none;
    border:none;
    transition: all 0.5s;
}
#update-information:hover{
    outline:none!important;
}
.modal-header{
    display: flex;
    flex-direction:row;
    justify-content:space-between;
}
.main-info-text{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #484A4F;
}
.info-btn {
    display: flex;
    align-items:center;
    justify-content:center;
    width: 167px;
    height: 40px;
    background: #F5F5F5;
    border-radius: 5px;
    outline:none;
    border:none;
    font-family: Graphik;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #9E9EA7;
}
.info-btn:hover{
      background: #6D22F2;
      color:#fff;
}
.modal-body-intro{
    align-items:center;
    min-height:600px;
}

.update-type {
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    padding-top:.5em;
    color: #575761;
}
#back{
    width: 30%;
    border:5px;
    height: 40px;
    background: #F5F5F5;
    border:none;
    outline:none;
    color: #9E9EA7;
}
#continue{
    width:40%;
    border:5px;
    height: 40px;
}
.business-certificate{
    font-family: Graphik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: #575761;
}
.business-descriptions{
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 140%;
    color: #484A4F;
}
.upload-certificate{
    height: 50px;
    width:80%;
    background: #F6F6F6;
    border-radius: 5px; 
    font-family: Graphik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-transform: capitalize;
    color: #979797;
    margin-bottom: 9em;
    margin-top: 1em;
    outline:none;
    border:none;
}
@media screen and  (max-width:768px) and (min-width:400px) {
    #update-information{
        width:240px;
        height:38px;
    }
}
</style>
<template>
      <Layout style="background-color:#FBFBFB">
        <div class="row justify-content-between page-title align-items-center">
            <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3">
                <div id="profile" class="mnotify-card">
                    <div  id="side-indicators-content" class="mnotify-card-header">
                        <h3 class="mnotify-card-header-text py-0 my-0">Account Details</h3>
                    </div>
                    <div class="mnotify-card-body">
                        <div class="profile-inner" >
                            <div class="avatar">
                                <p class="avatar-text">RA</p>
                            </div>
                            <div class="email">
                                <p>Rebecca@gmail.com</p>
                            </div>
                            <div class="upload-information mt-2">
                                <button id="update-information" class="btn" data-toggle="modal" data-target="#exampleModal">
                                    Update information
                                </button>
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
        <!-- UPDATE PROFILE MODAL -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered " role="document">
                <div class="modal-content">
                <div class="modal-header pt-4 pb-2">
                    <h5 class="modal-title " id="exampleModalLabel">Update information </h5>
                    <h5 class="update-type ">{{updateType}}</h5>
                </div>
                <div class="modal-body m-0 p-0">
                    <!-- INTITIAL UPDATE INFORMATION STATE -->
                   <div class="row justify-content-center modal-body-intro m-0 p-0" v-if="updateinformationState === 'initial'">
                        <div class="col-md-10">
                           <h3 class="main-info-text">What is the use of the creation of this account?</h3>
                        <div class="d-flex justify-content-between mt-5">
                            <button  class="info-btn" @click="individualBtn">For Individual</button> 
                            <button class="info-btn" @click="cooperateBtn">For Corporate</button>
                        </div>
                       </div>
                    </div> 
                    <!-- INDIVIDUAL ACCOUNTS CREATION -->
                    <div class="row justify-content-center modal-body-intro" v-if="updateinformationState === 'individual'">
                        <div class="col-11">
                            <el-form>
                                <div class="row justify-content-center">
                                    <div class="col-md-6">
                                        <div class="form_input_container">
                                            <el-form-item label="First Name" prop="firstname">
                                            <el-input type="text" autocomplete="off" placeholder="First Name"  v-model="formData.firstname"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form_input_container">
                                            <el-form-item label="Last Name" prop="lastname">
                                            <el-input type="password" autocomplete="off" placeholder="Last Name"  v-model="formData.lastname"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                                 <div class="row justify-content-center">
                                    <div class="col-md-12 my-0 py-0">
                                        <p class="pb-3" style="color: #575761;">Birthday</p>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_input_container">
                                            <el-form-item  prop="day">
                                            <el-input type="text" autocomplete="off" placeholder="Day"  v-model="formData.day"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_input_container">
                                            <el-form-item  prop="month">
                                            <el-input type="email" autocomplete="off" placeholder="Month"  v-model="formData.month"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_input_container">
                                            <el-form-item  prop="year">
                                            <el-input type="email" autocomplete="off" placeholder="Year"  v-model="formData.year"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                                 <div class="row justify-content-center">
                                    <div class="col-md-12">
                                        <div class="form_input_container">
                                            <el-form-item label="Mobile Number" prop="mobilenumber">
                                            <el-input type="text" autocomplete="off" placeholder="mobilenumber"  v-model="formData.mobilenumber"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form_input_container">
                                            <el-form-item label="Email" prop="email">
                                            <el-input type="email" autocomplete="off" placeholder="Last Name"  v-model="formData.email"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-between mb-5">
                                    <div class="col-md-12 d-flex justify-content-between pt-3">
                                        <el-button @click="updateinformationState = 'initial'" id="back">Back </el-button>
                                        <el-button id="continue" type="primary">Continue</el-button>
                                    </div>
                                </div>
                            </el-form>
                        </div>
                    </div>
                    <!-- CO-OPERATE ACCOUNT CREATION -->
                    <div class="row  justify-content-center modal-body-intro" v-if="updateinformationState === 'cooperate'">
                        <div class="col-11">
                            <el-form>
                                <div class="row justify-content-center">
                                    <div class="col-md-12">
                                        <div class="form_input_container">
                                            <el-form-item label="Company Number" prop="firstname">
                                            <el-input type="text" autocomplete="off" placeholder="Company Number"  v-model="formData.firstname"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-12 my-0 py-0">
                                        <p class="pb-3">Date of establishment</p>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_input_container">
                                            <el-form-item  prop="day">
                                            <el-input type="text" autocomplete="off" placeholder="Day"  v-model="formData.day"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_input_container">
                                            <el-form-item  prop="month">
                                            <el-input type="email" autocomplete="off" placeholder="Month"  v-model="formData.month"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_input_container">
                                            <el-form-item  prop="year">
                                            <el-input type="email" autocomplete="off" placeholder="Year"  v-model="formData.year"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form_input_container">
                                            <p >Business certificate<p/>
                                            <p class="business-descriptions">Upload business certificate to verify your business's identity</p>
                                            <button class="upload-certificate">upload certificate</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-between  mb-5">
                                    <div class="col-md-12 d-flex justify-content-between ">
                                        <el-button @click="updateinformationState = 'initial'" id="back">Back </el-button>
                                        <el-button id="continue" type="primary">Save</el-button>
                                    </div>
                                </div>
                            </el-form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- END OF UPDATE PROFILE MODAL -->
      </Layout>
</template>
<script>
import Layout from '@layouts/main'
export default {
 name: 'profile',
 components: {
		Layout:Layout
	},
    data() {
        return {
            updateinformationState:'initial',
            updateType:'',
            formData: {
                firstname:"",
                lastname:"",
                heard_about_us:"",
                date_of_birth:""
            }
        }
    },
    computed: {
        
    },

    methods: {
        individualBtn(){
            this.updateinformationState = "individual"
            this.updateType = 'Personal account'
        },
        cooperateBtn(){
            this.updateinformationState = "cooperate"
            this.updateType = 'Coperate account'
        },
        resetModal(){
    
        },
        showModal() {

        }
    },
}
</script>