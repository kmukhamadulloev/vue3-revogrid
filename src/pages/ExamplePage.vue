<template>
  <tabs>
    <tab index="tab-1" title="tab-1">Tab 1</tab>
    <tab index="tab-2" title="tab-2">Tab 2</tab>
    <tab index="tab-3" title="tab-3">Tab 3</tab>
    <tab index="tab-4" title="tab-4">Tab 4</tab>
  </tabs>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import Tab from '@/components/Tab.vue'

export default {
  name: "ExamplePage",
  components: {
    Tabs, Tab
  }
}
</script>