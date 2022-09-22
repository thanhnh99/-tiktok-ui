import routeConfig from '~/config/route'


import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'

//public Routes
export const publicRoutes = [
    {path: routeConfig.home, component : Home},
    {path: routeConfig.following, component : Following},
    {path: routeConfig.profile, component : Following},
    {path: routeConfig.upload, component : Upload, layout: null},
]


//login require
export const privateRoutes = [
    
]