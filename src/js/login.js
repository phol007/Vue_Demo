import service from '../services/service.js'
export default {
  name: 'Login',
  data () {
    return {
      title: 'Login to Application'
    }
  },
  methods: {
    login: function () {
      service.getCusto((data) => {
        alert(JSON.stringify(data))
      }, (response) => {
        alert(response)
      })
    }
  }
}