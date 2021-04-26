<template>
  <div style="width: 100%;">
    <q-responsive :ratio="4 / 2" style="width: 100%;">
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
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = false"
      >
        <q-carousel-slide
          class="q-pa-none"
          :name="1"
         
        >
             <cld-image style="height: inherit"
            cloudName="dz3ubwuhu"
            :publicId="src1"
            dpr="auto"
            responsive="width"
            width="auto"
            quality="auto"
              crop="fill"
             fetchFormat="auto"
          />
          <!-- <img :src="getImage('women/jackets/hoodies/hoodie3.jpg')" alt="" style="height:100%; width: 100%;">   -->
          <div class="absolute-center custom-caption">
            <div class="text-h">Lady's Hoodies</div>
            <q-btn
              @click="route(0)"
              outline
              class="grey-1 q-pa-xs btn-text"
              glossy
              label=" Take Me There "
            />
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          :name="2"
         class="q-pa-none"
        >
            <cld-image style="height: inherit"
            cloudName="dz3ubwuhu"
            :publicId="src2"
            dpr="auto"
            responsive="auto"
            width="auto"
            resize="fit"
            crop="fill"
            quality="auto"
             fetchFormat="auto"
 
          />
          <div class="absolute-center custom-caption">
            <div class="text-h">Lady's Dresses</div>
            <q-btn
            @click="route(1)"
              outline
              class="grey-1 q-pa-xs btn-text"
              glossy
              label=" Take Me There "
            />
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          :name="3"
          class="q-pa-none"
        >
        <cld-image style="height: inherit"
            cloudName="dz3ubwuhu"
            :publicId="src3"
            dpr="auto"
            responsive="width"
            width="auto"
            crop="fill"
          />
          <div class="absolute-center custom-caption">
            <div class="text-h">Men's sneakers</div>
            <q-btn
            @click="route(2)"
              outline
              class="grey-1 q-pa-xs btn-text"
              glossy
              label=" Take Me There "
            />
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          :name="4"
          class="q-pa-none"
        >
        <cld-image style="height: inherit"
            cloudName="dz3ubwuhu"
            :publicId="src4"
            dpr="auto"
            responsive="width"
            width="auto"      
            crop="fill"
          />
          <div class="absolute-center custom-caption">
            <div class="text-h">Men's Formalwear</div>
            <q-btn
            @click="route(3)"
              outline
              class="grey-1 q-pa-xs btn-text"
              glossy
              label=" Take Me There "
            />
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
import  { CldImage } from "cloudinary-vue";
export default {
  components: {
     CldImage   
  },
  props: {
     data: Array
  },
  data() {
    return {
      slide: 1,
      autoplay: false,
    };
  },
  computed: {
    src1() {
      return this.getSrc(0)
    },
     src2() {
      return this.getSrc(1)
    },
     src3() {
      return this.getSrc(2)
    },
     src4() {
      return this.getSrc(3)
    },
    
  },
  methods: {
    route(index) {
      let arr = this.data.map(a => {return a.route})
      return this.$router.push(arr[index]) 
    },
    getSrc(index) {
      if(this.data.length > 0 ) {
        return this.data[index].image[0].url
        .split("/")
        .slice(7)
        .join("/")
      }    
    },

  },
  created() {
    //this.getCarousel();
  },
};
</script>

<style lang="css" scoped>
.no-padding {
  padding: 0 !important;
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
}
.responsive {
  width: 100%;
  height: auto;
}

.text-h {
  font-size: 5vw;
}
.btn-text {
  font-size: 1.2vw;
}
</style>
