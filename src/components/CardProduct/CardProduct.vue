<template>
  <section class="card-product">
    <div class="card-product__w">
      <article class="card-title">
        <h1 class="card-title__text">
          <span class="card-title__text-bold"
            >Комплект резервного питания с ФЭМ</span
          >
          <span class="card-title__text-normal"></span> 1.4кВт АКБ mGel 100 Ah
        </h1>
        <div class="card-title__code">
          <span class="card-title__code-text">Код:</span>
          <span class="card-title__code-number">16799</span>
        </div>
      </article>
      <CardProductNavComponent />
      <CardAboutProductComponent />
      <CardProductSpecificationsComponent />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardProductNavComponent from "./CardProductNav.vue";
import CardAboutProductComponent from "./CardAboutProduct.vue";
import CardProductSpecificationsComponent from "./CardProductSpecifications.vue"

@Options({
  name: "CardProductComponent",
  components: {
    CardProductNavComponent,
    CardAboutProductComponent,
    CardProductSpecificationsComponent,
  },
})
export default class CardProductComponent extends Vue {}
</script>

<style lang="scss" scoped>
.card-product {
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

  &__text-normal {
  }

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

  &__code-number {
  }
}
</style>
