<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{viewer.login}}</p>

    <div class="card-style" v-for="repo in viewer.repositories.nodes" :key="repo.id">
      <p>{{repo.name}}</p>
    </div>
  </div>
</template> 

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gql from 'graphql-tag'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  apollo: {
    viewer: gql`query { 
      viewer { 
        login
        repositories(first: 10) {
          nodes{
            id
            name
          }
        }
      }
    }`,

    
  },
}
</script>
<style scoped>

.card-style{
  width: 80%;
  margin-left: 10%;
  border: 1px solid rgb(139, 139, 139);
  -webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.55); 
  box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.55);
  margin-bottom: 20px;
  border-radius: 4px;

}

</style>