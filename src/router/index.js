import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes =
    [
    {
        path: '/datastc',
        name: 'datastc',
        component: () => import('../components/Data_Sructure/DS.vue'),
        children: [
            {path: 'undrc_graph',component: () => import('../components/Data_Sructure/DS_graph_un.vue') },
            {path: 'oriented',component: () => import('../components/Data_Sructure/DS_graph_or.vue')}
        ] 
    },
    {
        path: '/algintro',
        name: 'algintro',
        component: () => import('../components/Introduction/AlgIntro.vue') ,
        children: [
            {path: 'dij',component: () => import('../components/Introduction/AlgIntro_dij.vue') },
            {path: 'fly',component: () => import('../components/Introduction/AlgIntro_fly.vue') },
            {path: 'SPFA',component: () => import('../components/Introduction/AlgIntro_SPFA.vue') },
            {path: 'BF',component: () => import('../components/Introduction/AlgIntro_bf.vue') },
        ]

    },
    {
        path: '/algcmp',
        name: 'algcmp',
        component: () => import('../components/Compare/Algcmp.vue'),
        children: [
            {path: 'upload',component: () => import('../components/Compare/Algcmp_upload.vue') },
            {path: 'example',component: () => import('../components/Compare/Algcmp_example.vue') },
        ] 
    },
    {
        path: '/literature',
        name: 'literature',
        component: () => import('../components/Lit.vue') 
    },
    ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router