<template>
  <div class="home">
    <img src="http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png" class="img-fluid" alt="">
        <p>{{this.company}}</p>
        <p>{{this.company.ceo}}</p>
        <p>{{this.company.coo}}</p>
        <p>{{this.company.cto}}</p>
        <p>{{this.company.status}}</p>
        
  <el-row>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
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
      test_sites
      vehicles
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