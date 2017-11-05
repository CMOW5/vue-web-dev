//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
import MainToolbarComponent from './components/MainToolbarComponent'

import router from './router'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass in the router to the Vue instance
  router,
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App, MainToolbarComponent }
})
