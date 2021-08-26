<template>
  <div id="mNotify__refer_a_friend">
    <div class="mNotify__refer_a_friend_header">
            <img src="../../assets/mnotify logo.svg" height="30" width="120" alt="">
            <p class="link_text" style="float:right">Don’t have an account? <router-link to="/account/signup" class="account_link">Sign Up</router-link> </p>
    </div>
    <div class="mNotify_refer_a_friend_box">
      <div class="box__header">
        <div class="">
          <h2 class="share_referal_header_title">Refer friends. Get rewards.</h2>
          <p class="share_referal_header_text">Introduce a friend to mNotify to earn $10 worth of credit</p>
        </div>
      </div>
      <div class="box_content pt-5">
         <form action="">
            <label class="form_input_label share_link_label text-center" for="share">Share my referral code with friends</label>
            <div class="form_input_share_container">
              <input class="form_input_share" type="text" placeholder="https://apps.mnotify.net/referral/dorcas">
              <button>
                  <img width="25" height="25" src="../../assets/Stroke 1.png" alt="">
              </button>
            </div>
            <div class="return_to_login">
                <p class="share_your_code_2 text-center">Share Your Code</p>
            </div>
            <div class="share_icons text-center">
                <button>
                    <img  width="20px" height="20px" src="../../assets/whatssap.png" alt="">
                </button>
                <button>
                      <img  width="20px" height="20px" src="../../assets/messenger.png" alt="">
                </button>
                <button>
                    <img  width="20px" height="20px" src="../../assets/twitter.png" alt="">
                </button>
                <button>
                    <img src="../../assets/dot.png" alt="">
                    <img src="../../assets/dot.png" alt="">
                    <img src="../../assets/dot.png" alt="">
                </button>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
#mNotify__refer_a_friend{
    width:100%;
    height: 100vh;
    display: flex;
    margin:0px;
    padding:0px;
    flex-direction: column;
    background-color: #FBFBFB;
}
.mNotify__refer_a_friend_header{
  width:100%;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-right: 5%;
  padding-left: 5%;
}
.mNotify__refer_a_friend_header p{
  padding-top: 28px;
  font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #575761;

}
.mNotify_refer_a_friend_box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:794px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  padding-bottom:100px;
  background-color:#fff;
}
.box__header{
  width:100%;
  height: 118px;
  background: #F3F3F4;
  border-radius: 8px 8px 0px 0px
}
.box__header h2 {
  font-family: Graphik;
  font-weight: 500;
  font-size: 32px;
  line-height: 35px;
  text-align: center;
  color: #484A4F;
  padding-top:40px;
}
.box__header p{
  font-family: Graphik;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #484A4F;
}

@media screen and (max-width:800px) {
  .mNotify_refer_a_friend_box{
    width:90%;
  }
}
@media screen and (max-width:500px) {
  .box__header h2 {
  font-size: 24px;
  padding-top:20px;
}
.box__header p{
  font-size: 12px;
}

}
</style>