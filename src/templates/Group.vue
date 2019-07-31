<page-query>  
  query Group ($path: String!) {
    group(path: $path) {
      id,
      name,
      description,
      url,
      logo {
        url,
        filename
      }
    }
  }
</page-query>
