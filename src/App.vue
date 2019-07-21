<template>
    <div id="app">
        <!-- <HeaderGuide/> -->
        <router-view/>
        <!-- <FooterGuide/> -->
    </div>
</template>

<script>
    // import HeaderGuide from './components/HeaderGuide.vue'
    // import FooterGuide from './components/FooterGuide.vue'

    import 'font-awesome/css/font-awesome.min.css'
    
    export default {
        name: 'App' ,
        // components: {
        //     FooterGuide,
        //     HeaderGuide
        // }
    }
</script>
