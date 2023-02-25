<script lang="ts" setup>
useAnimation()

defineProps({
  error: Object,
})

const handleError = () => {
  document.body.style.opacity = '0'
  clearError({ redirect: '/' })
  setTimeout(() => {
    document.body.style.opacity = '1'
  }, 500)
}
</script>

<template>
  <NuxtLayout :is-footer="false" name="default">
    <div data-a-o>
      <div v-if="+error.statusCode === 404" class="error-page">
        <div class="container error-page__container">
          <div class="error-page__top">
            <h1 class="grid error-page__top-title">
              <span data-a-h class="error-page__span-title"> Page </span>
              <span data-a-h class="error-page__span-title"> Not </span>
              <span data-a-h class="error-page__span-title"> Found </span>
            </h1>
            <p data-a-t class="error-page__text">
              Oopsie! It looks like we took a wrong turn somewhere. We're not
              lost, we promise! Our team of cute little helpers is working hard
              to get things back on track. In the meantime, please enjoy this
              fluffy bears to brighten your day. Meow-sorry for the
              inconvenience!
            </p>
          </div>
          <TextButton data-a-t class="error-page__btn" @click="handleError"
            >Go home</TextButton
          >
        </div>
        <Bears :with-initial="false" />
      </div>
      <div
        v-else
        style="
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          max-width: 90%;
          margin: 0 auto;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 16px;
        "
      >
        Oops, looks like our server is taking a coffee break. We'll have it up
        and running in no time! Please Try to reload page
      </div>
    </div>
  </NuxtLayout>
</template>
