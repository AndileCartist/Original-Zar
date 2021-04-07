<template>
  <div class="q-pa-md q-ma-xl">
    
   <paginated-list :listData="router"/>
    
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PaginatedList from '../components/PaginatedList.vue';

export default {
  name: "KidsPage",
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
    ...mapGetters([ "kidsClothes"]),

    multikids() {
      let clothes = [];
      for (let i = 0; i < 12; i++) {
        for (let cloth of this.kidsClothes) {
          clothes.push({...cloth, uni: i});  
        }
      }
     // console.log("route id ",this.$route.params.id)
      return clothes;
    },
    router() {
      if (this.$route.params.id === "all") {
        return this.multikids;
      }
      else {return this.multikids}
    }
    
    
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

<style lang="css" scoped>

</style>
