<template>
  <div class="banner-line">
    <div class="text text_semi-bold text_white">{{ text }}</div>
    <div class="text text_semi-bold text_white">{{ text }}</div>
    <div v-if="isWidth760()" class="text text_semi-bold text_white">{{ text }}</div>
    <div v-if="isWidth580()" class="text text_semi-bold text_white">{{ text }}</div>
  </div>
</template>

<script>
import {WidthHeightMixin} from "../mixins/WidthHeightMixin.js";

export default {
  name: "LineBanner",
  mixins: [WidthHeightMixin],
  props: {
    text: String,
    require: true
  }
}
</script>

<style lang="less" scoped>
@import "../style";

.banner-line {
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: @OrangePrimaryColor;
}
</style>
