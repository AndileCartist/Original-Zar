<template>
  <div id="home-page">
    <carousel-component :data="carousel" />
    <category-header :header="'Men\'s Random Picks'" />
    <picks-component :clothes="menClothes" />
    <doublepicks-component :clothes="dMen"  />
    
    <category-header :header="'Lady\'s Random Picks'" />
    <picks-component :clothes="womenClothes" />
    <doublepicks-component :clothes="dWomen" />
    <category-header :header="'Kids\'s Random Picks'" />
    <picks-component :clothes="kidsClothes"/>
    <doublepicks-component :clothes="dKids" />
    <!-- <div v-if="makeUrl.length" class="small-container">
      <div v-bind:key="cloth.index" v-for="cloth in clothes">
        <div
          v-bind:img-src="`${cloth.imagePath}`"
          v-bind:title="cloth.category"
          style="border-radius: 27px;"
        >
          <img :src="cloth.imagePath" alt="" style="max-height: 250px" />
          <div>{{ `${cloth.category}` }}</div>
          <br />
          <span>
            <strong>Price: R {{ `${cloth.price}` }} </strong>
          </span>
          <br />
          <button style="    padding: 10px;  margin: 5px;">Add to Cart</button>
        </div>
      </div> 
    </div>  
    <div v-else>
      <h5>Fetching clothes . . .</h5>
    </div> 
    <div>
 
    </div>
-->
  </div>
</template>

<script>
import CarouselComponent from "../components/CarouselComponent.vue";
import CategoryHeader from "../components/CategoryHeader.vue";
import PicksComponent from "../components/PicksComponent.vue";
import DoublepicksComponent from  "../components/DoublepicksComponent.vue";
import { mapGetters } from "vuex";
import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:1337";
//import  { CldImage } from "cloudinary-vue";
export default {
  name: "home-page",
  components: {
    CarouselComponent,
    CategoryHeader,
    PicksComponent,
    DoublepicksComponent,
    
  },
  data() {
    return {
      links: ["woman", "men", "sjhsajh", "sdgstydj"],
      carousel: [],
      doublePicks: [],
      url: [],
      dMen: [],
      dWomen: [],
      dKids: []
    };
  },
  computed: {
    increms() {
      return this.$store.state.count;
    },
    ...mapGetters(["menClothes", "kidsClothes", "womenClothes"]),
    
   
  },
  mounted() {
    this.getCarousel();
    this.getDoublePicks();
  },

  methods: {
    increment() {
      this.$store.commit("increment");
  //    console.log(this.$store.state.count);
    },
    async getCarousel() {
      try {
        this.loading = true;
        const { data } = await axios.get(`${apiUrl}/carousels`);
        this.carousel = data;
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    async getDoublePicks() {
      try {
        this.loading = true;
        const { data } = await axios.get(`${apiUrl}/double-picks`);
        this.dMen = data.filter(men => {return men.grouping === 'men'})
        this.dWomen = data.filter(women => {return women.grouping === 'women'})
        this.dKids = data.filter(kids => {return kids.grouping === 'kids'})
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
  },
};
</script>

<style lang="css" scoped>
table {
  border: 3px solid slateblue;
  border-radius: 5px;
  min-width: 400px;
  height: 200px;
  margin: 0 auto;
}
.small-container {
  display: flex;
  justify-content: center;
}
</style>
