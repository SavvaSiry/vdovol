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

    <div class="loyalty-block">

      <div class="loyalty-block__wrapper">
        <h2 class="text text_normal text_white">Система лояльности</h2>
        <h3 class="text text_medium text_white">Акции и специальные условия для постоянных посетителей</h3>

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

    <div class="contacts">
      <div class="column row_gap8">
        <div class="text text_normal">Как нас найти</div>
        <div class="text text_medium">Акции и специальные условия для постоянных посетителей</div>
      </div>

      <div class="contacts__buttons">
        <div v-for="i in 3" :key="i" class="button button_default">
          <div class="text text_bold text_white">Варшавская улица, 46</div>
          <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8.5H26M26 8.5L19.2 15.5M26 8.5L19.2 1.5" stroke="white" stroke-width="2"/>
          </svg>
        </div>
        <div class="button button_grey">
          <div class="text text_bold">Варшавская улица, 46</div>
          <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8.5H26M26 8.5L19.2 15.5M26 8.5L19.2 1.5" stroke="black" stroke-width="2"/>
          </svg>
        </div>
      </div>

      <div class="contacts__info">
        <div class="contacts__info__map">
          <img src="../assets/map.png" class="contacts__info__map__img">
        </div>

        <div class="contacts__info__content">
          <img src="../assets/info-block.png" class="contacts__info__content__img"/>
          <div class="text text_bold">Краснопутиловская, 111</div>
          <div class="column column_gap8">
            <div class="text text_medium">Пн-Пт 8:00-23:00</div>
            <div class="text text_medium">Сб-Вс 9:00-22:00</div>
            <div class="text text_medium">+ 7 (921) 483 38 83</div>
          </div>

          <div class="button button_default">
            <div class="text text_bold text_white">Проложить маршрут</div>
          </div>

          <div class="text text_bold">+ 7 (921) 483 38 83</div>
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

  background: @GreyColor;
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
    height: 920px;
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

.contacts {
  box-sizing: border-box;
  padding: 0 20px;
  height: auto;
  width: 100%;
  margin: 100px auto;
  max-width: 1280px;
}

.contacts__buttons {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.contacts__info {
  width: 100%;
  height: auto;

  margin-top: 40px;

  display: flex;
  border-radius: 12px;
  overflow: hidden;
  flex-direction: column;

  @media @min580 {
    flex-direction: row;
    height: 400px;
  }

  @media @min760 {
    height: 600px;
  }
}

.contacts__info__map {
  width: 100%;
  overflow: hidden;
  height: 450px;

  @media @min580 {
    height: auto;
  }
}

.contacts__info__map__img {
  width: auto;
  height: 100%;

  @media @min1200 {
    width: 100%;
    height: auto;
  }
}

.contacts__info__content {
  box-sizing: border-box;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  background: @GreyColor;

  @media @min580 {
    min-width: 320px;
  }
}

.contacts__info__content__img {
  width: 100%;
  height: auto;

  max-width: 315px;

  overflow: hidden;
  border-radius: 10px;
}

</style>
