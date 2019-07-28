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
    allGroups {
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
    title: 'Groups'
  }
}
</script>
