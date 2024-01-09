<template>
  <AppHeader
      @scroll-to="scrollTo"
  />

  <main>
    <LineBanner
        :text="'24 часа'"
    />

    <div ref="main">
      <InfoBlock/>
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
  }
}
</script>

<style lang="less" scoped>

</style>
