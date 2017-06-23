export default {
  name: 'vat7',
  data () {
    return {
      title: 'ระบบคำนวณภาษี 7 %',
      moneytax: '0.00',
      money: ''
    }
  },
  methods: {
    calVat () {
      var mn = parseFloat(this.money)
      if (!isNaN(mn)) {
        var total = (mn * 0.07)
        this.moneytax = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      } else {
        alert('กรุณากรอกข้อมูล')
        var input = document.getElementById('money')
        input.focus()
      }
    },
    reset () {
      this.money = ''
      this.moneytax = '0.00'
    }
  }
}