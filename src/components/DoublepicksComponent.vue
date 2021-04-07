<template>
   <q-responsive :ratio="4 / 2" style="width: 100%;">
      <div style="width: 100%; height: auto;" class="big-screen-container">
        <div class="con">
          <div class="con-2">
            <div class="wrapper">
              <a href="#"><span>Hover Me!</span></a>
            </div>
            <img
              :src="getImage(firstImg)"
              class="scale-2"
              style="width: 100%; height: 100%;"
              alt=""
            /> 
          </div>
        </div>
        <div class="con" style="">
          <div class="con-2">
            <div class="wrapper">
              <a href="#"><span>Hover Me!</span></a>
            </div> 
            <img
              :src="getImage(secondImg)"
              class="scale-2"
              style="width: 100%; height: 100%;"
              alt=""
            />
          </div>
        </div>
      </div>
    </q-responsive>
  
</template>

<script>
export default {
  name: "doublepicks-component",
  props: {
    clothes: Array,
  },
  data() {
    return {
      firstImg: this.clothes[0].imagePath,
      secondImg: this.clothes[1].imagePath
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
}
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
  background: rgb(136, 14, 79);
  transition: all 0.45s;
}

a:hover {
  color: #fff;
}

a:hover:after {
  width: 100%;
}
</style>