<template>
  <img src="https://www.spacex.com/static/images/crew-2/return/HP_Crew-2_Return_Website_01_Desktop.webp" alt="background" id="bg">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand p-0" href="#"><img class="logo align-baseline"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/1280px-SpaceX-Logo.svg.png"
          alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/capsules">Capsules</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/missions">Missions</router-link>
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
  <router-view/>
</template>

<style>
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

.nav-link {
  color: #A7A9AC !important;
  font-weight: bold;
}

.router-link-exact-active {
  color: #005288 !important;
}

.logo {
  height: 20px;
}

#bg {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  z-index: -1;
}

</style>
