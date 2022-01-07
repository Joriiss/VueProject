<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/videos">Vidéos</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#videos {
  h2 {
    background-color: #42b983;
    color: white;
    font-weight: bold;
    display: inline-block;
    padding: 10px;
  }
}

.home {
  a.btn {
    background-color: #42b983;
    color: white;
    font-size: 20px;
    text-decoration: none;
    padding: 12px 18px;
    border-radius: 8px;
    &:hover {
      background-color: #45aa7d;
    }
  }
  .price {
    font-size: 20px;
    font-weight: bold;
  }
  hr{
    margin: 64px 0;
  }
  h3 {
    a {
      color: #2d8ae0;
    }
  }
}

.video_page {
  a {
    text-decoration: none;
    color: black;
  }
  .description {
    max-width: 50%;
    margin: auto;
    padding-top: 20px;
  }
  .price {
    font-weight: bold;
  }
  button {
    background-color: #45aa7d;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    color: white;
    padding: 8px 16px;
    font-size: 16px;
  }
  button:hover {
    background-color: #3f926d;
  }
  button:disabled{
    background-color: #45aa7da1;
  }
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  input,
  textarea,
  .submit {
    width: 50%;
    margin-bottom: 64px;
    height: 24px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: rgb(64, 64, 64);
    color: white;
    padding: 10px;
    font-size: 16px;
  }
  label {
    margin: 5px 0;
    font-size: 20px;
    font-weight: bold;
  }
  .submit {
    width: 100px;
    height: auto;
    background-color: #45aa7d;
  }
  .submit:hover {
    width: 100px;
    height: auto;
    background-color: #3f926d;
  }
}
</style>
