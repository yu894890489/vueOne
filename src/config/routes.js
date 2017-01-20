//加载模板文件  
import yewu from '../page/yewu'  
import home from '../page/home'
import chart from '../page/chart'
import gndb_dj_sq from '../page/gndb_dj_sq'  
//路由规则设置  
export default [ 
        {  
            path: '/',  
            redirect: '/SCFAdmin'  
        }, 
        {
            path:'/SCFAdmin',
            component:home,
            children:[
                {
                    path:'home',
                    component:home
                },
                {  
                    path: 'form_wizard',  
                    component: yewu  
                }
                ,{
                    path:'barPage',
                    component:chart
                },{
                    path:'record',
                    component:gndb_dj_sq
                }  
            ]
        }
]  