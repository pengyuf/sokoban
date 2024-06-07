export const routes = [
    {
        path: '/',
        component: () => import('../App.vue'),
        redirect: { name: 'game' },
        children: [
            { path: 'game', name: 'game', meta: { navTitle: '游戏' }, component: () => import('../components/game/Game.vue') },
            { path: 'editer', name: 'editer', meta: { navTitle: '编辑器' }, component: () => import('../components/editer/Editer.vue') },
        ]
    },
]