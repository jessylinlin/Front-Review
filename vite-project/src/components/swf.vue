<template>
  <h3>Revision 1</h3>
  <div class="main-text">Minimal PWA, open Console for more~~~</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })

onMounted(() => {
  //注册service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').then((registrition) => {
        console.log('Service worker register')
      }, (err) => {
        console.log('err')
      })
    })
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>