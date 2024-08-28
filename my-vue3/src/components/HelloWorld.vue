<template lang="pug">
  v-container.fill-height
    v-responsive.align-centerfill-height.mx-auto(
        max-width="900"
    )
      v-img(
        class="mb-4",
        height="150",
        src="@/assets/logo.png"
      )

      div.text-center
        div.text-body-2.font-weight-light.mb-n1 Welcome to

        h1.text-h2.font-weight-bold Vuetify

      div.py-4

      v-row
        v-col(cols="12")
          v-card.py-4(
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="outlined"
          )
            template(#image)
              v-img(position="top right")

            template(#title)
              h2.text-h5.font-weight-bold Get started

            template(#subtitle)
              div.text-subtitle-1 
              | Change this page by updating
              |
              v-kbd {{ `<HelloWorld />` }}
              |
              | in
              |
              v-kbd components/HelloWorld.vue
              | .

            v-overlay(
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            )

        v-col(cols="6")
          v-card(
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/"
            prepend-icon="mdi-text-box-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Learn about all things Vuetify in our documentation."
            target="_blank"
            title="Documentation"
            variant="text"
          )
            v-overlay(
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            )

        v-col(cols="6")
          v-card(
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Explore available framework Features."
            target="_blank"
            title="Features"
            variant="text"
          )
            v-overlay(
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            )

        v-col(cols="6")
          v-card(
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/components/all"
            prepend-icon="mdi-widgets-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Discover components in the API Explorer."
            target="_blank"
            title="Components"
            variant="text"
          )
            v-overlay(
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            )

        v-col(cols="6")
          v-card(
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://discord.vuetifyjs.com"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Connect with Vuetify developers."
            target="_blank"
            title="Community"
            variant="text"
          )
            v-overlay(
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            )
</template>

<script setup>
  //
</script>
