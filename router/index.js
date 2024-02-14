import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeDetails from '../views/EmployeeDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/employee/:id', // Defina o caminho da rota com um parâmetro dinâmico ':id'
    name: 'EmployeeDetails', // Defina o nome da rota
    component: EmployeeDetails // Defina o componente que será renderizado
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
