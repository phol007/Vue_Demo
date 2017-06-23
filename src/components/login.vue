<template>
<div class="container is-fluid" id="Login">
   <div class="Login">
      <div class="card">
        <div class="card-content">
          <p class="title">
            {{ title }}
          </p>
          <p class="subtitle">
            <div class="field">
              <label class="label">Name</label>
              <p class="control">
                <input class="input" type="text" placeholder="Text input">
              </p>
              <label class="label">password</label>
              <p class="control">
                <input class="input" type="password" placeholder="Text input">
              </p>
            </div>
          </p>
        </div>
        <footer class="card-footer">
          <router-link to="/main" class="card-footer-item">
            <span>
                Login
            </span>
            </router-link>
          </p>
          <p class="card-footer-item" @click="login()">
            <span>
              Fucn Login
            </span>
          </p>
        </footer>
      </div>
  </div>
</div> 
</template>

<script src="../js/login.js"></script>
