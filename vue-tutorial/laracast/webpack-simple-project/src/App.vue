<template>

  <div id="app">

    <message>Hello there</message>
    <message>Hello again</message>
   
  </div>

</template>

<script>

import Message from './components/Message.vue';

export default {

  components : {

    Message

  },

  name: 'app',
  data () {
    return {
      
    }
  }

}

</script>

<style lang="scss">


</style>
