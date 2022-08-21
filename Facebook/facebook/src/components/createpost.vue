<template>
  <div>
    <Nav> </Nav>
    <!-- Navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
          <!-- Navbar Brand -->
          <a href="#" class="navbar-brand">
            
          </a>
        </div>
      </nav>
    </header>

    <div class="container">
      <div class="row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
     
          <h1>Create post</h1>
        </div>

        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
          <form @submit.prevent="handleSubmit">
            <div class="row">
              <!-- ID-->
              <div class="input-group col-lg-8 mb-4">
                <div class="input-group-prepend">
                
                </div>

                <textarea
               
                  v-model="status"
                  placeholder="Write Something"

                > </textarea>
              </div>

              <div
                class="container-login100-form-btn"
                style="padding-left: 120px"
              >
                <button class="button">Create Post </button>

                <!-- <a href="#" class="button">Link Button</a> -->
              </div>

              <!-- Already Registered -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>





<script>

import axios from 'axios';
import Nav from "./Nav.vue";
export default {

  name: "CreateStatus",
 
 components:{
  Nav,
 },
 

  data() {

    return {

      email: "",

      status: "",

    };

  },

 

  methods: {

    async handleSubmit() {

 const res = await axios.post("http://localhost:8000/post", {

        status: this.status,

        email:localStorage.getItem("email")

      }
      );

      console.log(res);

    this.$router.push("/statuslist");

    },

  },

};

</script>


<style scoped>



textarea {
  width: 500px;
  height: 400px;
 font-size: 18px;
}



/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

.border-md {
  border-width: 2px;
}

.btn-facebook {
  background: #405d9d;
  border: none;
}

.btn-facebook:hover,
.btn-facebook:focus {
  background: #314879;
}

.btn-twitter {
  background: #42aeec;
  border: none;
}

.btn-twitter:hover,
.btn-twitter:focus {
  background: #1799e4;
}

/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/

body {
  min-height: 100vh;
}

.form-control:not(select) {
  padding: 1.5rem 0.5rem;
}

select.form-control {
  height: 52px;
  padding-left: 0.5rem;
}

.form-control::placeholder {
  color: #ccc;
  font-weight: bold;
  font-size: 0.9rem;
}
.form-control:focus {
  box-shadow: none;
}

.button {
  background-color: #494d49;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
