<template>
  <div class="category-slider">
    <div class="category-slider__prod">
      <div class="category-slider__prod-title-w">
        <h3 class="category-slider__prod-title">Продукция</h3>
        <div class="category-slider__prod-line"></div>
      </div>
      <div class="category-slider__prod-list-w">
        <div class="category-slider__prod-arrows">
          <div class="category-slider__prod-arrow-up" @click="prevSlide">
            <span></span>
          </div>
          <div class="category-slider__prod-arrow-down" @click="nextSlide">
            <span></span>
          </div>
        </div>
        <div class="category-slider__prod-list-container" ref="leftWrapper">
          <ul
            class="category-slider__prod-list"
            ref="linkListEl"
            :style="{ '--translate-y': linksTranslateY + 'px' }"
          >
            <li
              class="category-slider__prod-item"
              v-for="(pagination, index) in sliderData"
              :key="index"
              :class="{ 'prod-item-active': index === currentSlide }"
              @click="goToSlide(index)"
              ref="linkItems"
            >
              {{ pagination.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="category-slider__category">
      <div
        class="category-slider__category-w"
        :style="{ '--translate-y': TranslateY + '%' }"
      >
        <div
          class="category-slider__category-item-w"
          v-for="(slide, index) in sliderData"
          :key="index"
        >
          <div class="category-slider__category-img">
            <img :src="require(`../../assets/img/${slide.img}.png`)" alt="" />
          </div>
          <div class="category-slider__category-title-w">
            <h4 class="category-slider__category-title">{{ slide.title }}</h4>
            <p class="category-slider__category-description">
              {{ slide.text }}
            </p>
            <a :href="`${slide.link}`" class="category-slider__category-link"
              >Перейти в раздел</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  name: "SliderCategoryComponent",
})
export default class SliderCategoryComponent extends Vue {
  declare $refs: {
    leftWrapper: HTMLElement;
    linkListEl: HTMLElement;
    linkItems: HTMLElement[];
  };

  sliderData: any = [
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
  ];

  currentSlide: number = 0;
  linksTranslateY: number = 0;

  get SlideCount() {
    return this.sliderData.length;
  }

  get TranslateY() {
    return this.currentSlide * -this.Step;
  }

  get Step() {
    return 100 / this.SlideCount;
  }

  prevSlide() {
    if (this.currentSlide - 1 < 0) this.currentSlide = this.SlideCount - 1;
    else this.currentSlide = this.currentSlide - 1;

    this.calcHeight();
  }

  nextSlide() {
    if (this.currentSlide + 1 >= this.SlideCount) this.currentSlide = 0;
    else this.currentSlide = this.currentSlide + 1;

    this.calcHeight();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.calcHeight();
  }

  calcHeight() {
    const leftWrapRect = this.$refs.leftWrapper.getBoundingClientRect();
    const linkListRect = this.$refs.linkListEl.getBoundingClientRect();
    const activeLinkRect =
      this.$refs.linkItems[this.currentSlide].getBoundingClientRect();

    const linkBottomFromWrapperCenter =
      leftWrapRect.height / 2 - (activeLinkRect.bottom - leftWrapRect.top);

    if (this.linksTranslateY + linkBottomFromWrapperCenter > 0) {
      this.linksTranslateY = 0;
    } else if (
      this.linksTranslateY + linkBottomFromWrapperCenter <
      leftWrapRect.height - linkListRect.height
    ) {
      this.linksTranslateY = leftWrapRect.height - linkListRect.height;
    } else {
      this.linksTranslateY += linkBottomFromWrapperCenter;
    }
  }

  // onResize() {
  //   this.calcHeight();
  // }

  // mounted() {
  //   this.onResize();
  //   window.addEventListener("resize", this.onResize);
  // }

  // unmounted() {
  //   window.removeEventListener("resize", this.onResize);
  // }
}
</script>

<style lang="scss">
.category-slider {
  @include flex-container(row, center);
  @extend %width-main;
  height: 767px;

  border-radius: 16px;
  overflow: hidden;
  margin: 0 auto;

  &__prod {
    max-width: 415px;
    width: 100%;

    @extend %flex-column;
    flex-shrink: 2;
    flex-grow: 1;

    padding: 32px 16px;
    color: #ffffff;
    background-color: #393d38;
  }

  &__prod-title-w {
  }

  &__prod-title {
    @include fontUnify(42, 50, 700);
    text-align: center;
    text-transform: uppercase;

    margin-bottom: 16px;
  }

  &__prod-line {
    width: 100%;
    height: 1px;

    background-color: #ffffff;
  }

  &__prod-list-w {
    position: relative;
    height: 100%;

    padding: 80px 0;
  }

  &__prod-arrows {
    position: absolute;
    @include setAbs;

    @extend %flex-column;
    justify-content: space-between;
    align-items: center;

    padding-top: 24px;
    z-index: 3;
  }

  &__prod-arrow-up {
    @include flex-container(row, center, center);

    width: 48px;
    height: 48px;

    border-radius: 50%;

    background-color: #ffffff;

    cursor: pointer;

    &:hover span {
      border-color: $color-main-dark;
    }

    & span {
      width: 10px;
      height: 10px;

      border-top: 1px solid black;
      border-left: 1px solid black;

      transform: rotateZ(45deg) translate(2px, 2px);
      &:hover {
        color: $color-main-dark;
      }
    }
  }

  &__prod-arrow-down {
    @include flex-container(row, center, center);

    width: 48px;
    height: 48px;

    border-radius: 50%;

    background-color: #ffffff;

    cursor: pointer;

    &:hover span {
      border-color: $color-main-dark;
    }

    & span {
      width: 10px;
      height: 10px;

      border-top: 1px solid black;
      border-left: 1px solid black;

      transform: rotateZ(225deg) translate(2px, 2px);
    }
  }

  &__prod-list-container {
    width: 100%;
    height: 468px;

    overflow: hidden;
  }

  &__prod-list {
    --translate-y: 0;

    position: relative;

    @extend %flex-column;
    gap: 16px;

    @include anim();

    transform: translateY(Var(--translate-y));
    z-index: 3;
  }

  &__prod-item {
    @include fontUnify(30, 42, 700);
    letter-spacing: 0.02em;

    cursor: pointer;

    &.prod-item-active {
      color: $color-main;
    }
  }

  &__category {
    width: 100%;
    height: 767px;

    @extend %flex-column;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 2;

    background-color: #ffffff;
    overflow: hidden;

    padding: 0 32px;
  }

  &__category-w {
    --translate-y: 0;
    transform: translateY(Var(--translate-y));
    transition: 0.3s ease-in;
  }

  &__category-item-w {
    width: 100%;
    height: 767px;
  }

  &__category-img {
    @include flex-container(row, center);
  }

  &__category-title-w {
    width: 100%;
    max-width: 920px;

    @extend %flex-column;
    gap: 16px;
  }

  &__category-title {
    width: 100%;

    @include fontUnify(32, 40, 600);
    letter-spacing: 0.02em;
    text-align: start;
    text-transform: uppercase;
  }

  &__category-description {
    @include fontUnify(20, 28);
    letter-spacing: 0.02em;

    margin-bottom: 16px;
  }

  &__category-link {
    width: 100%;
    max-width: 376px;

    @include flex-container(row, center, center);

    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: #ffffff;

    border-radius: 6px;
    background-color: $color-main;

    padding: 8px 0;
    padding: 8px 88px;

    cursor: pointer;

    &:hover {
      background-color: $color-main-dark;
    }
  }
}
</style>
