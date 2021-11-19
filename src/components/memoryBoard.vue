 <template>

         <div class="container container-fluid obwodka">
            <div class="container">
              <div class="row" style="justify-content: center" v-if="firstGame">
             <button class="col-4" v-if="!dis" v-on:click="makeBoard" style="" v-once>Start</button>
             <div :v-text="items"> </div>
              </div>
          
              <div class="container">
                 
                  <div class="row plansza"  >
                    
                      <div class="col-2 pojemnik-na-obrazek" v-for="(item, index) in board" :key="index">
                        <memory-elem :elem-id="index" :file-name="item" >  </memory-elem>
                      </div>
                      
                 </div>
                 
            </div>
             
            </div>
            </div>
        
</template>


<script lang="ts">
import Vue from 'vue';
import memoryElem from './memoryElem.vue';
import {Event} from './eventBuss.js';
//import memoryElem from './memoryElem.vue'

export default Vue.extend({
  name: 'memoryBoard',
  components: {
   
    memoryElem
  },
  props: ["firstGame"],
  data: function(){
       return{
           items: ["biedron.jpg", "bosak.jpg"] as string[],
           board: [] as string[],
           clickedPair: [] as ([number , string])[],
           pairedTable: [] as ([number , string])[],
           points:  0 as number,
           moves:  0 as number,
           dis: false as boolean
           }
            },

  
  methods: {
      makeElem():string{
        let randomElement:string = this.items[Math.floor(Math.random() * this.items.length)];
        return randomElement
      },
      count(pattern: string): number{
        let counter = 0;
        for(let i = 0; i < this.board.length; i++){
          if (pattern === this.board[i]){
            counter++;
          }
          
        }
        
        return counter
      },

       
    promptName(): void{
      let x = String(prompt("Podaj imie"));
      Event.$emit("gamerName", x);
    },
      makeBoard():void{
     //     for(let i = 0; i < this.items.length * 2; i++){
       //   let x = this.makeElem()
         // console.log("x", x)
         // if (this.count(x) < 2){
         // this.board.push(x)
          //console.log("dodano", x)
          if (this.firstGame === true){
          this.promptName();
          }
          let i = 0;
          while (i < this.items.length*2) {
            let x: string = this.makeElem();
            if(this.count(x) < 2) {
              this.board.push(x)
              i++;
            }
            this.dis = true;
          }
         
      },
       match():void{
        if (this.clickedPair[0][1] === this.clickedPair[1][1] && this.clickedPair[0][0] !== this.clickedPair[1][0]) {
          this.pairedTable.push(this.clickedPair[0]);
          this.pairedTable.push(this.clickedPair[1]);
          this.points++;
          this.moves++;
          Event.$emit("moves", this.moves);
          Event.$emit("points", this.points);
          Event.$emit("matched", this.clickedPair[0][0], this.clickedPair[1][0])
          if(this.board.length === this.pairedTable.length){
            this.win()
          }
        } else {
            this.moves++;
            Event.$emit("moves", this.moves);
            Event.$emit("unshow", this.clickedPair[0][0], this.clickedPair[1][0])
            
            
        }
      },

      clickedItem(id: number, fileName: string){
        this.clickedPair.push([id, fileName])
        if (this.clickedPair.length >= 2){
          this.match()
          this.clickedPair = []
        }
        
        
        
      },
      win():void{
         Event.$emit("win")
    
       
      },
      
    
    
    },
    created: function(){
        //this.makeElem();
        Event.$on("clickedItem", this.clickedItem)
        if( this.firstGame === false){
          this.makeBoard()
        }
    }
  });

</script>