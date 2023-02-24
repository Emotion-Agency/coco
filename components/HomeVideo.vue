<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://player.vimeo.com/api/player.js',
    },
  ],
})
</script>

<template>
  <div>
    <div
      style="
        padding: 56.25% 0 0 0;
        position: relative;
        pointer-events: none;
        width: 100%;
        height: 100%;
      "
    >
      <iframe
        src="https://player.vimeo.com/video/802056864?h=777eb2a6c8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&autoplay=1&loop=1&muted=1&&title=0&byline=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        autoplay
        muted
        title="Coco Home"
      ></iframe>
    </div>
  </div>
</template>
