<!-- <template>
  <nav class="navbar navbar-dark bg-dark navbar-expand fixed-top">
    <div class="container">



    <router-link to="/status" class="navbar-brand"> Timeline </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">

    
          <li class="nav-item">
            <router-link to="/show" class="navbar-brand">Stories </router-link>
          </li>


        </ul>
      </div>
    </div>
  </nav>
 
</template>

<script>
export default {};
</script>


<style scoped>
.nav-item{
  font-weight: 700;
font-weight: bold; 

font-weight: lighter; 
}

.nav-bar{

}
</style> -->





<template>
<nav class="navbar navbar-dark bg-dark navbar-expand fixed-top">
    <div class="container">
      <router-link to="/status" class="navbar-brand" style="font-size:300%;"> Timeline </router-link>

        <router-link to="/show" class="navbar-brand" style="font-size:300%;"> Stories </router-link>

       <router-link to="/" class="navbar-brand" style="font-size:300%;"> Login </router-link>
       <router-link to="/register" class="navbar-brand" style="font-size:300%;"> Register </router-link>

       <button @click="() => { logout(); }"> Logout </button>

    </div>
  </nav>

</template>

<script>
export default {

  methods: {
    logout(){
      localStorage.clear();
      this.$router.push("/");
      console.log("successful");
    }
  },
};

</script>