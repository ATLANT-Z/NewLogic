<template>
  <header></header>
  <!-- <section class="banner">
    <div class="banner__img-w">
      <picture>
        <source srcset="https://logicpower.ua/images/catalog/Продукция-1.png" media="(max-width: 1280px)">
        <img class="banner__img" src="https://logicpower.ua/storage/1908309/Banner_LP_15_06.png" alt="">
      </picture>
    </div>
    <div class="banner__content">
      <div class="banner__content-column">
        <h3 class="banner__title">Заголовок</h3>
        <p class="banner__text">текст</p>
        <input class="banner__input" type="text" value="123" />
      </div>
    </div>
  </section> -->
  <main class="site-main">
    <!-- <CategoryCatalogComponent></CategoryCatalogComponent> -->
    <!-- <AboutCompanyComponent></AboutCompanyComponent> -->
    <!-- <PrivacyPolicyComponent></PrivacyPolicyComponent> -->
    <!-- <WarrantyComponent></WarrantyComponent> -->
    <!-- <PublicOfferComponent></PublicOfferComponent> -->
    <DeliveryComponent></DeliveryComponent>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CategoryCatalogComponent from "./components/CategoryCatalog.vue";
import AboutCompanyComponent from "./components/AboutCompany.vue";
import PrivacyPolicyComponent from "./components/PrivacyPolicy.vue";
import WarrantyComponent from "./components/Warranty.vue";
import PublicOfferComponent from "./components/PublicOffer.vue";
import DeliveryComponent from "./components/Delivery.vue";

@Options({
  components: {
    CategoryCatalogComponent,
    AboutCompanyComponent,
    PrivacyPolicyComponent,
    WarrantyComponent,
    PublicOfferComponent,
    DeliveryComponent
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "assets/scss/style.scss";
#app {
  display: contents;
}
</style>

<style lang="scss">
.banner {
  position: relative;
  height: 560px;
  width: 100%;

  background-color: black;

  &__img-w {
    height: 100%;
    width: 100%;
  }

  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__content {
    @include absoluteGrow();
    display: flex;
    justify-content: center;

    background: linear-gradient(
      180deg,
      rgba(138, 138, 138, 0) 0%,
      rgba(54, 54, 54, 0.37) 56.63%,
      rgba(54, 54, 54, 0.83) 81.98%
    );

    z-index: 2;
  }

  &__content-column {
    width: 100%;
    max-width: 1500px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 24px;

    padding: 16px 0 64px;

    color: white;
  }

  &__title {
    @include font30;
  }

  &__text {
  }

  &__input {
  }
}
</style>
