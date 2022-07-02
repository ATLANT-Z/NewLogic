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
    <CategoryCatalogComponent></CategoryCatalogComponent>
    <!-- <AboutCompanyComponent></AboutCompanyComponent> -->
    <!-- <PrivacyPolicyComponent></PrivacyPolicyComponent> -->
    <!-- <WarrantyComponent></WarrantyComponent> -->
    <!-- <PublicOfferComponent></PublicOfferComponent> -->
    <!-- <DeliveryComponent></DeliveryComponent> -->
    <NewsArticleComponent></NewsArticleComponent>
    <BlogComponent></BlogComponent>
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
import NewsArticleComponent from "./components/NewsArticle.vue";
import BlogComponent from "./components/Blog.vue"

@Options({
  components: {
    CategoryCatalogComponent,
    AboutCompanyComponent,
    PrivacyPolicyComponent,
    WarrantyComponent,
    PublicOfferComponent,
    DeliveryComponent,
    NewsArticleComponent,
    BlogComponent
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
main {
  width: 100%;
}

.banner {
  position: relative;
  height: 560px;
  width: 100%;

  background-color: black;

  margin-bottom: 80px;
  
  @include mobile {
    height: 254px;
    margin-bottom: 48px;
  }

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
    @extend %padding-wrp;

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

    padding-bottom: 64px;

    color: #ffffff;

    @include mobile {
      padding-bottom: 32px;
    }
  }

  &__title {
    @include fontUnify(42, 50, 700);
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(24, 34, 700);
    }
  }

  &__text {
  }

  &__input {
  }
}
</style>
