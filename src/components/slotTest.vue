<template>
  <div>
    <span>这是一个匿名插槽：<slot>插槽默认值</slot></span><br>
    <span>这是两个具名插槽</span><br>
    <span>具名插槽1：<slot name="slot1">具名插槽1默认值</slot></span><br>
    <span>具名插槽2：<slot name="slot2">具名插槽2默认值</slot></span>
  </div>
</template>
<script>
export default {
  name: 'slotTest'
}
</script>
