<template>
  <div id="demo">
    <h1>1.{{ msg }}</h1>
    <div v-html="htmlMsg"></div>
    <label for="r1">2.修改颜色</label>
    <input type="checkbox" v-model="use" id="r1" /><br /><br />
    <div v-bind:class="{ class1: use }">v-bind:class 指令</div>
    <label for="r2">3.显示</label>
    <input type="checkbox" v-model="ok" id="r2" />
    <template v-if="ok">
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p> </template
    ><br />
    <a v-on:click="clickMe">4.别点我</a>
    <h1>
      {{
        message
          .split("")
          .reverse()
          .join("")
      }}
      <input type="text" v-model="message" />
    </h1>
    <label for="r3">5.首字母转大写(过滤器使用)</label>
    <input type="checkbox" id="r3" v-model="change1" />
    {{ cap | capitalize(change1) }}
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      msg: '这是一个自动绑定值测试',
      htmlMsg: '<h2>这是一个输出html的测试</h2>',
      use: false,
      ok: false,
      message: '子例的容内转反和定绑向双个一是这',
      change1: false,
      cap: 'helloWorld'
    }
  },

  methods: {
    clickMe: function () {
      alert('你是坏人，不听话！')
    }
  },
  filters: {
    capitalize: function (value, change1) {
      // eslint-disable-next-line semi
      if (!value) return '';
      value = value.toString()
      if (change1) return value.charAt(0).toUpperCase() + value.slice(1)
      return value
    }
  }
}
</script>

<style>
.class1 {
  background: cadetblue;
  color: cornsilk;
}
</style>
