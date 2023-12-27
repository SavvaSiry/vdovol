<template>
  <footer>
    <div class="footer">

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
  width: 100%;
  height: 490px;

  background: @BlackColor;

  @media @min580 {
    height: 364px;
  }

  @media @min990 {
    height: 272px;
  }
}

</style>
