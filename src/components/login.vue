<template>

   <div>
        <b-modal v-model="modalShow" block hide-footer hide-header no-close-on-backdrop no-close-on-esc>
            <h1>Formularz</h1>
        <form action="#" class="form-horizontal" @submit.prevent="submit">
            <div class="form-group">
                <div class="col-2">
                    <label class="form-label">Imię</label>
                </div>
                <div class="col-3">
                    <input class="form-input" type="text" placeholder="Podaj swoje imię" v-model.trim.lazy="firstName">
                </div>
            </div>
            <div class="form-group">
                <div class="col-2">
                    <label class="form-label">Nazwisko</label>
                </div>
                <div class="col-3">
                    <input class="form-input" type="text" placeholder="Podaj swoje nazwisko" v-model.trim.lazy="lastName">
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
                <div class="col-2">
                    <label class="form-label">Płeć</label>
                </div>
                <div class="col-3">
                    <label class="form-radio">
                        <input type="radio" value="k" v-model="gender">
                        <i class="form-icon"></i> żeńska
                    </label>
                    <label class="form-radio">
                        <input type="radio" value="m" v-model="gender">
                        <i class="form-icon"></i> męska
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="form-switch">
                    <input type="checkbox" v-model="terms">
                    <i class="form-icon"></i> Akceptuję <a href="#">regulamin</a>
                </label>
            </div>


            <div class="col-5">
                <button class="btn btn-primary float-right" :disabled="!isFilled || !terms">Wyślij</button>
                <p> Twoje dane {{fullName}}</p>
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
                 firstName: "" as string,
                lastName: "",
                age: 0,
                password: "",
                passwordRepeat: "",
                gender: "",
                terms: ""
           }
            },
  methods: {
    

    
    
    },
     computed: {
            fullName: function(): string{
                return    this.firstName + " " + this.lastName;
            },
            isFilled: function(): boolean{
                if(this.password !== this.passwordRepeat){
                    console.log("Hasła nie są zgodne")
                }
                return this.firstName && this.lastName && this.age >= 18 && this.password === this.passwordRepeat;
            },
        },
     
  
})
</script>
