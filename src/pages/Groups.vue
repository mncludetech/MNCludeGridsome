<template>
  <Layout>
    <section class="content-container">
      <masonry :cols="2" :gutter="100">
        <GroupPreview
          v-for="edge in $page.allGroups.edges"
          :key="edge.node.id"
          :to="edge.node.path"
          :group="edge.node"
        />
      </masonry>
    </section>
  </Layout>
</template>

<page-query>
  query Groups {
    allGroups (perPage: 100, page: 1) {
      pageInfo{
        totalPages,
        currentPage,
        totalItems
      }
      edges {
        node {
          id,
          name,
          description,
          url,
          logo {
            filename,
            url
          }
        }
      }
    }
  }
</page-query>

<script>
import GroupPreview from "../components/GroupPreview";

export default {
  components: {
    GroupPreview
  },
  metaInfo: {
    title: "Groups"
  },
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

<style lang="scss" scoped>
.content-container {
  max-width: 1024px;
}
</style>