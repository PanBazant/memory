<template>

  <div>
    <!-- <b-button @click="modalShow = !modalShow">Open Modal</b-button> -->
 <transition name="fade" mode="out-in" appear>
    <b-modal v-model="modalShow" block hide-footer hide-header no-close-on-backdrop no-close-on-esc>
        
        <div class="container container-fluid"> 
           
<transition name="fade" mode="out-in" appear>
            <b-col>
                <b-row style="justify-content: center">Wygrałeś</b-row>
                <b-row style="justify-content: center">Zdobyłeś {{points}} punktów</b-row>
                <b-row style="justify-content: center">W {{moves}} ruchach</b-row>
                <b-row>
                <button @click="restart">Zagraj ponownie!</button>
                </b-row>
                <b-row>
                
                <button @click="endGame">Zakończ gre</button>
                </b-row>
            </b-col>
            </transition>
        </div>
        </b-modal>
 </transition>
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
      endGame: function(){
         // this.modalShow = false;
          Event.$emit("mainMenu")
      },
     restart: function(){
         this.modalShow=false
      Event.$emit("restart")
        
     }

    
    
    },
     
    created: function(){
        console.log("winning")
        
    }
})
</script>
<style scoped>

 .fade-enter-active,
        .fade-leave-active{
            transition: opacity 0.5s ease-in-out;
        }
        .fade-enter,
        .fade-leave-to{
            opacity: 0;
        }
</style>