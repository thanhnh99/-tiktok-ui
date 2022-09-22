import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'

//public Routes
export const publicRoutes = [
    {path: '/', component : Home},
    {path: '/following', component : Following},
    {path: '/@:nickname', component : Following},
    {path: '/upload', component : Upload, layout: null},
]


//login require
export const privateRoutes = [
    
]