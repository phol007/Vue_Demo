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

<script src="../js/vat7.js"></script>
