<template lang="pug">
v-app
  v-layout
    v-app-bar(color="primary" prominent ) 
      v-app-bar-nav-icon(
        variant="text"
        @click.stop="drawer = !drawer"
      )
      v-toolbar-title My files
      v-spacer
      template(v-if="$vuetify.display.mdAndUp")
        v-btn(icon="mdi-magnify" variant="text")
        v-btn(icon="mdi-filter" variant="text")
      v-btn(icon="mdi-dots-vertical" variant="text")      
    v-navigation-drawer(
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      :width="200" 
    )
      v-list(
        :items="items"
      ) 
    v-main(style="height: 500px;")
      div(:style="`background: ${useRouter().currentRoute.value.meta.bgColor};`")
        router-view
    AppFooter
</template>

<script setup>
  import { ref, watchEffect } from 'vue'
  import { useRouter } from 'vue-router'

  const drawer = ref(true)
  // const group = null
  const items = [
      {
        title: 'Foo',
        subtitle:'ddd',
        value: 'foo',
        link: '/page1'
      },
      {
        title: 'Page2',
        value: 'bar',
        link: '/page2'
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ]

  // watchEffect ( () => {
  //     drawer.value = false
  //   }
  // )
</script>
