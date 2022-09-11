<template>
  <article class="card-nav">
    <h3 class="card-nav__line"></h3>
    <ul class="card-nav__list">
      <li class="card-nav__item">
        <h3 class="card-nav__title active">Всё о товаре</h3>
      </li>
      <li class="card-nav__item">
        <h3 class="card-nav__title">Характеристики</h3>
      </li>
      <li class="card-nav__item">
        <h3 class="card-nav__title">Отзывы</h3>
      </li>
      <li class="card-nav__item">
        <h3 class="card-nav__title">Мультимедиа</h3>
      </li>
      <li class="card-nav__item">
        <h3 class="card-nav__title">Загрузки</h3>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "CardProductNavComponent",
})
export default class CardProductNavComponent extends Vue {}
</script>

<style lang="scss" scoped>
.card-nav {
  width: 100%;

  @extend %flex-column;
  align-items: center;

  position: relative;

  @include mobile {
    align-items: flex-start;
  }

  &__line {
    width: 100%;
    height: 1px;

    position: absolute;
    top: 1px;
    left: 0;

    background-color: $color-bg-grey;

    z-index: -1;
  }

  &__list {
    width: 100%;
    max-width: 850px;

    @include flex-container(row, space-between, flex-start);
    gap: 40px;

    padding-bottom: 8px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: $color-bg-grey;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $color-main;
    }

    @include mobile {
      gap: 16px;
    }
  }

  &__item {
  }

  &__title {
    @include fontUnify(20, 24);
    text-align: center;

    border-top: 3px solid transparent;

    white-space: nowrap;

    padding-top: 8px;

    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      border-top: 3px solid $color-main;
      color: $color-main;
    }
    &.active {
      border-top: 3px solid $color-main;
      color: $color-main;
    }

    @include bigMobile {
      @include fontUnify(14, 20);
    }
  }
}
</style>
