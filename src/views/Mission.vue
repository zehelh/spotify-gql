<template>
  <div class="my-background col-12 d-flex align-items-center flex-column">
    <div class="card col-10 mt-4">
      <p class="card-header">Informations sur la mission</p> 
      <p class="h1 mt-3 mb-3">Mission : {{mission.name}}</p>
      <p class=""><span class="fw-bold"> Description : </span>{{mission.description}}</p>
      <p class=""><span class="fw-bold"> Fabricants : </span>{{mission.manufacturers}}</p>
      <div class="d-flex justify-content-center mt-3 mb-3">
        <a :href="mission.twitter" class="me-2 ms-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        </a>
        <a :href="mission.website" class="me-2 ms-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
          </svg>
        </a>
        <a :href="mission.wikipedia" class="me-2 ms-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-wordpress" viewBox="0 0 16 16">
            <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z"/>
            <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/>
            <path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z"/>
          </svg>
        </a>
      </div>

    </div>
    <div class="col-10 mt-4 d-flex flex-wrap justify-content-center">
      <div class="card col-5 m-2" v-for="payload in mission.payloads" :key="payload.id">
        <p class="card-header">Informations sur la cargaison : {{payload.id}}</p> 
        <p class="mb-1"><span class="fw-bold">Clients : </span>{{payload.customers}}</p>
        <p class="mb-1"><span class="fw-bold">Nationalité : </span>{{payload.nationality}}</p>
        <p class="mb-1"><span class="fw-bold">Fabricants : </span>{{payload.manufacturer}}</p>
        <p class="mb-1"><span class="fw-bold">Poid de la cargaison(kg) : </span>{{payload.payload_mass_kg}}</p>
        <p class="mb-1"><span class="fw-bold">Poid de la cargaison(lbs) : </span>{{payload.payload_mass_lbs}}</p>
        <p class="mb-1"><span class="fw-bold">Type de cargaison : </span>{{payload.payload_type}}</p>
        <hr>
        <p class="h4">Information sur la rentrée en Orbite</p>
        <p class="mb-1"><span class="fw-bold">Orbite : </span>{{payload.orbit}}</p>
        <p class="mb-1"><span class="fw-bold">Apopsie : </span>{{payload.orbit_params.apoapsis_km}} km</p>
        <p class="mb-1"><span class="fw-bold">Péricentre : </span>{{payload.orbit_params.arg_of_pericenter}}</p>
        <p class="mb-1"><span class="fw-bold">Excentricité : </span>{{payload.orbit_params.eccentricity}}</p>
        <p class="mb-1"><span class="fw-bold">Inclinaison : </span>{{payload.orbit_params.inclination_deg}} degrés</p>
        <p class="mb-1"><span class="fw-bold">Durée de vie : </span>{{payload.orbit_params.lifespan_years}} ans</p>
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
  
  props: {'id' : String},
  apollo: {
    
      mission: {
        query: gql`query ($id: ID!) {
          mission(id: $id) {
            id
            description
            name
            payloads {
              id
              customers
              nationality
              manufacturer
              orbit
              payload_mass_kg
              payload_mass_lbs
              payload_type
              orbit_params {
                apoapsis_km
                arg_of_pericenter
                eccentricity
                inclination_deg
                lifespan_years
              }
            }
            manufacturers
            twitter
            website
            wikipedia
          }
        }`,

       variables() {
        return {
        id: this.id,
        }
      },

    }
  },

  created(){
    console.log(this.missionId)
  }
}
</script>

<style scoped>

.my-background{

  background-color: #00508b;
  height: 100%;

}

a{
  color: rgb(59, 59, 59);
}

</style>