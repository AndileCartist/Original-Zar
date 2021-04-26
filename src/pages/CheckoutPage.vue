<template>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <div :class="{ show: inputMissing }" class="snackbar">
          Required Input Field(s) Empty
        </div>
        <form>
          <div class="row">
            <div class="col-50">
              <div class="scene scene-card">
                <div class="card" :class="{ isflipped: !checked }">
                  <div class="card-face card-face-front">
                    <form>
                      <div class="head-flex">
                        <div style="width: 85%;">
                          <h6>Billing Information</h6>
                        </div>
                        <img class="logo" src="../assets/index.svg" />
                      </div>
                      <hr
                        style="color: #565454; width: 95%; margin-bottom: 30px"
                      />
                      <div class="body-flex">
                        <label for="fname">Contact No.</label>
                        <div>
                          <input
                            type="text"
                            name="firstname"
                            required
                            v-model="billingAddress.contact"
                          />
                        </div>
                      </div>

                      <div class="body-flex">
                        <label for="adr">Billing Address</label>
                        <div>
                          <input
                            v-model="billingAddress.street"
                            type="text"
                            required
                            name="address"
                          />
                        </div>
                      </div>
                      <div class="body-flex" style="margin-top: 5px;">
                        <div style="width: 55%;margin-left: 8%;"></div>
                        <p class="input-hint">street address</p>
                      </div>

                      <div class="body-flex">
                        <label for="adr"></label>
                        <div>
                          <input
                            v-model="billingAddress.secondStreet"
                            type="text"
                            name="secondaddress"
                          />
                        </div>
                      </div>
                      <div class="body-flex" style="margin-top: 5px;">
                        <div style="width: 55%;margin-left: 8%;"></div>
                        <p class="input-hint">2nd street address(optionally)</p>
                      </div>
                      <div class="address-grid">
                        <div></div>
                        <input
                          type="text"
                          v-model="billingAddress.city"
                          required
                        />
                        <label for="size">
                          <select
                            v-model="billingAddress.province"
                            style="font-size: 18px;"
                          >
                            <option value="Gauteng">Gauteng</option>
                            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                            <option value="Gauteng">Western Cape</option>
                            <option value="Eastern Cape">Eastern Cape</option>
                            <option value="Free State">Free State</option>
                            <option value="Limpopo">Limpopo</option>
                            <option value="Mpumalanga">Mpumalanga</option>
                            <option value="Northern Cape">Northern Cape</option>
                            <option value="North West">North West</option>
                          </select>
                        </label>
                        <div></div>
                        <p>city</p>
                        <p>province</p>
                      </div>
                      <div class="address-grid">
                        <div></div>
                        <input
                          type="text"
                          v-model="billingAddress.code"
                          required
                        />
                        <label for="size">
                          <select
                            v-model="billingAddress.country"
                            required
                            style="font-size: 18px;"
                          >
                            <option>South Africa</option>
                          </select>
                        </label>
                        <div></div>
                        <p>code</p>
                        <p>country</p>
                      </div>
                    </form>
                  </div>
                  <div class="card-face card-face-back">
                    <form>
                      <div class="head-flex">
                        <div style="width: 85%;">
                          <h6>Shipping Information</h6>
                        </div>
                        <img class="logo" src="../assets/index.svg" />
                      </div>
                      <hr
                        style="color: #565454; width: 95%; margin-bottom: 30px"
                      />
                      <div class="body-flex">
                        <label for="fname">Contact No.</label>
                        <div>
                          <input
                            type="text"
                            name="contact"
                            v-model="shippingAddress.contact"
                          />
                        </div>
                      </div>

                      <div class="body-flex">
                        <label for="adr">Shipping Address</label>
                        <div>
                          <input
                            type="text"
                            name="address"
                            v-model="shippingAddress.street"
                          />
                        </div>
                      </div>
                      <div class="body-flex" style="margin-top: 5px;">
                        <div style="width: 55%;margin-left: 8%;"></div>
                        <p class="input-hint">street address</p>
                      </div>

                      <div class="body-flex">
                        <label for="adr"></label>
                        <div>
                          <input
                            type="text"
                            name="address"
                            v-model="shippingAddress.secondStreet"
                          />
                        </div>
                      </div>
                      <div class="body-flex" style="margin-top: 5px;">
                        <div style="width: 55%;margin-left: 8%;"></div>
                        <p class="input-hint">2nd street address(optionally)</p>
                      </div>
                      <div class="address-grid">
                        <div></div>
                        <input type="text" v-model="shippingAddress.city" />
                        <label for="size">
                          <select
                            v-model="shippingAddress.province"
                            style="font-size: 18px;"
                          >
                            <option value="Gauteng">Gauteng</option>
                            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                            <option value="Gauteng">Western Cape</option>
                            <option value="Eastern Cape">Eastern Cape</option>
                            <option value="Free State">Free State</option>
                            <option value="Limpopo">Limpopo</option>
                            <option value="Mpumalanga">Mpumalanga</option>
                            <option value="Northern Cape">Northern Cape</option>
                            <option value="North West">North West</option>
                          </select>
                        </label>
                        <div></div>
                        <p>city</p>
                        <p>province</p>
                      </div>
                      <div class="address-grid">
                        <div></div>
                        <input type="text" v-model="shippingAddress.code" />
                        <label for="size">
                          <select
                            v-model="shippingAddress.country"
                            style="font-size: 18px;"
                          >
                            <option>South Africa</option>
                          </select>
                        </label>
                        <div></div>
                        <p>code</p>
                        <p>country</p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label>
            <input
              v-model="checked"
              type="checkbox"
              checked="checked"
              name="sameadr"
            />
            Shipping address same as billing
          </label>

          <div class="pay-cont">
            <button
              @click.prevent="
                checkInput();
                /*   createOrder();*/
                updateClothes();
              "
              class="btn-c"
            >
              Payment
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-25">
      <div class="container summary">
        <h4>
          Cart Summary
        </h4>
        <div class="cart-summary-grid">
          <p>Product</p>
          <p>Quantity</p>
          <p>price</p>
        </div>
        <div
          v-for="(item, index) in items"
          :key="index"
          class="cart-summary-grid"
        >
          <p>{{ item.productName }}</p>
          <p>{{ item.quantity }}</p>
          <p>{{ item.price }}</p>
        </div>
        <hr />
        <p>
          Total
          <span class="price" style="color:black"
            ><b>R {{ price }}</b></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//import Flutterwave from "../components/FlutterwaveModal.vue";
// const flwKey = process.env.payment.VUE_APP_FLUTTERWAVE_TEST_KEY;
import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:1337";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Checkout-Page",
  components: {
    //  paystack,
    //Flutterwave
  },
  data() {
    return {
      amount: 10 * 100,
      full_name: "andile mkhize",
      email: "andilemkhizekhabazela@gmail.com",
      PUBLIC_KEY: "FLWPUBK_TEST-22a4bcfebeaf537a6156354940b6a40a-X",
      checked: true,
      inputMissing: false,
      over: "",
      update: "",
      street: "",
      orders: "",
      billingAddress: {
        contact: "g",
        street: "g",
        secondStreet: "",
        city: "g",
        province: "g",
        code: "g",
        country: "g",
      },
      shippingAddress: {
        contact: "",
        street: "",
        secondStreet: "",
        city: "",
        province: "",
        code: "",
        country: "",
      },
    };
  },
  computed: {
    syncAddress: {
      get: function() {
        return this.shippingAddress;
      },
      // setter
      set: function() {
        return this.checked
          ? (this.shippingAddress = this.billingAddress)
          : null;
      },
    },

    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
    ...mapGetters(["items", "price", "numberOfItems", "getToken", "userEmail"]),
  },
  created() {},
  methods: {
    checkInput() {
      let firstAddress = this.billingAddress;
      let secondAddress = this.shippingAddress;
      let fArr = Object.values(firstAddress);
      fArr.splice(2, 1);
      let first = fArr.map((e) => {
        return e === "";
      });

      let sArr = Object.values(secondAddress);
      sArr.splice(2, 1);
      let second = sArr.map((e) => {
        return e === "";
      });

      if (this.checked) {
        if (first.includes(true)) {
          console.log(fArr);
          this.addNotification();
          return true;
        }
      } else if (!this.checked) {
        if (first.includes(true) && second.includes(true)) {
          this.addNotification();
          return true;
        }
      } else {
        return false;
      }
    },
    populateOversold(over) {
      over.forEach((req) => {
        let json = JSON.stringify({ ...req });
        axios
          .post(
            `${apiUrl}/oversolds`,
            {
              items: json,
            },
            {
              headers: { Authorization: `Bearer ${this.getToken}` },
            }
          )
          .catch((err) => {
            return console.log(err.message);
          });
      });
    },
    populateOutOfStock(over) {
      over.forEach((req) => {
        let json = JSON.stringify({ ...req });
        axios
          .post(
            `${apiUrl}/out-of-stock`,
            {
              items: json,
            },
            {
              headers: { Authorization: `Bearer ${this.getToken}` },
            }
          )
          .catch((err) => {
            return console.log(err.message);
          });
      });
    },
    createOrder() {
      if (!this.checkInput()) {
        axios
          .post(
            `${apiUrl}/orders`,
            {
              amount: this.price,
              order: JSON.stringify(this.items),
              address: JSON.stringify(this.billingAddress),
              date: new Date(),
              email: this.userEmail,
              shippingAddress: JSON.stringify(this.shippingAddress),
            },
            {
              headers: { Authorization: `Bearer ${this.getToken}` },
            }
          )
          .catch((err) => {
            return console.log(err.message);
          });
      }
    },
    deleteEntries(over) {
      const tasks = over.map((source) =>
        axios.delete(
          `${apiUrl}/${source.imagePath
            .split("/")
            .slice(0, 1)
            .join("/")}/${source.id}`,
          {
            headers: { Authorization: `Bearer ${this.getToken}` },
          }
        )
      );
      Promise.allSettled(tasks).catch((err) => {
        return err.message;
      });
    },
    updater(arr, over) {
      const tasks = arr.map((source) => {
        console.log(source.available);
        axios
          .put(
            `${apiUrl}/${source.imagePath
              .split("/")
              .slice(0, 1)
              .join("/")}/${source.id}`,
            {
              available: source.available - source.qty,
            },
            {
              headers: { Authorization: `Bearer ${this.getToken}` },
            }
          )
          .catch((err) => {
            return err.message;
          });
      });
      Promise.allSettled(tasks)
        .then((results) => {
          results.forEach((e, index) => {
            if (e.status === "rejected") {
              over.push({
                item: { ...arr[index] },
                oversoldQty: arr[index].quantity,
              });
            }
          });
        })
        .catch((err) => {
          return err.message;
        });
    },
    updateClothes() {
      let items = this.items;
      let urls = [];
      let oversold = [];
      let updateable = [];
      let outOfStock = [];

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
            result.forEach((e, index) => {
              if (e.status === "rejected") {
                oversold.push({
                  ...items[index],
                  oversoldQty: items[index].quantity,
                });
              } else {
                if (items[index].quantity > e.value.data.available) {
                  oversold.push({
                    ...items[index],
                    oversoldQty: items[index].quantity - e.value.data.available,
                  });
                } else if (items[index].quantity === e.value.data.available) {
                  outOfStock.push({
                    ...items[index],
                  });
                }
              }
            });
            result.forEach((x, index) => {
              if (x.status !== "rejected") {
                if (x.value.data.available >= items[index].quantity) {
                  updateable.push({
                    ...x.value.data,
                    qty: items[index].quantity,
                  });
                }
              }
            });
            console.log("oversold ", oversold);
            console.log("outofstock ", outOfStock);
            console.log("update ", updateable);
            // updates collection from data on above arrays  && updates oversold array not collection
            //  this.updater(updateable, oversold)
            // delete oversold products  and out of stock one

            //  this.deleteEntries(oversold)
            //  this.deleteEntries(outOfStock)

            // send unavailable products into their respective collections

            //  this.populateOversold(oversold)

            //  this.populateOutOfStock(outOfStock)
            this.$router.push({ name: "google-redirect" });
          });
        }
      }
    },
    addNotification() {
      this.inputMissing = true;
      setTimeout(this.toggleItemMissing, 2900);
    },
    toggleItemMissing() {
      this.inputMissing = false;
    },
    ...mapMutations(["add", "remove", "setItems"]),
    makePaymentCallback(response) {
      console.log("Payment callback", response);
    },
    closedPaymentModal() {
      console.log("payment modal is closed");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
  },
};
</script>

<style lang="css" scoped>
.summary > h4 {
  margin-top: 10px;
  margin-bottom: 20px;
}
.cart-summary-grid {
  display: grid;
  grid-template-columns: 3.5fr 3.5fr 3fr;
}
.address-grid {
  display: grid;
  grid-template-columns: 2.9fr 2.2fr 2.2fr;
  grid-template-rows: 0.5fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    ". . .";
  text-align: start;
  margin-top: 7px;
}

.address-grid > div {
  width: 100%;
}
.address-grid > input,
.address-grid > label > select {
  width: 83%;
  border: 1px solid rgb(204 199 199);
  border-radius: 5px;
  background-color: #f2f2f2;
}
.address-grid > label > select {
  width: 83%;
  height: 100%;
}
.address-grid > p {
  font-size: 14px;
  color: #696666;
  margin-bottom: 0;
  margin-left: 8px;
}
.input-hint {
  font-size: 12px;
  margin-bottom: 0;
  color: #696666;
  width: 100%;
  text-align: start;
}
.head-flex {
  display: flex;
}
.head-flex > div > h6 {
  padding: 50px 50px;
  font-size: 140%;
  margin: 0;
  color: #565454;
}
.logo {
  width: 15%;
}
.body-flex {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 30px 0;
  margin-bottom: 5px;
}
.body-flex > label {
  width: 35%;
  font-size: 20px;
  margin-left: 8%;
  text-align: start;
}
.body-flex > div {
  width: 100%;
}
.body-flex > div > input {
  width: 80%;
  float: right;
  margin-right: 8%;
  border: 1px solid rgb(204 199 199);
  border-radius: 5px;
  background-color: #f2f2f2;
  text-align: center;
}
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
  justify-content: center;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
  justify-content: center;
  display: flex;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

.btn-c {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 50%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn-c:hover {
  background-color: #45a049;
}

a {
  color: #2196f3;
}

hr {
  border: 1px solid lightgrey;
}
/*
span.price {
  float: right;
  color: grey;
}
*/
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}

/*           CARD                       */

.wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.nav-links-con {
  height: 100%;
  width: 100%;
  background: #3498db;
}

.scene {
  width: 80%;
  height: 650px;
  margin: 0 5px;
  perspective: 600px;
  border: 2px solid rgb(194, 201, 200);
  border-radius: 3px;
}

@media screen and (max-width: 500px) {
  .scene {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
}

.card {
  width: 100%;
  height: 630px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;
}
.nav-button {
  height: 40px;
  margin: 0px 3px 3px 3px;
  transform: skewX(-12deg);
  background-color: #797979;
  color: whitesmoke;
  font-size: 14px;
  font-weight: 1.9em;
}

.card.isflipped {
  transform: rotateY(180deg);
}
button {
  padding: 10px;
  height: 60px;
  width: 80px;
  background-color: navajowhite;
  cursor: pointer;
}
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-face > h3 {
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.125rem;
  letter-spacing: normal;
  margin-top: 5px;
  margin-bottom: 20px;
}

.card-face-front {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.card-buttons-con {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /*  height: 60px;*/
}

.card-face-back {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: rotateY(180deg);
}
.pay-cont {
  display: flex;
  justify-content: center;
}
.snackbar {
  visibility: hidden;

  background-color: #f33232;
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
