

<template>
  <div id="app" class="gra">

     <navigation :user-logged="userLogged" :users="users"></navigation>

<transition name="fade" mode="out-in" appear>
    <div class="container container-fluid statystyki">
      <div class="row"> 
        <div class="col-12 container"><p style="text-align: center" v-text="'Gracz: ' + gamer"></p></div>
        <!-- <div class="col-4 container" > <p style="text-align: center">Czas: 10</p></div>
        <div class="col-4 container"> <p style="text-align: right">Gracz2: Punkty</p> </div> -->
      </div>
      <div class="row"> 
        <div class="col-12 container"><p style="text-align: center" v-text="'Punkty ' + points"></p></div>
        <!-- <div class="col-4 container" > <p style="text-align: center">Czas: 10</p></div>
        <div class="col-4 container"> <p style="text-align: right">Gracz2: Punkty</p> </div> -->
      </div>
      <div class="row"> 
        <div class="col-12 container"><p style="text-align: center" v-text="'Ruchy ' + moves"></p></div>
        <!-- <div class="col-4 container" > <p style="text-align: center">Czas: 10</p></div>
        <div class="col-4 container"> <p style="text-align: right">Gracz2: Punkty</p> </div> -->
      </div>
    </div>
 </transition>
   
    
      <transition name="fade" mode="out-in" appear>
        <component :is="view" :name="name" :view="viewRestore" :first-game="firstGame"></component>
      </transition>
        
      <transition name="fade" mode="out-in">
    <component :is="winning" :name="name" :view="view" :points="points"  :moves="moves"></component>
    </transition>
    
  <!-- <login :users="users"></login> -->
  <user-info :user-logged="userLogged"></user-info>
 
  </div>

  
</template>

<script lang="ts">
import Vue from 'vue';
//import memoryElem from './components/memoryElem.vue'
import navigation from './components/navigation.vue'
import registration from './components/registration.vue'
import login from './components/login.vue'
import userInfo from './components/userInfo.vue'
import memoryBoard from './components/memoryBoard.vue'
import winning from './components/winning.vue'
import restartComponent from './components/restartComponent.vue'
import {Event} from './components/eventBuss.js'

export default Vue.extend({
  name: 'App',
  components: { 
  //  memoryElem,
    memoryBoard,
    winning,
    restartComponent,
    registration,
    login,
    userInfo,
   navigation
   },
   data: function (){ 
      return {
          name: 'App',
          users: [
            {"id": 0 , "name": "test", "password": "test", "age": 19}
          ],
          userLogged: {},
          view: "memory-board",
          viewRestore: "memory-board",
          winning: "restart-component",
          winningRestore: "winning",
          gamer: "" as string,
          points: 0 as number,
          moves: 0 as number,
          firstGame: true as boolean,
          x: false,
      }

   },
   methods: {
    addPoint(points: number): void{
      this.points = points;
    },
    addMoves(moves: number): void{
      this.moves = moves;
    },
    setGamerName(x: string){
      this.gamer = x;
    },
    changeComponent():void{
      //this.view = "winning"
      this.winning = "winning"
    },

    register: function(name: string, password: string, age: number): void{
      let id = 0
      if(this.users.length > 0){
      id = this.users[this.users.length-1].id + 1
      } 

      this.users.push({id ,name, password, age})
      this.login(id)
    },

    login: function(id: number){
      this.userLogged = this.users[id]
      this.gamer =  this.users[id].name
    },

    logout: function(){
      this.userLogged = {},
      this.gamer = ""
    },

    restart():void{
      this.view = "restart-component";
      this.winning = "restart-component";
      this.points = 0;
      this.moves = 0;
      this.firstGame = false;
    },
    restoreComponent(view):void{
       this.view = view;
       console.log(this.view)
    }
   },
   created: function(){
     Event.$on("moves", this.addMoves);
     Event.$on("points", this.addPoint);
     Event.$on("gamerName", this.setGamerName)
     Event.$on("win",this.changeComponent)
     Event.$on("restart", this.restart)
    Event.$on("restoreComponentApp", this.restoreComponent)
    Event.$on("register", this.register)
    Event.$on("login", this.login)
     Event.$on("logout", this.logout)
   }
});
</script>

<style>
#app {
  
}

@font-face {
      font-family: 'Press Start 2P', cursive;
      src: local('Press Start 2P'), url('./assets/fonts/PressStart2P-Regular.ttf')  format('truetype'),
    }


 .fade-enter-active,
        .fade-leave-active{
            transition: opacity 0.5s ease-in-out;
        }
        .fade-enter,
        .fade-leave-to{
            opacity: 0;
        }


.gra{
  /* padding-top: 3%; */
}

.plansza {
  align-items: center;
  background-color: purple;
}

.obwodka{
  background-color: blue;
  padding-top: 1%;
  padding-bottom: 1%;
}

.statystyki {
  background-color: yellow;
}


.pojemnik-na-obrazek {
  display: flex;
  padding: 3%;
  justify-content: center;
  border: solid;
  
}

.obrazek {
  width: 150px;
  height: 180px;
  background-color: red;
  text-align: center;
  border-radius: 25px;
  
}

body {
  font-family: 'Press Start 2P';
  min-height: 1200px;
}

</style>
