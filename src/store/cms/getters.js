let getters = {
  getPrismicRef(state) {
    return state.prismicMasterRef
  },

  primaryNavigation(state) {
    return state.header
  },

  primaryNavigationColor(state) {
    return state.headerColor
  },

  getModules(state) {
    const hero = state.modules.hero
    const body = state.modules.body
    return {hero, body}
  }
}

export default getters