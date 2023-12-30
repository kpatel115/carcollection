import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home'
import About from '../pages/About'


const routes = [
    {
      path: "/",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    }
  ]; 

  export default routes