<template>
  <div id="index">
	<nav class="nav">
	  <div class="nav-left">
	    <router-link to="/" class="nav-item">
	      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
	    </router-link>
	  </div>
	</nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

