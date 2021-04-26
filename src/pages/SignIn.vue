<template>
  <div class="background">
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span></span>
    <span></span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span>OriginalZar</span>
    <span></span>
    <span></span>
    <span></span>

    <div class="form-control">
      <div class="header">
        <img class="top-logo-2" src="../assets/index.svg" />
      </div>
      <div class="header-con">
        <h6>Sign In Using</h6>
        <q-separator
          class="q-mb-md q-mt-lg"
          color="white"
          size="0.1rem"
          inset
          style="width: 80%;"
        />
      </div>
      <div class="content">
        <a href="#" class="fb btn">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
          <div class="btn-text">Facebook</div>
        </a>
        <a href="https://3f5d9cba376a.ngrok.io/connect/twitter" class="twitter btn">
          <font-awesome-icon :icon="['fab', 'twitter-square']" />
          <div class="btn-text"> Twitter</div>
        </a>
        <a href="http://localhost:1337/connect/google" class="google btn">
          <font-awesome-icon :icon="['fab', 'google']" />
          <div class="btn-text">Google</div>
        </a>
      </div>
      <!--  <div class="header-content">
          <a
            href="https://7b82f34e55f8.ngrok.io/connect/facebook"
            class="btn btn-facebook"
            ><i class="fa fa-facebook"></i> Facebook</a
          >
          <a href="#" class="btn btn-twitter"
            ><i class="fa fa-twitter"></i> Twitter</a
          >
          <a
            href="http://localhost:1337/connect/google"
            class="btn btn-google-plus"
            ><i class="fa fa-google-plus"></i> Google</a
          >
        </div>  -->
    </div>
  </div>

</template>

<script>
//import Strapi from 'strapi-sdk-javascript/build/main'
import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:1337";
//const strapi = new Strapi(apiUrl)
//import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },

  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        //     const response = await strapi.login(this.email, this.password)
        const { data } = await axios.post(`${apiUrl}/auth/local`, {
          identifier: this.email,
          password: this.password,
        });

        this.loading = false;
        this.$store.commit("setUser", data);
        //   this.setUser(data.user)
        this.$router.go(-1);
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.small-container {
  display: flex;
  justify-content: center;
}

$color: #478d72;

h1,
input::-webkit-input-placeholder,
button {
  font-family: "roboto", sans-serif;
  transition: all 0.3s ease-in-out;
}
.header {
  height: 130px;
  width: 100%;
  font-size: 18px;
  color: white;
  line-height: 150%;
  margin-top: 0;

  border-radius: 3px 3px 0 0;

  padding-top: 10px;
}
.header-con {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-end;
}
.header-content {
  display: flex;
  justify-content: center;
}

h6 {
  font-size: 27px;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
  margin: 2px;
  color: whitesmoke;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/********************
GENERIC BUTTON STYLES
********************/
/* style inputs and link buttons */

.btn {
  width: 80%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 15px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}

.btn:hover {
  opacity: 1;
}

/* add appropriate colors to fb, twitter and google buttons */
.fb {
  background-color: #3b5998;
  color: white;
}

.twitter {
  background-color: #55acee;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}


@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.svg-inline--fa.fa-w-14,
.svg-inline--fa.fa-w-16 {
  margin-right: 10px;
  width: 9%;
  font-size: 23px;
}

$particleSize: 0;
$animationDuration: 10s;
$amount: 20;
.background span {
  width: $particleSize;
  height: $particleSize;
  border-radius: $particleSize;
  backface-visibility: hidden;
  position: absolute;
  z-index: 1;
  animation-name: move;
  animation-duration: $animationDuration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  $colors: (#b194e2, #e45a84, #69d2f1);
  @for $i from 1 through $amount {
    &:nth-child(#{$i}) {
      color: nth($colors, random(length($colors)));
      top: random(70) * 1%;
      left: random(80) * 1%;
      animation-duration: (random($animationDuration * 7) / 7) * 1s + 07s;
      animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
      transform-origin: (random(09) - 09) * 11px (random(09) - 09) * 11px;
      $blurRadius: (random() + 0.5) * $particleSize * 0.5;
      $x: if(random() > 0.5, -1, 1);
      box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
    }
  }
}

.form-control {
  position: relative;
  z-index: 10;
  width: 260px;
  margin: auto;
  background: #424242;
  border-radius: 4px;
}
.top-logo-2 {
  width: 90px;
  position: relative;
  margin: auto;
  left: 33%;
}
.background {
  width: 100%;
  height: 600px;
  background: #383333;
  padding-top: 50px;
  overflow: hidden;
}

.btn-text {
  display: inline-block;
  text-align: center;
  margin-left: 40px;
}

@media only screen and (min-width: 441px) {
$particleSize: 0;
$animationDuration: 10s;
$amount: 20;
.background span {
  width: $particleSize;
  height: $particleSize;
  border-radius: $particleSize;
  backface-visibility: hidden;
  position: absolute;
  z-index: 1;
  animation-name: move;
  animation-duration: $animationDuration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  $colors: (#b194e2, #e45a84, #69d2f1);
  @for $i from 1 through $amount {
    &:nth-child(#{$i}) {
      color: nth($colors, random(length($colors)));
      top: random(70) * 1%;
      left: random(80) * 1%;
      animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s;
      animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
      transform-origin: (random(15) - 15) * 11px (random(15) - 15) * 11px;
      $blurRadius: (random() + 0.5) * $particleSize * 0.5;
      $x: if(random() > 0.5, -1, 1);
      box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
    }
  }
}


.form-control {

  width: 350px;

}
.top-logo-2 {
  width: 105px;

}

.background {
  width: 100%;
  height: 800px;

}

.btn-text {
  display: inline-block;
  text-align: center;
  margin-left: 70px;
}
}

</style>
