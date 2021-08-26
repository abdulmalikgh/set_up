<template>
  <div class="mNotify_login_type" id="">
        <div class="logo_container">
            <img src="../../assets/mnotify logo.svg" height="30" width="120" alt="">
        </div>
        <div class="mNotify_login_type_container">
            
            <div class="mNotify_login_type_inner_container">

                <h4 class="what_do_want_to_do">What do you want to do today?</h4>

                <div class="Nnotify_login_type_inner_containr_card margin__right" @click="active = 'sms'" :class="[active == 'sms' ? 'active' :'']">
                    <div class="Nnotify_login_type_inner_containr_card_inner">
                        <!-- <img src="../../assets/Messagemessage.svg" width="40" height="40" alt=""> -->
                        <p class="send">send SMS messages</p>
                    </div>
                </div>

                <div class="Nnotify_login_type_inner_containr_card right_card"  :class="[active == 'voice' ? 'active' :'']" @click="active = 'voice'">
                    <div class="Nnotify_login_type_inner_containr_card_inner">
                        <!-- <img src="../../assets/Messagemessage.svg" width="40" height="40" alt=""> -->
                        <p class="send">Send voice calls</p>
                    </div>
                </div>
                <div class="">
                    <p class="set_option">
                        <el-checkbox style="width:15px; height:15px" id="mNotifyTerms" v-model="checkBox"  name="mNotifyTerms"></el-checkbox>
                        Set my option as default. This can be changed later in settings</p>
                </div>
                <div class="enter_container">
                    <button @click="returnToDashboard" class="enter" :class="[active != '' ? 'btn_active' : '']" :disabled="!active"> 
                        Enter
                    </button>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: ''
        }
    },
    methods: {
        returnToDashboard(){
            this.$router.push('/overview')
        }
    }
}
</script>

<style scoped>
.mNotify_login_type{
    width:100%;
    background-color: #fff;
}
.mNotify_login_type_container{
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
}
.mNotify_login_type_inner_container{
    /* 702 for 3 cards */
    max-width: 504;
    margin-left: auto;
    margin-right: auto;
}
.what_do_want_to_do{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #575761;
    padding-bottom: 27px;
}
.Nnotify_login_type_inner_containr_card{
    width: 198px;
    height: 278px;
    background: #F6F6F6;
    border-radius: 10px;
    display: inline-block;
    padding-top: auto;
    padding-bottom: auto;
    color:#484A4F;
    transition: all 0.5s;
    cursor: pointer;
    
}
.margin__right{
    margin-right: 37px;
}
.Nnotify_login_type_inner_containr_card_inner{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.send{
    padding-top: 37px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    text-transform: capitalize;
}
.Nnotify_login_type_inner_containr_card:hover, .active{
    background: #6D22F2;
    color:#fff;
}
.set_option{
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #575761;
    padding-top:31px;
    text-align:center;
}

.enter{
    margin-top: 40px;
    padding: 13px 20px;
    text-align: center;
    width:82px;
    height: 51;
    font-family: Graphik;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
    outline: none;
    border: none;
    color: #575761;
    background: #F6F6F6;
    transition: all 0.5s;
}
.btn_active{
    background-color: #6D22F2 !important;
    color:#fff !important;
}
.enter_container{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 500px) {
    .mNotify_login_type_inner_container{
        width: 92%;
        margin-left: auto;
        margin-right: auto;
}
.Nnotify_login_type_inner_containr_card{
    width: 45%;
    height: 220px;
}
.margin__right {
    margin-right: 0;
}
.right_card{
    float: right;
}
}
@media screen and (max-width: 400px) {
.Nnotify_login_type_inner_containr_card{
    width: 45%;
    height: 180px;
}
.send{
    font-size: 13px;
}
}
</style>