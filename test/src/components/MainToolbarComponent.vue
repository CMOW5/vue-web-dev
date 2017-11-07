
<template>

  <v-toolbar dark color="primary" fixed>

    <v-toolbar-title class="hidden-sm-and-down">Pufweb</v-toolbar-title>

    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
 
    <v-text-field  class="mx-5"
      label="search"
      solo append-icon="search"
      hide-details single-line>
    </v-text-field>
    
    <div class="hidden-sm-and-down">
      <v-btn outline color="white"  v-on:click.native="showRegisterModal" >Registrarse</v-btn>
      <v-btn outline color="white">Ingresar</v-btn>

    </div>

    <!-- modals -->
    <RegisterComponent/>
   
  </v-toolbar>



</template>

<script>

import RegisterComponent from './modals/RegisterComponent'
import Vue from 'vue'
import EventBus from '../utils/EventBus';

export default {
  name: 'MainToolbarComponent',
  props: {
      //isLogged : Boolean
      isLogged : String
  },
  components: { RegisterComponent },
  data () {
    return {
      dialog : false,
      msg: 'Toolbar'
    }
  },
  methods: {
    showRegisterModal: function () {
      EventBus.$emit('SHOW_REGISTER_MODAL', 1);
    },
    show (){
      console.log('show');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  
</style>


