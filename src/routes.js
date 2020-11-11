import { Home, Group, Build, Extension, PieChart, Memory } from '@material-ui/icons';
import { 
    Login, 
    DefaultView, 
    HomeView,
    UsersView
} from './views';

const ngcsRoutes = [
    {
        path: '/signin',
        name: 'Signin',
        icon: <Home />,
        component: Login,
        layout: '/auth'
    },
    {
        path: '/home',
        name: 'Accueil',
        icon: <Home />,
        component: <HomeView />,
        layout: '/ngcs',
        target: 'SideBar'
    },
    {
        path: '/users',
        name: 'Utilisateurs',
        icon: <Group />,
        component: <UsersView />,
        layout: '/ngcs',
        target: 'SideBar'
    },
    {
        path: '/tools',
        name: 'Outils',
        icon: <Build />,
        component: <DefaultView />,
        layout: '/ngcs',
        target: 'SideBar'
    },
    {
        path: '/modules',
        name: 'Modules',
        icon: <Extension />,
        component: <DefaultView />,
        layout: '/ngcs',
        target: 'SideBar'
    },
    {
        path: '/environments',
        name: 'Environnements',
        icon: <PieChart />,
        component: <DefaultView />,
        layout: '/ngcs',
        target: 'SideBar'
    },
    {
        path: '/modeling',
        name: 'Models',
        icon: <Memory />,
        component: <DefaultView />,
        layout: '/ngcs',
        target: 'SideBar'
    },
    {
        path: '/account',
        name: 'Mon profil',
        icon: null,
        component: <DefaultView />,
        layout: '/ngcs',
        target: 'AppBar'
    },
    {
        path: '/disconnect',
        name: 'Déconnexion',
        icon: null,
        component: <DefaultView/>,
        mayout: '/ngcs',
        target: 'AppBar'
    }
];

export default ngcsRoutes;