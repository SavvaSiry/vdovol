<template>
  <div class="info-block">
    <div class="info-block__content">
      <h1 class="text text_h1 text_white">Сеть кулинарий <br> Вдоволь</h1>

      <h3 class="text text_semi-bold info-block__content__text text_white">Традиционная домашняя <br
          v-if="!isWidth760()"> кухня <br v-if="isWidth760()">
        и свежая выпечка</h3>

      <div class="row row_gap20">
        <button class="button">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 12C29.1717 12 34.1316 14.0545 37.7886 17.7114C41.4455 21.3684 43.5 26.3283 43.5 31.5V31.5C43.5 32.2956 43.1839 33.0587 42.6213 33.6213C42.0587 34.1839 41.2956 34.5 40.5 34.5H7.5C6.70435 34.5 5.94129 34.1839 5.37868 33.6213C4.81607 33.0587 4.5 32.2956 4.5 31.5C4.5 26.3283 6.55446 21.3684 10.2114 17.7114C13.8684 14.0545 18.8283 12 24 12V12Z"
                stroke="#F7522E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 12V7.5" stroke="#F7522E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 40.5H43.5" stroke="#F7522E" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
          <div class="text text_bold">Кафе</div>
        </button>
        <button class="button">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_486_14006)">
              <path d="M7.50098 40.5001H34.501" stroke="#F7522E" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path
                  d="M40.2906 10.2C39.9855 8.94181 39.3587 7.78456 38.4716 6.84168C37.5845 5.8988 36.4675 5.20265 35.2303 4.8215C33.9931 4.44035 32.678 4.38728 31.4141 4.6675C30.1502 4.94773 28.9808 5.55161 28.0206 6.41995C27.4965 4.97908 26.5417 3.73438 25.2858 2.85483C24.03 1.97528 22.5339 1.50348 21.0006 1.50348C19.4674 1.50348 17.9713 1.97528 16.7154 2.85483C15.4595 3.73438 14.5047 4.97908 13.9806 6.41995C13.0204 5.55161 11.851 4.94773 10.5871 4.6675C9.3232 4.38728 8.00816 4.44035 6.77093 4.8215C5.53371 5.20265 4.41678 5.8988 3.52967 6.84168C2.64256 7.78456 2.01572 8.94181 1.71062 10.2C1.47225 11.1818 1.4339 12.2015 1.59786 13.1985C1.76182 14.1954 2.12473 15.1492 2.66499 16.003C3.20524 16.8567 3.91179 17.593 4.74254 18.1681C5.5733 18.7431 6.51128 19.145 7.50062 19.35V30C7.50062 30.7956 7.81669 31.5587 8.3793 32.1213C8.9419 32.6839 9.70497 33 10.5006 33H31.5006C32.2963 33 33.0593 32.6839 33.6219 32.1213C34.1845 31.5587 34.5006 30.7956 34.5006 30V19.35C35.49 19.145 36.4279 18.7431 37.2587 18.1681C38.0894 17.593 38.796 16.8567 39.3362 16.003C39.8765 15.1492 40.2394 14.1954 40.4034 13.1985C40.5673 12.2015 40.529 11.1818 40.2906 10.2V10.2Z"
                  stroke="#F7522E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 25.5001H34.5" stroke="#F7522E" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_486_14006">
                <rect width="42" height="42" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div class="text text_bold">Кулинария</div>
        </button>
      </div>
    </div>
    <div class="info-block__img-container">
      <img class="info-block__img" src="../assets/info-block.png">
    </div>
  </div>
</template>

<script>
import {WidthHeightMixin} from "../mixins/WidthHeightMixin.js";

export default {
  name: "InfoBlock",
  mixins: [WidthHeightMixin]
}
</script>

<style lang="less" scoped>
@import "../style";

.info-block {
  width: 100%;
  height: 572px;
  box-sizing: border-box;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  gap: 20px;


  background: @GreenPrimaryColor;

  @media @min760 {
    height: 800px;
  }

  @media @min1200 {
    padding: 50px 100px;
    gap: 120px;
  }
}

.info-block__content {
  width: fit-content;
}

.info-block__content__text {
  margin-top: 24px;
  margin-bottom: 32px;

  width: fit-content;

  @media @min760 {
    margin-top: 30px;
    margin-bottom: 48px;
  }
}

.info-block__img-container {
  box-sizing: border-box;

  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: auto;
  flex: 1;
  height: 100%;
  flex-shrink: 0;

  background: #1E2024;
  border-radius: 16px;

  display: none;

  @media @min580 {
    display: flex;
  }
}

.info-block__img {
  height: 100%;
  width: auto;

  @media @min1900 {
    height: auto;
    width: 100%;
  }
}

.button {
  width: 135px;
  height: auto;

  box-sizing: border-box;
  padding: 16px 12px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  border-radius: 8px;
  background: @GreyColor;
  border: none;

  @media @min760 {
    width: 180px;
  }
}

</style>
