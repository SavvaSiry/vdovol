<template>
  <header>

    <div class="wrapper wrapper_paddings">

      <div class="header">

        <div class="header__container">
          <img class="header__logo" src="../assets/logo.png" alt="Logo">
          <div v-if="isWidth580()" class="text header__nav text_bold">
            <div class="header__nav__item">Меню</div>
            <div class="header__nav__item">Акции</div>
            <div class="header__nav__item">Как нас найти</div>
          </div>
          <div class="text header__phone text_bold">+ 7 (921) 483 38 83</div>
        </div>

        <div v-if="!isWidth580()" class="text header__nav text_bold">
          <div class="header__nav__item">Меню</div>
          <div class="header__nav__item">Акции</div>
          <div class="header__nav__item">Как нас найти</div>
        </div>
      </div>

    </div>

  </header>
</template>

<script>
import {WidthHeightMixin} from "../mixins/WidthHeightMixin.js";

export default {
  name: "AppHeader",
  mixins: [WidthHeightMixin]
}
</script>

<style lang="less" scoped>
@import "../style";

.header {
  width: 100%;
  height: 138px;

  box-sizing: border-box;
  padding: 16px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: @WhiteColor;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  width: 75px;
  height: 75px;

  @media @min760 {
    width: 100px;
    height: 100px;
  }
}

.header__nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 8px;

  @media @min580 {
    width: auto;
    gap: 30px;
  }

  @media @min760 {
    gap: 60px;
    justify-content: initial;
  }

}
</style>
