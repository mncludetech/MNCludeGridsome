<template>
  <div class="layout">
    <header class="header">
      <g-link to="/">
        <g-image alt="MNclude logo" src="../../static/MNclude_logo.png" width="135" />
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/groups">Groups</g-link>
        <g-link class="nav__link" to="/opportunities">Opportunities</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/resources">Resources</g-link>
        <g-link class="nav__link" to="/code-of-conduct">Code of Coduct</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: "Nunito", "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: $mn-font;
  h1 {
    font-size: 24px;
  }
}

a {
  text-decoration: none;
  color: $mn-font;

  &:hover {
    text-decoration: underline;
  }
}

.layout {
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  max-width: 1024px;
  margin: 0 auto;
}

.nav__link {
  margin-left: 20px;
}
</style>
