<template>
    <div class="dragons">
        <div class="container center">
            <h1 class="light mb-5">Les navettes DRAGONS de SpaceX</h1>
            <img class="navette" src="../assets/dragon1.png" alt="">
        </div>
        <div class="container d-flex flex-row-reverse flex-wrap-reverse justify-content-between">
            <div class="card" v-for="dragon in dragons" :key="dragon.id">
                <div class="card-header">
                    Active : {{dragon.active}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{dragon.name}}</h5>
                    <p class="card-text">{{dragon.description}}</p>
                    <a :href="`${dragon.wikipedia}`" class="btn btn-dark">Go to the wiki</a>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Nombre de palce(s) : {{dragon.crew_capacity}}</li>
                    <li class="list-group-item">Diamètre (en mètre) : {{dragon.diameter.meters}}</li>
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

    data: () => ({
      show: true
    }),

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

<style scoped>
.light {
    color: white;
}

.navette {
    width: 200px;
    margin-bottom: 30px;
}

.dragons {
    background-image: url('../assets/background.jpg');
    margin-top: -56px;
    padding-top: 100px;
    width: 100%;
    height: 100vh !important;
    background-size: cover;
}

.card {
    width: 45%;
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