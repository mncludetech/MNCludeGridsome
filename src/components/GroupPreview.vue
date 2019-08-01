<template>
  <div>
    <img
      v-if="group.logo[0]"
      :src='group.logo[0].url'
      :alt='group.name'
    />
    <h2>{{group.name}}</h2>
    <div>{{group.description}}</div><br />
    <div v-if="group.url">{{group.url}}</div>
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
