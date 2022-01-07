<template>
  <div class="video-item">
    <h3> 
    <router-link 
    :to="{ name: 'Video', params: { id:item.id }}" 
    :item="item">
    {{item.title}}
    </router-link>
    </h3>
    <iframe width="500" height="312" :src="item.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br>
    <p class="price">{{item.price}} €</p>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: ["item"],
};
</script>