<template>
    <div class="dragons">
        <div class="container center">
            <h1 class="light m-3 text-white">Les Fusées de SpaceX</h1>
        </div>
        <div class="container d-flex flex-wrap justify-content-between">
            <div class="card col-12 col-lg-5 m-3" v-for="rocket in rockets" :key="rocket.id">
                <div class="card-header">
                     <h5 class="card-title">{{rocket.name}}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">{{rocket.description}}</p>
                    <a :href="`${rocket.wikipedia}`" class="btn btn-dark">Go to the wiki</a>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Boosters : {{rocket.boosters}}</li>
                    <li class="list-group-item" :class="{'bg-success' : rocket.active == true, 'bg-danger' : rocket.active == false}">Active : {{rocket.active}}</li>
                    <li class="list-group-item">Poids de la navette (en kg) : {{rocket.mass.kg}}</li>
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
        rockets: gql`query { 
            rockets {
                name
                wikipedia
                mass {
                    kg
                    }
                boosters
                active
                description
            }
        }`,
    
    },
}
</script>
