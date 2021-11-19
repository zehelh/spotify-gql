<template>
  <div class="home">
    <img src="http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png" class="img-fluid" alt="">
    <div class="text-white">
      <p>{{this.company.summary}}</p>
      <p>{{this.company.name}} was founded by {{this.company.founder}}, the actual CEO is {{this.company.ceo}} and the CTO is {{this.company.cto}}, the COO is {{this.company.coo}}.</p>
      <p>{{this.company.name}} own {{this.company.launch_sites}} launch sites by now.</p>
      <p>The {{this.company.name}} headquarter is located at {{this.company.headquarters.address}}, {{this.company.headquarters.city}} in  {{this.company.headquarters.state}}</p>
      <div>
        <img src="https://www.francetvinfo.fr/pictures/hu16sWh8xG71dHXuQnDRvR1yjTE/752x423/2021/11/09/phprfVrRg.jpg" alt="Thomas Pesquet" class="img-fluid mb-5">
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Home',

  apollo: {
    company: gql`{
      company {
      ceo
      coo
      cto
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      name
      summary
      }
    }
    `,
    
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
