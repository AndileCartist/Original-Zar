 const state = () => ({
  men: [],
  women: [],
  kids: [],
  brands: []
})

const mutations = {
  addWomenClothes(state, cloth) {
    state.women.push(cloth)
  },
  addMenClothes(state, cloth) {
    state.men.push(cloth)
  },
  addKidsClothes(state, cloth) {
    state.kids.push(cloth)
  },
  addBrandsClothes(state, cloth) {
    state.brands.push(cloth)
  },
  emptyListWomen(state) {
    state.women = []
  },
  emptyListMen(state) {
    state.men = []
  },
  emptyListKids(state) {
    state.kids = []
  },
  emptyListBrands(state) {
    state.brands = []
  }
}

 const getters = {
  menClothes (state) {
    return state.men;
  },
  womenClothes (state) {
    return state.women;
  },
  kidsClothes (state) {
    return state.kids;
  },
  brandsClothes (state) {
    return state.brands;
  }
}

export default {
  state,
  mutations,
  getters
}