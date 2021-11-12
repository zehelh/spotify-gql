<template>
  <p class="h1">Liste des capsules Space X</p>
  <div class="d-flex flex-wrap justify-content-evenly">
      <div class="card col-2 m-2" v-for="capsule in this.capsules" :key="capsule.id">
        <div class="card-header bg-opacity-50 mb-2" :class="{ 'bg-success' : capsule.status == 'active', 'bg-danger' : capsule.status == 'destroyed', 'bg-secondary' : capsule.status == 'retired', 'bg-warning' : capsule.status == 'unknown' }">
          <p>ID: {{capsule.id}}</p>
          <p>Status: {{capsule.status}}</p>
        </div>
          <div class="px-3" v-for="(mission, index) in capsule.missions" :key="index">
            <p class="m-1">Flight N°: {{mission.flight}}</p>
            <p class="m-1">Mission name: {{mission.name}}</p>
            <hr>
          </div>
          <div class="card-body" v-if="capsule.missions.length === 0">
            <p>No informations</p>
          </div>
      </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Capsules',
  apollo: {
    capsules: gql`{
      capsules {
        id
        landings
        missions {
          flight
          name
        }
        status
      }
    }
    `,
    
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(number => number % 2 === 0)
    }
  }
}
</script>