<template>
  <div class="q-pa-md q-ma-xl">
    

    <q-infinite-scroll scroll-target="grid-container" @load="onLoad" :offset="offset">   
        <div class="grid-container" >
          <div  
                v-for="(post, index) in multiwomen"
                v-bind:item="post"
                v-bind:index="index"
                v-bind:key="post.imagePath"
              >
              
                 <card-component 
                  :imagePath="getImage(post.imagePath)"
                  :price="post.price"
                  :productName="post.productName"
                />
              
               
              </div>
        </div>
         
        


   <!--   <div v-for="(item, index) in items" :key="index" class="caption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
      </div>    -->
      <div>   
        <q-btn @click="toggleOffset()">press</q-btn>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="pink-10" size="60px" />
        </div>
      </template>
    </q-infinite-scroll>      
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import CardComponent from "../components/CardComponent.vue";

export default {
    name: "WomanPage",
    components: {
    CardComponent,
  },
    data () {
    return {
      items: [ {}, {}, {}, {}, {}, {}, {} ],
      offset: -10
    }
  },

  computed: {
    ...mapGetters(['womenClothes']),
    multiwomen() {
      let clothes = [];
      for(let i = 0; i < 3; i++) {
        for (let cloth of this.womenClothes) {
          clothes.push(cloth);
        }
        
      }
      console.log(clothes);
      return clothes;
    }

  },  

  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.multiwomen) {
          this.multiwomen.push(this.multiwomen);
          this.offset = -10;
          done()
        }
      }, 2000)
    },
    getImage(imagePath) {
      // let imageurl = imagePath.replace(/[a-z]+([0-9]?)+.jpg/i, "");
      //   let image = imagePath.replace(/[a-z]+\//gi, "");
      // console.log(post.imagePath);
      return require(`@/assets/${imagePath}`);
    },

    toggleOffset() {
      if (this.offset < 0) {
        this.offset = 800;
        window.scrollBy({
          top: 1,
          behavior: "smooth",
        });
      }
      else {this.offset = -10}
    }
  }
}
</script>

<style lang="css" scoped>

  .grid-container {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows:  repeat(3, 1fr);
  grid-gap: 2px;
}

.grid-item {
  border: 1px solid black;
  padding: 5px;
 /* height: 200px;     */
}
</style>