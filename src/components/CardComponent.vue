<template>
  <div>
    <div :class="{ show: itemAdded }" class="snackbar">
      Added Item to Cart...
    </div>
    <div class="card-face" @mouseover="mouseOver" @mouseout="mouseOver">
      <cld-image
        cloudName="dz3ubwuhu"
        :publicId="src"
        dpr="auto"
        responsive="width"
        width="auto"
        height="300"
        crop="scale"
        loading="lazy"
      >
        <cld-placeholder type="blur"> </cld-placeholder>
      </cld-image>
      <!-- <img src="../assets/men/jackets/hoodies/hoodie1.jpg" alt="" style="width: inherit; height: inherit;">   -->
      <div
        class="spec-con"
        :style="hovering ? { visibility: 'visible' } : { visibility: 'hidden' }"
      >
        <h5>{{ productName }}</h5>
        <h6>R {{ price }}</h6>
        <div class="card-buttons-con">
          <button @click="viewCloth()" class="nav-button">VIEW</button>
          <button
            @click="
              addNotification();
              add(item);
            "
            class="nav-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>

    <div
      :style="modalOpen ? { display: 'block' } : { display: 'none' }"
      class="modal"
    >
      <span @click="viewCloth()" class="close">&times;</span>
      <div class="grid-container-main">
        <div class="preview-img item-1">
          <cld-image
            style="width: 70%; height: auto;margin: 3px;border: whitesmoke solid 1px;"
            cloudName="dz3ubwuhu"
            :publicId="src"
            dpr="auto"
            responsive="width"
            quality="auto"
            crop="fill"
            fetchFormat="auto"
            loading="lazy"
          >
            <cld-placeholder type="blur"> </cld-placeholder>
          </cld-image>
          <cld-image
            style="width: 70%; height: auto;margin: 3px;border: whitesmoke solid 1px;"
            cloudName="dz3ubwuhu"
            :publicId="src"
            dpr="auto"
            responsive="width"
            quality="auto"
            crop="fill"
            fetchFormat="auto"
            loading="lazy"
          >
            <cld-placeholder type="blur"> </cld-placeholder>
          </cld-image>
        </div>
        <div class="img-con item-2">
          <cld-image
            cloudName="dz3ubwuhu"
            :publicId="src"
            dpr="auto"
            responsive="width"
            width="100%"
            quality="auto"
            crop="fill"
            fetchFormat="auto"
            loading="lazy"
          >
            <cld-placeholder type="blur"> </cld-placeholder>
          </cld-image>
        </div>

        <div class="item-3">
          <h4 class="modalheader">{{ productName }}</h4>
          <div class="priceBox">
            <span v-if="sale">sale</span>
            <p v-if="!sale">R {{ price }}</p>
            <p v-if="sale">
              <s>R {{ price }}</s>
            </p>
            <p v-if="sale">
              R {{ price - (item.salePercentage / 100) * price }}
            </p>
            <p class="available">AVAILABLE {{ item.available }}</p>
          </div>
          <hr />
          <div class="grid-container">
            <h6>Size</h6>
            <h6>Color</h6>
            <h6>Quantity</h6>
            <label for="size">
              <select name="size" id="size" class="options">
                <option v-for="(option, index) of sizes" v-bind:key="index">{{
                  option
                }}</option>
              </select>
            </label>
            <label for="color">
              <select name="color" id="color" class="options">
                <option v-for="(option, index) of colors" v-bind:key="index">{{
                  option
                }}</option>
              </select>
            </label>
            <div class="quantity">
              <button class="cart-btn" @click="add(item), quantityIncrement()">
                <span class="cart-font">+</span>
              </button>
              <div class="quantity-field">{{ quantity }}</div>
              <button
                class="cart-btn"
                @click="remove(item), quantityDecrement()"
              >
                <span class="cart-font">-</span>
              </button>
            </div>
          </div>
          <div style="text-align: center;">
            <q-btn
              @click="
                addNotification();
                add(item);
              "
              text-color="blue-7"
              style="height: 45px; width: 95%; margin-top: 30px;"
              outline
              class="grey-1 q-pa-xs"
              label=" Add To Cart"
            />
            <q-btn
              style="height: 45px; width: 95%; margin-top: 10px; background-color: #006eff !important; border-radius: 5px !important;"
              text-color="grey-1"
              outline
              class="blue-7 q-pa-xs"
              label=" BUY IT NOW"
            />
          </div>

          <h5 class="des">Product Description</h5>
          <ul v-for="(list, index) of description" :key="index">
            <li>{{ list }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CldImage, CldPlaceholder } from "cloudinary-vue";
export default {
  name: "cardComponent",
  components: {
    CldImage,
    CldPlaceholder,
  },
  props: {
    item: Object,
    imagePath: String,
    productName: String,
    price: Number,
    //  color: String
  },
  /* computed: {
    style() {
      return "background-image: " + `url(${this.imagePath})`;
    },
  },*/
  data() {
    return {
      // url: "https://www.roudstudio.com/images/works/product-photo/img01.jpg",
      isflipped: false,
      hovering: false,
      modalOpen: false,
      colors: this.item.color,
      sizes: this.item.size,
      sale: this.item.onSale,
      description: this.item.description.split("."),
      img: this.item.imagePath,
      src: this.item.image[0].url
        .split("/")
        .slice(7)
        .join("/"),
      itemAdded: false,
      quantity: 0,
    };
  },
  methods: {
    addNotification() {
      this.itemAdded = true;
      setTimeout(this.toggleItemAdded, 2900);
    },
    quantityIncrement() {
      return this.quantity++;
    },
    quantityDecrement() {
      return this.quantity === 0 ? 0 : this.quantity--;
    },
    toggleItemAdded() {
      this.itemAdded = false;
    },
    mouseOver() {
      this.hovering = !this.hovering;
    },
    ...mapMutations(["add", "remove"]),
    viewCloth() {
      return this.modalOpen
        ? (this.modalOpen = false)
        : (this.modalOpen = true);
    },
    closeModal() {
      /*  let modal = document.getElementById("myModal");
      modal.style.display = "none";*/
    },
    getImage(imagePath) {
      return require(`@/assets/${imagePath}`);
    },
  },
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
  width: 300px;
  height: 303px;
  border: 2px solid rgb(194, 201, 200);
  border-radius: 3px;
  position: relative;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin: 8px;
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
  position: relative;
  top: -116px;
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
.modal {
  display: none;
  position: fixed;
  z-index: 2100;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(255, 250, 250);
  background-color: rgba(255, 250, 250, 0.98);
}
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 80px;
}
/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: black;
  font-size: 40px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 0.5fr 1fr;
  grid-gap: 10px;
  row-gap: 60px;
  /*  background: blue;  */
}
.grid-container-main {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  /*grid-template-rows: 1fr;*/
  grid-gap: 10px;
  row-gap: 60px;
  /*  background: blue;  */
}
.preview-img {
  display: flex;
  flex-direction: column;
}
.preview-img > img {
  width: 70%;
  height: auto;
  margin: 5px;
  border: whitesmoke solid 1px;
}
.preview-img > img:hover {
  border: #006eff solid 1px;
}
.item-3 {
  text-align: start;
  color: black;
}

@media only screen and (max-width: 599px) {
  .grid-container-main {
    display: flex;
    flex-direction: column;
  }
  .preview-img {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .preview-img > img {
    width: 45%;
    height: auto;
    margin: 3px;
    border: whitesmoke solid 1px;
  }
  .item-1 {
    order: 2;
  }
  .item-2 {
    order: 1;
  }
  .item-3 {
    order: 3;
  }
}
.modalheader {
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 0px;
  margin-top: 0px;
  padding-bottom: 10px;
  font-family: "Playfair Display", serif;
}
.priceBox > p {
  margin: 0 0 16px;
  display: inline !important;
  margin-right: 20px;
  font-size: 18px;
  color: #242424;
  font-weight: 700;
}
.priceBox > .available {
  font-size: 11px;
}
.priceBox > span {
  color: whitesmoke;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  border-bottom-width: 5px;
  padding-bottom: 3px;
  /*   font-size: 0.75em;    */
  background: #006eff;
  font-size: 16px;
  letter-spacing: 1px;
  /* border-bottom: solid 0.05rem;  */
  margin-right: 15px;
  display: inline !important;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr;
  gap: 5px 5px;
}
.grid-container > h6 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.quantity {
  display: flex;
  justify-content: center;
}
.quantity-field {
  background-color: #ccc;
  border: 1px solid #aaa;
  font-size: 0.73rem;
  padding: 2px;
  width: 3.75rem;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
  border-bottom-width: 0px;
  border-top-width: 0px;
  padding-top: 8px;
  height: 70%;
}

.cart-btn {
  background-color: #ccc; /* Green */
  border: none;
  color: white;
  display: inline;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  width: 26px;
  height: 70%;
  cursor: pointer;
  margin: 0;
  padding: 0;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.cart-btn:hover {
  background-color: rgb(104, 71, 89);
}
.cart-btn:active,
.cart-btn:focus {
  background-color: rgb(129, 82, 107);
  border: none;
}

.cart-font {
  font-size: 20px;
}
.options {
  width: 100%;
  height: 70%;
  /* border-radius: 2px; */
  background: #e0e0e0;
  border: none;
}
.q-btn__content {
  padding-bottom: 15px !important;
}
.des {
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal;
  font-family: Garamond;
  margin-bottom: 20px;
}
.img-con {
  /*display: flex; */
  justify-content: center;
}
.img-con > img {
  width: 90%;
  height: auto;
  margin-bottom: 25px;
}
.snackbar {
  visibility: hidden;

  background-color: #006eff;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 10px;
  position: fixed;
  z-index: 2500;
  left: -100%;
  right: -100%;
  top: 0px;
  font-size: 17px;
}

.snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 0px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    top: 0px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
</style>
