<script setup lang="ts">
import AutocompleteForm from '@/components/AutocompleteForm.vue'
import { ref } from 'vue'

const value = ref(null)
const options = ref([
  { value: 'IS', label: 'Iceland' },
  { value: 'IE', label: 'Ireland' },
  { value: 'US', label: 'United States of America' },
  { value: 'JP', label: 'Japan' },
])
</script>

<template>
  <div class="parent">
    <AutocompleteForm v-model="value" :options="options" placeholder="Please enter any key." />
  </div>
</template>
<style scoped>
.parent:deep(.autocomplete-form) {
  /* --icon-color: */
  /* --icon-right: */
  /* --icon-height: */
  /* --icon-width: */

  /* --input-font-size: */
  /* --input-background-color: */
  /* --input-border-radius: */
  --input-border: 1px solid red;
  /* --input-padding: */
  /* --input-placeholder-color: */

  /* --option-list-top: */
  /* --option-list-border: */
  /* --option-list-box-shadow: */
  /* --option-list-background: */

  /* --option-item-font-size: */
  /* --option-item-padding: */
  /* --option-item-background-hover: */
  /* --option-item-background-selected: */
}
</style>
