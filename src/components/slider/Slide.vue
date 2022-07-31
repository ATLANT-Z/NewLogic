<template>
  <div class="category-slider__category">
    <div v-for="(slider, index) in sliderData" :key="index">
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
</template>

<script>
export default {
  name: "Slide",

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
        title: "Литиевые аккумуляторы",
        text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
        link: "logicpower.ua",
      },
    ];

    return { sliderData };
  },
};
</script>

<style></style>
