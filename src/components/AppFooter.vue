<template>
  <footer>
    <div class="footer">
      <img class="footer__img" src="../assets/logo.png" alt="">
      <div class="row row_gap40">
        <div class="text text_bold text_white">Главная</div>
        <div class="text text_bold text_white">Блюда</div>
        <div class="text text_bold text_white">Система лояльности</div>
        <div class="text text_bold text_white">Адреса</div>
      </div>
    </div>

  </footer>

</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style lang="less" scoped>
@import "../style.less";

.footer {
  position: relative;
  width: 100%;
  height: 490px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: @BlackColor;

  @media @min580 {
    height: 364px;
  }

  @media @min990 {
    height: 272px;
  }
}

.footer__img {
  position: absolute;
  left: 120px;
}

</style>
