<template>
  <q-responsive :ratio="4 / 2" style="width: 100%;">
    <div style="width: 100%; height: auto;" class="big-screen-container">
      <div class="con">
        <div class="con-2">
          <div class="wrapper">
            <a @click.prevent="route(0)"><span>Navigate!</span></a>
          </div>
          <cld-image
            class="scale-2"
            style="height: inherit"
            cloudName="dz3ubwuhu"
            :publicId="src1"
            dpr="auto"
            responsive="width"
            width="auto"
            quality="auto"
            crop="fill"
            fetchFormat="auto"
            loading="lazy"
          />
          <div class="image-des" style="">
            <p>{{ first }}</p>
          </div>
        </div>
      </div>
      <div class="con" style="">
        <div class="con-2">
          <div class="wrapper">
            <a @click.prevent="route(1)"><span>Navigate!</span></a>
          </div>
          <cld-image
            class="scale-2"
            style="height: inherit"
            cloudName="dz3ubwuhu"
            :publicId="src2"
            dpr="auto"
            responsive="width"
            width="auto"
            quality="auto"
            crop="fill"
            fetchFormat="auto"
            loading="lazy"
          />
          <div class="image-des" style="">
            <p>{{ second }}</p>
          </div>
        </div>
      </div>
    </div>
  </q-responsive>
</template>

<script>
import { CldImage } from "cloudinary-vue";
export default {
  name: "doublepicks-component",
  components: {
    CldImage,
  },
  props: {
    clothes: Array,
  },
  data() {
    return {};
  },
  computed: {
    src1() {
      return this.getSrc(0);
    },
    src2() {
      return this.getSrc(1);
    },
    first() {
      return this.getTitle(0);
    },
    second() {
      return this.getTitle(1);
    },
  },
  methods: {
    route(index) {
      let arr = this.clothes.map((a) => {
        return a.route;
      });
      return this.$router.push(arr[index]);
    },
    getTitle(index) {
      return this.clothes.length > 0 ? this.clothes[index].category : null;
    },
    getSrc(index) {
      if (this.clothes.length > 0) {
        return this.clothes[index].image[0].url
          .split("/")
          .slice(7)
          .join("/");
      }
    },
  },
};
</script>

<style lang="css" scoped>
.big-screen-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.con {
  width: 45%;
  height: auto;
  overflow: hidden;
  padding: 2%;
}
.con-2 {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 7px;
}

.scale-2 {
  transform-origin: 50% 65%;
  transition: transform 5s, filter 3s ease-in-out;
  filter: brightness(150%);
}

.scale-2:hover {
  filter: brightness(100%);
  transform: scale(1.3);
}
.wrapper {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 19;
}

a {
  display: block;
  cursor: pointer;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  background: whitesmoke;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
  z-index: 19;
}

a span {
  position: relative;
  z-index: 20;
}

a:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgb(53, 47, 51);
  transition: all 0.45s;
}

a:hover {
  color: #fff;
}

a:hover:after {
  width: 100%;
}
.fd {
  background-size: 80%;
}
.back {
  background-size: 98%;
}
.image-des {
  height: 60px;
  width: 100%;
  background: rgb(0, 0, 0, 0.88);
  position: absolute;
  bottom: 190px;
}
p {
  text-align: center;
  position: relative;
  margin: 0;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(17deg, #000, rgb(255, 255, 255), #000);
  background-repeat: no-repeat !important;
  background-size: 80% !important;
  animation: animate 3s linear;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
</style>
