<template>
  <div class="q-ma-lg  row wrap justify-center items-center content-center">
          <q-separator color="orange" size="0.2rem" inset /> 
            <h4  class="q-ma-xs header-size category-font "  >{{ header }}</h4>  
       </div>
</template>

<script>
export default {
name: "CategoryHeader",
  props: {
      header: String 
  }
}
</script>

<style>
.category-font {
  font-family: 'Playfair Display', serif;
}
.flow {
    overflow: auto;
}
.header-size {
      font-size:3vw;
}
</style>