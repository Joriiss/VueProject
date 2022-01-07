<template>
  <div class="contact">
    <h1>This is the contact page</h1>
    <form @submit="validateForm">
      <label for="firstName">First name</label>
      <input type="text" name="firstName" v-model="firstName" id="firstName" placeholder="John" />
      <label for="firstName">Last name</label>
      <input type="text" name="lastName" v-model="lastName" id="lastName" placeholder="Doe" />
      <label for="firstName">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@mail.com"
        v-model="email"
      />
      <label for="firstName">Your message</label>
      <textarea name="msg" id="msg" v-model="msg" placeholder="Hi, ..."></textarea>
      <button class="submit">Send</button>
    </form>
  </div>
</template>


<script>
export default {  
  name: "app",
  data() {
    return{
    firstName: null,
    lastName: null,
    email: null,
    msg: null,
    }
  },
  methods: {
    validateForm: function (e) {
      if (this.firstName && this.lastName &&this.email && this.msg) {
        alert("Message sent");
        return true;
      }
      else{
        alert("Form not valid");
      }
      e.preventDefault();
    },
  },
};
</script>
