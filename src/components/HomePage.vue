<template>
  <AppHeader
      @scroll-to="scrollTo"
      :phoneNumber="page.mainPhoneNumber"
  />

  <main>
    <LineBanner
        :text="'24 часа'"
    />

    <div ref="main">
      <InfoBlock
          :mainBanner="mainBanner"
          :sailText="page.sailText"
          :sailTextBold="page.sailTextBold"
      />
    </div>

    <LineBlockScroll
        @scroll-to="scrollTo"
    />

    <div ref="menu">
      <MenuBLock

      />
    </div>


    <LineBanner
        :text="'СКИДКА 30%'"
    />

    <div ref="loyalty">
      <LoyaltyBlock

      />
    </div>

    <LineBanner
        :text="'СКИДКА 30%'"
    />

    <div ref="contacts">
      <CardBlock

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
      mainBanner: "",
    }
  },
  created() {
    axios
        .get('https://vdovol.terexov.ru/api/content/item/page')
        .then((response) => {
          this.page = response.data
          this.mainBanner = response.data.mainBanner.path
        })
  }
}
</script>

<style lang="less" scoped>

</style>
