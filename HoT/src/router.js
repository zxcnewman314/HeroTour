// src\router.js
import maHero from "./components/maHero.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

 const routes = [
  { path: '/maHero', component: maHero }
]
// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;
