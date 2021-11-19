<template>

   <div>
        <b-modal v-model="modalShow" block hide-footer hide-header no-close-on-backdrop no-close-on-esc>
            <h1>Rejestracja</h1>
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
                    <label class="form-label">Wiek</label>
                </div>
                <div class="col-3">
                    <input class="form-input" type="text" placeholder="Podaj swoj wiek" v-model.number="age">
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
            <div class="form-group">
                <div class="col-2">
                    <label class="form-label">Powtórz hasło</label>
                </div>
                <div class="col-3">
                    <input class="form-input" type="password" placeholder="Powtórz hasło" v-model.number="passwordRepeat">
                </div>
            </div>
         
            <div class="form-group">
                <label class="form-switch">
                    <input type="checkbox" v-model="terms">
                    <i class="form-icon"></i> Akceptuję <a href="#">regulamin</a>
                </label>
            </div>


            <div class="col-5">
                <button class="btn btn-primary float-right" @click.prevent="submit" :disabled="!isFilled || !terms">Wyślij</button>
               
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
  
  data: function(){
       return{
                modalShow: true,
                name: "" as string,
                age: "",
                password: "",
                passwordRepeat: "",
                terms: ""
           }
            },
  methods: {
    
        submit: function(){
            console.log("submit")
            this.modalShow = false;
            Event.$emit("register", this.name, this.password, this.age)
        }

    
    },
     computed: {
           
            isFilled: function(): boolean{
                if(this.password !== this.passwordRepeat){
                    console.log("Hasła nie są zgodne")
                }
                return Boolean(this.name && parseInt(this.age) >= 18 && this.password === this.passwordRepeat);
            },
        },
     
  
})
</script>
