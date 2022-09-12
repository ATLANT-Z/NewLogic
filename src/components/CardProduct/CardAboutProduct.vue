<template>
  <article class="product-about">
    <div class="gallery"></div>
    <div class="info">
      <div class="info__block" v-if="isSale">
        <div class="sale">
          <div class="sale__info-w">
            <div class="sale__logo">Акция!</div>
            <div class="sale__info">
              <p class="sale__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <p class="sale__term">С 26 октября по 9 ноября 2021</p>
            </div>
          </div>
          <button class="sale__details">Узнать детали</button>
        </div>
      </div>
      <div class="info__block">
        <div class="price">
          <div class="price__money" @click="isSale = !isSale">
            <div class="price__money-sale" v-if="isSale">
              <p class="price__money-sale-old">3500 грн</p>
              <p class="price__money-sale-new">3113 грн</p>
            </div>
            <div class="price__money-regular" v-else>3113 грн</div>
            <button class="buy">Купить</button>
          </div>
          <div class="price__info">
            <div class="price__info-facilities">
              <div class="price__info-facilities-availability">В наличии</div>
              <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="@/assets/icons/cardPriceDelivery.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">
                  бесплатная доставка
                </p>
              </div>
              <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="@/assets/icons/cardPriceCredit.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">оплата частями</p>
              </div>
              <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="@/assets/icons/cardPriceReturn.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">
                  14 дней обмен/возврат
                </p>
              </div>
            </div>
            <div class="price__info-tools">Компонент у Андрея</div>
            <div class="price__info-guarantee">
              <img
                class="price__info-guarantee-img"
                src="@/assets/icons/cardGuarantee.svg"
                alt=""
              />
              <p class="price__info-guarantee-text">
                <b>100%</b> гарантия качества от производителя
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="info__block"></div>
      <div class="info__block"></div>
      <div class="info__block"></div>
    </div>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "CardAboutProductComponent",
})
export default class CardAboutProductComponent extends Vue {
  isSale: boolean = true;
}
</script>

<style lang="scss" scoped>
.buy {
  max-width: 274px;
  width: 100%;

  @include flex-container(row, center, center);
  padding: 8px 0;

  @include fontUnify(18, 24);
  text-align: center;

  color: white;
  background: #f36c21;
  border-radius: 6px;
}

.product-about {
  width: 100%;
  @include flex-container;
  gap: 16px;

  @include bigMobile {
    flex-direction: column;
  }
}
.gallery {
  max-width: 590px;
  width: 100%;
  height: 522px;

  background: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.info {
  width: 100%;

  @extend %flex-column;
  gap: 16px;

  &__block {
    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    padding: 16px;
  }
}
.sale {
  @include flex-container(row, space-between, center);
  gap: 16px;

  @include bigMobile {
    flex-direction: column;
    align-items: flex-start;

    gap: 8px;
  }

  &__info-w {
    @include flex-container(row, center, center);
    gap: 16px;
  }

  &__logo {
    max-width: 85px;
    width: 100%;
    height: 85px;

    @include flex-container(row, center, center);

    @include fontUnify(18, 24, 700);
    text-align: center;
    color: white;

    background-color: $color-red-dark;
    border-radius: 50%;

    @include bigMobile {
      display: none;
    }
  }

  &__info {
    max-width: 488px;
    width: 100%;

    @extend %flex-column;
    gap: 8px;

    @include bigMobile {
      max-width: none;

      gap: 0;
    }
  }

  &__title {
    @include fontUnify(20, 24, 700);
    color: red;

    @include bigMobile {
      @include fontUnify(14, 16, 500);
    }
  }

  &__term {
    @include fontUnify(20, 24);

    @include bigMobile {
      @include fontUnify(14, 16);
    }
  }

  &__details {
    max-width: 195px;
    width: 100%;

    align-self: center;

    @include fontUnify(20, 24);
    text-align: center;
    color: $color-main;

    background: rgba(243, 108, 33, 0.1);
    border-radius: 6px;

    padding: 8px 0;

    transition: 0.2s ease;

    &:hover {
      color: $color-main-dark;
      background: rgba(243, 108, 33, 0.5);
    }

    @include mobile {
      max-width: none;
    }
  }
}
.price {
  @include flex-container(column, space-between, flex-start);
  gap: 16px;

  &__money {
    width: 100%;

    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 16px;
  }

  &__money-sale {
    @extend %flex-column;
    gap: 8px;
  }

  &__money-sale-old {
    @include fontUnify(18, 24);
    text-decoration: line-through;

    @include mobile {
      @include fontUnify;
    }
  }

  &__money-sale-new {
    @include fontUnify(48, 52, 500);
    color: red;

    @include mobile {
      @include fontUnify(24, 28, 500);
    }
  }

  &__money-regular {
    @include fontUnify(48, 52, 500);

    @include mobile {
      @include fontUnify(24, 28, 500);
    }
  }

  &__info {
    width: 100%;

    @extend %flex-column;
    gap: 16px;
  }

  &__info-facilities {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 16px;
  }

  &__info-facilities-availability {
    @include flex-container(row, center, center);

    @include fontUnify(14, 20);
    color: $color-main;
    white-space: nowrap;

    background: rgba(243, 108, 33, 0.1);
    border-radius: 8px;

    padding: 3px 10px;
  }

  &__info-facilities-item {
    @include flex-container(row, flex-start, center);
    gap: 8px;
  }

  &__info-facilities-item-img {
    @include mobile {
      width: 24px;
    }
  }

  &__info-facilities-item-text {
    max-width: 100px;
    width: 100%;

    @include fontUnify(12, 12);
    text-transform: uppercase;

    color: $color-main;

    @include mobile {
      @include fontUnify(8, 10);
    }
  }

  &__info-tools {
  }

  &__info-guarantee {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__info-guarantee-img {
  }

  &__info-guarantee-text {
    @include fontUnify;

    @include mobile {
      @include fontUnify(14, 16);
    }
  }
}
</style>
