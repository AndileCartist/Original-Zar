<template>
  <div class="q-pa-md q-ma-xl">
    
   <paginated-list :listData="router"/>
    
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PaginatedList from '../components/PaginatedList.vue';

export default {
  name: "BrandsPage",
  components: {

    PaginatedList,
  },
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}],
      offset: -10,
      busy: false,
     routerId: this.$route.params.id,
     
    };
  },

  computed: {
    ...mapGetters([ "brandsClothes"]),

    multiBrands() {
      let clothes = [];
      for (let i = 0; i < 12; i++) {
        for (let cloth of this.brandsClothes) {
          clothes.push({...cloth, uni: i});  
        }
      }
     // console.log("route id ",this.$route.params.id)
      return clothes;
    },
    router() {
      if (this.$route.params.id === "all") {
        return this.multiBrands;
      }
      else {return this.multiBrands}
    }
    
    
  },


  methods: {
 

    getImage(imagePath) {

      return require(`@/assets/${imagePath}`);
    },

  },
};
</script>

<style lang="css" scoped>

</style>
