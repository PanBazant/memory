 <template>
 <transition name="fade" mode="out-in" appear>
             <div class="obrazek"><img :src="getImgUrl(pict)" class="obrazek" alt="x" v-on:click="show"></div> 
 </transition>
</template>


<script lang="ts">
import Vue from 'vue';
import {Event} from './eventBuss.js';

export default Vue.extend({
  name: 'memoryElem',
  props: ["elemId", "fileName"],
  data: function(){
       return{
            paired: false ,
           clicked: false ,
           freezed: false,
           pict: "logo.png"
           }
            },
  methods: {
    getImgUrl(pic: string) {
    return require('../assets/'+pic)
    },
    xd(){
      console.log('../assets/'+this.fileName, "id", this.elemId);
    },
    show(): void{
      if (this.clicked === false && this.paired === false && this.freezed === false){
      this.clicked = true;
      this.pict = this.fileName;
      Event.$emit("clickedItem", this.elemId, this.fileName);
     
    }// else {
     // this.clicked = false;
      //this.pict = "logo.png";
      //console.log("Zakryte")
   // }
    },
    unshow(id1:number, id2:number): void{
      this.freezed = true
      if (this.elemId === id1 || this.elemId === id2){
        setTimeout(() => {
          this.pict = "logo.png"
          this.clicked = false;
        }, 2000);
        
      }
      setTimeout(() => {
          this.freezed= false;
        }, 2000);
    },
     
    matched(id1: number, id2: number): void{
       if (this.elemId === id1 || this.elemId === id2){
        this.paired = true;
       }
    }
    
    
    
    },
    created: function() {
      Event.$on("unshow", this.unshow);
      Event.$on("matched", this.matched)

  }
})
</script>