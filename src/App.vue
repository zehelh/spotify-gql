<template>
<div class="nav-top">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img class="logo align-baseline" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/1280px-SpaceX-Logo.svg.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dragons">Dragons</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/rockets">Rockets</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dragons">Dragons</router-link> -->
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* .navbar {
  background-color: #e3f2fd !important;
} */

.logo {
  height: 20px;
}
</style>
