<template>
  <article class="card-nav">
    <div class="card-nav__line"></div>
    <ul class="card-nav__list">
      <li
        class="card-nav__item"
        v-for="(item, idx) in TabList"
        :key="idx"
        @click="CurrentNavF(idx)"
      >
        <h3 class="card-nav__title" :class="{ active: idx === CurrentNav }">
          {{ item.title }}
        </h3>
      </li>
      <!-- <li class="card-nav__item">
        <h3 class="card-nav__title" @click="
          (TabList.all = true),
            (TabList.characteristics = false),
            (TabList.reviews = false),
            (TabList.multimedia = false),
            (TabList.downloads = false)
        " :class="TabList.all ? 'active' : ''">
          Всё о товаре
        </h3>
      </li>
      <li class="card-nav__item">
        <h3 class="card-nav__title" @click="
          (TabList.all = false),
            (TabList.characteristics = true),
            (TabList.reviews = false),
            (TabList.multimedia = false),
            (TabList.downloads = false)
        " :class="TabList.characteristics ? 'active' : ''">
          Характеристики
        </h3>
      </li>
      <li class="card-nav__item">
        <h3 class="card-nav__title" @click="
          (TabList.all = false),
            (TabList.characteristics = false),
            (TabList.reviews = true),
            (TabList.multimedia = false),
            (TabList.downloads = false)
        " :class="TabList.reviews ? 'active' : ''">
          Отзывы
        </h3>
      </li>
      <li class="card-nav__item">
        <h3 class="card-nav__title" @click="
          (TabList.all = false),
            (TabList.characteristics = false),
            (TabList.reviews = false),
            (TabList.multimedia = true),
            (TabList.downloads = false)
        " :class="TabList.multimedia ? 'active' : ''">
          Мультимедиа
        </h3>
      </li>
      <li class="card-nav__item">
        <h3 class="card-nav__title" @click="
          (TabList.all = false),
            (TabList.characteristics = false),
            (TabList.reviews = false),
            (TabList.multimedia = false),
            (TabList.downloads = true)
        " :class="TabList.downloads ? 'active' : ''">
          Загрузки
        </h3>
      </li> -->
    </ul>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

interface navList {
  title: any;
}

@Options({
  name: "CardProductNavComponent",
  emits: {
    CurrentNavF(idx) {
      this.CurrentNav = idx;
    },
  },
})
export default class CardProductNavComponent extends Vue {
  @Prop({ required: true }) TabList: navList;
  @Prop({ required: true }) CurrentNavF: Function;
  @Prop({ required: true }) CurrentNav: Function;

  // navList: any[] = [
  //   { title: "Всё о товаре" },
  //   { title: "Характеристики" },
  //   { title: "Отзывы" },
  //   { title: "Мультимедиа" },
  //   { title: "Загрузки" },
  // ]
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
