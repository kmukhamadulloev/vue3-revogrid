<template>
  <div class="tabs">
    <ul class="tabs__wrapper">
      <li v-for="tab in tabs.value" :key="tab.tabIndex" @click="selectedIndex = tab.tabIndex" :class="{ active: tab.tabIndex == selectedIndex }">{{ tab.title }}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide } from 'vue'

export default {
  props: ['title'],
  setup(props, { slots }) {
    const tabs = ref(slots.default().map((tab) => tab.props))

    tabs.value.forEach(el => {
      console.log(el.tabIndex, el.title);
    });

    const selectedIndex = ref(tabs.value[0].tabIndex)

    
    console.log(selectedIndex)

    provide("selectedIndex", selectedIndex);
    return {
      selectedIndex,
      tabs
    }
  }
}
</script>

<style scoped>
.tabs {
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