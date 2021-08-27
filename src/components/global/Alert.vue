<template>
  <div class="alert" :class="type">
          {{ message }}
  </div>
</template>

<script>
export default {
    name:'alert',
    props: {
        message: {
            required: true
        },
        type:{
            required:true
        }
    }

}
</script>

<style>

</style>