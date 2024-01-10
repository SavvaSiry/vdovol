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
        @scroll-to="scrollTo"
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
      />
    </div>

    <LineBanner
        :ticker="page.loyaltyTicker"
    />

    <div ref="contacts">
      <CardBlock
          :restaurants="page.restaurants"
          :mainPhoneNumber="page.mainPhoneNumber"
          :vkLink="page.vkLink"
      />
    </div>
  </main>

  <AppFooter
      @scroll-to="scrollTo"
  />
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import {WidthHeightMixin} from "../mixins/WidthHeightMixin.js";
import LineBanner from "./LineBanner.vue";
import MainBlock from "./MainBlock.vue";
import RestaurantScrollBlock from "./RestaurantScrollBlock.vue";
import CardBlock from "./CardBlock.vue";
import MenuBLock from "./MenuBlock.vue";
import LoyaltyBlock from "./LoyaltyBlock.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    MainBlock,
    LoyaltyBlock,
    MenuBLock,
    CardBlock,
    LineBanner,
    AppFooter,
    AppHeader,
    RestaurantScrollBlock
  },
  mixins: [WidthHeightMixin],
  methods: {
    scrollTo(hook) {
      this.$refs[hook].scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  data() {
    return {
      page: {},
    }
  },
  async beforeCreate() {
    await axios
        .get('https://vdovol.terexov.ru/api/content/item/page?populate=1')
        .then((response) => {
          this.page = response.data
          console.log(response.data)
        })
  }
}
</script>

<style lang="less" scoped>

</style>
