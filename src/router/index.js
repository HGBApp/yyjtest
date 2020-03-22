import Vue from 'vue'
import Router from 'vue-router'
import home from '../home'
import slot from '../pages/slot/slot'
import Modifier from '../pages/Modifier/Modifier'
import vfor from '../pages/Modifier/vfor'
import inject from '../pages/Modifier/inject'
import mixins from '../pages/Modifier/mixins'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
	  children:[{
		  path:'slot',
		  name:'slot',
		  component:slot
		},
		{
		  path:'Modifier',
		  name:'Modifier',
		  component:Modifier
		},
		{
		  path:'vfor',
		  name:'vfor',
		  component:vfor
		}, 
		{
		  path:'inject',
		  name:'inject',
		  component:inject
		},
		{
			path:'mixins',
			name:'mixins',
			component:mixins
		}
	  ]
    }
  ]
})
