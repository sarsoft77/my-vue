<template lang="pug">
v-container
  v-row
    v-col(cols="12")
      v-sheet.pa-1.ma-1
        pre {{ `${t}` }}
    v-col(cols="12")
      v-sheet.pa-1.ma-1
        pre {{ `${s}` }}
</template>
   
<script setup>
import { ref } from 'vue'
import DOMPurify from 'dompurify'

const t = `
<div x-data="{ show: false }">
  <button @click="show = !show" :aria-expanded="show ? 'true' : 'false'" :class="{ 'active': show }">
    Toggle Button
  </button>
</div>
`
const ADD_ATTR = ['x-data','x-bind','x-on','x-text','x-html','x-model','x-show',
  'x-transition','x-for','x-if','x-init','x-effect','x-ref','x-cloak','x-ignore']

DOMPurify.addHook('uponSanitizeElement', (node, data) => {
  if (node.nodeName === 'DIV'){
    if (node.getAttribute('x-data')) {
      console.log(node)
      // Если элемент div имеет атрибут x-data, не трогаем его
      return node
    }
  }  
})

const s = ref(DOMPurify.sanitize(t))
</script>

<style scoped>
pre {
  overflow: auto;
}  
</style>