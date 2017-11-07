<template>
  
  <div id="app">
    
    <v-app >
     
      <!--º  
      <v-navigation-drawer app></v-navigation-drawer>
      -->
      <MainToolbarComponent v-bind:is-logged="Logged" /> 

      <main>
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
      </main>
    
      <v-footer app></v-footer>
    
    </v-app>

  </div>

</template>

<script>

//import the vue instance

import MainToolbarComponent from './components/MainToolbarComponent'

export default {
  name: 'app',
  props: ['message','Logged'],
  components: { MainToolbarComponent }
}

</script>

<style>
#app {
  padding: 50px 0px 0px 0px !important;
  z-index: 0 !important; 
}

MainToolbarComponent {
  background: red !important;
}

</style>
