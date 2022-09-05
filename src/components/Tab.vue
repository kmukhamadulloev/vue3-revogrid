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