<template>
  
    <v-dialog v-model="dialog" max-width="500px">

      <v-card>
          
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-container fluid grid-list-md >
          
          <v-layout row wrap>
            <v-flex
              xs12 md4
              v-for="n in 6"
              :key="n"
            >

            <v-card flat tile>
              <v-card-media
                :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                height="150px"
              >
              </v-card-media>
              
              <v-card-title primary-title>
                <div>
                  <h5 class="headline mb-0 text-xs-center">
                    Nombre Tienda
                  </h5>
                </div>
              </v-card-title>

              <v-card-actions class="test">
                <v-btn flat color="orange">Share</v-btn>
              </v-card-actions>

            </v-card>

            </v-flex>
          
          </v-layout>

        </v-container>
        
      </v-card>
   
    </v-dialog>
  
</template>
     


</template>

<script>

import Vue from 'vue'
import EventBus from '@/utils/EventBus';

export default {
  name: 'ShopsModalComponent',
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
      EventBus.$on('SHOW_SHOPS_MODAL', (payLoad) => {
      this.showModal();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.test{
  margin-left: auto;
  margin-right: auto;
  width: 8em
}  

.testt{}

</style>


<!-- 

  <v-card>
        <v-card-media src="http://lorempixel.com/800/800/" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>

-->


<!--


<template>
  
    <v-dialog v-model="dialog" max-width="500px">

      <v-card>
          
          <v-container grid-list-md>
          
            <v-layout wrap>
              
              <v-flex xs12 md4 >
                
                <v-card>

                  <v-card-media src="http://lorempixel.com/600/800/" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Tienda 1</h3>
                      <div>
                        descripcion
                      </div>
                    </div>
                  </v-card-title>
                
                  <v-card-actions>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                
                </v-card>

              </v-flex>

               <v-flex xs12 md4>
                
                <v-card>
                  <v-card-media src="http://lorempixel.com/700/800/" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Tienda 2</h3>
                      <div>
                        descripcion
                      </div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                  </v-card-actions>
                </v-card>

              </v-flex>

               <v-flex xs12 md4>
                
                <v-card>
                  <v-card-media src="http://lorempixel.com/800/800/" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Tienda 3</h3>
                      <div>
                          descripcion
                      </div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                  </v-card-actions>
                </v-card>

              </v-flex>


              <v-flex xs12 md4>
                
                <v-card>
                  <v-card-media src="http://lorempixel.com/800/800/" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Tienda 3</h3>
                      <div>
                          descripcion
                      </div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                  </v-card-actions>
                </v-card>

              </v-flex>

                <v-flex xs12 md4>
                
                <v-card>

                  <v-card-media src="" height="200px">

                  </v-card-media>
                  
                  <v-card-title primary-title>
                    <div class="test">
                      <div>
                          
                      </div>
                    </div>
                  </v-card-title>
                
                </v-card>

              </v-flex>
                    
            </v-layout>

          </v-container>
        
      </v-card>
   
    </v-dialog>
  
</template>


-->  