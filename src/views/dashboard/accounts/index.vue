<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default ({
    components: {
		Layout:Layout
	},
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
<template>
    <Layout style="background-color:#FBFBFB">
        
    </Layout>
</template>
