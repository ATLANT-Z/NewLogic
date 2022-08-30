<template>
  <div class="slider-about">
    <div class="slider" ref="sliderWindow">
      <div class="slider__arrows">
        <div class="slider__arrow-left" @click="prevSlide">
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3L3 11L11 19"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="slider__arrow-right" @click="nextSlide">
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L11 11L3 19"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <ul
        class="slider__list"
        :style="{ '--list-translateX': translateX + 'px' }"
        ref="slideList"
      >
        <li
          class="slider__list-item"
          v-for="(slide, index) of sliderData"
          :key="index"
          :class="{ active: index === currentSlide }"
          ref="slide"
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
    <div class="pagination">
      <div
        class="pagination__item"
        v-for="(slide, index) of sliderData"
        :key="index"
        :class="{ active: index === currentSlide }"
      >
        <div class="pagination__line"></div>
        <div class="pagination__title-w">
          <span class="pagination__title">{{ slide.title }}</span>
          <div class="pagination__dot-w">
            <div class="pagination__dot"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "AboutUsSliderComponent",
})
export default class AboutUsSliderComponent extends Vue {
  declare $refs: {
    slide: HTMLElement;
    slideList: HTMLElement;
    sliderWindow: HTMLElement;
  };

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
  translateX: number = 0;

  get SlideCount() {
    return this.sliderData.length;
  }

  translateXWidth() {
    const slideRect =
      this.$refs.slide[this.currentSlide].getBoundingClientRect();
    const slideListRect = this.$refs.slideList.scrollWidth;
    const sliderWindowRect = this.$refs.sliderWindow.getBoundingClientRect();

    this.translateX =
      this.currentSlide *
        (-slideRect.width -
          (slideListRect - slideRect.width * this.SlideCount) /
            (this.SlideCount - 1)) +
      (sliderWindowRect.width - slideRect.width) / 2;
  }

  nextSlide() {
    if (this.currentSlide + 1 >= this.SlideCount) this.currentSlide = 0;
    else this.currentSlide = this.currentSlide + 1;

    this.translateXWidth();
  }

  prevSlide() {
    if (this.currentSlide - 1 < 0) this.currentSlide = this.SlideCount - 1;
    else this.currentSlide = this.currentSlide - 1;

    this.translateXWidth();
  }

  mounted() {
    this.translateXWidth();
  }
}
</script>

<style lang="scss" scoped>
.slider-about {
  width: 100%;
  height: 836px;

  @extend %flex-column;
  align-items: center;
  gap: 48px;

  background-color: #d8d8d8;

  padding: 48px 0;
}
.slider {
  width: 100%;
  max-width: 1920px;
  height: 660px;

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
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: $color-main;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      transform: scale(1.1);
      background-color: $color-main-dark;
    }
  }

  &__arrow-right {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: $color-main;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      transform: scale(1.1);
      background-color: $color-main-dark;
    }
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
    height: 600px;

    @include flex-container;
    align-items: center;
    gap: 64px;

    background-color: #ffffff;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding-right: 64px;

    transform: scaleY(0.8);
    transition: 0.7s cubic-bezier(0.18, 0.17, 0.74, 0.76);
    &.active {
      // height: 616px;
      transform: scaleY(1);
    }
  }

  &__list-item-img-w {
    width: 100%;
    height: 100%;

    box-shadow: inherit;

    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  &__list-item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    box-shadow: inherit;

    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
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
  @extend %width-main;

  @include flex-container(row, space-between, center);

  &__item {
    width: 100%;
    min-height: 75px;

    position: relative;

    @include flex-container(row, space-between);
    &.active .pagination__dot {
      width: 30px;
      height: 30px;

      background-color: $color-main;

      border-radius: 50%;
    }

    &.active .pagination__title {
      @include fontUnify(24, 34, 700);
      color: $color-text-dark;
    }

    &.active .pagination__line {
      background-color: $color-main;
    }
  }

  &__line {
    height: 4px;
    width: 150px;

    position: absolute;
    bottom: 13px;
    left: 0;

    background-color: #a0a0a0;

    transition: 0.7s ease;
  }

  &__title-w {
    width: 100%;

    position: relative;

    @extend %flex-column;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  &__title {
    @include fontUnify(24, 34);
    color: #a0a0a0;

    transition: 0.7s ease;
  }

  &__dot-w {
    width: 30px;
    min-height: 30px;

    @include flex-container(row, center, center);
  }

  &__dot {
    width: 16px;
    height: 16px;

    background-color: #a0a0a0;

    border-radius: 50%;

    transition: 0.7s ease;
  }
}
</style>
