<template>
  <div class="popup__block active">
    <div class="popup__cont">
      <div class="cart__head">
        <p class="cart__title">Корзина</p>
        <button class="cart__cancel">
          <img src="@/assets/icons/cancel.svg" alt="" />
        </button>
      </div>
      <ul class="card__list">
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img class="card__img" src="" alt="" />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">Код:<span>1324</span></div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input
                    type="number"
                    class="card__counter-input"
                    placeholder="3333"
                  />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <div class="card__price"><span>20954</span> &#8372;</div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class PopUpCartComponent extends Vue {}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
.popup {
  &__block {
    position: fixed;
    @include setAbs;

    @include flex-container(row, center, center);

    padding: 16px;

    visibility: hidden;
    opacity: 0;
    transition: 0.1s ease;
    z-index: -1;

    &::before {
      content: "";
      position: fixed;
      @include setAbs;

      backdrop-filter: blur(4px) opacity(1);
      background-color: rgba(0, 0, 0, 0.3);

      transition: 0.1s ease;
      z-index: -1;
    }

    &.active {
      visibility: visible;
      opacity: 1;
      transition: 0.1s ease;
      z-index: 9999;
    }
  }

  &__cont {
    position: relative;

    width: 100%;
    max-width: 1040px;
    min-height: 785px;

    @extend %flex-column;
    align-items: center;
    gap: 16px;

    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    padding: 24px 16px;
    transition: 0.2s ease-in-out;
  }
}
</style>
