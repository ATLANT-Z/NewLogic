<template>
  <div class="slider-about">
    <div class="slider">
      <ul class="slider__list">
        <li
          class="slider__list-item"
          v-for="(slide, index) of sliderData"
          :key="index"
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
    <div class="pagination">HELLO</div>
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

  overflow: hidden;

  &__list {
    width: 100%;

    @include flex-container;
    align-items: center;
    gap: 48px;

    transform: translateX(0px);
  }

  &__list-item {
    min-width: 1500px;
    // min-height: 616px;

    @include flex-container;
    align-items: center;
    gap: 64px;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding-right: 64px;
  }

  &__list-item-img-w {
    position: relative;
    width: 100%;
    padding-top: 100%;
  }

  &__list-item-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
  }

  &__list-item-info {
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
}
</style>
