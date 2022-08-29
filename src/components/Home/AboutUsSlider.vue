<template>
  <div class="slider-about">
    <div class="slider">
      <div class="slider__arrows">
        <div class="slider__arrow-left" @click="prevSlide">
          <img src="../../assets/icons/mainSliderAboutLeftArrow.svg" alt="" />
        </div>
        <div class="slider__arrow-right" @click="nextSlide">
          <img src="../../assets/icons/mainSliderAboutRightArrow.svg" alt="" />
        </div>
      </div>
      <ul
        class="slider__list"
        :style="{ '--list-translateX': TranslateX + 'px' }"
      >
        <li
          class="slider__list-item"
          v-for="(slide, index) of sliderData"
          :key="index"
          :class="{ active: index === currentSlide }"
        >
          <div class="slider__list-item-img-w">
            <img
              class="slider__list-item-img"
              :src="require(`../../assets/img/${slide.img}.png`)"
              alt=""
            />
          </div>
          <div class="slider__list-item-info">
            <p class="slider__list-item-info-title">{{ slide.title }}</p>
            <p class="slider__list-item-info-text">{{ slide.text }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="pagination"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "AboutUsSliderComponent",
})
export default class AboutUsSliderComponent extends Vue {
  sliderData: any = [
    {
      img: "mainAboutUsImg",
      title: "2009 год",
      text: "ТМ LogicPower была зарегистрирована в Украине в феврале 2007 года. Компания начиналась с небольшого арендованного офиса площадью 30 м² и команды из 12 сотрудников. Сегодня компания владеет 2200 квадратными метрами складов европейского образца, с которых ежедневно во все регионы Украины отправляются 1000-чи наименований нашей продукции.",
    },
    {
      img: "mainAboutUsImg",
      title: "2010 год",
      text: "ТМ LogicPower была зарегистрирована в Украине в феврале 2007 года. Компания начиналась с небольшого арендованного офиса площадью 30 м² и команды из 12 сотрудников. Сегодня компания владеет 2200 квадратными метрами складов европейского образца, с которых ежедневно во все регионы Украины отправляются 1000-чи наименований нашей продукции.",
    },
    {
      img: "mainAboutUsImg",
      title: "2011 год",
      text: "ТМ LogicPower была зарегистрирована в Украине в феврале 2007 года. Компания начиналась с небольшого арендованного офиса площадью 30 м² и команды из 12 сотрудников. Сегодня компания владеет 2200 квадратными метрами складов европейского образца, с которых ежедневно во все регионы Украины отправляются 1000-чи наименований нашей продукции.",
    },
    {
      img: "mainAboutUsImg",
      title: "2012 год",
      text: "ТМ LogicPower была зарегистрирована в Украине в феврале 2007 года. Компания начиналась с небольшого арендованного офиса площадью 30 м² и команды из 12 сотрудников. Сегодня компания владеет 2200 квадратными метрами складов европейского образца, с которых ежедневно во все регионы Украины отправляются 1000-чи наименований нашей продукции.",
    },
  ];

  currentSlide: number = 0;

  get SlideCount() {
    return this.sliderData.length;
  }
  
  get TranslateX() {
    return this.currentSlide * -1500 + 210;
  }

  nextSlide() {
    if (this.currentSlide + 1 >= this.SlideCount) this.currentSlide = 0;
    else this.currentSlide = this.currentSlide + 1;
  }

  prevSlide() {
    if (this.currentSlide - 1 < 0) this.currentSlide = this.SlideCount - 1;
    else this.currentSlide = this.currentSlide - 1;
  }
}
</script>

<style lang="scss" scoped>
.slider-about {
  width: 100%;

  @extend %flex-column;
  align-items: center;
  gap: 48px;

  background-color: #d8d8d8;

  padding: 48px 0;
}
.slider {
  width: 100%;
  height: 640px;
  max-width: 1920px;

  display: flex;

  position: relative;

  overflow: hidden;

  &__arrows {
    width: 100%;

    position: absolute;
    @include setAbs;

    @include flex-container(row, space-between, center);

    padding: 0 62px;

    z-index: 3;
  }

  &__arrow-left {
    width: 72px;
    height: 72px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: $color-main;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    cursor: pointer;
  }

  &__arrow-right {
    width: 72px;
    height: 72px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: $color-main;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    cursor: pointer;
  }

  &__list {
    --list-translateX: 0;
    width: 100%;

    position: relative;

    @include flex-container;
    align-items: center;
    gap: 48px;

    transform: translateX(var(--list-translateX));
    transition: 0.7s cubic-bezier(0.18, 0.17, 0.74, 0.76);
  }

  &__list-item {
    min-width: 1500px;
    height: 616px;
    // height: 488px;

    @include flex-container;
    align-items: center;
    gap: 64px;

    background: linear-gradient(
      90deg,
      rgba(51, 51, 51, 0.88) 0%,
      #ffffff 23.44%,
      #ffffff 89.58%,
      rgba(218, 218, 218, 0.88) 100%
    );
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding-right: 64px;

    transform: scaleY(0.8);
    transition: 0.7s cubic-bezier(0.18, 0.17, 0.74, 0.76);
    &.active {
      height: 616px;
      transform: scaleY(1);
      background: #ffffff;
    }
  }

  &__list-item-img-w {
    width: 100%;
    height: 100%;
  }

  &__list-item-img {
    width: 100%;
    height: 100%;
  }

  &__list-item-info {
    width: 100%;
    max-width: 756px;

    @extend %flex-column;
    gap: 56px;
  }

  &__list-item-info-title {
    @include fontUnify(64, 80, 500);
    color: $color-main;
  }

  &__list-item-info-text {
    @include fontUnify(22, 30, 700);
    letter-spacing: 0.02em;
  }
}
.pagination {
  width: 30px;
  height: 30px;
  background-color: $color-main;
  border-radius: 50%;
}
</style>
