import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddRecipe from '../views/AddRecipe.vue'
import EditRecipe from '../views/EditRecipe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddRecipe',
    component: AddRecipe
  },
  ,
  {
    path: '/recipe/:id',
    name: 'EditRecipe',
    component: EditRecipe,
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
