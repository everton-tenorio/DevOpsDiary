import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import './assets/tailwind.css';
import 'highlight.js/styles/github-dark.css';

// Pages
import Home from './pages/Home.vue';
import Beginner from './pages/Beginner.vue';
import Intermediate from './pages/Intermediate.vue';
import Advanced from './pages/Advanced.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
//import Community from './pages/Community.vue';
import About from './pages/About.vue';

// Create router
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/beginner', component: Beginner },
    { path: '/intermediate', component: Intermediate },
    { path: '/advanced', component: Advanced },
    { path: '/:level/:slug', component: ProjectDetail },
    //{ path: '/community', component: Community },
    { path: '/about', component: About }
  ]
});

// Create app
const app = createApp(App);
app.use(router);
app.mount('#app');
