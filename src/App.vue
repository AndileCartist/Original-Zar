<template>
  <div>
    <BasicLayout />
  <!--  <flutterwave-pay-button
      :tx_ref="generateReference()"
      :amount="20"
      country="ZA"
      currency="ZAR"
      payment_options="card,ussd"
      redirect_url="http://localhost:8080/checkout"
      class="class-name"
      style=""
      :meta="{ counsumer_id: '74198', consumer_mac: 'kjsjk8ss7dd' }"
      :customer="{
        name: 'Demo Customer  Name',
        email: 'customer@mail.com',
        phone_number: '0818450****', 
      }"
      :customizations="{
        title: 'Customization Title',
        description: 'Customization Description',
        logo: 'https://flutterwave.com/images/logo-colored.svg',
      }"
      :callback="makePaymentCallback"
      :onclose="closedPaymentModal"
    >
      Click To Pay
    </flutterwave-pay-button> -->
  </div>
</template>

<script>
import BasicLayout from "./layouts/BasicLayout.vue";
//import Cloudinary, { CldImage } from "cloudinary-vue";

export default {
  name: "LayoutDefault",

  components: {
    BasicLayout,
  },

  data() {
    return {};
  },
  methods: {
    makePaymentCallback(response) {
      console.log("Payment callback", response);
    },
    closedPaymentModal() {
      console.log("payment modal is closed");
    },
    generateReference() {
        let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
</style>
