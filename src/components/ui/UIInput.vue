<template>
  <input
    class="w-72 mx-8 px-4 py-2 text-md rounded-full border border-black"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
const { modelValue} = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
</script>
