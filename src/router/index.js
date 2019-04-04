import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WorkerStatistic from '@/views/WorkerStatistic.vue'
import WorkerTask from '@/views/WorkerTask.vue'
import WorkerInformation from '@/views/WorkerInformation.vue'
import WorkerQualification from '@/views/WorkerQualification.vue'
import RequesterInformation from '@/views/RequesterInformation.vue'
import RequesterEditProject from '@/views/RequesterEditProject.vue'
import Homepage from '@/views/Homepage.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import AdminRequest from '@/views/AdminRequest.vue'
import AdminWork from '@/views/AdminWork.vue'
import AdminApplication from '@/views/AdminApplication.vue'
import AdminInformation from '@/views/AdminInformation.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/worker-statistic',
      name: 'WorkerStatistic',
      component: WorkerStatistic
    },{
      path: '/admin-request',
      name: 'AdminRequest',
      component: AdminRequest
    },
    {
      path: '/admin-work',
      name: 'AdminWork',
      component: AdminWork
    },
    {
      path: '/admin-application',
      name: 'AdminApplication',
      component: AdminApplication
    },
    {
      path: '/admin-information',
      name: 'AdminInformation',
      component: AdminInformation
    },
    {
      path:'/worker-task',
      name:'WorkerTask',
      component: WorkerTask
    },{
      path:'/worker-information',
      name:'WorkerInformation',
      component:WorkerInformation
    },{
      path:'/worker-qualification',
      name:"WorkerQualification",
      component:WorkerQualification
    },{
      path:'/requester-information',
      name:"RequesterInformation",
      component:RequesterInformation
    },{
      path:'/homepage',
      name:"Homepage",
      component:Homepage
    },{
      path:'/login',
      name:"Login",
      component:Login
    },{
      path:'/register',
      name:"Register",
      component:Register
    },{
      path:'/requester-edit-project',
      name:"RequesterEditProject",
      component:RequesterEditProject,
    }
  ],
  mode:"history"
})
