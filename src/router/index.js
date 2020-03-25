import Vue from 'vue'
import Router from 'vue-router'
import home from '../home'
import slot from '../pages/slot/slot'
import Modifier from '../pages/Modifier/Modifier'
import vfor from '../pages/Modifier/vfor'
import inject from '../pages/Modifier/inject'
import mixins from '../pages/Modifier/mixins'
import native from '../pages/Modifier/native'
import sync from '../pages/Modifier/sync'
import directive from '../pages/Modifier/directive'
import directiveTips from '../pages/Modifier/directiveTips'
import rander from '../pages/Modifier/rander'
import jianrong from '../pages/Modifier/jianrong'
import filter from '../pages/Modifier/filter'

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
		},
		{
			path:'native',
			name:'native',
			component:native
		},
		{
			path:'sync',
			name:'sync',
			component:sync
		},
		{
			path:'directive',
			name:'directive',
			component:directive
		},
		{
			path:'directiveTips',
			name:'directiveTips',
			component:directiveTips
		},
		{
			path:'rander',
			name:'rander',
			component:rander
		},
		{
			path:'jianrong',
			name:'jianrong',
			component:jianrong
		},
		{
			path:'filter',
			name:'filter',
			component:filter
		}
		
	  ]
    }
  ]
})
