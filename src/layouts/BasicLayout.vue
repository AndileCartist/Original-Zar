<template>
  <q-layout view="hHh LpR fff">
    <q-header
      transition="fade"
      animated
      reveal
      elevated
      @reveal="handleReveal"
      class="bg-pink-10 q-pa-xs text-white animate"
      :class="isRevealed ? 'revealed' : 'not-revealed'"
      height-hint="98"
    >
      <q-toolbar class="vertical-middle">
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="lt-md"
          @click="left = !left"
        />

        <q-toolbar-title
          class="gt-sm"
          style="min-height: 150px; margin-left: 30px;"
        >
          <q-avatar style="min-height: inherit;font-size: 150px;">
            <router-link class="top-logo " :to="{ name: 'home' }" tag="a">
              <img class="top-logo " src="../assets/index.svg" />
            </router-link>
          </q-avatar>
        </q-toolbar-title>

        <div class="lt-md" style="width: 100%;">
          <q-responsive
            :ratio="16 / 9"
            style="max-height: 150px; margin-left: 35%;
    margin-top: 5%;"
          >
            <router-link class="top-logo-2" :to="{ name: 'home' }" tag="a">
              <img class="top-logo-2" src="../assets/index.svg" />
            </router-link>
          </q-responsive>
        </div>

        <q-space />
        <div style="min-width: 300px;" class="gt-sm">
          <q-input
            dark
            placeholder="Search..."
            borderless
            v-model="search"
            color="grey-1"
            type="search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <q-space />
        <div class=" q-gutter-md gt-sm">
          <div v-if="userData === null">
            <router-link :to="{ name: 'signin' }" tag="a" class="sign-in-btn">
            <q-btn outline class="grey-1 q-pa-xs" label=" Sign In" />
          </router-link>

            <router-link :to="{ name: 'signup' }" tag="a" class="sign-in-btn">
            <q-btn outline class="grey-1 q-pa-xs q-ml-md" label="Sign Up" />
          </router-link>
          </div>

          <div  v-if="userData !== null">
            <h5 class="user-name">{{ userName }}</h5>
            <q-btn outline @click="logout" class="grey-1 q-pa-xs q-mr-md" label="Log Out" />
          </div>

         
        </div>
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="lt-md"
          @click="right = !right"
        />
      </q-toolbar>

      <q-tabs
        class="gt-sm "
        v-model="tab"
        align="justify"
        narrow-indicator
        :style="{ color: 'whitesmoke' }"
      >
        <q-tab name="women" label="WOMEN" @click="toggle('women')" />
        <q-tab name="men" label="MEN" @click="toggle('men')" />
        <q-tab name="kids" label="KIDS" @click="toggle('kids')" />
        <q-tab name="brands" label="BRANDS" @click="toggle('brands')" />
        <q-tab name="about" label="ABOUT" @click="toggle('about')" />
      </q-tabs>

      <div class="absolute fill-content">
        <q-tab-panels @click="removeTabPanels()"
          v-model="tab"
          animated
          class="bg-grey-4 text-white text-center"
          v-on:scroll.passive="removeTabPanels"
        >
          <q-tab-panel name="women">
            <div class="wrap">
              <tab-links :links="womenNavLinks" />
              <div
                v-for="(post, index) in women.slice(0, 3)"
                v-bind:item="post"
                v-bind:index="index"
                v-bind:key="post.imagePath"
              >
                <card-component
                  :imagePath="getImage(post.imagePath)"
                  :price="post.price"
                  :productName="post.productName"
                />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="men">
            <div class="wrap">
              <tab-links :links="menNavLinks" />
              <div
                v-for="(post, index) in men.slice(0, 3)"
                v-bind:item="post"
                v-bind:index="index"
                v-bind:key="post.imagePath"
              >
                <card-component
                  :imagePath="getImage(post.imagePath)"
                  :price="post.price"
                  :productName="post.productName"
                />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="kids">
            <div class="wrap">
              <tab-links :links="kidsNavLinks" />
              <div
                v-for="(post, index) in kids.slice(0, 3)"
                v-bind:item="post"
                v-bind:index="index"
                v-bind:key="post.imagePath"
              >
                <card-component
                  :imagePath="getImage(post.imagePath)"
                  :price="post.price"
                  :productName="post.productName"
                />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="brands">
            <div class="wrap">
              <tab-links :links="brandsNavLinks" />
              <div
                v-for="(post, index) in getBestBrands"
                v-bind:item="post"
                v-bind:index="index"
                v-bind:key="post.imagePath"
              >
                <card-component
                  :imagePath="getImage(post.imagePath)"
                  :price="post.price"
                  :productName="post.productName"
                />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="about">
            <div class="wrap">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-header>

    <q-drawer v-model="left" side="left" class="lt-md" overlay elevated>
      <!-- drawer content -->

      <div style="" class="q-ml-sm q-mr-xs">
        <q-input placeholder="Search..." v-model="search" type="search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <q-expansion-item expand-separator label="Women">
        <q-card>
          <q-card-section>
            <tab-links :links="womenNavLinks" />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item expand-separator label="Men">
        <q-card>
          <q-card-section>
            <tab-links :links="menNavLinks" />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item expand-separator label="Kids">
        <q-card>
          <q-card-section>
            <tab-links :links="kidsNavLinks" />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item expand-separator label="Brands">
        <q-card>
          <q-card-section>
            <tab-links :links="brandsNavLinks" />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <router-link
        :to="{ name: 'signin' }"
        tag="a"
        style="margin-left: 15px;font-size: 16px;"
      >
        Account
      </router-link>
    </q-drawer>

    <q-drawer v-model="right" side="right" class="lt-md" overlay elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer  class="bg-grey-8 text-white">
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>About OriginalZar</h3>

          <p>
            With a dream to bring all major local and international fashion
            brands to Africa, OriginalZar was born. Our pride is your joy in
            physically expressing your fashion senses.
          </p>
          <div>
            <i class="fa fa-phone"></i>
            <p>031 524 5659</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">contact@Originalzar.com</a>
            </p>
          </div>
          <div class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
          </div>
          <!--      <p class="footer-links">
            <a href="#">Home</a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          <p/>
-->
          <p class="footer-company-name">Originalzar &copy; 2021</p>
        </div>

        <div class="footer-center">
          <h3>Newsletter</h3>
          <p>
            BE IN THE KNOW, Promotions, new products and sales. Directly to your
            inbox.
          </p>
          <div style="height: 46px; width: 240px; margin: auto;">
            <q-input
              class="q-mt-lg"
              dark
              color="grey-1"
              outlined
              v-model="newsletter"
              placeholder="Enter your email address"
            />
          </div>
          <div class="wrapper">
            <a class="newsbtn" href="#"><span>SUBSCRIBE</span></a>
          </div>
          <!--         <div>
            <i class="fa fa-map-marker"></i>
            <p><span>21 Revolution Street</span> Delhi, India</p>
          </div>
-->
        </div>

        <div class="footer-right">
          <h3>Policies</h3>
          <p class="footer-company-about">
            <span></span>
          </p>
          <p>Privacy Policy</p>
          <p>Terms &amp; Conditions.</p>
          <p>Returns &amp; Refunds</p>
          <p>Shipping &amp; Delivery</p>
        </div>
      </footer>
    </q-footer>
  </q-layout>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import TabLinks from "../components/TabLinks.vue";
import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:1337";
import { mapGetters, mapMutations } from 'vuex'


export default {
  components: {
    CardComponent,
    TabLinks,
  },

  data() {
    return {
      loading: false,
      tab: "",
      error: "",
      left: false,
      right: false,
      search: "",
      newsletter: "",
      women: [],
      kids: [],
      men: [],
      brands: [],
      signedIn: false,
      isRevealed: true,
      womenNavLinks: [
        { dest: "/women/all", name: "ALL" },
        { dest: "/women/dresses", name: "Dresses" },
        { dest: "/women/footware", name: "Footware" },
        { dest: "/women/formal-wear", name: "Formal Wear" },
        { dest: "/women/jackets", name: "Jackets" },
        { dest: "/women/jeans", name: "Jeans" },
        { dest: "/women/skirts", name: "Skirts" },
        { dest: "/women/tops", name: "Tops" },
      ],
      menNavLinks: [
        { dest: "/men/all", name: "ALL" },
        { dest: "/men/footware", name: "Footware" },
        { dest: "/men/formal-wear", name: "Formal Wear" },
        { dest: "/men/jackets", name: "Jackets" },
        { dest: "/men/jeans", name: "Jeans" },
        { dest: "/men/tops", name: "Tops" },
      ],
      kidsNavLinks: [
        { dest: "/kids/all", name: "ALL" },
        { dest: "/kids/dresses", name: "Dresses" },
        { dest: "/kids/footwear", name: "Footware" },
        { dest: "/kids/formal-wear", name: "Formal Wear" },
        { dest: "/kids/jackets", name: "Jackets" },
        { dest: "/kids/jeans", name: "Jeans" },
        { dest: "/kids/skirts", name: "Skirts" },
        { dest: "/kids/tops", name: "Tops" },
      ],
      brandsNavLinks: [
        { dest: "/brands/all", name: "ALL" },
        { dest: "/brands/dresses", name: "Dresses" },
        { dest: "/brands/footwear", name: "Footware" },
        { dest: "/brands/formal-wear", name: "Formal Wear" },
        { dest: "/brands/jackets", name: "Jackets" },
        { dest: "/brands/jeans", name: "Jeans" },
        { dest: "/brands/skirts", name: "Skirts" },
        { dest: "/brands/tops", name: "Tops" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'userData',
      'userName'
    ]),

    getBestBrands() {
      let men = this.men.reduce(
        (acc, shot) => (acc.price > shot.price ? acc : shot),
        0
      );
      let kids = this.kids.reduce(
        (acc, shot) => (acc.price > shot.price ? acc : shot),
        0
      );
      let women = this.women.reduce(
        (acc, shot) => (acc.price > shot.price ? acc : shot),
        0
      );
      let brands = [];
      return brands.concat(men, kids, women);
    },
  },
  beforeCreate() {},

  async created() {
    try {
      this.fetchWomenData();
      // this.women = await this.getFemaleImages();
      this.fetchMenData();
      //  this.men = await this.getImage(this.men);
      this.fetchKidsData();
      window.addEventListener("scroll", this.removeTabPanels);
      //   this.kids =  await this.getImage(this.kids);
    } catch (err) {
      //  this.fetchMenData();
      // this.fetchKidsData();
      this.error = err.message;
    }
  },

  methods: {
    ...mapMutations(['logout']),

    handleReveal(isRevealed) {
      this.isRevealed = isRevealed;
      //do something else if you want
    },
    getImage(imagePath) {
      // let imageurl = imagePath.replace(/[a-z]+([0-9]?)+.jpg/i, "");
      //   let image = imagePath.replace(/[a-z]+\//gi, "");
      // console.log(post.imagePath);
      return require(`@/assets/${imagePath}`);
    },

    async fetchWomenData() {
      try {
        this.loading = true;
        // this.$store.commit("emptyListWomen");
        //     const response = await strapi.login(this.email, this.password)
        const { data } = await axios.get(`${apiUrl}/women`);
        console.log(data);

        this.women = data;
        data.forEach((woman) => {
          return this.$store.commit("addWomenClothes", { ...woman });
        });
        //   this.$store.commit('add', data.user)
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    async fetchMenData() {
      try {
        this.loading = true;
        this.$store.commit("emptyListMen");
        //     const response = await strapi.login(this.email, this.password)
        const { data } = await axios.get(`${apiUrl}/men`);
        console.log(data);
        data.forEach((man) => {
          return this.$store.commit("addMenClothes", { ...man });
        });
        //   this.$store.commit('add', data.user)
        this.men = data;
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    async fetchKidsData() {
      try {
        this.loading = true;
        this.$store.commit("emptyListKids");
        //     const response = await strapi.login(this.email, this.password)
        const { data } = await axios.get(`${apiUrl}/kids`);
        console.log(data);
        data.forEach((kid) => {
          return this.$store.commit("addKidsClothes", { ...kid });
        });
        //   this.$store.commit('add', data.user)
        this.loading = false;
        this.kids = data;
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },

    toggle(button) {
      if (button == this.tab) {
        return (this.tab = "");
      }
    },
    //remove tab panels on scroll
    removeTabPanels() {
      return (this.tab = "");
    },
  },
};
</script>

<style>
.center {
  justify-content: center;
}
.fill-content {
  left: -100%;
  right: -100%;
  top: 100%;
}
.top-logo {
  width: 133px;
}
.top-logo-2 {
  width: 105px;
  position: relative;
  left: 2%;
}

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
  overflow: hidden;
}
.animate {
  transition: all 0.3s ease-in-out;
}
.revealed {
  /* background-color: rgba(255, 255, 255, 0.94);
 */
  transition: height 0.9s ease-in-out;
}

.not-revealed {
  background-color: rgba(255, 255, 255, 0.01);
  transition: all 0.9s ease-in;
}

.footer-distributed {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;

  padding: 35px 50px;
  margin-top: 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

.footer-distributed .footer-left {
  width: 40%;
}

.footer-distributed h3 {
  color: #ffffff;
  font: normal 30px "Cookie", cursive;
  margin: 0 0 5px 0;
}

.footer-left p {
  line-height: 20px;
  color: #c2d6d6;
  font-size: 14px;
  font-weight: normal;
}
.footer-center p {
  line-height: 20px;
  color: #c2d6d6;
  font-size: 14px;
  font-weight: normal;
}

.footer-distributed h3 span {
  color: #5383d3;
}

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-center {
  width: 35%;
  margin: 0 15px;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-left i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-left p a {
  color: #5383d3;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}

.wrapper {
  position: relative;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 19;
  margin-top: 50px;
}

.newsbtn {
  display: block;
  width: 130px;
  height: 35px;
  line-height: 40px;
  font-size: 16px;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  background: #808080;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
  z-index: 19;
  margin: auto;
}

.newsbtn span {
  position: relative;
  z-index: 20;
}

.newsbtn:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgb(136, 14, 79);
  transition: all 0.45s;
}

.newsbtn:hover {
  color: #fff;
}

.newsbtn:hover:after {
  width: 100%;
}

.q-field__control {
  height: 46px !important;
  width: 300px;
}
.sign-in-btn {
  margin-top: 16px;
  text-decoration: none;
  color: inherit;
}

.user-name {
  margin-top: 0px;
    margin-bottom: 0px;
    display: inline-block;
    margin-right: 15px;
    font-style: italic;
     font-family: 'Playfair Display', serif;
}
</style>
