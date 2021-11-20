<template>

  <div class="container container-fluid">
      <div v-if="userLogged.name">
            <p>Wybierz grę</p>
            <div class="obrazek"><img :src="getImgUrl(pict)" class="obrazek" alt="x" v-on:click="show"></div> 
        </div>
        <div v-else>
            <p>Aby mieć możliwość zagrania, należy się zalogowac.</p>
        </div>
    
  </div>
</template>



<script lang="ts">
import Vue from 'vue';
import {Event} from './eventBuss.js';

export default Vue.extend({
  name: 'mainMenu',
    components: {
       
    },
    props: ["userLogged"],
  data: function(){
       return{
        pict: "logo.png",
        pict2: "biedron.jpg",
           }
            },
  methods: {
    getImgUrl(pic: string) {
    return require('../assets/'+pic)
    },
    show: function(){
        this.pict = this.pict2;
        Event.$emit("memory")
    }
    },
     
  
})
</script>
