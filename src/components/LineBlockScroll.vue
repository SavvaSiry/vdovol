<template>
  <div class="address-block">

    <div class="row address-block__header row_jc-sb row_al-c">
      <div class="address-block__header__text-content">
        <h2 class="text text_normal">Адрес наших точек</h2>
        <span class="text text_medium">Всегда рядом</span>
      </div>
      <div v-if="isWidth580()" class="row row_gap32">
        <button @click="left()" class="button button_rounded">
          <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21L3 12L12 3" stroke="white" stroke-width="3" stroke-linecap="square"/>
          </svg>
        </button>
        <button @click="right()" class="button button_rounded">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3L17 12L8 21" stroke="white" stroke-width="3" stroke-linecap="square"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="address-block__content" ref="block">
      <div v-for="i in 4" :key="i" class="address__card">
        <img class="address__card__img" src="../assets/info-block.png" alt="Cafe">

        <div class="address__card__info"
             @click="this.$emit('scroll-to', 'contacts')"
        >
          <div class="row address__card__info__row row_gap8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13 20.9998H12H10.9997L6.49985 16.5C3.46229 13.4624 3.46229 8.53754 6.49985 5.49998C9.53742 2.46241 14.4623 2.46241 17.4999 5.49998C20.5374 8.53754 20.5374 13.4624 17.4999 16.5L13 20.9998ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                    fill="white"/>
            </svg>
            <div class="text text_semi-bold text_white">Ленсовета, 22</div>
          </div>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 20H33M33 20L26.2 27M33 20L26.2 13" stroke="white" stroke-width="3"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="row row_jc-c">
      <div v-if="!isWidth580()" class="row row_gap20">
        <button @click="left()" class="button button_rounded">
          <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21L3 12L12 3" stroke="white" stroke-width="3" stroke-linecap="square"/>
          </svg>
        </button>
        <button @click="right()" class="button button_rounded">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3L17 12L8 21" stroke="white" stroke-width="3" stroke-linecap="square"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {WidthHeightMixin} from "../mixins/WidthHeightMixin.js";

export default {
  name: "LineBlockScroll",
  mixins: [WidthHeightMixin],
  data() {
    return {
      position: 0,
      drag: false,
    }
  },
  methods: {
    left() {
      if (this.isWidth760()) {
        this.$refs.block.scrollTo(this.$refs.block.scrollLeft - 640, 0)
      } else
        this.$refs.block.scrollTo(this.$refs.block.scrollLeft - 360, 0)
    },
    right() {
      if (this.isWidth760()) {
        this.$refs.block.scrollTo(this.$refs.block.scrollLeft + 640, 0)
      } else
        this.$refs.block.scrollTo(this.$refs.block.scrollLeft + 360, 0)
    },
    startDrag(event) {
      this.position = event.screenX;
      this.drag = true;
    },
    toDrag(event) {
      if (this.drag) {
        console.log(event.screenX);
      }
    },
    stopDrag() {
      this.drag = false;
    }
  }
}
</script>

<style lang="less" scoped>
@import "../style";

.address-block {
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 20px;

  @media @min760 {
    margin-top: 80px;
    margin-bottom: 100px;
  }

  @media @min1200 {
    margin-left: 100px;
  }
}

.address-block__header {

  padding-right: 20px;

  @media @min1200 {
    padding-right: 100px;
  }

}

.address-block__header__text-content {
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media @min580 {
    gap: 24px;
    flex-direction: row;
    align-items: center;
  }
}

.address-block__content {
  display: flex;
  gap: 20px;

  overflow-x: scroll;
  scroll-behavior: smooth;

  margin-top: 40px;
  margin-bottom: 32px;

  @media @min580 {
    margin-bottom: 0;
  }

  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */

  @media @min760 {
    gap: 40px;
  }
}

/* Скрываем scrollbar для Chrome, Safari и Opera */
.address-block__content::-webkit-scrollbar {
  display: none;
}

.address__card {
  position: relative;
  width: 340px;
  height: 226px;

  box-sizing: border-box;
  overflow: hidden;

  border-radius: 10px;
  flex-shrink: 0;

  @media @min760 {
    width: 600px;
    height: 400px;
  }
}

.address__card__info {
  position: absolute;
  bottom: 0;

  box-sizing: border-box;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 56px;

  background: @OrangePrimaryColor;
  cursor: pointer;

  @media @min760 {
    height: 80px;
    padding: 0 32px;
  }
}

.address__card__info__row {
  align-items: center;
  user-select: none;
}

.address__card__img {
  width: 100%;
  height: auto;

  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.button_rounded {
  width: 36px;
  height: 36px;

  @media @min760 {
    width: 48px;
    height: 48px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: @GreenPrimaryColor;
}

.scrollbooster-viewport {
  cursor: -webkit-grab;
  cursor: grab;
  padding-bottom: 30px;
  margin-bottom: -30px;
}
.scrollbooster-viewport:active {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
.scrollbooster-content {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
