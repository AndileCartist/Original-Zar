<template>
  <div style="width: 100%;">
    <q-responsive :ratio="4/2" style="width: 100%;">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      class="responsive"
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = true"
      @mouseleave="autoplay = true"
    >
      
        <q-carousel-slide
        :name="1"
        :img-src="getImage('women/jackets/hoodies/hoodie3.jpg')"
        
      >
       <div class="absolute-center custom-caption">
          <div class="text-h">Lady's Hoodies</div>
          <q-btn outline class="grey-1 q-pa-xs btn-text"  glossy label=" Take Me There " />
        </div>
      </q-carousel-slide>
      
      

      <q-carousel-slide
        :name="2"
        :img-src="
          getImage(
            'women/dresses/dress-3.jpg'
          )
        "
      >
      <div class="absolute-center custom-caption">
          <div class="text-h">Lady's Dresses</div>
          <q-btn outline class="grey-1 q-pa-xs btn-text" glossy label=" Take Me There " />
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="3"
        :img-src="
          getImage('men/footware/sneakers/nike.jpg')
        "
      >
      <div class="absolute-center custom-caption">
          <div class="text-h">Men's sneakers</div>
          <q-btn outline class="grey-1 q-pa-xs btn-text" glossy label=" Take Me There " />
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="4"
        :img-src="getImage('men/formalWear/formal.jpg')"
      >
      <div class="absolute-center custom-caption">
          <div class="text-h">Men's Formalwear</div>
          <q-btn outline class="grey-1 q-pa-xs btn-text" glossy label=" Take Me There " />
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
        >
          <q-toggle
            dense
            dark
            color="teal-12"
            v-model="autoplay"
            label="Auto Play"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
    </q-responsive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
    };
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
.custom-caption {
  text-align: center;
  padding: 12px;
  color: whitesmoke;
  background-color: rgba(0, 0, 0, .3);
  width: 100%;
}
.responsive {
  width: 100%;
  height: auto;
}

.text-h {
  font-size:5vw;
}
.btn-text {
  font-size:1.2vw;
}
</style>
