<template>

 <div> 
   TestComponent
 </div>

</template>

<script>

import EventBus from '../utils/EventBus';

export default {
  name: 'TestComponent',
  data () {
    return {
      dialog : false,
      msg: 'Welcome to Your TestComponent'
    }
  },
  mounted () {
    /*
    EventBus.$on('EVENT_NAME', function (payLoad) {
      console.log('event received');
    });
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  

</style>
