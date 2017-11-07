<template>
  
    <v-dialog v-model="dialog" persistent max-width="500px">
      
     <v-card>

        <v-card-title>
          <span class="headline">Registrarse</span>
        </v-card-title>
       
        <v-card-text>

          <v-container grid-list-md>
          
            <v-layout wrap>
              
              <v-flex xs12>
                <v-text-field label="Nombre" required></v-text-field>
              </v-flex>
            
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              
              <v-flex xs12>
                <v-text-field label="Contraseña" type="password" required></v-text-field>
              </v-flex>
            
            </v-layout>

          </v-container>
          
          <small>*campos obligatorios</small>
        
        </v-card-text>

        <v-card-actions>

          <v-spacer></v-spacer>
          
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close
          </v-btn>
          
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save
          </v-btn>
        
        </v-card-actions>

      </v-card>

    </v-dialog>
     


</template>

<script>

import Vue from 'vue'
import EventBus from '@/utils/EventBus';



export default {
  name: 'RegisterComponent',
  data () {
    return {
      dialog : false,
      msg: 'Welcome to Your RegisterComponent'
    }
  },
  methods: {
    showModal() {
      this.dialog = true
    }
  },
  created: function () {
      EventBus.$on('SHOW_REGISTER_MODAL', (payLoad) => {
      this.showModal();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  

</style>
