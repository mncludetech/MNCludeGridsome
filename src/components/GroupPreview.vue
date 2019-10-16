<template>
  <div class="container">
    <h2>
      <a :href="group.url">{{group.name}}</a>
    </h2>
    <p>{{group.description}}</p>
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

a {
  color: $mn-blue;
}

p,
h2 {
  margin: 5px 0px;
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
