import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Contact from '../components/Contact.vue';
import AddMovie from '../components/AddMovie.vue';
import Movie from '../components/Movie.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/movies/add',
    name: 'AddMovie',
    component: AddMovie,
  },
  {
    path: '/movies/:id',
    name: 'Movie',
    component: Movie,
  },

];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
