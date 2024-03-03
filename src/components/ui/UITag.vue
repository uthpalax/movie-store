<script setup lang="ts">
const { label } = defineProps({
    label: { required: true, type: String}
})
</script>
<template>
    <span class="rounded p-2 border border-black mr-2"> {{  label  }}</span>
</template>
