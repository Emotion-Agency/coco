<script lang="ts" setup>
const $inputs = ref([])

const formData = reactive({
  hasErrors: true,
  inputs: [
    {
      required: true,
      id: 'email',
      name: 'Email',
      label: 'Your Email',
      type: 'email',
      validation: 'email',
      validationText: 'incorrect email',
      error: true,
      value: '',
    },
  ],
})

const { onInputValue, onSubmit } = useForm(formData, $inputs)
</script>

<template>
  <form class="footer__form" novalidate @submit.prevent="onSubmit">
    <fieldset>
      <legend class="footer__form-title">Follow us</legend>
      <TheInput
        v-for="input in formData.inputs"
        :id="input.id"
        :key="input.id"
        ref="$inputs"
        class="footer__input"
        :type="input.type"
        :placeholder="input.label"
        :required="input.required"
        :validation-text="input.validationText && input.validationText"
        :validation="input.validationText && input.validation"
        @input-value="onInputValue"
      />
    </fieldset>
  </form>
</template>
