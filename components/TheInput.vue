<template>
  <div class="input-content">
    <div
      class="input-wrapper"
      :class="[inputFocus && 'js-focus', error && 'js-error']"
    >
      <select
        v-if="type === 'select'"
        :id="id"
        ref="input"
        v-model="inputValue"
        :name="name"
        class="input select"
        placeholder="Select a webinar"
        @focus="onFocus"
        @blur="onBlur"
        @change="onInput"
      >
        <option v-for="option of options" :key="option">{{ option }}</option>
      </select>
      <input
        v-else
        :id="id"
        ref="$input"
        v-model="inputValue"
        class="input"
        :required="required"
        data-validation="required"
        :name="name"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
      />
      <label :for="id" class="input-placeholder">
        {{ placeholder }}
        <abbr v-if="required" title="required"> * </abbr>
      </label>
      <slot />
    </div>
    <small v-if="error" class="input-error">{{ validationText }}</small>
    <TextButton class="input-btn"> Send → </TextButton>
  </div>
</template>

<script setup lang="ts">
interface iProps {
  id: string
  type: string
  value?: string
  placeholder: string
  required?: boolean
  name?: string
  validation?: string | undefined | unknown
  validationText?: string | undefined | unknown
  options?: string[]
}

const props = defineProps<iProps>()
const emit = defineEmits(['inputValue'])

const {
  inputValue,
  inputFocus,
  error,
  $input,
  onFocus,
  onBlur,
  onInput,
  reset,
  throwError,
} = useInput(emit, props)

defineExpose({
  throwError,
  reset,
})
</script>
