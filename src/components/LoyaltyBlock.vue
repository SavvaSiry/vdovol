<template>
  <div class="loyalty-block">

    <div class="loyalty-block__wrapper">
      <h2 class="text text_normal text_white text_center">{{ loyaltyH1 }}</h2>
      <h3 class="text text_medium text_white text_center">{{ loyaltyH2 }}</h3>

      <ul class="loyalty-list loyalty-list_margin">
        <li v-for="loyalty in loyaltyList" :key="loyalty.title" class="loyalty-card">
          <div class="text text_semi-bold text_inherit">{{ loyalty.title }}</div>
          <div class="text text_medium text_inherit">{{ loyalty.underTitle }}</div>
        </li>
      </ul>

      <button class="button loyalty-block__button button_default"
              v-if="loyaltyButtonActive"
              @click="openInNewTab(loyaltyButtonLink)"
      >
        <div class="text text_bold text_white">Зарегистрироваться</div>
        <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8.5H26M26 8.5L19.2 15.5M26 8.5L19.2 1.5" stroke="white" stroke-width="2"/>
        </svg>
      </button>

    </div>

    <div class="loyalty-block__back"/>
    <div class="loyalty-block__img-container">
      <img class="loyalty-block__img"
           alt="restaurant"
           v-if="loyaltyBackImage !== '' && loyaltyBackImage !== null && loyaltyBackImage !== undefined"
           :src="'https://vdovol.terexov.ru/storage/uploads/' + loyaltyBackImage.path"
      >

    </div>
  </div>
</template>

<script>
export default {
  name: "LoyaltyBlock",
  props: {
    loyaltyList: {
      type: Array,
      require: true,
    },
    loyaltyH1: {
      type: String,
      require: true
    },
    loyaltyH2: {
      type: String,
      require: true
    },
    loyaltyButtonLink: {
      type: String,
    },
    loyaltyButtonActive: {
      type: Boolean,
      require: true
    },
    loyaltyBackImage: {
      type: String,
      require: true
    }
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank', 'noreferrer');
    },
  },
}
</script>

<style lang="less" scoped>
@import "../style";

.loyalty-block {
  position: relative;

  width: 100%;
  height: 900px;

  overflow: hidden;

  @media @min990 {
    height: 1100px;
  }

  @media @min1200 {
    height: 850px;
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

  box-sizing: border-box;
  padding: 0 20px;

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

  &:first-child {
    background: @OrangePrimaryColor;
    color: @WhiteColor;
  }

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
</style>
