import config from '~/config'


import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'

//public Routes
export const publicRoutes = [
    {path: config.routes.home, component : Home},
    {path: config.routes.following, component : Following},
    {path: config.routes.profile, component : Following},
    {path: config.routes.upload, component : Upload, layout: null},
]


//login require
export const privateRoutes = [
    
]