<template>
  <div class="container toast-container">
    <TransitionGroup
      name="fade"
      mode="out-in"
    >
      <AppToastItem
        v-for="toast in toasts"
        :key="toast.id"
        :toast="toast"
        @hide="hide"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const { toasts,updateToasts } = useToasts()

const hide = (id: string) => {
  const filteredToasts = toasts.value.filter(toast => toast.id !== id)
  updateToasts(filteredToasts)
}

</script>