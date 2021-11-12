<template>
    <div class="dragons">
        <div class="container center">
            <h1 class="light mb-5">Les Fusées de SpaceX</h1>
        </div>
        <div class="container d-flex flex-wrap justify-content-between">
            <div class="card" v-for="rocket in rockets" :key="rocket.id">
                <!-- <div class="card-header">
                    Active : {{rocket.active}}
                </div> -->
                <div class="card-body">
                    <h5 class="card-title">{{rocket.name}}</h5>
                    <p class="card-text">{{rocket.description}}</p>
                    <a :href="`${rocket.wikipedia}`" class="btn btn-dark">Go to the wiki</a>
                </div>
                <!-- <ul class="list-group list-group-flush">
                    <li class="list-group-item">Nombre de palce(s) : {{rocket.crew_capacity}}</li>
                    <li class="list-group-item">Diamètre (en mètre) : {{rocket.diameter.meters}}</li>
                    <li class="list-group-item">Poids de la navette (en kg) : {{rocket.dry_mass_kg}}</li>
                </ul> -->
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

    data: () => ({
      show: true
    }),

    apollo: {
        rockets: gql`query { 
            rockets {
                name
                id
                wikipedia
                mass {
                    kg
                    }
                type
                company
                boosters
                active
                description
            }
        }`,
    
    },
}
</script>

<style scoped>
.light {
    color: white;
}

.navette {
    width: 200px;
    margin-bottom: 30px;
}

.dragons {
    background-image: url('../assets/falconHeavy.jpg');
    margin-top: -56px;
    padding-top: 100px;
    width: 100%;
    height: 100vh !important;
    background-size: cover;
}

.card {
    opacity: 0.8;
    width: 45%;
    margin-bottom: 20px;
}

/* .card-body {
    background-color: rgb(77, 77, 77);
    color: white;
} */

.card-style{
  width: 80%;
  margin-left: 10%;
  border: 1px solid rgb(139, 139, 139);
  -webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.55); 
  box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.55);
  margin-bottom: 20px;
  border-radius: 4px;

}

@media screen and (max-width: 768px){
    .card {
    width: 100%;
    margin-bottom: 20px;
}
}

</style>