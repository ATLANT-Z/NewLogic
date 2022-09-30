<template>
  <section class="card-nav">
    <div class="card-nav__line"></div>
    <ul class="card-nav__list">
      <li class="card-nav__item" 
          v-for="(item) in navList" :key="item.id" @click="clickNav(item.id)"
      >
        <h3 class="card-nav__title" :class="{ 
          active: item.id === CurrentNav 
        }">
          {{ item.title }}
        </h3>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { ProductNav } from "@/models/view/card_product/nav";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  name: "CardProductNavComponent",
  emits: ['navChange']
})
export default class CardProductNavComponent extends Vue {
  @Prop({ required: true }) CurrentNav: ProductNav;

  navList = [
    {
      id: ProductNav.ALL,
      title: "Всё о товаре"
    },
    {
      id: ProductNav.SPEC,
      title: "Характеристики"
    },
    {
      id: ProductNav.REVIEWS,
      title: "Отзывы"
    },
    {
      id: ProductNav.MEDIA,
      title: "Видео"
    },
    {
      id: ProductNav.DOWNLOADS,
      title: "Загрузки"
    },
  ];

  clickNav(idx) {
    this.$emit('navChange', idx);
  }
}
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
    height: 3px;

    position: absolute;
    top: 0;
    left: 0;

    background-color: $color-bg-grey-lighter;

    z-index: -1;
  }

  &__list {
    width: 100%;
    max-width: 850px;

    @include flex-container(row, space-between, flex-start);
    gap: 40px;

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

  &__item {}

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
