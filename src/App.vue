<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/helloWorld">helloWorld</router-link><br>
    <router-link to="/demo">Demo</router-link><br>
    <!-- 这里的to的值是一个字符串不是链接 -->
    <!-- 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，导航后不会留下 history 记录。 -->
    <router-link to="demo" tag="label" active-class="_active" exact-active-class="exact-active">Demo（字符串形式）</router-link>
    <router-link :to="demo">Demo（动态绑定的属性）</router-link>
    <!-- js表达式 -->
    <router-link :to="{ path: 'demo' }">Demo（js表达式）</router-link>
    <!-- 命名的路由（这个没搞懂要干什么） -->
    <router-link :to="{ name: 'demo', params: { userId: 123 }}">User</router-link>

    <!-- router-link的一些属性
    replace:导航后不会留下history记录
    append:加上这个属性就是相对路径(/当前路径/导航的路径),不加就是根路径
    tag:把 router-link 渲染成那种标签,默认是<a>
    active-class:链接激活时使用的CSS类名
    exact-active-class:配置当链接被精确匹配的时候应该激活的 class
    event:声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组 -->

    <!-- 带查询参数，下面的结果为 /register?plan=private -->
    <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register（带参数的路由）</router-link>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      demo: '/demo1'
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
._active {
  background-color: red;
}
.exact-active {
  background-color: yellow;
}
</style>
