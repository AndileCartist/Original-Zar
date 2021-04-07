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

  </div>
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
        .get(
          `${apiUrl}/auth/${provider}/callback?access_token=${this.$route.query.access_token}`,
          {}
        )
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
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  overflow: hidden;
}

.background {
  width: 100vw;
  height: 800px;
  background: #424242;
}

$particleSize: 0vmin;
$animationDuration: 8s;
$amount: 20;
.background span {
  width: $particleSize;
  height: $particleSize;
  border-radius: $particleSize;
  backface-visibility: hidden;
  position: absolute;
  animation-name: move;
  animation-duration: $animationDuration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  $colors: (#b194e2, #e45a84, #bd4545);
  @for $i from 1 through $amount {
    &:nth-child(#{$i}) {
      color: nth($colors, random(length($colors)));
      top: random(70) * 1%;
      left: random(100) * 1%;
      animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s;
      animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
      transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
      $blurRadius: (random() + 0.5) * $particleSize * 0.5;
      $x: if(random() > 0.5, -1, 1);
      box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
    }
  }
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}
</style>
