import Axios from 'axios'

let actions = {
  async init(context) {
    // Get reference key
    const ref = await context.dispatch('getMasterRef')
    context.commit('setPrismicRef', ref)

    // Once key is obtained, make subsequent calls
    const nav = await context.dispatch('getNav')
    const modules = await context.dispatch('getModules')
    context.commit('setHeader', nav.linklist)
    context.commit('setHeaderColor', nav.text_color)
    context.commit('setModules', modules)
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
        return reponse.data.results[0].data
      })
      .catch((error) => console.log(error))
  },

  async getModules() {
    const url = 'https://bitterpenguin.prismic.io/api/v2/documents/search'
    const params = {
      ref: this.state.cms.prismicMasterRef,
      access_token: this.state.cms.access_token,
      q: '[[at(document.type, "content")]]',
      format: 'json'
    }

    return Axios.get(url, {params})
      .then((reponse) => {
        return reponse.data.results[0].data
      })
      .catch((error) => console.log(error))
  }
}

export default actions