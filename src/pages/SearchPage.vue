<template>
  <div class="main q-pa-md q-ma-xl">
    <paginated-list :listData="search"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PaginatedList from '../components/PaginatedList.vue';


export default {
  components: {
    PaginatedList
    //  PaginatedList,
  },
  computed: {
     ...mapGetters(["search"]),
  }
};
</script>

<style lang="css" scoped>
.main {
  max-height: 800px;
  width: 100%;
}
</style>
