<template>
<div  class="small-container">
  <img src="https://assets-ouch.icons8.com/preview/125/6414b067-ba59-46ef-8693-4e190aa466c7.png" class="uk-align-center" height="250" width="250" alt="" /><br>

  <div>

    <table >
        <thead>
            <tr>
                <th>Name</th>
                <th>Price (unit)</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr  :key="dish.index" v-for="dish in selectedDishe">
                <td >{{ dish.name }}</td>
                <td >{{ dish.price }}€</td>
                <td >{{ dish.quantity }}</td>
                <td>
                  <a ><span  @click="addToCart(dish)">+</span></a>
                  <a><span  @click="removeFromCart(dish)">-</span></a>
                </td>

            </tr>
        </tbody>
    </table>

    <button  name="button">Process to checkout ({{ price }}€)</button>
  </div>

</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

    data() {
        return {
            selectedDishe: [

                {name: "food",
                 price: 500,
                 quantity: 5,
                 id: 1   
                },
                {name: "bbsdh",
                 price: 500,
                 quantity: 5,
                 id: 2   
                },
                {name: "asbfjagfjs",
                 price: 500,
                 quantity: 5,   
                 id: 3  
                },
            ],
         
        }
    },
  methods:{
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    })
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    selectedDishes() {
      return this.$store.getters['cart/items']
    },
    price() {
      return this.$store.getters['cart/price']
    },
    numberOfItems() {
      return this.$store.getters['cart/numberOfItems']
    }
  }
}              
</script>
<style lang="css" scoped>
    .small-container {
  display: flex;
   justify-content: center;
}
</style>