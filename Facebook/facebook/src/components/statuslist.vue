
<template>

  <div>

<Nav></Nav>
    <h1 style="padding-top:7%">Status list</h1>

    <br />

    <br />

    <button align="center">

      <router-link to="/create" id="button">
<b> Create Post</b>
   

      </router-link>

    </button>



    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4"  v-for="inf in info" :key="inf._id">
        <div class="col" >
          <div class="card radius-15">
            <div class="card-body text-center">
              <div class="p-4 border radius-15">

                <h5 class="mb-0 mt-5">Email: {{ inf.email }}</h5>

                <p class="mb-3">Status: {{ inf.status }}</p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

 




<script>
import axios from "axios";
import Nav from "./Nav.vue";

export default {
  name: "StatusList",

  data() {
    return {
      info: "",
    };
  },

   components:{
  Nav,
 },
 

  mounted() {
    this.fetchInfo();
  },

  methods: {
    fetchInfo() {

      console.log(localStorage.getItem("email"));
      

       this.email = localStorage.getItem("email");

      //axios.get("http://localhost:5000/api/getpost"+localStorage.getItem("email")).then((res) => (this.info = res.data));

      axios.get("http://localhost:8000/post/"+this.email).then((res) => {this.info = res.data; console.log(res)},
      (err)=> console.log(err));

      console.log(this.info);


    },

  },

};

</script>


<style scoped>
body {
  background-color: #f7f7ff;
  margin-top: 20px;
}
.radius-15 {
  border-radius: 15px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: rgb(252, 253, 253);
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgba(8, 8, 8, 0.65),
    0 2px 6px 0 rgba(251, 252, 253, 0.54);
}

element.style {
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}
.contacts-social a {
  font-size: 16px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  background: #ffffff;
  border: 1px solid #eeecec;
  text-align: center;
  border-radius: 50%;
  color: #2b2a2a;
}
.bg-facebook {
  background-color: #3b5998 !important;
}
.bg-twitter {
  background-color: #55acee !important;
}
.bg-linkedin {
  background-color: #0976b4 !important;
}

.container {
  padding-top: 50px;
}
#button {
  padding-left: 50px;
  font: bold;
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




