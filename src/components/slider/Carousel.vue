<template>
  <div class="category-slider">
    <div class="category-slider__prod">
      <div class="category-slider__prod-title-w">
        <h3 class="category-slider__prod-title">Продукция</h3>
        <div class="category-slider__prod-line"></div>
      </div>
      <div class="category-slider__prod-list-w">
        <div class="category-slider__prod-arrows">
          <div class="category-slider__prod-arrow-up">
            <span></span>
          </div>
          <div class="category-slider__prod-arrow-down">
            <span></span>
          </div>
        </div>
        <ul class="category-slider__prod-list">
          <li class="category-slider__prod-item">Литиевые аккумуляторы</li>
          <li class="category-slider__prod-item">ИБП (UPS)</li>
          <li class="category-slider__prod-item prod-item-active">
            Комплектующие для ПК
          </li>
          <li class="category-slider__prod-item">Комплектующие для ПК</li>
          <li class="category-slider__prod-item">Комплектующие для ПК</li>
          <li class="category-slider__prod-item">Комплектующие для ПК</li>
          <li class="category-slider__prod-item">Комплектующие для ПК</li>
          <li class="category-slider__prod-item">Комплектующие для ПК</li>
          <li class="category-slider__prod-item">Комплектующие для ПК</li>
          <li class="category-slider__prod-item">Комплектующие для ПК</li>
          <li class="category-slider__prod-item">Комплектующие для ПК</li>
        </ul>
      </div>
    </div>
    <div class="category-slider__category">
      <div class="category-slider__category-img">
        <img src="../../assets/img/sliderPromImg.png" alt="" />
      </div>
      <div class="category-slider__category-title-w">
        <h4 class="category-slider__category-title">
          СТАБИЛИЗАТОРЫ НАПРЯЖЕНИЯ
        </h4>
        <p class="category-slider__category-description">
          Благодаря форме выходного напряжения в виде правильной (чистой)
          синусоиды, стабилизаторы удерживают максимально точные показатели
          напряжения (220V+/- 10%), необходимого для корректной работы
          электрических приборов.
        </p>
        <a class="category-slider__category-link">Перейти в раздел</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class CarouselComponent extends Vue {}
</script>

<style lang="scss">
.category-slider {
  @include flex-container(row, center);
  @extend %width-main;
  min-height: 767px;

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
    z-index: 1;
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

  &__prod-list {
    position: relative;

    max-height: 468px;

    @extend %flex-column;
    gap: 16px;

    overflow: hidden;
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

    @extend %flex-column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: #ffffff;
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
