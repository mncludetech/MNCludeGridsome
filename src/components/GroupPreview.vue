<template>
  <div>
    <h2>{{group.name}}</h2>
    <div>{{group.description}}</div>
    <div>{{group.url}}</div>
    <img :src='group.logo.pathname' />
  </div>
</template>

<script>
export default {
  name: "GroupPreview",
  props: {
    group: null
  }
}
</script>
