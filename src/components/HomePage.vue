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
      <InfoBlock
          :mainBanner="page.mainBanner"
          :sailText="page.sailText"
          :sailTextBold="page.sailTextBold"
      />
    </div>

    <LineBlockScroll
        @scroll-to="scrollTo"
        :restaurants="page.restaurants"
    />

    <div ref="menu">
      <MenuBLock
          :dishes="page.dishes"
          :menuButtonLink="page.menuButtonLink"
          :menuButtonActive="page.menuButtonActive"
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
import InfoBlock from "./InfoBlock.vue";
import LineBlockScroll from "./LineBlockScroll.vue";
import CardBlock from "./CardBlock.vue";
import MenuBLock from "./MenuBlock.vue";
import LoyaltyBlock from "./LoyaltyBlock.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {LoyaltyBlock, MenuBLock, CardBlock, LineBlockScroll, InfoBlock, LineBanner, AppFooter, AppHeader},
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
  created() {
    axios
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
