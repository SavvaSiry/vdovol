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

        <div class="text text_bold">{{ selectedCard.secNum }}</div>
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

    initMap();

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
