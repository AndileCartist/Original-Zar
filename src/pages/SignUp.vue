<template>
  <section>
    <div class="small-container cont">
      <!--    <a href="https://f7072e8349e9.ngrok.io/connect/github">
    <button style="width: 150px;">Connect to git</button>
  </a>    -->
      <form autocomplete="off" @submit.stop.prevent="handleSubmit">
        <div class="header">
          <div class="header-con">
            <h6>Sign up using</h6>
            <q-separator class="q-mb-md" color="white" size="0.1rem" inset />
            <div class="header-content">
              <a href="https://7b82f34e55f8.ngrok.io/connect/facebook" class="btn btn-facebook"
                ><i class="fa fa-facebook"></i> Facebook</a
              >
              <a href="#" class="btn btn-twitter"
                ><i class="fa fa-twitter"></i> Twitter</a
              >
              <a href="http://localhost:1337/connect/google" class="btn btn-google-plus"
                ><i class="fa fa-google-plus"></i> Google</a
              >
            </div>
          </div>
        </div>

        <div class="form-group">
          <input
            id="username"
            v-model="username"
            type="text"
            autofocus="true"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="form-group">
          <input
            id="email"
            v-model="email"
            type="email"
            autofocus="true"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
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
         
        </div>
        <button
          :disabled="loading"
          type="submit"
          class=""
        >
          Submit
        </button>
        <p class="text-center text-white mt-3 q-mt-md">
          Already have an account?
          <router-link :to="{ name: 'signin' }">
            Login
          </router-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
const apiUrl = process.env.API_URL || "http://localhost:1337";
import axios from "axios";

import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      loading: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      axios
        .post(`${apiUrl}/auth/local/register`, {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Handle success.
          this.loading = false;
          this.$store.commit("setUser", response.data.user);
          this.$router.go(-1);
          console.log("Well done!");
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
        })
        .catch((error) => {
          // Handle error.
          this.loading = false;
          console.log("An error occurred:", error.response);
        });

      /*
      try {
        this.loading = true
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.push('/')
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }*/
    },
    ...mapMutations({
      setUser: "auth/setUser",
    }),
  },
};
</script>
<style lang="scss" scoped>
.small-container {
  display: flex;
  justify-content: center;
}

$color: rgb(136, 14, 79);

.header,
input::-webkit-input-placeholder,
button {
  font-family: "roboto", sans-serif;
  transition: all 0.3s ease-in-out;
}

.header {
  height: 150px;
  width: 100%;
  font-size: 18px;
  background: darken($color, 4%);
  color: white;
  line-height: 150%;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
  margin-top: 0;
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
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
  margin: 2px;
}
form {
  box-sizing: border-box;
  width: 320px;
  margin: 100px auto 0;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.77);
  padding-bottom: 40px;
  border-radius: 3px;
  height: 470px;
  .header {
    box-sizing: border-box;
    padding: 5px;
  }
}

input {
  margin: 25px 25px;
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

a {
  text-decoration: none;
}

/********************
GENERIC BUTTON STYLES
********************/
.btn {
  font-size: 14px;
  white-space: nowrap;
  width: 32%;
  padding: 0.5em 1.5em;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  line-height: 18px;
  display: inline-block;
  zoom: 1;
  color: #fff;
  text-align: center;
  position: relative;
  -webkit-transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
    margin: auto;
    border-radius: 3.5px;
}

/*FACEBOOK*/
.btn.btn-facebook {
  background-color: #2479b6;
  border-color: #2479b6;
  -webkit-box-shadow: 0 3px 0 #1c6394;
  box-shadow: 0 3px 0 #1c6394;
  padding-left: 5px;
}
.btn.btn-facebook:active {
  top: 3px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*TWITTER*/
.btn.btn-twitter {
  background-color: #2a91db;
  border-color: #2a91db;
  -webkit-box-shadow: 0 3px 0 #1d6ea7;
  box-shadow: 0 3px 0 #1d6ea7;
}
.btn.btn-twitter:active {
  top: 3px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*GOOGLE PLUS*/
.btn.btn-google-plus {
  background-color: #be3b26;
  border-color: #be3b26;
  -webkit-box-shadow: 0 3px 0 #842719;
  box-shadow: 0 3px 0 #842719;
}
.btn.btn-google-plus:active {
  top: 3px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

/**********
Icon styles
**********/
.btn i {
  padding-right: 0.4em;
  line-height: 22px;
}
.icon-only {
  padding: 1em;
}
.icon-only i {
  padding-right: 0;
  font-size: 22px;
  line-height: 22px;
}
</style>
