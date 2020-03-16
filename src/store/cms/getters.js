let getters = {
  getPrismicRef(state) {
    return state.prismicMasterRef
  },

  primaryNavigation(state) {
    return state.header
  }
}

export default getters