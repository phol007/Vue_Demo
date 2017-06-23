import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

export default {
  getCusto (success, error) {
    Vue.http.get('http://venus:3000/customers?access_token=&keyword=').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }
}
