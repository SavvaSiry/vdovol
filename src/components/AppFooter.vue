<template>
  <footer>
    <div class="footer">
      <img class="footer__img" src="../assets/logo.png" alt="">

      <div class="row footer__nav row_gap40">
        <div class="text text_bold text_white" @click="this.$emit('scroll-to', 'main')">Главная</div>
        <div class="text text_bold text_white" @click="this.$emit('scroll-to', 'menu')">Блюда</div>
        <div class="text text_bold text_white" @click="this.$emit('scroll-to', 'loyalty')">Система лояльности</div>
        <div class="text text_bold text_white" @click="this.$emit('scroll-to', 'contacts')">Адреса</div>
      </div>

      <div class="row row_gap8">
        <div class="text text_bold text_white">+ 7 (921) 483 38 83</div>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-0.000488281" width="30" height="30" rx="15" fill="#F5F5F5"/>
          <path d="M20.9995 17.5C21.2856 18.324 20.9991 19.7909 20.9991 19.7909C20.9998 19.9586 20.9654 20.1246 20.8981 20.2782C20.8308 20.4319 20.732 20.5698 20.6082 20.6832C20.4844 20.7966 20.3382 20.8829 20.179 20.9366C20.0198 20.9903 19.8512 21.0103 19.6838 20.9952C17.8272 20.7938 16.0438 20.1607 14.4769 19.1466C13.019 18.222 11.7831 16.9885 10.8567 15.5336C9.83703 13.9627 9.20246 12.1741 9.00441 10.3128C8.98933 10.1463 9.00916 9.9785 9.06263 9.82005C9.11611 9.6616 9.20205 9.516 9.315 9.39251C9.42794 9.26903 9.56541 9.17037 9.71866 9.10282C9.8719 9.03526 10.0376 9.00029 10.2051 9.00013C10.2051 9.00013 12.1282 8.58252 12.8139 9.2913C13.4995 10.0001 13.9316 12.3922 13.3727 12.9985C12.8139 13.6048 12.6064 13.7632 12.6064 13.7632C13.4654 15.2708 14.7161 16.519 16.2266 17.3762C16.2266 17.3762 16.4995 16.5 17.5896 16.29C18.6798 16.0799 20.7135 16.676 20.9995 17.5Z" fill="#202024" stroke="#202024" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.000488281 14.4C-0.000488281 7.61 -0.000488281 4.22 2.09951 2.1C4.22951 0 7.61951 0 14.3995 0H15.5995C22.3895 0 25.7795 0 27.8995 2.1C29.9995 4.23 29.9995 7.62 29.9995 14.4V15.6C29.9995 22.39 29.9995 25.78 27.8995 27.9C25.7695 30 22.3795 30 15.5995 30H14.3995C7.60951 30 4.21951 30 2.09951 27.9C-0.000488281 25.77 -0.000488281 22.38 -0.000488281 15.6V14.4Z" fill="#F5F5F5"/>
          <path d="M15.9586 21.6101C9.11859 21.6101 5.21859 16.9301 5.05859 9.13012H8.49859C8.60859 14.8501 11.1286 17.2701 13.1286 17.7701V9.13012H16.3586V14.0601C18.3286 13.8501 20.4086 11.6001 21.1086 9.12012H24.3286C24.066 10.4039 23.5416 11.6197 22.788 12.6916C22.0343 13.7636 21.0677 14.6686 19.9486 15.3501C21.1975 15.9717 22.3005 16.8511 23.1848 17.9301C24.069 19.0092 24.7145 20.2634 25.0786 21.6101H21.5286C20.7686 19.2401 18.8686 17.4001 16.3586 17.1501V21.6101H15.9686H15.9586Z" fill="#202024"/>
        </svg>
      </div>

      <div class="text text_small text_light">2023 (C) Вдоволь. Разработка сайта terexov</div>

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

  box-sizing: border-box;
  padding-top: 170px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 36px;

  background: @BlackColor;

  @media @min760 {
    height: 364px;
  }

  @media @min990 {
    height: 272px;
    padding-top: 0;
  }
}

.footer__nav {
  flex-direction: column;
  gap: 25px;
  align-items: center;

  @media @min760 {
    flex-direction: row;
    gap: 60px;
  }
}

.footer__img {
  position: absolute;

  width: 130px;
  height: 130px;

  left: initial;
  top: 30px;

  @media @min990 {
    left: 120px;
    top: initial;
  }
}

</style>
