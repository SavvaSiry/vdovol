<template>
  <AppHeader
      @scroll-to="scrollTo"
  />

  <main>
    <LineBanner
        :text="'24 часа'"
    />

    <InfoBlock/>

    <LineBlockScroll/>

    <div class="menu" ref="menu">
      <div class="text text_normal">Меню</div>
      <div class="text text_medium">По домашнему, как вы любите</div>
      <div class="menu__list">

        <div v-for="i in 8" :key="i" class="menu__card">
          <div class="menu__card__img-container">
            <div class="menu__card__img">
              <svg class="menu__card__img__svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_411_10954" fill="white">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M157.977 72.997C158.128 70.7929 156.323 69 154.114 69H80.0004L5.88716 69C3.67802 69 1.87301 70.7929 2.02342 72.997C2.53684 80.5205 4.49703 87.9267 7.83317 94.9069C11.7587 103.12 17.5125 110.583 24.766 116.87C28.5165 120.12 32.63 123.023 37.0385 125.539V131C37.0385 134.866 40.1725 138 44.0385 138H115.963C119.829 138 122.963 134.866 122.963 131V125.539C127.371 123.023 131.484 120.12 135.235 116.87C142.488 110.583 148.242 103.12 152.168 94.9069C155.504 87.9267 157.464 80.5205 157.977 72.997Z"/>
                </mask>
                <path d="M157.977 72.997L163.963 73.4055V73.4055L157.977 72.997ZM80.0004 69V75V69ZM5.88716 69L5.88716 63H5.88716V69ZM2.02342 72.997L-3.96266 73.4055L2.02342 72.997ZM7.83317 94.9069L2.41968 97.4943H2.41968L7.83317 94.9069ZM24.766 116.87L20.8364 121.404V121.404L24.766 116.87ZM37.0385 125.539H43.0385V122.055L40.0126 120.328L37.0385 125.539ZM122.963 125.539L119.989 120.328L116.963 122.055V125.539H122.963ZM135.235 116.87L131.305 112.336L131.305 112.336L135.235 116.87ZM152.168 94.9069L146.754 92.3196V92.3196L152.168 94.9069ZM154.114 75C153.127 75 151.887 74.1226 151.991 72.5885L163.963 73.4055C164.369 67.4633 159.519 63 154.114 63V75ZM80.0004 75H154.114V63H80.0004V75ZM5.88716 75L80.0004 75L80.0004 63L5.88716 63L5.88716 75ZM8.00949 72.5884C8.11419 74.1226 6.87416 75 5.88716 75V63C0.481878 63 -4.36817 67.4633 -3.96266 73.4055L8.00949 72.5884ZM13.2467 92.3196C10.2298 86.0075 8.47018 79.3392 8.00949 72.5884L-3.96266 73.4055C-3.3965 81.7018 -1.23579 89.8458 2.41968 97.4943L13.2467 92.3196ZM28.6956 112.336C22.0307 106.559 16.7974 99.749 13.2467 92.3196L2.41968 97.4943C6.72002 106.492 12.9943 114.607 20.8364 121.404L28.6956 112.336ZM40.0126 120.328C35.9337 118 32.1417 115.322 28.6956 112.336L20.8364 121.404C24.8914 124.918 29.3263 128.046 34.0644 130.75L40.0126 120.328ZM43.0385 131V125.539H31.0385V131H43.0385ZM44.0385 132C43.4862 132 43.0385 131.552 43.0385 131H31.0385C31.0385 138.18 36.8588 144 44.0385 144V132ZM115.963 132H44.0385V144H115.963V132ZM116.963 131C116.963 131.552 116.515 132 115.963 132V144C123.143 144 128.963 138.18 128.963 131H116.963ZM116.963 125.539V131H128.963V125.539H116.963ZM131.305 112.336C127.859 115.322 124.068 118 119.989 120.328L125.937 130.75C130.675 128.046 135.11 124.918 139.164 121.404L131.305 112.336ZM146.754 92.3196C143.203 99.749 137.97 106.559 131.305 112.336L139.164 121.404C147.006 114.607 153.281 106.492 157.581 97.4943L146.754 92.3196ZM151.991 72.5884C151.531 79.3392 149.771 86.0075 146.754 92.3196L157.581 97.4943C161.237 89.8458 163.397 81.7018 163.963 73.4055L151.991 72.5884Z" fill="#B4B7C1" mask="url(#path-1-inside-1_411_10954)"/>
                <path d="M10 89H152" stroke="#B4B7C1" stroke-width="6" stroke-linecap="round"/>
                <path d="M57.2222 16L56.2352 17.1985C53.1943 20.891 53.1943 26.2201 56.2352 29.9126L59.7648 34.1985C62.8057 37.891 62.8057 43.2201 59.7648 46.9126L57.2222 50" stroke="#B4B7C1" stroke-width="6" stroke-linecap="round"/>
                <path d="M79.7778 16L78.6452 17.4811C75.9033 21.0666 75.9033 26.0445 78.6452 29.6301L82.3548 34.4811C85.0967 38.0666 85.0967 43.0445 82.3548 46.6301L79.7778 50" stroke="#B4B7C1" stroke-width="6" stroke-linecap="round"/>
                <path d="M102.222 16L101.235 17.1985C98.1943 20.891 98.1943 26.2201 101.235 29.9126L104.765 34.1985C107.806 37.891 107.806 43.2201 104.765 46.9126L102.222 50" stroke="#B4B7C1" stroke-width="6" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <div class="menu__card__info">
            <div class="text text_bold">Шаверма классическая</div>
            <div class="text text_bold">89 р / 100 г</div>
            <div class="text text_small">Приготовили очень вкусно</div>
          </div>
        </div>
      </div>

      <button class="button menu__button button_default">
        <div class="text text_bold text_white">Смотреть полностью</div>
        <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8.5H26M26 8.5L19.2 15.5M26 8.5L19.2 1.5" stroke="white" stroke-width="2"/>
        </svg>
      </button>
    </div>

    <LineBanner
        :text="'СКИДКА 30%'"
    />

    <div class="loyalty-block" ref="loyalty">

      <div class="loyalty-block__wrapper">
        <h2 class="text text_normal text_white">Система лояльности</h2>
        <h3 class="text text_medium text_white text_center">Акции и специальные условия для <br> постоянных посетителей
        </h3>

        <div class="loyalty-list loyalty-list_margin">

          <div v-for="i in 4" :key="i" class="loyalty-card">
            <div class="text text_semi-bold">Кэшбек до 5%</div>
            <div class="text text_medium">При участии в нашей системе лояльсности</div>
          </div>
        </div>

        <button class="button loyalty-block__button button_default">
          <div class="text text_bold text_white">Зарегестрироваться</div>
          <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8.5H26M26 8.5L19.2 15.5M26 8.5L19.2 1.5" stroke="white" stroke-width="2"/>
          </svg>
        </button>

      </div>

      <div class="loyalty-block__back"/>
      <div class="loyalty-block__img-container">
        <img class="loyalty-block__img" src="../assets/info-block.png" alt="Info">
      </div>
    </div>

    <LineBanner
        :text="'СКИДКА 30%'"
    />

    <div ref="contacts">
      <CardBlock

      />
    </div>


  </main>

  <AppFooter/>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import {WidthHeightMixin} from "../mixins/WidthHeightMixin.js";
import LineBanner from "./LineBanner.vue";
import InfoBlock from "./InfoBlock.vue";
import LineBlockScroll from "./LineBlockScroll.vue";
import CardBlock from "./CardBlock.vue";

export default {
  name: "HomePage",
  components: {CardBlock, LineBlockScroll, InfoBlock, LineBanner, AppFooter, AppHeader},
  mixins: [WidthHeightMixin],
  methods: {
    scrollTo(hook) {
      this.$refs[hook].scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../style";

.menu {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 200px;

  text-align: center;

  @media @min1200 {
    margin-left: 100px;
    margin-right: 100px;
  }
}

.menu__button {
  margin: 40px auto 0;

  @media @min760 {
    margin-top: 60px;
  }
}

.menu__list {
  max-width: 1240px;
  margin: 40px auto 60px;

  gap: 60px;
  display: flex;
  overflow-x: scroll;

  @media @min1400 {
    gap: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    overflow-x: initial;
  }
}

.menu__card {
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  gap: 22px;
}

.menu__card__img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 280px;
  height: 280px;
  flex: 1;
  border-radius: 10px;
}

.menu__card__img {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: @GreyColor;
}

.menu__card__img__svg {
  width: 120px;
  height: 120px;

  @media @min760 {
    width: 160px;
    height: 160px;
  }
}

.menu__card__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.loyalty-block {
  position: relative;

  width: 100%;
  height: 900px;

  overflow: hidden;

  @media @min990 {
    height: 1100px;
  }

  @media @min1200 {
    height: 850px;
  }
}

.loyalty-block__button {
  margin-top: 32px;

  @media @min760 {
    margin-top: 50px;
  }
}

.loyalty-block__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: 0 20px;

  height: 100%;
}

.loyalty-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;

  &_margin {
    margin-top: 40px;
  }

  @media @min1200 {
    grid-template-columns: 1fr 1fr;
  }
}

.loyalty-card {
  width: 314px;
  height: auto;

  box-sizing: border-box;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;

  background: @WhiteColor;
  border-radius: 10px;

  @media @min760 {
    width: 550px;
    height: auto;
    padding: 25px;
    gap: 14px;
  }
}

.loyalty-block__img-container {
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loyalty-block__img {
  height: 100%;
  width: auto;

  @media @min1400 {
    height: auto;
    width: 100%;
  }
}

.loyalty-block__back {
  position: absolute;
  z-index: -1;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
}

</style>
