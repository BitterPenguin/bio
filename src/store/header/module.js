import Axios from 'axios'

const module = {
  actions: {
    init(context) {
      const url = 'https://bitterpenguin.prismic.io/api/v2/documents/search'
      const params = {
        ref: 'XmZtERMAACEARpPb',
        access_token: 'MC5YbTZTS0JFQUFDSUFDSDhZ.77-9FxXvv71f77-977-977-977-9HO-_ve-_vTZGeO-_vWfvv73vv70A77-9Gu-_ve-_ve-_ve-_vSNOMe-_vWvvv70',
        q: '[[at(document.type, "mainnavigation")]]',
        format: 'json'
      }
      Axios.get(url, {params})
        .then((reponse) => {
          const headerData = reponse.data.results[0].data.linklist
          context.commit('setHeader', headerData)
        })
        .catch((error) => console.log(error))
    }
  },
  mutations: {
    setHeader(state, data) {
      state.header = data
    }
  },
  getters: {
    primaryNavigation(state) {
      return state.header
    }
  }
}

export default module