<template>
	<div>
		<button @click="toggler = !toggler">
			Open the lightbox.
		</button>
<a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
  <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
  </a>
<a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
  <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
</a>
<a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
  <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
</a>
<a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
  <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
</a>
<a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
  <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
</a>


		<FsLightbox
			:toggler="toggler"
			:sources="[
				'https://i.imgur.com/fsyrScY.jpg',
				'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
				'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
			]"
		 />
	</div>
</template>

<script>
import FsLightbox from "fslightbox-vue/v3";
// import FsLightbox from "fslightbox-vue/v2"; for Vue 2

export default {
	components: { FsLightbox },
	data() {
		return {
			toggler: false
		}
	}
}
</script>