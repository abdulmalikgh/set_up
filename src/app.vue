<script>
import appConfig from '@src/app.config'
export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
}
</script>

<template>
  <div id="app">
    <RouterView :key="$route.fullPath" />
  </div>
</template>
<style lang="scss">
html{
  background-color:#fbfbfb;
}
body, html{
  width:100%;
  height: 100%;
}
body{
  margin:0;
  background:#fbfbfb!important;
}
@import '@design';
//CUSTOM MNOTIFY GLOBAL CSS
.description{
  color:#F7921C;
}
.success-green{
  color: #36D962
}
.violet-deep{
  color:#6D22F2;
}
.violet-light{
  color:#8D2EE6;
}
.yellow{
  color:#F0E930;
}
.light-blue{
  color:#30A1F0;
}
.gray{
  color:#575761;
}
.text{
  color:#484A4F;
}
.link{
  color:#501FA6;
}
.component_inner_wrapper{
  width:100%;
  height: 100%;
  margin:0;
  padding:0;
}
.side-image-background{
  background-image: url("./assets/tech.jpg");
  width:100%;
  background-position: center;
  object-fit: cover;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  white-space: nowrap;  
}
// form 
.form_text_container{
  padding-top:40px;
}
.main_form_wrapper{
  padding-right: 120px;
  width:100%;
  align-items: center!important;
  background-color:#fff;
  justify-content: flex-end;
  padding-top: 70px;
}
.form_container {
  width:380px !important;
  padding:0!important;
  margin-right: 3em;
  display: inline-block;
}
.logo_container{
  padding-top:30px;
  padding-left:20px;
  position: fixed;
}
.text_right_corner{
  color:#575761;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
}
.account_link{
  font-weight:400;
  font-Style:normal;
  font-size:16px;
  line-height:21px;
  color:#501FA6;
  padding-left:8px;
  text-decoration: none;
  text-transform: capitalize;
}
.account_link:hover{
  color:#501FA6;
}

.form_action_btn{
  height: 50px;
  width: 380px;
  border-radius: 5px;
  text-align: center;
  color:#fff;
  outline: none;
  border:none;
  background-color: #6D22F2;
  margin-top: 16px; 
}
.form_link{
  color:#6D22F2;
  float:right;
}
form{
  padding:0px;
  margin:0px;
}
.form_title{
  font-family: Graphik;
  font-size: 22px;
  font-weight: bolder;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  color:#575761;
}
hr.form_line{
  background-color:#F3F3F4;
  width:100%;
  opacity: .5;
}
.form_input_label{
  display: block;
  color:#575761;
  font-family: Graphik;
  font-size: 16px;
  padding-left: 10px;
  text-align: left;
  padding-bottom: 10px;
  font-family: Graphik;
  font-weight: bolder;
  line-height: 15px;
  margin-top: 28px;
  margin-bottom: 5px;
}
.form_input_container input,.form_input_container  select{
  // border:none;
  // outline:none;
  background: #F3F3F4;
  height: 48px;
  border-radius: 5px;
  font-size: 14x;
  font-weight: 500;
   padding:13px;
}
// input {
//   padding:13px;
// }
.form_input_long{
  width:100%;
}
.form_action_btn{
  width:100%;
  background-color: #6D22F2;
  outline:none;
  border:none;
  color:#fff;
  height: 48px;
}
.float-right{
  float:right;
}
.float-left{
  float:left;
}
.form_country_code_select{
  width:25%;
}
.form_country_code_phone_number{
  width:70%;
  float:right;
}
// RESET PASSWORD TEST
.reset_password_text{
  font-family: Graphik;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
  color:#575761;
}
.return_to_login{
   padding-top:32px;
}
.return_to_login a{
   color:#6D22F2;
   text-decoration: none;
   font-size: 16px;
   font-weight: bold;
   line-height: 15px;
   letter-spacing: 0em;
}
.return_to_login a:hover {
  color:#6D22F2;
}
// reset password
.reset_pin{
  width:34px;
  height: 40px;
}
.input_text_padding_right{
  margin-right: 17px!important;
}
.input_text_padding_right_long{
   margin-right: 45px!important;
}
// SIGN UP 
.terms_and_conditons_container{
  margin-top:28px;
  margin-bottom: 20px;
}
.terms {
  font-size: 12.5px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
}
#mNotifyTerms[type="checkbox"]{
  display: inline;
  height: 17px;
  width: 17px;
  border-radius: 3px;
  margin-right: 15px!important;
  outline:none;
  border:none;
}
#mNotifyTerms[type="checkbox"]:checked + label::after{
  background:#6D22F2!important;
}
#mNotifyTerms_link{
 font-size: 12.5px;
 text-decoration: none;
 color:#6D22F2;
}
#mNotifyTerms_link:hover{
 color:#6D22F2;
}


// VERIFY ACCOUNT
.pin__input__container{
  display:flex;
}
.veriy_account_input_text_padding_right{
 margin-right: 24px!important;
}
.verify_pin, .verify_pin input {
  width: 40px;
  height: 48px;
}
.wrong_number button, .resend-code{
  padding-bottom: 20px;
  color:#6D22F2;
  font-weight: bolder;
  font-size: 16px;
  padding-left: 1em;
  background:transparent;
  border:none;
  outline:none;
}

.did_not_receive_code, .call_instead{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
}
.resend_code{
  font-weight: bolder;
  font-size: 16px;
  padding-left: 1em;
  padding-top:7px;
  padding-bottom:7px;
}
.resend_code a:hover{
  color:#6D22F2;
}
.resend_code a{
  text-decoration: none;
  color:#6D22F2;
}
.did_not_receive_code {
  padding-top:1.5em;
}
// receive auth code 
.enter_auth_code{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color:#575761
}
.message_type{
  width: 40%;
  height: 50px;
  padding: 13px 20px;
  color:#575761;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
}
.message_type:nth-child(1){
  margin-right: 40px;
}
// REFERE FRIEND
.share_link_label{
  font-family: Graphik;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  color:#575761;
}
.share_your_code {
  //styleName: Text/body/bold;
font-family: Metropolis;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
}
.share_icons button{
  width:45px;
  height: 45px;
  outline: none;
  border:none;
  background-color: transparent;
  margin-right: 27px;
  background-color: #F3F3F4;
  border-radius: 5px;
}
.form_input_share_container{
  background-color:#F3F3F4!important;
  display:flex;
  width:100%;
  align-items: center;
  position: relative;
}
.form_input_share_container input {
  border:none;
  outline:none;
  background-color: #F3F3F4;
  width:86%;
}
.form_input_share_container button{
  width: 40px;
  height: 40px;
  background: #6D22F2;
  outline:none;
  border:none;
  border-radius: 5px;
}
// share referal code 2
.share_referal_header{
  height: 118px;
  width:100%;
  margin:0!important;
  padding: 0!important;
  background-color: #F3F3F4;
  align-items: center;
  padding-top: 30px!important;
  margin-bottom:100px!important;
}

.share_referal_header_title{
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.02em;
  text-align: center;
}
.share_referal_header_text{
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
}
.share_your_code_2{
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  padding-top: 20px;
}
.share_referal_form_wrapper {
  width:380px !important;
  padding:0!important;
  display: inline-block;
}

// MNOTIFY FORM
#mnotify__form{
    width:100%;
    display: flex;
    margin:0px;
    padding:0px;
    background-color: #fff!important;
}
#mNotify__form_image_container{
   width: 40%; 
   height: 100%;
}
#mNotify_form_submit_btn{
  width:100%;
  height: 48px;
}
#mNotify__form_fields_container, #mNotify__signin__form_fields_container{
    width:60%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
#mNotify__signin__form_fields_container{
  height: 100vh;
}

.mnotitfy__form_image{
    background-image: url("./assets/tech.jpg");
    width:100%;
    height:1150px;;
    background-position: center;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
}
.mNotify__form_fields_inner_container{
  width:380px;
}
.mnotify__form_upper_link{
  text-align: right;
  padding-top: 38px;
  padding-right: 10%;
}
.mnotify_form__inner__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.page__padding{
  margin-top:3em;
  margin-right:3em;
  margin-left:3em;
}
//dashboard card
.mnotify-card{
  background: #FFFFFF;
  border-radius: 5px;
  margin-bottom:2em;
  padding-right:24px;
  padding-left:24px;
}
.mnotify-card-header{
  padding-top:17px;
  padding-bottom:17px;
  border-bottom: 1px solid #F3F3F4;
}

.mnotify-card-header-text{
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  text-transform: capitalize;
  color: #575761;
}
.mnotify-card-body{
  width:100%;
  height:100%;
}
/* SMALLER SCREEN */
@media screen and (max-width: 768px) {
  #mNotify__form_image_container{
   display: none;  
  }  
  #mNotify__form_fields_container, #mNotify__signin__form_fields_container{
    width: 100%;
  }
  .mnotify_form__inner__wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width:500px) {
    .mNotify__form_fields_inner_container{
        width:300px!important;
    }
    .mNotify__form_fields_inner_container{
        width:80%!important;
    }
}
@media screen and (max-width:768px) {
  .page__padding{
    margin-top:1em;
    margin-right:1em;
    margin-left:1em;
  }
}
</style>
