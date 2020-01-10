import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'

Vue.use(Router)
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
export default new Router({
  routes: [{
    path: '/helloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }, { // 这里引用的就是一个自定义组件
    path: '/component4',
    name: 'component4',
    component: Demo.components.component2
  }]
})
