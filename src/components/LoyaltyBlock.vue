<template>
  <div class="loyalty-block">

    <div class="loyalty-block__wrapper">
      <h2 class="text text_normal text_white">Система лояльности</h2>
      <h3 class="text text_medium text_white text_center">Акции и специальные условия для <br> постоянных посетителей
      </h3>

      <div class="loyalty-list loyalty-list_margin">

        <div v-for="i in 4" :key="i" class="loyalty-card">
          <div class="text text_semi-bold">Кэшбек до 5%</div>
          <div class="text text_medium">При участии в нашей системе лояльсности</div>
        </div>
      </div>

      <button class="button loyalty-block__button button_default">
        <div class="text text_bold text_white">Зарегистрироваться</div>
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
</template>

<script>
export default {
  name: "LoyaltyBlock"
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
