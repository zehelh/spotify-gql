<template>
    <div class="dragons">
        <div class="container center">
            <h1 class="light mb-5">Les navettes DRAGONS de SpaceX</h1>
        </div>
        <div class="container d-flex flex-row-reverse flex-wrap-reverse justify-content-between">
            <div class="card col-12 my-3" v-for="dragon in dragons" :key="dragon.id">
                <div class="card-header">
                    <h5 class="card-title">{{dragon.name}}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">{{dragon.description}}</p>
                    <a :href="`${dragon.wikipedia}`" class="btn btn-dark">Go to the wiki</a>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" :class="{'bg-success' : dragon.active == true, 'bg-danger' : dragon.active == false}">Active : {{dragon.active}}</li>
                    <li class="list-group-item"><i class="bi bi-people-fill"></i> Nombre de palce(s) : {{dragon.crew_capacity}}</li>
                    <li class="list-group-item"><i class="bi bi-aspect-ratio-fill"></i> Diamètre (en mètre) : {{dragon.diameter.meters}}</li>
                    <li class="list-group-item">Poids de la navette (en kg) : {{dragon.dry_mass_kg}}</li>
                </ul>
            </div>
        </div>
    </div>
</template> 

<script>
import gql from 'graphql-tag'

export default {
    name: 'Dragons',
    components: {
    },

    apollo: {
        dragons: gql`query { 
            dragons {
                active
                crew_capacity
                description
                name
                wikipedia
                diameter {
                    meters
                }
                dry_mass_kg
            }
        }`,
    
    },
}
</script>

