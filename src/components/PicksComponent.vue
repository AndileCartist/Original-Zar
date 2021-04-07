<template>
  <div>
   
     <div class="mobile-container xs q-mb-sm ">
      <div v-for="(cloth, index) of clothes.slice(0, 4)" :key="index">
        <card-component :imagePath="getImage(cloth.imagePath)" :productName="cloth.productName" :price="cloth.price" :item="cloth" class="q-mr-xs q-mb-sm" />
      </div>
    </div>

    <div class="smaller-screen sm">
      <div class="big-screen-container">
        <div v-for="(cloth, index) of clothes.slice(0, 2)" :key="index">
          <card-component :imagePath="getImage(cloth.imagePath)" :productName="cloth.productName" :price="cloth.price" :item="cloth" class="q-mr-xs q-mb-sm" />
        </div>
      </div>
      <div class="big-screen-container">
        <div v-for="(cloth, index) of clothes.slice(2, 4)" :key="index">
          <card-component :imagePath="getImage(cloth.imagePath)" :productName="cloth.productName" :price="cloth.price" :item="cloth" class="q-mr-xs q-mb-sm" />
        </div>
   
      </div>
    </div>

   

     <div class="big-screen-container gt-sm q-mb-sm" >
      <div v-for="(cloth, index) of clothes.slice(0, 4)" :key="index">
      <card-component :imagePath="getImage(cloth.imagePath)" :productName="cloth.productName" :price="cloth.price" :item="cloth" class="q-mr-xs q-mb-sm" />
    </div >
    </div>
    
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "picks-component",
  props: {
    clothes: Array,
  },
  components: {
    CardComponent,
  },
  methods: {
     getImage(imagePath) {
      // let imageurl = imagePath.replace(/[a-z]+([0-9]?)+.jpg/i, "");
      //   let image = imagePath.replace(/[a-z]+\//gi, "");
      // console.log(post.imagePath);
      return require(`@/assets/${imagePath}`);
    },
  },
};
</script>

<style scoped>
.big-screen-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
