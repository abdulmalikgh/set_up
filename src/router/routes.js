import store from '@state/store'

// auth related routes
const authRoutes = [
  {
    path: '/signin',
    name: 'signin',
    component: () => lazyLoadView(import('@src/views/accounts/SignIn.vue')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'overview' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => lazyLoadView(import('@src/views/accounts/SignUp.vue')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'overview' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/verify-account',
    name: 'verify-account',
    meta: { authRequired: true },
    component: () => lazyLoadView(import('@src/views/accounts/VerifyAccount.vue')),
    },
    {
      path: '/login-type',
      name: 'select-login-type',
      meta: { authRequired: true },
      component: () => lazyLoadView(import('@src/views/dashboard/LoginType.vue')),
      },
  {
    path: '/confirm-account',
    name: 'confirm-account',
    component: () => lazyLoadView(import('@src/views/accounts/ConfirmAccount.vue')),
    meta: { authRequired: true },
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: () =>
      lazyLoadView(import('@src/views/accounts/ResetPassword.vue')),
    meta: { authRequired: true },
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        store.dispatch('auth/logOut')
        next({ name: 'signin', query: { redirectFrom: routeTo.fullPath } })
       /* const authRequiredOnPreviousRoute = routeFrom.matched.some(
          (route) => route.meta.authRequired
        )
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute ? { name: 'overview' } : { ...routeFrom }
        ) */
      },
    },
  },
]
const errorPagesRoutes = [
  {
    path: '/404',
    name: '404',
    component: require('@views/pages/secondary/error-404').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  {
    path: '/500',
    name: '500',
    component: require('@views/pages/secondary/error-500').default,
    props: true,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
]

const dashboardRoutes = [
  {
    path: '/overview',
    name: 'overview',
    icon: 'home',
    // badge: {
    //   text: '1',
    //   varient: 'success',
    // },
    component: () => lazyLoadView(import('@views/pages/dashboard/dashboard')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
]

// PROFILE & ACCOUNT SETTINGS ROUTES
const profileSettingsRoutes = [
  {
    path:'/profile',
    name: 'profile',
    redirect:{ name:'settings'},
    meta: {authRequired: true},
    component: () => lazyLoadView(import('@src/views/dashboard/profile/profile.vue')),
    children: [
      {
        path:'/profile-settings',
        name:'settings',
        meta: {authRequired: true},
        component: () => lazyLoadView(import('@src/views/dashboard/profile/index.vue')),
      },
      {
        path:'/change-password',
        name:'changepassword',
        meta: {authRequired: true},
        component: () => lazyLoadView(import('@src/views/dashboard/profile/changepassword.vue')),
      },
      {
        path:'/change-phone-number',
        name:'changephonenumber',
        meta: {authRequired: true},
        component: () => lazyLoadView(import('@src/views/dashboard/profile/changenumber.vue')),
      },
      {
        path:'/change-language',
        name:'changlanguage',
        meta: {authRequired: true},
        component: () => lazyLoadView(import('@src/views/dashboard/profile/changelanguage.vue')),
      },
      {
        path:'/email-and-notification',
        name:'emailandnotification',
        meta: {authRequired: true},
        component: () => lazyLoadView(import('@src/views/dashboard/profile/emailandnotifications.vue')),
      },
      {
        path:'/default-account-settings',
        name:'changlanguage',
        meta: {authRequired: true},
        component: () => lazyLoadView(import('@src/views/dashboard/profile/changeaccountdefault.vue')),
      }
    ]
  }
]
const messagesRoutes = [
  {
    path: '/messages',
    name: 'Messages',
    icon: 'home',
    component: () => lazyLoadView(import('@views/pages/dashboard/dashboard')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
]

const contactRoutes = [
  {
    path: '/contacts',
    name: 'Contacts',
    icon: 'home',
    component: () => lazyLoadView(import('@views/pages/dashboard/dashboard')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
]

const authProtectedRoutes = [
  ...dashboardRoutes,...contactRoutes, ...messagesRoutes
]
const allRoutes = [
  ...authRoutes, 
  ...authProtectedRoutes, 
  ...errorPagesRoutes,
  ...profileSettingsRoutes
]

export { allRoutes, authProtectedRoutes }

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@components/_loading').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    // error: require('@views/_timeout').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
