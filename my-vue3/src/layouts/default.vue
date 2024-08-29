<template lang="pug">
v-app
  v-layout.rounded.rounded-md
    v-app-bar(
      title="Панель приложений"
      color="teal-darken-5"
    )
    v-navigations-drawer
      v-list
        v-list-item(
          Title="Навигация"
        )
    v-main
      div(:style="`background: ${useRouter().currentRoute.value.meta.bgColor};`")
        router-view
    AppFooter
</template>

<script setup>
  import { useRouter } from 'vue-router'
</script>
