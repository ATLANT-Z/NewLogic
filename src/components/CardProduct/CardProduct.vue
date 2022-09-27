<template>
  <section class="card-product" ref="productWrapper">
    <div class="card-product__w">
      <article class="card-title">
        <h1 class="card-title__text">
          <span class="card-title__text-bold">Комплект резервного питания с ФЭМ</span>
          <span class="card-title__text-normal"></span> 1.4кВт АКБ mGel 100 Ah
        </h1>
        <div class="card-title__code">
          <span class="card-title__code-text">Код:</span>
          <span class="card-title__code-number">16799</span>
        </div>
      </article>
      <CardProductNavComponent :CurrentNav="currentNav" @navChange="calcCurrNav" />
      <CardAboutProductComponent :class="{active: currentNav === ProductNav.ALL}" ref="aboutSection" />
      <CardProductSpecificationsComponent :ActiveBlock="currentNav" />
      <div class="mobile-price" v-if="isMobile && isVisibility">
        <div class="mobile-price__money-sale">
          <p class="mobile-price__money-sale-old">3500 грн</p>
          <p class="mobile-price__money-sale-new">3113 грн</p>
        </div>
        <div class="mobile-price__money-regular">3113 грн</div>
        <button class="buy">Купить</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardProductNavComponent from "./CardProductNav.vue";
import CardAboutProductComponent from "./CardAboutProduct.vue";
import CardProductSpecificationsComponent from "./CardProductSpecifications.vue";
import { ProductNav } from "@/models/view/card_product/nav";
import { headerViewService } from "@/services/view/header/header.view.service";

@Options({
  name: "CardProductComponent",
  components: {
    CardProductNavComponent,
    CardAboutProductComponent,
    CardProductSpecificationsComponent,
  },
})
export default class CardProductComponent extends Vue {
  declare $refs: {
    productWrapper: HTMLElement;
    aboutSection: CardAboutProductComponent
  };

  ProductNav = ProductNav;
  currentNav: ProductNav = ProductNav.ALL;

  calcCurrNav(idx) {
    this.currentNav = idx;
  }

  isSale: boolean = true;
  isMobile: boolean = false;
  isVisibility: boolean = false;

  calcBlockPriceVisibility() {
    const priceBlock = this.$refs.aboutSection.$refs.blockPrice;
    const blockPriceRect = priceBlock.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (
      blockPriceRect.bottom <= windowHeight &&
      blockPriceRect.top > headerViewService.headerHeight
    ) {
      this.isVisibility = false;
    }
    else {
      this.isVisibility = true;
    }
  }

  calsIsMobile() {
    const mobWidth = getComputedStyle(
      this.$refs.productWrapper
    ).getPropertyValue("--mobile-width");
    this.isMobile = window.innerWidth <= parseInt(mobWidth);
  }

  onResize() {
    this.calsIsMobile();
    this.calcBlockPriceVisibility();
  }

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.calcBlockPriceVisibility);
  }

  unmounted() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.calcBlockPriceVisibility);
  }
}
</script>

<style lang="scss" scoped>
.card-product {
  --mobile-width: #{$mobile-big-width};

  position: relative;

  @extend %flex-column;
  align-items: center;

  padding: 0 16px;

  &__w {
    @extend %width-main;

    @extend %flex-column;
    align-items: center;
    gap: 16px;
  }
}

.card-title {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  gap: 16px;

  padding-top: 16px;

  @include bigMobile {
    @include flex-container(column, center, flex-start);
    gap: 8px;
  }

  &__text {
    @include fontUnify(36, 42);

    @include bigMobile {
      @include fontUnify(24, 28);
    }
  }

  &__text-bold {
    font-weight: 500;

    @include bigMobile {
      display: block;
    }
  }

  &__text-normal {}

  &__code {
    @include flex-container(row, center, center);
    gap: 8px;

    @include fontUnify(36, 42, 500);

    @include bigMobile {
      @include fontUnify(24, 28);
    }
  }

  &__code-text {
    color: $color-main;
  }

  &__code-number {}
}

.mobile-price {
  width: 100%;

  @include flex-container(row, space-between, center);
  flex-wrap: wrap;
  gap: 8px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  box-shadow: 0px 3px 11px rgb(0 0 0 / 10%);
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  padding: 8px;

  & .buy {
    max-width: 160px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-end, center);
    gap: 16px;
  }

  &__money-sale-old {
    @include fontUnify;
    text-decoration: line-through;
  }

  &__money-sale-new {
    @include fontUnify(24, 28, 500);
    color: red;
  }

  &__money-regular {
    @include fontUnify(24, 28, 500);
  }
}

.mobile-price {
  width: 100%;

  @include flex-container(row, space-between, center);
  flex-wrap: wrap;
  gap: 8px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  box-shadow: 0px 3px 11px rgb(0 0 0 / 10%);
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  padding: 8px;

  & .buy {
    max-width: 160px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-end, center);
    gap: 16px;
  }

  &__money-sale-old {
    @include fontUnify;
    text-decoration: line-through;
  }

  &__money-sale-new {
    @include fontUnify(24, 28, 500);
    color: red;
  }

  &__money-regular {
    @include fontUnify(24, 28, 500);
  }
}
</style>
