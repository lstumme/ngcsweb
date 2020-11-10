import Login from './views/Login';

const ngcsRoutes = [
    {
        path: '/signin',
        name: 'Signin',
        icon: null,
        component: Login,
        layout: '/auth'
    }
];

export default ngcsRoutes;