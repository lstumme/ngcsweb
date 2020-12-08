import { Home, Group, Build, Extension, PieChart, Memory, Update } from '@material-ui/icons';
import {
    Login,
    DefaultView,
    HomeView,
    UsersView,
    AccountView,
    NewAccountView,
    ChangeView
} from '../../views';
import * as links from './routelinks';

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
        path: '/changes',
        name: 'Mises à jour',
        icon: <Update />,
        component: <ChangeView />,
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
        path: '/newaccount',
        name: 'Account',
        icon: <Memory />,
        component: <AccountView />,
        layout: '/ngcs',
        target: 'NewAccount'
    },
    {
        path: links.NEW_USER.path,
        name: 'New User',
        icon: null,
        component: <NewAccountView/>,
        layout: links.NEW_USER.layout,
        target: null
    }
];

export default ngcsRoutes;