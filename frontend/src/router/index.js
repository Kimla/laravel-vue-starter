import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { requiresAuth: true },
        component: () =>
            import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/users',
        name: 'Users',
        meta: { requiresAuth: true },
        component: () =>
            import(/* webpackChunkName: "users" */ '../views/Users.vue')
    },
    {
        path: '/users/:id',
        name: 'User',
        meta: { requiresAuth: true },
        component: () =>
            import(/* webpackChunkName: "user" */ '../views/User.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: { guestOnly: true },
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: { guestOnly: true },
        component: () =>
            import(
                /* webpackChunkName: "register" */ '../views/auth/Register.vue'
            )
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        meta: { guestOnly: true },
        component: () =>
            import(
                /* webpackChunkName: "forgot-password" */ '../views/auth/ForgotPassword.vue'
            )
    },
    {
        path: '/reset-password/:token',
        name: 'ResetPassword',
        meta: { guestOnly: true },
        component: () =>
            import(
                /* webpackChunkName: "reset-password" */ '../views/auth/ResetPassword.vue'
            )
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next({ path: '/login', query: { redirect: to.fullPath } });
    } else if (to.matched.some(record => record.meta.guestOnly) && token) {
        next({ path: '/' });
    } else {
        next(); // make sure to always call next()!
    }
});

export default router;
