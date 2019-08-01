<template>
  <Layout>
    <h1>Groups</h1>
    <section>
      <GroupPreview
        v-for="edge in $page.allGroups.edges"
        :key="edge.node.id"
        :to="edge.node.path"
        :group="edge.node"
      />
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
import GroupPreview from '../components/GroupPreview';

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
