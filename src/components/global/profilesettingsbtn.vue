<template>
  <button @click="back" class="backBtn"><feather size="18" style="fill:#484A4F" type="arrow-left"></feather></button>
</template>

<script>
export default {
    methods:{
        back() {
            this.$router.push('/profile-settings')
        }
    }
}
</script>

<style scoped>
.backBtn{
	width: 32px;
	height: 32px;
	background: #F3F3F4;
	border-radius: 5px;
	outline:none;
	border:none;
	margin-right:20px;
    text-align: center;
}
</style>