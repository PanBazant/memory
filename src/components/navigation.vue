<template>

  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" @click="mainMenu">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" right>
        

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>


        <b-nav-item-dropdown right v-if="userLogged.name">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{userLogged.name}}</em>
          </template>
          <b-dropdown-item href="#" @click="displayProfile">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-else>
          <b-button @click="login">Zaloguj się</b-button>
          <b-button @click="registration">Zarejestruj się</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <component :is="modalType" :name="name" :users="users"></component>
</div>
</template>



<script lang="ts">
import Vue from 'vue';
import {Event} from './eventBuss.js';
import registration from './registration.vue'
import login from './login.vue'
import restartComponent from './restartComponent.vue'

export default Vue.extend({
  name: 'navigation',
  components: {
    registration,
    login,
    restartComponent
  },
  props: ["userLogged", "users"],
  data: function(){
       return{
          name: 'navigation',
           modalType: "restartComponent"
           }
            },
  methods: {
      registration: function (){
       this.modalType = "registration"
      },

      login: function(){
        this.modalType = "login"
      },
      modalTypeFree: function(){
        this.modalType = "restartComponent"
      },
      logout: function(){
        Event.$emit("logout")
      },
      displayProfile: function(){
        Event.$emit("displayProfile")
      },
      mainMenu: function(){
        Event.$emit("mainMenu")
      }

    },
    created: function(){
      Event.$on("loginFree", this.modalTypeFree);
      Event.$on("registerFree", this.modalTypeFree);
    }
     
   
})
</script>
