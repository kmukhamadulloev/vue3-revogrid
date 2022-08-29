<template>
  <div class="tab__details" v-show="tabIndex == selectedIndex">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  props: ['tabIndex'],
  setup() {
    const selectedIndex = inject("selectedIndex")

    return {
      selectedIndex
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