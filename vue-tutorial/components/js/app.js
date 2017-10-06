var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

// register
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// create a root instance
new Vue({
  el: '#example'
})