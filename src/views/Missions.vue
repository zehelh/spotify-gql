<template>
<div v-if="missions" class="my-background">
  <div class="col-12 d-flex justify-content-center">
    <div class="card col-10 mt-4">
      <div class="card-header">
        Liste des missions
      </div>
      <table class="table table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">More informations</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mission in missions" :key="mission.id">
            <th mission-id="{{mission.id}}">{{mission.id}}</th>
            <td>{{mission.name}}</td>
            <td><router-link :to="{name: 'Mission', params:{id: mission.id} }" class="btn btn-warning">Voir plus d'information</router-link></td>
            <td><a :href="mission.website" target="_blank" class="btn btn-success">Voir le site web</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import gql from 'graphql-tag'

export default {
  name: 'Home',

  components: {
    HelloWorld
  },

  data(){
    
  },
  apollo: {
    missions: gql`query {
        missions {
          name
          website
          id
        }
      
    }`,
  }
}
</script>

<style scoped>

.my-background{

  background-color: #00508b;
  height: 95vh;

}

</style>