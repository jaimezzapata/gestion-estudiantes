import Panel from '../layouts/Panel'
import Login from '../layouts/auth/Login'

export let rutasMenu = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/panel',
        element: <Panel />
    }
]