import Axios from 'axios'

const module = {
  state: {
    header: []
  },
  getters: {
    primaryNavigation(state) {
      return state.header
    }
  },
  mutations: {
    setHeader(state, data) {
      state.header = data
    }
  },
  actions: {
    async init(context) {
      return await context.dispatch('getHeaderData')
    },

    async getHeaderData(context) {
      const url = 'https://bitterpenguin.prismic.io/api/v2/documents/search'
      const params = {
        ref: 'XmZtERMAACEARpPb',
        access_token: 'MC5YbTZTS0JFQUFDSUFDSDhZ.77-9FxXvv71f77-977-977-977-9HO-_ve-_vTZGeO-_vWfvv73vv70A77-9Gu-_ve-_ve-_ve-_vSNOMe-_vWvvv70',
        q: '[[at(document.type, "mainnavigation")]]',
        format: 'json'
      }
      return Axios.get(url, {params})
        .then((reponse) => {
          const headerData = reponse.data.results[0].data.linklist
          return context.commit('setHeader', headerData)
        })
        .catch((error) => console.log(error))
    }
  }
}

export default module