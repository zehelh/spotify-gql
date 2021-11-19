<template>
<!-- On pose un vif pour eviter les erreur console generer avant la req -->
  <div v-if="capsule">
    <h1 class="fw-bold m-3 text-white">Capsule {{capsule.id}}</h1>
    <div class="d-flex flex-wrap justify-content-evenly">
        <div class="card col-10 m-2">
          <div class="card-header bg-opacity-50 mb-2" :class="{ 'bg-success' : capsule.status == 'active', 'bg-danger' : capsule.status == 'destroyed', 'bg-secondary' : capsule.status == 'retired', 'bg-warning' : capsule.status == 'unknown' }">
            <p>ID: {{capsule.id}}</p>
            <p>Status: {{capsule.status}}</p>
          </div>
          <div class="px-3">
            <p>Number of landings: {{capsule.landings}}</p>
            <p>Capsule type: {{capsule.type}}</p>
            <p>Reuse count: {{capsule.reuse_count}}</p>
            <hr>
          </div>
          <div class="px-3">
            <p class="m-1">Dragon ID°: {{capsule.dragon.id}}</p>
            <p class="m-1">{{capsule.dragon.active ? "Dragon is active" : "Dragon is not active"}}</p>
            <p class="m-1">Dragon name: {{capsule.dragon.name}}</p>
            <p class="m-1">Dragon description: {{capsule.dragon.description}}</p>
            <p class="m-1">Crew capacity: {{capsule.dragon.crew_capacity}}</p>
            <p class="m-1">First flight date: {{capsule.dragon.first_flight}}</p>
          <hr>
          </div>
          <div class="px-3" v-for="(mission, index) in capsule.missions" :key="index">
            <p class="m-1">Flight N°: {{mission.flight}}</p>
            <p class="m-1">Mission name: {{mission.name}}</p>
            <hr>
          </div>
          <a class="m-3 btn btn-primary" href="{{capsule.dragon.wikipedia}}" target="_blank">To Wiki</a>
        </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  props: {
    capid: String
  },
  name: 'Capsule',
  apollo: {
    capsule: {
      query: gql`query ($capid: ID!) {
          capsule(id: $capid) {
            id
            landings
            status
            type
            reuse_count
            dragon {
              active
              name
              id
              description
              crew_capacity
              first_flight
              wikipedia
            }
            missions {
              flight
              name
            }
          }
        }
      `,
      variables() {
        return {
          capid: this.capid,
        };
      },
    },    
  },
  computed: {
  }
}
</script>
