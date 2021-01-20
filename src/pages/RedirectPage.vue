<template>
  <div class="cont"></div>
</template>

<script>
const apiUrl = process.env.API_URL || "http://localhost:1337";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  async created() {
    try {
      this.handleSubmit();
    } catch (err) {
      //  this.fetchMenData();
      // this.fetchKidsData();
      this.error = err.message;
    }
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      let provider = this.$route.path.split("/")[2]; 
      axios
        .get(`${apiUrl}/auth/${provider}/callback?access_token=${this.$route.query.access_token}`, {})
        .then((response) => {
          // Handle success.
          
          this.$store.commit("setUser", response.data.user);
          this.loading = false;
          this.$router.go(-2);

       //   console.log(response);
           console.log(this.$route.path.split("/")[2]);
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
        })
        .catch((error) => {
          // Handle error.
          console.log(this.$route.path.split("/")[2]);
          this.loading = false;
          console.log("couldn't get access token because :", error.response);
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
  },
  computed: {
    currentRouteName() {
        console.log(this.$route.name);
        return this.$route.name;
    }
}
};
</script>

<style lang="css" scoped>
.cont {
  height: 700px;
  width: 500px;
  background: crimson;
}
</style>
