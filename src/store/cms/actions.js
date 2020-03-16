import Axios from 'axios'

let actions = {
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

export default actions