<template>

   <div>
       
        <b-modal v-model="modalShow" block hide-footer hide-header no-close-on-backdrop no-close-on-esc>
            <h1>Logowanie</h1>
        <form action="#" class="form-horizontal" @submit.prevent="submit">
            <div class="form-group">
                <div class="col-2">
                    <label class="form-label">Login</label>
                </div>
                <div class="col-3">
                    <input class="form-input" type="text" placeholder="Podaj swój login" v-model.trim.lazy="name">
                </div>
            </div>

         
            <div class="form-group">
                <div class="col-2">
                    <label class="form-label">Hasło</label>
                </div>
                <div class="col-3">
                    <input class="form-input" type="password" placeholder="Podaj swoje hasło" v-model.number="password">
                </div>
            </div>
           


            <div class="col-5">
                <button class="btn btn-primary float-right" @click.prevent="userValidation" :disabled="!noEmptyFields" >Zaloguj się</button>
               
            </div>

         
        </form>
        </b-modal>
        </div>
</template>



<script lang="ts">
import Vue from 'vue';
import {Event} from './eventBuss.js';

export default Vue.extend({
  name: 'login',
  props: ["users"],
  data: function(){
       return{
                modalShow: true,
                name: "",
                password: "",
               
           }
            },
  methods: {
    
        userValidation: function(){
            for(let i = 0; i < this.users.length; i++){
                    if(this.name === this.users[i].name && this.password === this.users[i].password){
                         Event.$emit("login", this.users[i].id)
                         this.modalShow = false;
                         break;
                    }
                }
            if(this.modalShow === true){
            console.log("Błędny login lub hasło")
            }
        },

    },
   computed:{
         noEmptyFields: function(): boolean{
            return Boolean(this.name && this.password)
   }
   }
  
})
</script>
