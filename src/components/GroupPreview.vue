<template>
  <div class="container">
    <div
      v-if="group.logo[0]"
      class="image-container"
      :style="{ backgroundImage: 'url(' + group.logo[0].url + ')' }"
    ></div>
    <h2>{{group.name}}</h2>
    <div>{{group.description}}</div>
    <br />
    <div v-if="group.url">{{group.url}}</div>
  </div>
</template>

<script>
export default {
  name: "GroupPreview",
  props: {
    group: null
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 20px 0px;

  img {
    width: 100%;
  }
}

.image-container {
  height: 100px;
  width: 200px;
  background-size: 200px;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
