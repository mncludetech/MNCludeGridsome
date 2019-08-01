<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="header-image">
      <h1>What is MNclude?</h1>
      <p>MNclude is a safe and supportive community of individuals and peer groups in the Minnesota tech industry. Together, we are committed to taking actionable steps toward building a diverse, equitable, and inclusive local tech community.</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style lang="scss">
.header-image {
  background-image: url("../../static/MNcludeHeader.png");
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1,
  p {
    text-align: center;
  }
}
.home-links a {
  margin-right: 1rem;
}
</style>
