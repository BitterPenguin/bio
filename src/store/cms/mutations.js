let mutations = {
  setPrismicRef(state, data) {
    state.prismicMasterRef = data
  },
  
  setHeader(state, data) {
    state.header = data
  },

  setHeaderColor(state, data) {
    state.headerColor = data
  },
  
  setModules(state, data) {
    state.modules = data
  }
}

export default mutations