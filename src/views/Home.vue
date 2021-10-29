<template>
  <div class="d-flex flex-column  align-items-center">
    <div class="col-2">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo github" class="img-fluid">
    </div>
    <h1 class="m-4">Spotify Stats GQL</h1>
    <p class="h1">Spotify Stats GQL</p>
    <div class="container m-4 text-center">
      <img src="http://assets.stickpng.com/images/59b5bb466dbe923c39853e00.png" alt="logo  webstart">
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    req: gql`
      query {
        viewer {
          name
          repositories(last: 10) {
            nodes {
              name
            }
          }
        }
      }
    `,
  },
  
  name: 'HomeComponent',
}
</script>

<style scoped>

</style>