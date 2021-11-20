<template>

  <div>
 
  </div>
</template>



<script lang="ts">
import Vue from 'vue';
import {Event} from './eventBuss.js';

export default Vue.extend({
  name: 'restartComponent',
  props: ["view", "name"],
  data: function(){
       return{
           
           }
            },
  methods: {
    

    
    
    },
     
    created: function(){
        console.log(this.view)
        // if (this.name === "navigation"){
        //     Event.$emit("restoreComponentNavigation", this.view)
        // }
        if (this.name === "App"){
            Event.$emit("restoreComponentApp", this.view)
        }
    }
})
</script>
