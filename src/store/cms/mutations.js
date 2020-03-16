let mutations = {
  setPrismicRef(state, data) {
    state.prismicMasterRef = data
  },
  
  setHeader(state, data) {
    state.header = data
  }
}

export default mutations