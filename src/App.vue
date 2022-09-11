<template>
  <header></header>
  <main class="site-main">
    <!-- <CategoryCatalogComponent></CategoryCatalogComponent> -->
    <!-- <SubCategoryCatalogComponent></SubCategoryCatalogComponent> -->
    <!-- <AboutCompanyComponent></AboutCompanyComponent> -->
    <!-- <PrivacyPolicyComponent></PrivacyPolicyComponent> -->
    <!-- <WarrantyComponent></WarrantyComponent> -->
    <!-- <PublicOfferComponent></PublicOfferComponent> -->
    <!-- <DeliveryComponent></DeliveryComponent> -->
    <!-- <NewsArticleComponent></NewsArticleComponent> -->
    <!-- <BlogComponent></BlogComponent> -->
    <!-- <CooperationComponent></CooperationComponent> -->
    <!-- <InstructionComponent></InstructionComponent> -->
    <!-- <ContactComponent></ContactComponent> -->
    <!-- <HomeComponent></HomeComponent> -->
    <!-- <PopUpLangComponent></PopUpLangComponent> -->
    <!-- <FooterComponent></FooterComponent> -->
    <CardProductComponent></CardProductComponent>
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
import BlogComponent from "./components/Blog.vue";
import CooperationComponent from "./components/Cooperation.vue";
import InstructionComponent from "./components/Instruction.vue";
import SubCategoryCatalogComponent from "./components/SubCategoryCatalog.vue";
import ContactComponent from "./components/Contact.vue";
import HomeComponent from "./components/Home/Home.vue";
import PopUpLangComponent from "./components/pop-up/PopUpLang.vue";
import FooterComponent from "./components/Footer/Footer.vue";
import CardProductComponent from "./components/CardProduct/CardProduct.vue";

@Options({
  components: {
    CategoryCatalogComponent,
    AboutCompanyComponent,
    PrivacyPolicyComponent,
    WarrantyComponent,
    PublicOfferComponent,
    DeliveryComponent,
    NewsArticleComponent,
    BlogComponent,
    CooperationComponent,
    InstructionComponent,
    SubCategoryCatalogComponent,
    ContactComponent,
    HomeComponent,
    PopUpLangComponent,
    FooterComponent,
    CardProductComponent,
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

  margin-bottom: 64px;

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
    @extend %width-main;

    @extend %flex-column;
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
    width: 100%;
    max-width: 486px;

    @include fontUnify(18, 24);
    letter-spacing: 0.02em;

    @include mobile {
      display: none;
    }
  }

  &__input-w {
    width: 100%;
    max-width: 327px;

    position: relative;
  }

  &__input {
    width: 100%;

    @include fontUnify(16, 16);
    letter-spacing: 0.02em;

    background-color: #ffffff;

    border-radius: 6px;

    padding: 16px;

    &::placeholder {
      color: $color-text-lighter;
    }
  }

  &__button {
    position: absolute;
    right: 16px;
    bottom: 14px;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
