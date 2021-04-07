<template>
  <main>
    <div :class="{ show: itemMissing }" class="snackbar">
      Item Or quantity not available
    </div>
    <div v-if="items.length < 1" class="no-items">
      <h6>OOOPS NO ITEMS ADDED ON CART</h6>
    </div>

    <div v-if="items.length > 0" class="basket">
      <h1>SHOPPING CART</h1>
      <div class="basket-labels">
        <ul>
          <li class="item item-heading">Item</li>
          <li class="price">Price</li>
          <li class="quantity">Quantity</li>
          <li class="subtotal">Subtotal</li>
        </ul>
      </div>

      <div
        class="basket-product"
        :class="{ baskettwo: test[index]}"
        v-for="(item, index) in items"
        :key="item.id"
      >
        <div class="item">
          <div class="product-image">
            <img
              :src="getImage(item.imagePath)"
              :alt="item.alt"
              class="product-frame"
            />
          </div>
          <div class="product-details">
            <h6>
              <strong
                ><span class="item-quantity">{{ item.quantity }} </span
                >{{ item.category }}
              </strong>
              {{ item.productName }}
            </h6>
            <p>
              <strong>{{ item.size[0] }}</strong>
            </p>
            <p>
              <strong>{{ item.color[0] }}</strong>
            </p>
            <h4 class="missing-items" v-if="test[index]">{{recentData[index].value.data.available}} is available</h4>
          </div>
        </div>
        <div class="price">{{ item.price }}</div>
        <div class="quantity">
          <button class="cart-btn" @click="remove(item)">
            <span class="cart-font">-</span>
          </button>
          <div class="quantity-field">{{ item.quantity }}</div>
          <button class="cart-btn" @click="add(item)">
            <span class="cart-font">+</span>
          </button>
        </div>
        <div class="subtotal">
          {{
            Math.round((item.price * item.quantity + Number.EPSILON) * 100) /
              100
          }}
        </div>
      </div>
    </div>
    <div v-if="items.length > 0" class="total-con">
      <div class="total-sec">
        <h4>TOTAL: R {{ price }}</h4>
        <h6>shipping calculated at checkout</h6>
        <button
          @click="
            checkout();
            chg();
          "
          class="check-btn"
        >
          CHECK OUT
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Cookies from "js-cookie";
import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:1337";

export default {
  name: "cart-page",
  data() {
    return {
      data: [],
      error: "",
      itemMissing: false,
      test: [],
      recentData: []
    };
  },
  created() {
    this.getCartItems();
  },
  computed: {
    ...mapGetters(["items", "price", "numberOfItems"]),
  },
  methods: {
    ...mapMutations(["add", "remove", "setItems"]),

    addNotification() {
      this.itemMissing = true;
      setTimeout(this.toggleItemMissing, 2900);
    },
    toggleItemMissing() {
      this.itemMissing = false;
    },

    getImage(imagePath) {
      return require(`@/assets/${imagePath}`);
    },
    getCartItems() {
      //  let cart2 = [];
      let cart = Cookies.get("cart");
      console.log(cart)
      if (this.numberOfItems < 1 && cart !== undefined) {
        console.log(JSON.parse(cart))
        this.setItems(JSON.parse(cart));
      }
    },
    chg() {
      return (this.test = []);
    },
    checkout() {
      let items = this.items;
      //  let unavailableItems = [];
      let urls = [];
      //  let itemMissingQty = 0;
      for (let i = 0; i < items.length; i++) {
        urls.push(
          `${apiUrl}/${items[i].imagePath
            .split("/")
            .slice(0, 1)
            .join("/")}/${items[i].id}`
        );
        if (items.length === urls.length) {
          const tasks = urls.map((source) => axios.get(source));
          Promise.allSettled(tasks).then((result) => {
            this.recentData = result;
            let unavailable = result.map((e, index) => {
              if (e.status == "rejected") {
                return index;
              } else {
                return -1;
              }
            });

            let qtycheck = result.map((a, index) => {
              if (a.status !== "rejected") {
                return a.value.data.available >= items[index].quantity
                  ? -1
                  : index;
              } else {
                return -1;
              }
            });

            let qtymiss = qtycheck.filter((e) => e >= 0).length;
            let missing = unavailable.filter((e) => e >= 0).length;

            if (qtymiss > 0 || missing > 0) {
              //  console.log(qtycheck.includes(-1), unavailable.includes(-1))
              for (let i = 0; i < qtycheck.length; i++) {
                if (qtycheck[i] > unavailable[i] ) {
                  unavailable[i] = qtycheck[i];
                }
              }
              this.test = unavailable.map(a => {return a >= 0? true: false})
              this.addNotification();
              console.log("qty ", qtycheck);
              console.log("unavailable ", unavailable);
            } else {
              this.$router.push({ name: "checkout-page" });
            }
          });
        }

        /* axios
          .get(
            `${apiUrl}/${items[i].imagePath
              .split("/")
              .slice(0, 1)
              .join("/")}/${items[i].id}`
          )
          .then((response) => {          
            if ( response.data.available >= items[i].quantity) {
               databaseItems.push(response.data);
            }           
            else {
              itemMissingQty++
              }
          })
          .catch((error) => {
            this.error = error.message;
            console.log(this.error);
          });
          if( i === items.length - 1) {
            console.log(i)
            console.log(itemMissingQty)
            console.log(databaseItems)
            itemMissingQty > 0? this.addNotification():this.$router.push({ name: "checkout-page" }) 
          }*/
      }
      /*
      return this.error === ""
        ? this.$router.push({ name: "checkout-page" })
        : this.addNotification();
      //return this.$router.push({ name: "checkout-page" });   */
    },
  },
};
</script>

<style lang="css" scoped>
a {
  border: 0 none;
  outline: 0;
  text-decoration: none;
}
.baskettwo {
  background-color: rgb(209, 206, 206)  !important;
  z-index: 5;
}

.missing-items {
      float: right;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px rgb(49, 49, 49) solid;
    border-radius: 14px;
    font-size: 250%;
}

strong {
  font-weight: bold;
}

p {
  margin: 0.75rem 0 0;
}

h6 {
  font-size: 0.75rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 3rem;
  font-weight: 500;
  line-height: 3rem;
  letter-spacing: -0.01562em;
  background-color: rgb(241, 241, 241);
  margin-bottom: 0px;
  margin-top: 0px;
  padding-bottom: 20px;
}

input,
button {
  border: 0 none;
  outline: 0 none;
}

button {
  background-color: #666;
  color: #fff;
}

button:hover,
button:focus {
  background-color: rgb(105, 105, 105);
}

img,
.basket-module,
.basket-labels,
.basket-product {
  width: 100%;
}

input,
button,
.basket,
.basket-module,
.basket-labels,
.item,
.price,
.quantity,
.subtotal,
.basket-product,
.product-image,
.product-details {
  float: left;
}

.price:before,
.subtotal:before,
.subtotal-value:before,
.total-value:before,
.promo-value:before {
  content: "R";
}

.hide {
  display: none;
}

main {
  clear: both;
  font-size: 0.75rem;
  margin: 0 auto;
  overflow: hidden;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(241, 241, 241);
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
}

.basket,
aside {
  padding: 0 1rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket {
  width: 80%;
  display: block;
}

.basket-module {
  color: #111;
}

label {
  display: block;
  margin-bottom: 0.3125rem;
}

.basket-labels {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 0;
  background-color: rgb(241, 241, 241);
  padding-top: 0px;
  font-size: 14px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  color: #111;
  display: inline-block;
  padding: 0.625rem 0;
}

li.price:before,
li.subtotal:before {
  content: "";
}

.item {
  width: 55%;
}

.price,
.quantity,
.subtotal {
  width: 15%;
}
.quantity {
  display: flex;
  justify-content: center;
}

.subtotal {
  text-align: right;
  padding-right: 10px;
}

.remove {
  bottom: 1.125rem;
  float: right;
  position: absolute;
  right: 0;
  text-align: right;
  width: 45%;
}

.remove button {
  background-color: transparent;
  color: #777;
  float: none;
  text-decoration: underline;
  text-transform: uppercase;
}

.item-heading {
  padding-left: 4.375rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket-product {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  position: relative;
  background-color: aliceblue;
}

.product-image {
  width: 23%;
  height: auto;
}

.product-details {
  width: 65%;
}

.product-frame {
  border: 1px solid #aaa;
  max-height: 141.58px;
}

.product-details {
  padding: 0 1.5rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.quantity-field {
  background-color: #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 0.73rem;
  padding: 2px;
  width: 3.75rem;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
}
.cart-btn {
  background-color: rgb(129, 82, 107); /* Green */
  border: none;
  color: white;

  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  border-radius: 5px;
  width: 26px;
  height: 23px;
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
}

.cart-font {
  font-size: 20px;
}

.total-sec {
  height: 200px;
  background: rgb(241, 241, 241);
  width: 100%;
  border-right: solid 1px gray;
  border-bottom: solid 1px gray;

  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.total-sec > h4 {
  margin-bottom: 10px;
  margin-top: 20px;
  margin-right: 10px;
}
.total-sec > h6 {
  margin-right: 10px;
  font-size: 16px;
}
.check-btn {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 120px;
  margin: 20px 10px 4px 2px;
  cursor: pointer;
  border-radius: 2px;
}
.total-con {
  width: 80%;
  padding: 16px;
  padding-top: 0;
}
.no-items {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.no-items > h6 {
  font-size: 50px;
  font-weight: 800;
}
@media screen and (max-width: 640px) {
  aside,
  .basket,
  .summary,
  .item,
  .remove,
  .total-con {
    width: 100%;
  }
  .basket-labels {
    display: none;
  }
  .basket-module {
    margin-bottom: 1rem;
  }
  .item {
    margin-bottom: 1rem;
  }
  .product-image {
    width: 40%;
  }
  .product-details {
    width: 60%;
  }
  .price,
  .subtotal {
    width: 33%;
  }
  .quantity {
    text-align: center;
    width: 34%;
  }
  .quantity-field {
    float: none;
  }
  .remove {
    bottom: 0;
    text-align: left;
    margin-top: 0.75rem;
    position: relative;
  }
  .remove button {
    padding: 0;
  }
  .summary {
    margin-top: 1.25rem;
    position: relative;
  }
}

@media screen and (min-width: 641px) and (max-width: 960px) {
  aside {
    padding: 0 1rem 0 0;
  }
  .summary {
    width: 28%;
  }
}

@media screen and (max-width: 960px) {
  main {
    width: 100%;
  }
  .product-details {
    padding: 0 1rem;
  }
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
