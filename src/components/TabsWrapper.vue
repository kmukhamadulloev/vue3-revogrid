<template>
  <div class="tabs">
    <ul>
      <li v-for="title in tabTitles" :key="title">
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      TabTitles: null
    }
  },
  setup(props, { slots }) {
    this.TabTitles = ref(slots.default().map((tab) => tab.props.title));
  },
}
</script>