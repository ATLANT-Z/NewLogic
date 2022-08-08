<template>
  <section class="main-page">
    <div class="main-page__slider-category-block">
      <SliderCategoryComponent></SliderCategoryComponent>
      <div class="main-page__about-company">
        <!-- <div class="main-page__about-company-title-w"> -->
        <!-- <div class="main-page__about-company-img-w">
        <img
          class="main-page__about-company-img"
          src="../../assets/img/main-pageAboutCompanyRectangle.png"
          alt=""
        />
      </div> -->
        <div class="main-page__about-company-title-w">
          <h5 class="main-page__about-company-title">О компании</h5>
          <p class="main-page__about-company-text">
            История развития компании - это история событий, история команды,
            история жизни конкретных людей. История нашей компании – это
            ежедневная работа на результат. Достижение большой цели через
            маленькие дистанции. Не в борьбе с конкурентами, а в здоровом
            соперничестве, где нет победителей или проигравших. За 15 лет никем
            не узнаваемый украинский бренд составил серьезную конкуренцию
            всемирно известным торговым маркам на рынке Украины. Мы сумели
            добиться высокого качества продукции по доступной цене.
          </p>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="main-page__team-block">
      <div class="main-page__team-w">
        <p class="main-page__team-text">
          Команда LogicPower поставила себе новую цель – занять лидирующие
          позиции в нише продаж для массового (розничного) потребителя. Для
          улучшения качества и снижения сроков доставки, на территории нашего
          склада оборудовано несколько отделений крупнейших почтовых операторов
          Украины. Мы активно работаем над расширением службы технической
          поддержки, сегодня у нас более 50 сервисных центров по всей территории
          Украины История развития предполагает выход на новые горизонты, и мы
          готовы работать на результат!
        </p>
      </div>
    </div>
    <div class="main-page__b2b-block">
      <div class="main-page__b2b-logo">
        <p class="main-page__b2b-logo-title">B2B</p>
      </div>
      <div class="main-page__b2b-heading">
        <p class="main-page__b2b-heading-title">
          Удобный портал для заказов и документооборота
        </p>
        <p class="main-page__b2b-heading-text">
          Через личный кабинет В2В портала можно:
        </p>
      </div>
      <div class="main-page__b2b-info">
        <div class="main-page__b2b-info-item">
          <p class="main-page__b2b-info-text">
            Browse to find the images that fit your needs and click to download.
            Use the on-the-fly color image generation to match your brand
            identity.
          </p>
        </div>
        <div class="main-page__b2b-info-item">
          <p class="main-page__b2b-info-text">
            Browse to find the images that fit your needs and click to download.
            Use the on-the-fly color image generation to match your brand
            identity.
          </p>
        </div>
        <div class="main-page__b2b-info-item">
          <p class="main-page__b2b-info-text">
            Browse to find the images that fit your needs and click to download.
            Use the on-the-fly color image generation to match your brand
            identity.
          </p>
        </div>
        <div class="main-page__b2b-info-item">
          <p class="main-page__b2b-info-text">
            Browse to find the images that fit your needs and click to download.
            Use the on-the-fly color image generation to match your brand
            identity.
          </p>
        </div>
      </div>
      <a class="main-page__b2b-link" href="https://b2b.logicpower.ua/"
        >Перейти на B2B</a
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SliderCategoryComponent from "./SliderCategory.vue";

@Options({
  components: {
    SliderCategoryComponent,
  },
})
export default class MainPageComponent extends Vue {}
</script>

<style lang="scss">
.main-page {
  @extend %padding-wrp;

  //main-page__slider-category-block
  &__slider-category-block {
    @extend %flex-column;
    align-items: center;
    gap: 64px;

    padding: 48px 0 64px 0;
  }

  &__about-company {
    // position: relative;
    @extend %width-main;

    border-radius: 16px;

    color: #ffffff;
    background-color: #393d38;
  }

  &__about-company-title-w {
    // position: absolute;
    // @include setAbs;

    display: flex;
    align-items: center;
    justify-content: space-between;

    // border-radius: 16px;
  }

  &__about-company-title {
    @include fontUnify(28, 40, 600);
    letter-spacing: 0.02em;
    text-transform: uppercase;

    max-width: 404px;
    width: 100%;
    min-height: 270px;

    clip-path: polygon(0 0, 103% 0%, 66% 100%, 0% 100%);
    background-color: $color-main;
    border-radius: 16px;
  }

  &__about-company-img-w {
    // position: absolute;
    // @include setAbs;

    // object-fit: contain;
  }

  &__about-company-img {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  &__about-company-text {
    @extend %width-content;

    @include fontUnify(20, 28);
    letter-spacing: 0.02em;
  }

  // main-page__team-block
  &__team-block {
    @extend %flex-column;
    align-items: center;

    padding: 64px 0;

    @include mobile {
      padding: 48px 0;
    }
  }

  &__team-w {
    @extend %width-main;

    @include flex-container(row, center, center);

    background: linear-gradient(91.75deg, #f36c21 0.14%, #f5821f 99.6%);
    border-radius: 16px;

    padding: 32px 0;

    @include mobile {
      border-radius: 8px;
      padding: 16px 8px;
    }
  }

  &__team-text {
    width: 100%;
    max-width: 1248px;

    @include fontUnify(20, 28, 600);
    letter-spacing: 0.02em;

    color: #ffffff;

    @include mobile {
      @include fontUnify;
    }
  }
}
</style>
