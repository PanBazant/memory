<template>
  <div>
    <!-- <b-button @click="modalShow = !modalShow">Open Modal</b-button> -->

    <b-modal v-model="modalShow" block hide-footer hide-header no-close-on-backdrop no-close-on-esc>
        <div class="container container-fluid"> 
           

            <b-col>
                <b-row style="justify-content: center">Wygrałeś</b-row>
                <b-row style="justify-content: center">Zdobyłeś {{points}} punktów</b-row>
                <b-row style="justify-content: center">W {{moves}} ruchach</b-row>
                <b-row>
                <button @click="restart">Zagraj ponownie!</button>
                </b-row>
                <b-row>
                <button @click="modalShow=false">Zakończ gre</button>
                </b-row>
            </b-col>
            
        </div>
        </b-modal>
  </div>
</template>



<script lang="ts">
import Vue from 'vue';
import {Event} from './eventBuss.js';

export default Vue.extend({
  name: 'winning',
  props: ["points", "moves"],
  data: function(){
       return{
            modalShow: true
           }
            },
  methods: {
     restart: function(){
        // this.modalShow=false
         Event.$emit("restart")
     }

    
    
    },
     
    created: function(){
        console.log("winning")
        
    }
})
</script>