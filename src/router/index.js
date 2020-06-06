import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Contact from '../components/Contact.vue';

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

];

const router = new VueRouter({
  routes,
});

export default router;
