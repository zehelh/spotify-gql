<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <p>{{viewer.login}}</p> -->

  </div>
</template> 

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
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