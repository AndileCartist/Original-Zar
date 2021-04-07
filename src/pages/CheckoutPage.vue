<template>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form action="/action_page.php">
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
                          <input required type="text" name="firstname" />
                        </div>
                      </div>

                      <div class="body-flex">
                        <label for="adr">Billing Address</label>
                        <div>
                          <input type="text" name="address" />
                        </div>
                      </div>
                      <div class="body-flex" style="margin-top: 5px;">
                        <div style="width: 55%;margin-left: 8%;"></div>
                        <p class="input-hint">street address</p>
                      </div>

                      <div class="body-flex">
                        <label for="adr"></label>
                        <div>
                          <input type="text" name="address" />
                        </div>
                      </div>
                      <div class="body-flex" style="margin-top: 5px;">
                        <div style="width: 55%;margin-left: 8%;"></div>
                        <p class="input-hint">2nd street address(optionally)</p>
                      </div>
                      <div class="address-grid">
                        <div></div>
                        <input type="text" />
                        <label for="size">
                          <select style="font-size: 18px;">
                            <option>select</option>
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
                        <input type="text" />
                        <label for="size">
                          <select style="font-size: 18px;">
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
                        <input type="text" name="firstname" />
                      </div>
                    </div>

                    <div class="body-flex">
                      <label for="adr">Shipping Address</label>
                      <div>
                        <input type="text" name="address" />
                      </div>
                    </div>
                    <div class="body-flex" style="margin-top: 5px;">
                      <div style="width: 55%;margin-left: 8%;"></div>
                      <p class="input-hint">street address</p>
                    </div>

                    <div class="body-flex">
                      <label for="adr"></label>
                      <div>
                        <input type="text" name="address" />
                      </div>
                    </div>
                    <div class="body-flex" style="margin-top: 5px;">
                      <div style="width: 55%;margin-left: 8%;"></div>
                      <p class="input-hint">2nd street address(optionally)</p>
                    </div>
                    <div class="address-grid">
                      <div></div>
                      <input type="text" />
                      <label for="size">
                        <select style="font-size: 18px;">
                          <option>select</option>
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
                      <input type="text" />
                      <label for="size">
                        <select style="font-size: 18px;">
                          <option>South Africa</option>
                        </select>
                      </label>
                      <div></div>
                      <p>code</p>
                      <p>country</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--     <h3>Billing Address</h3>
              <label for="fname"><i class="fa fa-user"></i> Full Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="John M. Doe"
              />
              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@example.com"
              />
              <label for="adr"
                ><i class="fa fa-address-card-o"></i> Address</label
              >
              <input
                type="text"
                id="adr"
                name="address"
                placeholder="542 W. 15th Street"
              />
              <label for="city"><i class="fa fa-institution"></i> City</label>
              <input type="text" id="city" name="city" placeholder="New York" />

              <div class="row">
                <div class="col-50">
                  <label for="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY" />
                </div>
                <div class="col-50">
                  <label for="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001" />
                </div>
              </div>  -->
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
            <flutterwave-pay-button
              :tx_ref="reference"
              :amount="20"
              currency="ZAR"
              payment_options="card,ussd"
              redirect_url=""
              class="class-name"
              style=""
              :meta="{ counsumer_id: '7898', consumer_mac: 'kjs9s8ss7dd' }"
              :customer="{
                name: 'Demo Customer  Name',
                email: 'customer@mail.com',
                phone_number: '0818450****',
              }"
              :customizations="{
                title: 'Customization Title',
                description: 'Customization Description',
              }"
              :callback="makePaymentCallback"
              :onclose="closedPaymentModal"
            >
              Click To Pay
            </flutterwave-pay-button>
           
          </div>
        </form>
      </div>
    </div>
    <div class="col-25">
      <div class="container">
        <h4>
          Cart Summary
        </h4>
        <p><a href="#">Product 1</a> <span class="price">$15</span></p>
        <p><a href="#">Product 2</a> <span class="price">$5</span></p>
        <p><a href="#">Product 3</a> <span class="price">$8</span></p>
        <p><a href="#">Product 4</a> <span class="price">$2</span></p>
        <hr />
        <p>
          Total <span class="price" style="color:black"><b>$30</b></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//import Flutterwave from "../components/FlutterwaveModal.vue";
// const flwKey = process.env.payment.VUE_APP_FLUTTERWAVE_TEST_KEY;
//import axios from "axios";
//const apiUrl = process.env.API_URL || "http://localhost:1337";
import { mapMutations, mapGetters } from "vuex";
//import paystack from "./";

export default {
  name: "Checkout-Page",
  components: {
    //  paystack,
  },
  data() {
    return {
      amount: 10 * 100,
      full_name: "andile mkhize",
      email: "andilemkhizekhabazela@gmail.com",
      PUBLIC_KEY: "FLWPUBK_TEST-22a4bcfebeaf537a6156354940b6a40a-X",
      checked: true,
      /*  isProduction: false,
      flwKey: "FLWPUBK_TEST-22a4bcfebeaf537a6156354940b6a40a-X",
      amount: 120,
      currency: "ZAR",
      country: "SA",
      customer: {
        name: "Andile mkhize",
        email: "andilemkeys@gmail.com",
      },
      customizations: {
        title: "OriginalZar",
        description: "Payment for car service",
      },
      paymentMethod: "",
      callback: function(data) {
        console.log(data);
      },
      close: function() {
        console.log("yooh");
      },*/
    };
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
    ...mapGetters(["items", "price", "numberOfItems"]),
  },
  created() {},
  methods: {
     payViaService() {
      this.payWithFlutterwave(this.paymentData) 
    } ,
    ...mapMutations(["add", "remove", "setItems"]),

    makePaymentCallback(response) {
      console.log("Payment callback", response);
    },
    closedPaymentModal() {
      console.log("payment modal is closed");
    },
  },
};
</script>

<style lang="css" scoped>
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
</style>
