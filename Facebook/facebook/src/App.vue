<template>
  <div id="app">
    <div>
      <div>
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>


  <style scoped>
body {
  background-color: rgb(206, 196, 196);
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
span {
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
}

body,
html,
#app,
#root,
.auth-wrapper {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba((34, 35, 58, 0.2), green, blue, alpha);
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: rgb(206, 196, 196);
  box-shadow: 0px 14px 80px rgba((34, 35, 58, 0.2), green, blue, alpha);
  padding: 40px 55px 45px 55px;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}
</style>
