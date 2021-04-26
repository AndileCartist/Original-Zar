<template>
  <div>
    <div class="grid-container">
      <div v-for="post in paginatedData" :item="post" :key="post.uni">
        <card-component
          :item="post"
          :price="post.price"
          :productName="post.productName"
        />
      </div>
    </div>
    <div class="btn-group">
      <button
        :disabled="pageNumber === 0"
        @click="prevPage(), scroll()"
        class="skewed-button"
      >
        Previous
      </button>
      <button
        :disabled="pageNumber >= pageCount - 1"
        @click="nextPage(), scroll()"
        class="skewed-button"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "paginated-list",
  components: {
    CardComponent,
  },
  data() {
    return {
      pageNumber: 0,
    };
  },
  props: {
    listData: {
      type: Array,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 12,
    },
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    scroll() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  computed: {
    pageCount() {
      let l = this.listData.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.listData.slice(start, end);
    },
  },
};
</script>

<style lang="css" scoped>
.grid-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 600px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 316px;
    justify-items: center;
  }
}
@media only screen and (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 1440px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
}

.grid-item {
  border: 1px solid black;
  padding: 5px;
  /* height: 200px;     */
}
.skewed-button {
  margin: 10px;
  cursor: pointer;
  background: transparent;
  border: 0;
  height: 40px;
  padding: 0 17px;
  position: relative;
  color: white;
  font-weight: bold;
  width: 160px;
}
.skewed-button:after {
  z-index: -1;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: skewX(-15deg);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: rgb(103 103 103);
  background: linear-gradient(
    to bottom,
    rgb(117, 116, 117) 0%,
    rgb(103, 103, 103) 100%
  );
}
.skewed-button:hover:after {
  background: linear-gradient(
    to bottom,
    rgb(129, 128, 129) 100%,
    rgb(124, 124, 124) 0%
  );
}
.skewed-button:active,
.skewed-button:focus {
  outline: none;
}
.btn-group {
  display: flex;
  justify-content: center;
}
</style>
