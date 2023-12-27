<template>
  <AppHeader/>

  <main>
    <LineBanner
        :text="'24 часа'"
    />

    <InfoBlock/>


    <div class="address-block">
      <h2 class="text text_normal">Адрес наших точек</h2>

      <div class="address-block__content">

        <div v-for="i in 3" :key="i" class="address__card">
          <img class="address__card__img" src="../assets/info-block.png" alt="Cafe">

          <div class="address__card__info">
            <div class="row address__card__info__row row_gap8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13 20.9998H12H10.9997L6.49985 16.5C3.46229 13.4624 3.46229 8.53754 6.49985 5.49998C9.53742 2.46241 14.4623 2.46241 17.4999 5.49998C20.5374 8.53754 20.5374 13.4624 17.4999 16.5L13 20.9998ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                      fill="white"/>
              </svg>
              <div class="text text_semi-bold text_white">Ленсовета, 22</div>
            </div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 20H33M33 20L26.2 27M33 20L26.2 13" stroke="white" stroke-width="3"/>
            </svg>
          </div>
        </div>

      </div>
    </div>

    <div class="menu">
      <div class="text text_normal">Меню</div>
      <div class="text text_medium">По домашнему, как вы любите</div>
      <div class="menu__list">

        <div v-for="i in 8" :key="i" class="menu__card">
          <div class="menu__card__img-container">
            <div class="menu__card__img"></div>
          </div>
          <div class="menu__card__info">
            <div class="text text_bold">Шаверма классическая</div>
            <div class="text text_bold">89 р / 100 г</div>
            <div class="text text_small">Приготовили очень вкусно</div>
          </div>
        </div>
      </div>
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

export default {
  name: "HomePage",
  components: {InfoBlock, LineBanner, AppFooter, AppHeader},
  mixins: [WidthHeightMixin]
}
</script>

<style lang="less" scoped>
@import "../style";

.address-block {
  margin-top: 60px;
  margin-left: 20px;

  @media @min760 {
    margin-top: 80px;
  }

  @media @min1200 {
    margin-left: 100px;
  }
}

.address-block__content {
  display: flex;
  gap: 20px;

  overflow-x: scroll;

  margin-top: 40px;
  margin-bottom: 100px;

  @media @min760 {
    gap: 40px;
  }
}

.address__card {
  position: relative;
  width: 340px;
  height: 226px;

  box-sizing: border-box;
  overflow: hidden;

  border-radius: 10px;
  flex-shrink: 0;

  @media @min760 {
    width: 600px;
    height: 400px;
  }
}

.address__card__info {
  position: absolute;
  bottom: 0;

  box-sizing: border-box;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 56px;

  background: @OrangePrimaryColor;

  @media @min760 {
    height: 80px;
  }
}

.address__card__info__row {
  align-items: center;
}

.address__card__img {
  width: 100%;
  height: auto;
}

.menu {
  margin-left: 20px;
  margin-right: 20px;

  text-align: center;

  @media @min1200 {
    margin-left: 100px;
    margin-right: 100px;
  }
}

.menu__list {
  max-width: 1240px;
  margin: 40px auto 60px;

  gap: 40px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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

  width: 100%;
  flex: 1;
  border-radius: 10px;
}

.menu__card__img {
  height: 100%;
  width: 100%;

  background: @GreyColor;
}

.menu__card__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

}

</style>
