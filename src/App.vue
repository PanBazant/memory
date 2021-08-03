

<template>
  <div id="app" class="gra">

    

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

   
    <div class="container container-fluid obwodka">
        <memory-board></memory-board>
        <!-- <div class="container">
            <div class="row plansza">
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek"><img src="./assets/korwin.jpg" class="obrazek" alt="kurwa"></div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek"><img src="./assets/tusk.jpg" class="obrazek" alt="kurwa"></div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>

              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <div class="col-2 pojemnik-na-obrazek">
                <div class="obrazek">kot</div>
              </div>
              <i class="nes-icon is-large heart"></i>

            </div>
            
        </div> -->
        
    </div>
    
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import memoryElem from './components/memoryElem.vue'
import memoryBoard from './components/memoryBoard.vue'
import {Event} from './components/eventBuss.js'

export default Vue.extend({
  name: 'App',
  components: { 
  //  memoryElem,
    memoryBoard
   },
   data: function (){ 
      return {
          gamer: "" as string,
          points: 0 as number,
          moves: 0 as number
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
    }
   },
   created: function(){
     Event.$on("moves", this.addMoves);
     Event.$on("points", this.addPoint);
     Event.$on("gamerName", this.setGamerName)
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



.gra{
  padding-top: 3%;
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
