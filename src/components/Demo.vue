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
      <p>哈哈哈，打字辛苦啊！！！</p>
    </template><br />
    <a v-on:click="clickMe">4.别点我</a>
    <h1>
      {{
        message.split("").reverse().join("")
      }}
      <input type="text" v-model="message" />
    </h1>
    <label for="r3">5.首字母转大写(过滤器使用)</label>
    <input type="checkbox" id="r3" v-model="change1" />
    {{cap | capitalize(change1) }}
    <br>
    <label for="v-if1">测试v-if功能</label><input type="text" v-model="show" id="v-if1" />
    <label v-if="show==='A'">输入了A</label>
    <label v-else-if="show==='B'">输入了B</label>
    <label v-else>输入了其他{{show}}</label>
    <br>
    <label>显示一个随机数{{randomNum}}</label>
    <label>v-for例子,for循环的第二个参数为数组下标</label>
    <ol>
      <li v-for="(user,index) in  userList" :key="user" :key2="index">
        {{user.name}}--{{index}}
      </li>
    </ol>
    <label>v-for例子,循环数组中的map</label>
    <ol>
      <li v-for="(user) in  userList" :key="user.name">
        {{user.name}}{{user.age}}--{{index}}
      </li>
    </ol>
    <label>computed使用，反转示例，{{reverseMessage}}</label>
    <label>监听器使用，可以监听变量的改变（这是变量number）number={{number}}</label>
    <input type="button" value="点我增加number的值" @click="number++"><br>
    <label>使用监听器换算长度单位</label><br>
    <input type="text" v-model="kilometers"><label>千米</label>
    <input type="text" v-model="meters" /><label>米</label><br>
    <div v-bind:class="{active:active,'text_danger':hasError}">使用样式</div>
    <div v-bind:class="cssObject">样式也可以是个json对象</div>
    <div v-bind:class="[activeCss,text_dangerCss]">样式也可以是个数组</div>
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
      cap: 'helloWorld',
      show: '',
      randomNum: Math.random(),
      number: 0,
      meters: 0,
      kilometers: 0,
      userList: [
        { name: 'dqwe', age: 12 }, { name: 'cwer', age: 12 }, { name: 'bert', age: 12 }
      ],
      active: true,
      hasError: true,
      cssObject: {
        active: true,
        'text_danger': true
      },
      activeCss: 'active',
      text_dangerCss: 'text_danger'
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
  },
  computed: {
    reverseMessage: function () {
      return this.msg.split('').reverse('').join('')
    }
  },
  watch: {
    number: function (nval, oval) {
      alert('number由:' + oval + '变为:' + nval)
    },
    meters: function (val) {
      this.kilometers = val / 1000
    },
    kilometers: function (val) {
      this.meters = val * 1000
    }
  }
}
</script>

<style>
.class1 {
  background: cadetblue;
  color: cornsilk;
}
.active {
  width: 100px;
  height: 100px;
  background-color: red;
  float: left;
}
.text_danger {
  background-color: green;
}
</style>
