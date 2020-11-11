import Login from './views/Login';
import { BuildingPage } from './components';
import { Home } from '@material-ui/icons';
const ngcsRoutes = [
    {
        path: '/signin',
        name: 'Signin',
        icon: null,
        component: Login,
        layout: '/auth'
    },
    {
        path: '/home',
        name: 'Accueil',
        icon: Home,
        component: BuildingPage,
        layout: '/ngcs'
    }
];

export default ngcsRoutes;