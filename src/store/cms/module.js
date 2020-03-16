import Axios from 'axios'

const cms = {
  state: {
    access_token: 'MC5YbTZTS0JFQUFDSUFDSDhZ.77-9FxXvv71f77-977-977-977-9HO-_ve-_vTZGeO-_vWfvv73vv70A77-9Gu-_ve-_ve-_ve-_vSNOMe-_vWvvv70',
    header: [],
    prismicMasterRef: '',
  },
  getters: {
    getPrismicRef(state) {
      return state.prismicMasterRef
    },
  
    primaryNavigation(state) {
      return state.header
    }
  },
  mutations: {
    setPrismicRef(state, data) {
      state.prismicMasterRef = data
    },
    
    setHeader(state, data) {
      state.header = data
    }
  },
  actions: {
    async init(context) {
      const ref = await context.dispatch('getMasterRef')
      context.commit('setPrismicRef', ref)
  
      const nav = await context.dispatch('getNav')
      context.commit('setHeader', nav)
    },
  
  
    async getMasterRef() {
      const url = `https://bitterpenguin.prismic.io/api/v2?access_token=${this.state.cms.access_token}`
      return await Axios.get(url)
                    .then((response) => { return response.data.refs.filter((ref) => ref.id === 'master')[0].ref })
                    .catch(error => console.log(error))
      
    },
  
  
    async getNav() {
      const url = 'https://bitterpenguin.prismic.io/api/v2/documents/search'
      const params = {
        ref: this.state.cms.prismicMasterRef,
        access_token: this.state.cms.access_token,
        q: '[[at(document.type, "mainnavigation")]]',
        format: 'json'
      }
  
      return Axios.get(url, {params})
        .then((reponse) => {
          return reponse.data.results[0].data.linklist
        })
        .catch((error) => console.log(error))
    }
  }
}

export default cms