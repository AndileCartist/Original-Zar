 const state = () => ({
  men: [],
  women: [],
  kids: [],
  searchResult: [],
  brands: []
})

const mutations = {
  addWomenClothes(state, cloth) {
    state.women.push(cloth)
  },
  addSearchResults(state, cloth) {
    state.searchResult.push(cloth)
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
  },
  emptySearch(state) {
    state.searchResult = []
  },
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
   let men = state.men.filter(n => n.onSale === true);
   let women = state.women.filter(n => n.onSale === true);
   let kids = state.kids.filter(n => n.onSale === true);
   let brands = [] 
    return brands.concat(men,women, kids);
  },
  search (state) {
    return state.searchResult;
  }
}

export default {
  state,
  mutations,
  getters
}