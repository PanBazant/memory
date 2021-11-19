<template>

  <div>
 
  </div>
</template>



<script lang="ts">
import Vue from 'vue';
import {Event} from './eventBuss.js';

export default Vue.extend({
  name: 'restartComponent',
  
  data: function(){
       return{
           
           }
            },
  methods: {
    

    
    
    },
     
    created: function(){
      
         Event.$emit("restartComponent")
        
    }
})
</script>
