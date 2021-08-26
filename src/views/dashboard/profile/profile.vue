<script>
import Layout from '@layouts/main'

export default {
 name: 'profile',
 components: {
		Layout:Layout
	}
}
</script>

<style>

</style>
<template>
      <Layout style="background-color:#FBFBFB">
          <!-- 
              #
              # DISPLAY PROFILE SETTINGS CONTENTS HERE
           -->
           <router-view />
      </Layout>
</template>
