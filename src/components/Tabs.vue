<template>
  <div class="tabs">
    <slot></slot>
    <ul class="tabs__wrapper">
      <li v-for="tab in tabs" :key="tab.index" @click="selected = tab.index" :class="{ active: tab.index == selected }">{{ tab.title }}</li>
    </ul>
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
  padding: 5px 15px;
  text-align: center;
  color: #333;
  transition: all .5s;
  background: #efefef;
  min-width: 85px;
  font-size: .8rem;
  transition: background-color .4s, color .4s;
}
.tabs__wrapper>li.active {
  background: #27b;
    color: #fff;
}
</style>