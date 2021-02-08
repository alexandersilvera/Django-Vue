<template>
    <b-container>
        <b-row>
            <b-col class="text-center">
                <h1>Bienvenidos al Centro Umbandista Reino da Mata</h1>
                <img src="../assets/congal.jpg" alt="" width="100%" height="400px" rounded=circle>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="red in redes" :key="red.red" class="text-center">
                <b-link :href="red.url" target="_blank">
                    <b-alert :variant="red.color" show>{{red.red}}</b-alert>
                </b-link>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name:"Home",
    data(){
        return{
            redes:[
                {
                    red:"FB/ReinodaMata",
                    url:"https://www.facebook.com/reinodamata",
                    color: "info"
                },
                {
                    red:"YT/ReinodaMata",
                    url:"https://www.youtube.com/channel/UClzKfs5rya1qQNyEEPZjZog",
                    color: "danger"
                }

            ]
        }
    }
}
</script>
<style lang="">
    
</style>