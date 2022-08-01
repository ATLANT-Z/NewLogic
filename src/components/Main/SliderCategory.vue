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
        <div class="category-slider__prod-list-container">
          <ul class="category-slider__prod-list">
            <li
              class="category-slider__prod-item"
              v-for="(slide, index) in sliderData"
              :key="index"
              :class="{ 'prod-item-active': index === currentSlide }"
              @click="goToSlide(index)"
            >
              {{ slide.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="category-slider__category">
      <div class="category-slider__category-w">
        <div
          class="category-slider__category-item-w"
          v-for="(slider, index) in sliderData"
          :key="index"
        >
          <div class="category-slider__category-img">
            <img :src="require(`../../assets/img/${slider.img}.png`)" alt="" />
          </div>
          <div class="category-slider__category-title-w">
            <h4 class="category-slider__category-title">{{ slider.title }}</h4>
            <p class="category-slider__category-description">
              {{ slider.text }}
            </p>
            <a :href="`${slider.link}`" class="category-slider__category-link"
              >Перейти в раздел</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "SliderCategory",

  setup() {
    const sliderData = [
      {
        img: "sliderPromImg",
        title: "Комплектующие для ПК",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "google.com",
      },
      {
        img: "sliderPromImg",
        title: "ИБП (UPS)",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "#",
      },
      {
        img: "sliderPromImg",
        title: "BMS",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
      {
        img: "sliderPromImg",
        title: "Аксессуары",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
      {
        img: "sliderPromImg",
        title: "Литиевые аккумуляторы",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
      {
        img: "sliderPromImg",
        title: "EGM аккумуляторы",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
      {
        img: "sliderPromImg",
        title: "EGM аккумуляторы",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
      {
        img: "sliderPromImg",
        title: "EGM аккумуляторы",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
      {
        img: "sliderPromImg",
        title: "EGM аккумуляторы",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
      {
        img: "sliderPromImg",
        title: "EGM аккумуляторы",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
      {
        img: "sliderPromImg",
        title: "EGM аккумуляторы",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
    ];

    const getSlideCount = ref(null);
    const currentSlide = ref(0);

    const nextSlide = () => {
      const slideHeight = document.querySelector(
        ".category-slider__category-w"
      );

      const pagginationHeight = document.querySelector(
        ".category-slider__prod-list"
      );

      if (currentSlide.value > getSlideCount.value - 2) {
        currentSlide.value = 0;

        window.getComputedStyle(slideHeight).getPropertyValue("--scrollUp");

        slideHeight.style.setProperty(
          "--scrollUp",
          -currentSlide.value * 767 + "px"
        );

        window
          .getComputedStyle(pagginationHeight)
          .getPropertyValue("--scrollUp");

        pagginationHeight.style.setProperty("--scrollUp", 0 + "px");
        return;
      }
      currentSlide.value = currentSlide.value + 1;

      window.getComputedStyle(slideHeight).getPropertyValue("--scrollUp");

      slideHeight.style.setProperty(
        "--scrollUp",
        -currentSlide.value * 767 + "px"
      );

      if (currentSlide.value >= getSlideCount.value - (getSlideCount.value/3)) {
        window
          .getComputedStyle(pagginationHeight)
          .getPropertyValue("--scrollUp");

        pagginationHeight.style.setProperty("--scrollUp", -84 + "px");
      }
    };

    const prevSlide = () => {
      const slideHeight = document.querySelector(
        ".category-slider__category-w"
      );

      if (currentSlide.value === 0) {
        currentSlide.value = getSlideCount.value - 1;

        window.getComputedStyle(slideHeight).getPropertyValue("--scrollUp");

        slideHeight.style.setProperty(
          "--scrollUp",
          -currentSlide.value * 767 + "px"
        );
        return;
      }
      currentSlide.value = currentSlide.value - 1;

      window.getComputedStyle(slideHeight).getPropertyValue("--scrollUp");

      slideHeight.style.setProperty(
        "--scrollUp",
        -currentSlide.value * 767 + "px"
      );
    };

    const goToSlide = (index) => {
      currentSlide.value = index;

      const slideHeight = document.querySelector(
        ".category-slider__category-w"
      );

      window.getComputedStyle(slideHeight).getPropertyValue("--scrollUp");

      slideHeight.style.setProperty(
        "--scrollUp",
        -currentSlide.value * 767 + "px"
      );
    };

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(
        ".category-slider__prod-item"
      ).length;
    });

    return { currentSlide, nextSlide, prevSlide, sliderData, goToSlide };
  },
};
</script>

<style lang="scss">
:root {
  --scrollUp: 0;
}

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
    position: relative;

    max-height: 468px;

    @extend %flex-column;
    gap: 16px;

    transform: translateY(var(--scrollUp));
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

    background-color: #ffffff;
    overflow: hidden;

    padding: 0 32px;
  }

  &__category-w {
    transform: translateY(var(--scrollUp));
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

    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: #ffffff;

    border-radius: 6px;
    background-color: $color-main;

    padding: 8px 88px;

    cursor: pointer;

    &:hover {
      background-color: $color-main-dark;
    }
  }
}
</style>
