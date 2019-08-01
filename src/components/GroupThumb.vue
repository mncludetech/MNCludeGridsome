<template>
  <div class="thumb-holder">
    <h1>{{item.name}}</h1>
    <p>{{item.description}}</p>
  </div>
</template>

<script>
export default {
  name: "GroupThumb",
  props: {
    group: null
  },
  computed: {
    item() {
      return this.group.node;
    }
  }
};
</script>

<style></style>