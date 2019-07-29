<template>
  <Layout>
    <h1>Groups</h1>
    <template v-for="group in groups">
      <group-thumb :key="group.node.id" :group="group" />
    </template>
  </Layout>
</template>

<script>
import GroupThumb from "@/components/GroupThumb.vue";
export default {
  metaInfo: {
    title: "Groups"
  },
  components: { GroupThumb },
  computed: {
    groups() {
      return this.$page.groups.edges;
    }
  }
};
</script>

<page-query>
query Groups{
	groups: allAirtable {
    edges {
      node {
        name
        description
        id
      }
    }
  }
}
</page-query>
