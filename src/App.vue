<template>
  <metainfo>
  </metainfo>
  <router-view/>
</template>

<script>
import {useMeta} from "vue-meta";

export default {
  setup() {
    useMeta({
      title: '',
      htmlAttrs: {lang: 'ru', amp: true}
    })
  }
}
</script>

<style scoped>

</style>
