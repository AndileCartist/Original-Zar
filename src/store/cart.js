
const state = () => ({
  items: [],
  //cookie: JSON.parse(Cookies.get('cart'))
})

 const mutations = {
  setItems(state, items) {
    state.items = items
    localStorage.setItem("cart", JSON.stringify(state.items));
  },
  add(state, item) {
    const record = state.items.find(i => i.id === item.id)
    if (!record) {
      state.items.push({
        quantity: 1,
        ...item
      })
     
    } else {
      record.quantity++
    }
    localStorage.setItem("cart", JSON.stringify(state.items));
  },
  remove(state, item) {
    const record = state.items.find(i => i.id === item.id)

    if (record.quantity > 1) {
      record.quantity--
    } else {
      const index = state.items.findIndex(i => i.id === item.id)
      state.items.splice(index, 1)
    }
    localStorage.setItem("cart", JSON.stringify(state.items));
  },
  emptyList(state) {
    state.items = []
    localStorage.removeItem("cart", JSON.stringify(state.items));
  }
}

 const getters = {
  items: state => {
    return state.items
  },
  price: state => {
    return state.items.reduce(
      (accumulator, item) => Math.round(((accumulator + (item.price * item.quantity)) + Number.EPSILON) * 100)/100 ,
      0
    )
  },
  numberOfItems: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    )
  }
}

export default {
  state,
  mutations,
  getters
}