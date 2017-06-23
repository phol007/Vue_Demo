<template>
<div class="container is-fluid" id="Main">
  <div class="tabs is-boxed">
    <ul>
      <li class="is-active">
        <a>
          <span class="icon is-small"><i class="fa fa-home"></i></span>
          <span>Vat7</span>
        </a>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</div> 
</template>
<script>
export default {
  name: 'Main',
  mounted: function () {
    this.$router.push('/vat7')
  }
}
</script>
