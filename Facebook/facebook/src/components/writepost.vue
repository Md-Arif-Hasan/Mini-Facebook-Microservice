<template>
<div>
  

<form @submit.prevent="handleSubmit">

  <div class="form-group">

    <label for="exampleInputEmail1">Whats on your mind?</label>

    <input type="text" class="input100" name="status" v-model="status" placeholder="Write Something">

   

  </div>

   <div class="container-login100-form-btn">

            <button class="login100-form-btn">Post</button>

     </div> 

     

</form>
</div>
</template>

 

<script>

import axios from 'axios';

export default {

  name: "CreateStatus",
 
 

  data() {

    return {

      email: "",

      status: "",

    };

  },

 

  methods: {

    async handleSubmit() {

 const res = await axios.post("/api/addpost", {

     

        status: this.status,

        email:localStorage.getItem("email")

      }

     

      );

      console.log(res);

    this.$router.push("/status");

   

    //   console.log(this.id + this.password);

 

    //   const response = await axios.post("login.php", {

    //     id: this.id,

    //     password: this.password,

    //   });

 

    //   localStorage.setItem("token", response.data.token);

 

    //   localStorage.setItem("id", this.id);

 

    //   if (this.id[0] == 1 && response.data[0].status == 1) {

    //     this.$router.push("/home");

    //   } else if (this.id[0] == 2 && response.data[0].status == 1) {

    //     this.$router.push("/home2");

    //   } else if (this.id[0] == 3 && response.data[0].status == 1) {

    //     this.$router.push("/home3");

    //   } else {

    //     alert(" Wrong Credentials!");

    //   }

    },

  },

};

</script>
