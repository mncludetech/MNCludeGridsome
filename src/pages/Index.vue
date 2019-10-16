<template>
  <div class="container">
    <Layout>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <div class="header-image">
        <h1>What is MNclude?</h1>
        <p>MNclude is a safe and supportive community of individuals and peer groups in the Minnesota tech industry. Together, we are committed to taking actionable steps toward building a diverse, equitable, and inclusive local tech community.</p>
        <div class="overlay"></div>
      </div>
    </Layout>
    <section class="content-container"></section>
  </div>
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
  position: relative;

  h1,
  p {
    text-align: center;
    color: #fff;
    z-index: 20;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(2, 16, 164, 0.538);
  }

  p {
    max-width: 650px;
    margin: 0 auto;
  }
}
.home-links a {
  margin-right: 1rem;
}
</style>
