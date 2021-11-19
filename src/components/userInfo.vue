<template>

  <div class="container container-fluid">
      <p>Nazwa: {{userLogged.name}}</p>
      <p>Wiek: {{userLogged.age}}</p>
      <p>Hasło: {{userLogged.password}}</p>
  </div>
</template>



<script lang="ts">
import Vue from 'vue';
import {Event} from './eventBuss.js';

export default Vue.extend({
    
  name: 'userInfo',
  props: ["userLogged"],
  data: function(){
       return{
           
           }
            },
  methods: {
    

    
    
    },
     
   
})
</script>
