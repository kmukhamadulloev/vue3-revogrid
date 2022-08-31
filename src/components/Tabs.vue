<template>
  <div class="tabs">
    <ul class="tabs__wrapper">
      <li v-for="tab in tabs" :key="tab.index" @click="selected = tab.index" :class="{ active: tab.index == selected }">{{ tab.title }}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide } from 'vue'

export default {
  setup(props, { slots }) {
    const tabs = ref(slots.default().map((tab) => tab.props))
    const selected = ref(tabs.value[0].index)

    provide("selected", selected);
    return {
      selected,
      tabs
    }
  }
}
</script>

<style scoped>
.tabs {
  padding: 1rem;
}

.tabs__wrapper {
  list-style: none;
  display: flex;
  justify-content: left;
  margin: 0;
  padding: 0;
}

.tabs__wrapper>li {
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: #333;
  border-bottom: 5px solid #ccc;
  transition: all .5s;
}

.tabs__wrapper>li.active {
  border-bottom-color: #27b;
  color: #27b;
}
</style>