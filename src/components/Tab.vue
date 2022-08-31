<template>
  <div class="tab__details" v-show="index == selected">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  props: ['index'],
  setup() {
    const selected = inject("selected")

    return {
      selected
    }
  }
}
</script>

<style scoped>
.tab__details {
  padding: 1rem;
  min-height: 400px;
  box-shadow: 0 4px 8px 2px #ccc;
}
</style>