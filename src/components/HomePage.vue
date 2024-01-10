<template>
  <AppHeader
      @scroll-to="scrollTo"
      :phoneNumber="page.mainPhoneNumber"
  />

  <main>
    <LineBanner
        :ticker="page.mainTicker"
    />

    <div ref="main">
      <MainBlock
          :mainBanner="page.mainBanner"
          :mainSailText="page.mainSailText"
          :mainSailTextBold="page.mainSailTextBold"
          :mainSailActive="page.mainSailActive"
          :mainH1="page.mainH1"
          :mainH2="page.mainH2"
      />
    </div>

    <RestaurantScrollBlock
        @scrollTo="scrollTo"
        @selectMapRestaurant="selectMapRestaurant"
        :restaurants="page.restaurants"
        :addressesH1="page.addressesH1"
        :addressesH2="page.addressesH2"
    />

    <div ref="menu">
      <MenuBLock
          :dishes="page.dishes"
          :menuButtonLink="page.menuButtonLink"
          :menuButtonActive="page.menuButtonActive"
          :menuH1="page.menuH1"
          :menuH2="page.menuH2"
      />
    </div>

    <LineBanner
        :ticker="page.loyaltyTicker"
    />

    <div ref="loyalty">
      <LoyaltyBlock
          :loyaltyList="page.loyaltyList"
          :loyaltyH1="page.loyaltyH1"
          :loyaltyH2="page.loyaltyH2"
          :loyaltyButtonLink="page.loyaltyButtonLink"
          :loyaltyButtonActive="page.loyaltyButtonActive"
          :loyaltyBackImage="page.loyaltyBackImage"
      />
    </div>

    <LineBanner
        :ticker="page.loyaltyTicker"
    />

    <div ref="contacts">
      <MapBlock
          ref="mapRef"
          :restaurants="page.restaurants"
          :mainPhoneNumber="page.mainPhoneNumber"
          :vkLink="page.vkLink"
          :mapCoordinateX="page.mapCoordinateX"
          :mapCoordinateY="page.mapCoordinateY"
          :mapH1="page.mapH1"
          :mapH2="page.mapH2"
      />
    </div>
  </main>

  <AppFooter
      @scroll-to="scrollTo"
      :vkLink="page.vkLink"
      :phoneLink="page.phoneLink"
  />
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import {WidthHeightMixin} from "../mixins/WidthHeightMixin.js";
import LineBanner from "./LineBanner.vue";
import MainBlock from "./MainBlock.vue";
import RestaurantScrollBlock from "./RestaurantScrollBlock.vue";
import MapBlock from "./MapBlock.vue";
import MenuBLock from "./MenuBlock.vue";
import LoyaltyBlock from "./LoyaltyBlock.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    MainBlock,
    LoyaltyBlock,
    MenuBLock,
    MapBlock,
    LineBanner,
    AppFooter,
    AppHeader,
    RestaurantScrollBlock
  },
  mixins: [WidthHeightMixin],
  methods: {
    selectMapRestaurant(hook, index) {
      this.$refs.mapRef.selectedCard = this.page.restaurants[index];
      this.scrollTo(hook);
    },
    scrollTo(hook) {
      this.$refs[hook].scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  data() {
    return {
      page: {
        metaTitle: '',
        metaDescription: '',
        metaImage: '',
      },
    }
  },
  metaInfo() {
    return {
      title: this.page.metaTitle,
      meta: [
        { vmid: 'og:description', name: 'og:description', content: this.page.metaDescription },
        { vmid: 'og:title', name: 'og:title', content: this.page.metaDescription },
        { vmid: 'og:image', name: 'og:image', content: this.page.metaImage.path },
      ]
    }
  },
  async beforeCreate() {
    await axios
        .get(import.meta.env.VITE_API + '/content/item/page?populate=1')
        .then((response) => {
          this.page = response.data
        }).catch((error) => console.log(error));
  },
}
</script>

<style lang="less" scoped>

</style>
