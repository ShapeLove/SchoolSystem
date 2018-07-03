import Mlayout from './views/layout/Mlayout'
const routers = [
    {
        path: '/',
        redirect: '/dashboard',
        component: Mlayout,
        children: [{
            path: 'dashboard',
            name:'dashboard',
            meta:{title: '首页'},
            component: (resolve) => require(['./views/dashboard/dashboard.vue'], resolve)
        }]
    },
    {
        path: '/test',
        component: (resolve) => require(['./views/score/score.vue'], resolve)
    },
    {
        path:'/login',
        component:(resovle) => require(['./views/login/login.vue'],resovle)
    },
    {
        path:'/hxc',
        component:(resolve) => require(['./views/score/hou.vue'],resolve)
    },
    {
        path: '/student',
        component: Mlayout,
        redirect: '/student/list',
        children: [
            {
                path: 'list',
                name: 'student',
                meta: {title: '学生管理', icon: 'tree'},
                component: (resolve) => require(['./views/student/student.vue'], resolve),
            },
        ]
    },
    {
        path: '/huodong',
        component: Mlayout,
        redirect: '/huodong/list',
        children: [
            {
                path: 'list',
                name: 'huodong',
                component: (resolve) => require(['./views/huodong/huodong.vue'], resolve),
            }
        ]
    },
    {
        path:'/homework',
        component:Mlayout,
        redirect:'/homework/list',
        children:[
            {
                path:'list',
                name:'homework',
                meta:{title:'家庭作业功能',icon:''},
                component:(resolve) => require(['./views/homework/homework.vue'],resolve)
            }
        ]
    },
    {
        path:'/classTable',
        component:Mlayout,
        redirect:'/classTable/list',
        children:[
            {
                path:'list',
                name:'classTable',
                meta:{title:'课程表信息',icon:''},
                component:(resolve) => require(['./views/classtable/classtable.vue'],resolve)
            }
        ]
    },
    {
        path:'/teacher',
        component:Mlayout,
        redirect:'/teacher/list',
        children:[
            {
                path:'list',
                name:'teacher',
                meta:{title:'教师信息管理',icon:''},
                component:(resolve) => require(['./views/teacher/teacher.vue'],resolve)
            }
        ]
    },
    {
        path:'/board',
        component:Mlayout,
        redirect:'/board/list',
        children:[
            {
                path:'list',
                name:'board',
                meta:{title:'留言板'},
                component:(resolve) => require(['./views/board/board.vue'],resolve)
            }
        ]
    },
    {
        path:'/score',
        component:Mlayout,
        redirect:'/score/list',
        children:[
            {
                path:'list',
                name:'score',
                meta:{title:'成绩管理'},
                component:(resolve) => require(['./views/score/score.vue'],resolve)
            }
        ]
    },
    {
        path:'/message',
        component:Mlayout,
        redirect:'/message/list',
        children:[
            {
                path:'list',
                name:'message',
                meta:{title:'通知消息'},
                component:(resolve) => require(['./views/message/message.vue'],resolve)
            }
        ]
    },
    {
        path:'/eva',
        component:Mlayout,
        redirect:'/eva/list',
        children:[
            {
                path:'list',
                name:'eva',
                meta:{title:'月评价'},
                component:(resolve) => require(['./views/eva/eva.vue'],resolve)
            }
        ]
    },
    {
        path:'/leave',
        component:Mlayout,
        redirect:'/leave/list',
        children:[
            {
                path:'list',
                name:'leave',
                meta:{title:'请假信息'},
                component:(resolve) => require(['./views/leave/leave.vue'],resolve)
            }
        ]
    }

];
export default routers;
