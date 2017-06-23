<template>
<div class="container is-fluid" id="vat">
   <div class="vat7">
    <h1 class="title">{{ title }}</h1>
    <div class="card">
      <div class="card-content">
        <p class="title">
         ** กรอกจำนวนเงินเพื่อคำนวณภาษี
        </p>
        <input type="number" id="money" name="money" v-model="money" @keyup.enter="calVat()" class="input" min="0" @dblclick="reset()">
        <hr />
        <p class="subtitle">
          ท่านต้องเสียภาษี : {{ moneytax }} บาท
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item" v-on:click="calVat()">
          <span>
            <h1>คำนวณ</h1>
          </span>
        </p>
        <p class="card-footer-item" v-on:click="reset()">
          <span>
            <h1>รีเซต</h1>
          </span>
        </p>
      </footer>
    </div>    
  </div>
</div> 
</template>

<style type="text/css">
  .card-footer-item{
    cursor: pointer;
  }
  .card-footer-item:hover{
    cursor: pointer;
    background: #ecebe9;
  }
  .card-footer-item h1{
    font-weight: bolder;
  }
</style>

<script>
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
</script>
