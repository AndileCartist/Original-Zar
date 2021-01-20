<template>
  <div id="home-page">
    <carousel-component />
    <category-header :header="'Men\'s Random Picks'" />
    <picks-component />
    <doublepicks-component />
    <category-header :header="'Lady\'s Random Picks'" />
    <picks-component />
    <doublepicks-component />
    <category-header :header="'Kids\'s Random Picks'" />
    <picks-component />
    <doublepicks-component />
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
      clothes: [],
      url: [],
      men: [],
    };
  },
  computed: {
    increms() {
      return this.$store.state.count;
    },
    makeUrl() {
      // let newArray = this.clothes.map(item => { return {...item}});
      // console.log(newArray);
      for (let cloth of this.clothes) {
        // console.log(cloth.image[0].url);

        this.$set(
          cloth,
          "imagePath",
          `http://localhost:1337${cloth.image[0].url}`
        );
        console.log(`http://localhost:1337${cloth.image[0].url}`);
      }
      return this.clothes;
    },
  },
  mounted() {
    fetch("http://localhost:1337/clothes")
      .then((res) => res.json())
      .then((data) => {
        this.clothes = data;
      });
    /*
      fetch("http://localhost:1337/men")
      .then((res) => res.json())
      .then((data) => {
        this.men = data;
      });*/
  },

  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style scoped>
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
