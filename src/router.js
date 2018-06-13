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
            },
        ]
    }
];
export default routers;