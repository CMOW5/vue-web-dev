
<template>

  <v-toolbar dark color="primary" fixed>

    <v-toolbar-title class="hidden-sm-and-down">Pufweb</v-toolbar-title>

    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
 
    <v-text-field  class="mx-5"
      label="search"
      solo append-icon="search"
      hide-details single-line>
    </v-text-field>
    
    <v-btn icon >
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon v-on:click.native="showShopsModal">
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>

    <!-- modals -->
    <RegisterComponent/>
    <ShopsModalComponent/>
   
  </v-toolbar>



</template>

<script>

import RegisterComponent from './modals/RegisterComponent'
import ShopsModalComponent from './modals/ShopsModalComponent'

import Vue from 'vue'
import EventBus from '../utils/EventBus';

export default {
  name: 'MainToolbarComponent',
  props: {
      //isLogged : Boolean
      isLogged : String
  },
  components: { RegisterComponent, ShopsModalComponent },
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
    showShopsModal: function () {
      EventBus.$emit('SHOW_SHOPS_MODAL', 1);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  
</style>


