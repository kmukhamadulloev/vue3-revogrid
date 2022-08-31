<template>
  <tabs>
    <tab index="tab-1" title="Tab One">Tab 1</tab>
    <tab index="tab-2" title="Tab Two">Tab 2</tab>
    <tab index="tab-3" title="Tab Three">Tab 3</tab>
    <tab index="tab-4" title="Tab Four">Tab 4</tab>
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