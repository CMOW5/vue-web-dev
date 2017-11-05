//import the vue instance
import Vue from 'vue'
//import the vue router
import Router from 'vue-router'
//import the HelloWorld component
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent'
import HomeComponent from '@/components/HomeComponent'
import MainToolbarComponent from '@/components/MainToolbarComponent'

//tell vue to use the router
Vue.use(Router)

export default new Router({
	//define your routes
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/tool',
      name: 'Toolbar',
      component: MainToolbarComponent
    },
    {
      path: '/test',
      name: 'Test',
      component: TestComponent
    }
  ],
   mode: 'history'
})
