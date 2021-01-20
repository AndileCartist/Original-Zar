<template>
  <div>

        <div class="card-face card-face-front" :style="style" @mouseover="mouseOver" @mouseout="mouseOver">
        <!--  <img :src="imagePath" alt="">   -->
          <div class="spec-con" :style="hovering? {visibility: 'visible'}: {visibility: 'hidden'}">
            <h5>{{ productName }}</h5>
            <h6>R{{ price }}</h6>

            <div class="card-buttons-con">
              <button class="nav-button">VIEW</button>
              <button 
                     
                      class="nav-button">Add </button>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "cardComponent",
  props: {
      imagePath: String,
      productName: String,
      price: Number,
    //  color: String
  },
  computed: {
      style () {
        return 'background-image: ' + `url(${this.imagePath})`;
      }
    },
  data() {
    return {
     // url: "https://www.roudstudio.com/images/works/product-photo/img01.jpg",
      isflipped: false,
      hovering: false
    };
  },
  methods: {
    flipCard() {
      return this.isflipped? this.isflipped = false: this.isflipped = true;
    },
    mouseOver () {
       this.hovering = !this.hovering
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

  
  .nav-button {
    height: 40px;
    margin: 0px 3px 3px 3px;
    transform: skewX(-12deg);
    background-color: #797979;
    color: whitesmoke;
    font-size: 14px;
    font-weight: 1.9em;
  }

  
  button {
    padding: 10px;
    height: 60px;
    width: 80px;
    background-color: navajowhite;
    cursor: pointer;
  }
  .card-face {
    width: 260px;
    height: 316px;
    border: 2px solid rgb(194, 201, 200);
    border-radius: 3px;
    position: relative;
    color: black;
    text-align: center;
    font-weight: bold;
    font-size: 25px;

  }

  .card-face-front {
    /*background: url(imagePath);   */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  .spec-con {
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 0 -5px 2px rgba(0, 0, 0, 0.6);
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.6);
    width: inherit;
  }

  .spec-con h5 {
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 3px;
    color: whitesmoke;
  }

  .spec-con h6 {
    padding-bottom: 3px;
    padding-top: 3px;
    margin-bottom: 0px;
    margin-top: 0px;
    color: whitesmoke;
  }

  .card-buttons-con {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /*  height: 60px;*/
  }


</style>
