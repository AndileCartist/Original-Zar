<template>
  <section>
    <div class="small-container cont">
      <form autocomplete="off" @submit.stop.prevent="handleSubmit">
        <h1>Material Design Text Input With No Extra Markup</h1>
        <input
          id="email"
          v-model="email"
          type="email"
          autofocus="true"
          placeholder="Enter your email"
          required
        />
        <input
          id="password"
          v-model="password"
          label="password"
          type="password"
          class="form-control"
          autofocus="true"
          placeholder="Enter your password"
          required
        />

        <button
          :disabled="loading"
          type="submit"
          class="btn btn-primary btn-block mt-3"
        >
          Submit
        </button>
        <p class="text-center text-white mt-3 q-mt-md">
          No account yet
          <router-link :to="{ name: 'signup' }" tag="a">
            Register
          </router-link>
        </p>
      </form>
    </div>
  </section>
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
        this.loading = true;
      axios
        .post(`${apiUrl}/auth/reset-password`, {
          code: "privateCode", // code contained in the reset link of step 3.
          password: "userNewPassword",
          passwordConfirmation: "userNewPassword",
        })
        .then((response) => {
            this.loading = false;
            this.$store.commit("setUser", response.data.user);
          console.log("Your user's password has been reset.");
          this.$router.go(-1);
        })
        .catch((error) => {
            this.loading = false;
          console.log("An error occurred:", error.response);
        });

    },
  },
};
</script>
<style lang="scss" scoped>
.small-container {
  display: flex;
  justify-content: center;
}

$color: rgb(136, 14, 79);

h1,
input::-webkit-input-placeholder,
button {
  font-family: "roboto", sans-serif;
  transition: all 0.3s ease-in-out;
}

h1 {
  height: 100px;
  width: 100%;
  font-size: 18px;
  background: darken($color, 4%);
  color: white;
  line-height: 150%;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
  margin-top: 0;
}

form {
  box-sizing: border-box;
  width: 320px;
  margin: 100px auto 0;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.77);
  padding-bottom: 40px;
  border-radius: 3px;
  height: 400px;
  h1 {
    box-sizing: border-box;
    padding: 20px;
  }
}

input {
  margin: 40px 25px;
  width: 87%;
  display: block;
  border: none;
  padding: 10px 0;
  border-bottom: solid 1px $color;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, $color 4%);
  background-position: -278px 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: whitesmoke;
  &:focus,
  &:valid {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.1);
      font-size: 11px;
      transform: translateY(-20px);
      visibility: visible !important;
    }
  }
}

button {
  border: none;
  background: $color;
  cursor: pointer;
  border-radius: 3px;
  padding: 6px;
  width: 200px;
  color: white;
  margin-left: 58px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
  }
}

.cont {
  position: relative;
  height: 100%;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg");
  /* background: #6190E8;  // fallback for old browsers 
background: -webkit-linear-gradient(to right, #A7BFE8, #6190E8);//   Chrome 10-25, Safari 5.1-6 
background: linear-gradient(to right, #A7BFE8, #6190E8); // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ 
*/
  background-size: cover;
  overflow: auto;
  height: 700px;
}
</style>
