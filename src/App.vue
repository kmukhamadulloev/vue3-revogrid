<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
body {
  margin: 0;
  height: 100vh;
  font-size: 1rem;
  font-family: system-ui;
}

.p {
  padding: 1rem;
}

.pt {
  padding-top: 1rem;
}

.pb {
  padding-bottom: 1rem;
}

.text-center {
  text-align: right;
}

.row {
  display: flex;
}

.cl-12 {
  width: 100%;
}
</style>