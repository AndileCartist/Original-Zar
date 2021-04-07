<template>
  <div class="flw">
    <button class="button" @click="makePayment">Buy Now</button>
  </div>
</template>

<script>
export default {
  name: "FlutterwaveModal",
  
  props: {
    isProduction: {
      type: Boolean,
      required: false,
      default: false, //set to true if you are going live
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    flwKey: {
      type: String,
      required: true,
    },
    callback: {
      type: Function,
      required: true,
      default: () => {
        console.log("Payment made, verify payment");
      },
    },
    
    currency: {
      type: String,
      default: "ZAR",
    },
    country: {
      type: String,
      default: "ZA",
    },
    custom_title: {
      type: String,
      default: "",
    },
    custom_logo: {
      type: String,
      default: "",
    },
    reference: {
      type: String,
      default: "",
    },
    customer: {
      type: Object,
      required: true
    },
    payment_method: {
      type: String,
      default: "card,mobilemoney,ussd",
    },
  },
  methods: {
   /* makePayment() {
      window.FlutterwaveCheckout({
        public_key: this.flwKey,
        tx_ref: this.reference,
        amount: this.amount,
        currency: this.currency,
        payment_options: this.payment_method,
        customer: {
          name: this.name,
          email: this.email,
        },
        callback: (response) => this.callback(response),
        customizations: {
          title: this.custom_title,
          description: "Payment for items in cart",
          logo: this.custom_logo,
        },
      });
    },*/
  },
};
</script>

<style></style>
