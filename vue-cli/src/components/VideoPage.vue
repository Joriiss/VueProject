<template>
  <div class="video_page">
    <h1>{{ item.title }}</h1>
    <iframe
      width="1000"
      height="624"
      :src="item.link"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <p class="description"> {{item.description}}</p>
    <p class="price">In sale for {{ item.price }} €</p>
    <p v-if="item.isNew">New ! </p>
    <p v-if="item.isComing">Coming soon ! ({{ item.saleDate }})</p>
    <button v-if="item.isComing" disabled>Buy</button>
    <button v-else>Buy</button>
  </div>
</template>

<script>
export default {
  name: "VideoPage",
  props: ["item"],
  created() {
    if (new Date(this.item.saleDate) > new Date()) {
      this.item.isComing = true;
      console.log(new Date(this.item.saleDate))
    }

    if (new Date(this.item.saleDate) > new Date(new Date().setDate(new Date().getDate() - 30)) && new Date(this.item.saleDate) < new Date()) {
      this.item.isNew = true;
    }
  },
};
</script>
