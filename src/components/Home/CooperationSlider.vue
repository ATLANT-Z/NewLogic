<template>
  <div class="cooperation-slider">
    <div class="cooperation-slider__arrow-left" :class="{ disable: currentSlide <= 0 }" @click="prevSlide">
      <img class="cooperation-slider__arrow-left-img" src="../../assets/icons/mainNavArrowLeftIcon.svg" alt="" />
    </div>
    <div class="cooperation-slider__w" ref="slideWrap">
      <div class="cooperation-slider__cont" :style="{
        '--translate-x': translateListX + 'px',
        '--gap': gapLength + 'px',
      }">
        <div class="cooperation-slider__item" v-for="(item, index) in sliderData" :key="index" ref="slideListItem">
          <img class="cooperation-slider__img" :src="require(`../../assets/img/${item.img}.svg`)" alt="" />
        </div>
      </div>
    </div>
    <div class="cooperation-slider__arrow-right" :class="{ disable: slideMaxCount === currentSlide }"
      @click="nextSlide">
      <img class="cooperation-slider__arrow-right-img" src="../../assets/icons/mainNavArrowRightIcon.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class CooperationSliderComponent extends Vue {
  sliderData: any = [
    {
      id: 1,
      img: "mainCooperationAtbIcon",
    },
    {
      id: 2,
      img: "mainCooperationMoyoIcon",
    },
    {
      id: 3,
      img: "mainCooperationPromIcon",
    },
    {
      id: 4,
      img: "mainCooperationFIcon",
    },
    {
      id: 5,
      img: "mainCooperationSilpoIcon",
    },
    {
      id: 6,
      img: "mainCooperationRozetkaIcon",
    },
    {
      id: 7,
      img: "mainCooperationRozetkaIcon",
    },
    {
      id: 8,
      img: "mainCooperationRozetkaIcon",
    },
    {
      id: 9,
      img: "mainCooperationRozetkaIcon",
    },
  ];

  declare $refs: {
    slideWrap: HTMLElement;
    slideListItem: HTMLElement;
  };

  currentSlide: number = 0;
  gapLength: number = 0;
  translateListX: number = 0;
  slideMaxCount: number = 0;

  get SlideCount() {
    return this.sliderData.length;
  }

  get Step() {
    return 100 / this.SlideCount;
  }

  get TranslateX() {
    // return this.currentSlide * -this.Step - this.gapLength * this.currentSlide;
    return -201 * this.currentSlide - this.gapLength * this.currentSlide;
  }

  calcItemsLength() {
    const slideWrapRect = this.$refs.slideWrap.getBoundingClientRect();
    const slideItemRect =
      this.$refs.slideListItem[this.currentSlide].getBoundingClientRect();

    let slideItemsCount = Math.floor(
      slideWrapRect.width / slideItemRect.width
    );

    if (slideItemsCount >= this.SlideCount) slideItemsCount = this.SlideCount


    this.gapLength =
      (slideWrapRect.width - slideItemsCount * slideItemRect.width) /
      (slideItemsCount - 1);

    const slideMaxWidth =
      (this.sliderData.length - slideItemsCount) * slideItemRect.width +
      this.gapLength * (this.sliderData.length - slideItemsCount);

    this.slideMaxCount = this.sliderData.length - slideItemsCount;

    if (-slideMaxWidth >= this.TranslateX) {
      this.translateListX = -slideMaxWidth;
      this.currentSlide = this.slideMaxCount;
    } else
      this.translateListX =
        -slideItemRect.width * this.currentSlide -
        this.gapLength * this.currentSlide;

    console.log(slideItemsCount);
    console.log(this.gapLength);
    console.log(slideMaxWidth);
    console.log(this.slideMaxCount);

  }

  nextSlide() {
    if (this.currentSlide + 1 >= this.SlideCount)
      this.currentSlide = this.SlideCount;
    else this.currentSlide = this.currentSlide + 1;

    this.calcItemsLength();
  }

  prevSlide() {
    if (this.currentSlide - 1 < 0) this.currentSlide = 0;
    else this.currentSlide = this.currentSlide - 1;

    this.calcItemsLength();
  }

  onResize() {
    this.calcItemsLength();
  }

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>
<!-- <style lang="scss">
body {
  background-color: black !important;
}
</style> -->

<style lang="scss" scoped>
.cooperation-slider {
  padding-top: 80px;

  @extend %width-main;

  @include flex-container(row, space-between, center);
  gap: 56px;

  &__arrow-left {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s ease;

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__arrow-left-img {}

  &__w {
    width: 1290px;
    overflow: hidden;
  }

  &__cont {
    --translate-x: 0;
    --gap: 0;

    @include flex-container;
    gap: Var(--gap);

    transform: translateX(Var(--translate-x));
    transition: 0.3s ease-in-out;
  }

  &__item {
    min-width: 201px;
  }

  &__img {
    height: 100%;
    object-fit: contain;
  }

  &__arrow-right {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__arrow-right-img {}
}
</style>
