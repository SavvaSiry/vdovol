<template>
  <div class="contacts">
    <div class="column row_gap8">
      <div class="text text_normal">Как нас найти</div>
      <div class="text text_medium">Акции и специальные условия для постоянных посетителей</div>
    </div>

    <div class="contacts__buttons">
      <div class="button button_default"
           v-for="item in cards"
           :key="item.address"
           @click="selectedCard = item"
           :class="{'button_grey' : selectedCard === item}"
      >
        <div class="text text_bold"
             :class="{'text_white' : selectedCard !== item}"
        >
          {{ item.address }}
        </div>
        <svg v-if="selectedCard !== item" width="28" height="17" viewBox="0 0 28 17" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8.5H26M26 8.5L19.2 15.5M26 8.5L19.2 1.5" stroke="white" stroke-width="2"/>
        </svg>
        <svg v-else width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8.5H26M26 8.5L19.2 15.5M26 8.5L19.2 1.5" stroke="black" stroke-width="2"/>
        </svg>
      </div>
    </div>

    <div class="contacts__info">
      <div class="contacts__info__map">

        <div id="map" style="width: 100%; height: 100%"></div>

      </div>

      <div class="contacts__info__content">

        <img src="../assets/info-block.png" class="contacts__info__content__img"/>

        <div class="text text_bold">{{ selectedCard.address }}</div>
        <div class="column column_gap8">
          <div class="text text_medium">{{ selectedCard.weekDays }}</div>
          <div class="text text_medium">{{ selectedCard.weekend }}</div>
          <div class="text text_medium">{{ selectedCard.firstNum }}</div>
        </div>

        <div class="button button_default">
          <div class="text text_bold text_white">Проложить маршрут</div>
        </div>

        <div class="row row_gap20">
          <div class="text text_bold">{{ selectedCard.secNum }}</div>

          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.5056C0 7.0736 0 4.3616 1.68 2.6656C3.384 0.985596 6.096 0.985596 11.52 0.985596H12.48C17.912 0.985596 20.624 0.985596 22.32 2.6656C24 4.3696 24 7.0816 24 12.5056V13.4656C24 18.8976 24 21.6096 22.32 23.3056C20.616 24.9856 17.904 24.9856 12.48 24.9856H11.52C6.088 24.9856 3.376 24.9856 1.68 23.3056C0 21.6016 0 18.8896 0 13.4656V12.5056Z" fill="#0077FF"/>
            <path d="M12.7669 18.2736C7.29487 18.2736 4.17488 14.5296 4.04688 8.28962H6.79888C6.88688 12.8656 8.90287 14.8016 10.5029 15.2016V8.28962H13.0869V12.2336C14.6629 12.0656 16.3269 10.2656 16.8869 8.28162H19.4629C19.2528 9.30863 18.8333 10.2813 18.2304 11.1388C17.6275 11.9964 16.8542 12.7204 15.9589 13.2656C16.958 13.7629 17.8404 14.4664 18.5478 15.3296C19.2552 16.1928 19.7716 17.1962 20.0629 18.2736H17.2229C16.6149 16.3776 15.0949 14.9056 13.0869 14.7056V18.2736H12.7749H12.7669Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import {YandexMapDefaultMarker} from "vue-yandex-maps";

export default {
  name: "CardBlock",
  data() {
    return {
      selectedCard: {},
      cards: [
        {
          address: "Краснопутиловская, 111",
          weekDays: "Пн-Пт 8:00-23:00",
          weekend: "Сб-Вс 9:00-22:00",
          firstNum: "+ 7 (921) 483 38 83",
          secNum: "+ 7 (921) 483 38 83"
        },
        {
          address: "Варшавская улица, 46",
          weekDays: "Пн-Пт 8:00-23:00",
          weekend: "Сб-Вс 9:00-22:00",
          firstNum: "+ 7 (921) 483 38 83",
          secNum: "+ 7 (921) 483 38 83"
        },
      ]
    }
  },
  methods() {

  },
  async mounted() {
    this.selectedCard = this.cards[0];

    // initMap();

    async function initMap() {
      await ymaps3.ready;
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
      } = ymaps3;

      const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

      const map = new YMap(
          document.getElementById('map'),
          {
            location: {
              center: [37.588144, 55.733842],
              zoom: 10
            }
          }
      );

      const INC_POINT = {
        coordinates: [37.738521, 55.684758],
        color: '#ff0000',
        title: '<strong>Допустим это тут<strong>',
      };

      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());

      const marker = new YMapDefaultMarker(INC_POINT);
      map.addChild(marker);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../style";

.contacts {
  box-sizing: border-box;
  padding: 0 20px;
  height: auto;
  width: 100%;
  margin: 55px auto;
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
