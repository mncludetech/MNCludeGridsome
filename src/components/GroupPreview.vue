<template>
  <div>
    <img
      :src='group.logo[0].url'
      :alt='group.name'
    />
    <h2>{{group.name}}</h2>
    <div>{{group.description}}</div><br />
    <div>{{group.url}}</div>
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
