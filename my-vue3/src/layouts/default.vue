<template lang="pug">
v-app
  v-app-bar(
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
  )
    template(v-slot:image)
      v-img(
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      )

    template(v-slot:prepend)
      v-app-bar-nav-icon

      v-app-bar-title Title
      v-spacer
      v-btn(icon)
        v-icon mdi-magnify
      v-btn(icon)
        v-icon mdi-heart
      v-btn(icon)
        v-icon mdi-dots-vertical

  v-main
    p 1
    router-view
    p 2
  AppFooter
</template>

<script setup>
  //
</script>
