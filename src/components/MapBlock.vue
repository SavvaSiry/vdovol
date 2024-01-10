<template>
  <div class="contacts">
    <div class="column row_gap8">
      <div class="text text_normal">Как нас найти</div>
      <div class="text text_medium">Акции и специальные условия для постоянных посетителей</div>
    </div>

    <div class="contacts__buttons">
      <div class="button button_default"
           v-for="rest in restaurants"
           :key="rest.address"
           @click="selectedCard = rest"
           :class="{'button_grey' : selectedCard === rest}"
      >
        <div class="text text_bold"
             :class="{'text_white' : selectedCard !== rest}"
        >
          {{ rest.address }}
        </div>
        <svg v-if="selectedCard !== rest" width="28" height="17" viewBox="0 0 28 17" fill="none"
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


        <yandex-map
            :settings="{
                          location: {
                            center: [parseFloat(mapCoordinateY), parseFloat(mapCoordinateX)],
                            zoom: 10,
                          },
                       }"
            width="100%"
            height="100%"
        >
          <yandex-map-default-scheme-layer/>
          <yandex-map-default-features-layer/>
          <template v-for="(rest, index) in restaurants" :key="index">
            <yandex-map-default-marker
                :settings="{
                  coordinates: [parseFloat(rest.coordinateY), parseFloat(rest.coordinateX)],
                  title: `<strong>${rest.address}<strong>`,
                }"
                :position="'default'"
            />
          </template>
        </yandex-map>

      </div>

      <div class="contacts__info__content">

        <img class="contacts__info__content__img"
             v-if="selectedCard.picture !== null && selectedCard.picture !== undefined"
             :src="'https://vdovol.terexov.ru/storage/uploads/' + selectedCard.picture.path"
        />

        <div class="text text_bold">{{ selectedCard.address }}</div>
        <div class="column column_gap8">
          <div class="text text_medium">{{ selectedCard.weekDaysOpeningHours }}</div>
          <div class="text text_medium">{{ selectedCard.weekendOpeningHours }}</div>
          <div class="text text_medium">{{ selectedCard.phoneNumber }}</div>
        </div>

        <div class="button button_default"
             @click="openInNewTab(selectedCard.linkRoute)"
        >
          <div class="text text_bold text_white">Проложить маршрут</div>
        </div>

        <div class="row row_gap20">
          <div class="text text_bold">{{ mainPhoneNumber }}</div>

          <svg @click="openInNewTab(vkLink)" class="svg" width="24" height="25" viewBox="0 0 24 25" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 12.5056C0 7.0736 0 4.3616 1.68 2.6656C3.384 0.985596 6.096 0.985596 11.52 0.985596H12.48C17.912 0.985596 20.624 0.985596 22.32 2.6656C24 4.3696 24 7.0816 24 12.5056V13.4656C24 18.8976 24 21.6096 22.32 23.3056C20.616 24.9856 17.904 24.9856 12.48 24.9856H11.52C6.088 24.9856 3.376 24.9856 1.68 23.3056C0 21.6016 0 18.8896 0 13.4656V12.5056Z"
                fill="#0077FF"/>
            <path
                d="M12.7669 18.2736C7.29487 18.2736 4.17488 14.5296 4.04688 8.28962H6.79888C6.88688 12.8656 8.90287 14.8016 10.5029 15.2016V8.28962H13.0869V12.2336C14.6629 12.0656 16.3269 10.2656 16.8869 8.28162H19.4629C19.2528 9.30863 18.8333 10.2813 18.2304 11.1388C17.6275 11.9964 16.8542 12.7204 15.9589 13.2656C16.958 13.7629 17.8404 14.4664 18.5478 15.3296C19.2552 16.1928 19.7716 17.1962 20.0629 18.2736H17.2229C16.6149 16.3776 15.0949 14.9056 13.0869 14.7056V18.2736H12.7749H12.7669Z"
                fill="white"/>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer, YandexMapMarker
} from "vue-yandex-maps";

export default {
  name: "MapBlock",
  components: {
    YandexMapMarker,
    YandexMapDefaultMarker, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMap
  },
  data() {
    return {
      selectedCard: {},
      settings: {
        location: {
          center: [37.617644, 55.755819],
          zoom: 10,
        },
      },
      points: [
        {coordinates: [37.8, 55.8]},
        {
          coordinates: [37.715175, 55.833436],
          title: '<strong>Silver crimson<strong> color',
          draggable: true,
        },
      ],
    }
  },
  props: {
    restaurants: {
      type: Array,
      require: true
    },
    mainPhoneNumber: {
      type: String
    },
    vkLink: {
      type: String
    },
    mapCoordinateX: {
      type: String,
      require: true,
    },
    mapCoordinateY: {
      type: String,
      require: true,
    }

  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank', 'noreferrer');
    },
  },
  watch: {
    restaurants: function (newVal, oldVal) {
      if (newVal !== undefined) {
        this.selectedCard = this.restaurants[0];
      }
    }
  },
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

.svg {
  cursor: pointer;
}

</style>
