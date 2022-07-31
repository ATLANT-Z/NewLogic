<template>
  <div class="category-slider__prod-list-w">
    <div class="category-slider__prod-arrows">
      <div class="category-slider__prod-arrow-up" @click="prevSlide">
        <span></span>
      </div>
      <div class="category-slider__prod-arrow-down" @click="nextSlide">
        <span></span>
      </div>
    </div>
    <ul class="category-slider__prod-list">
      <Slide
        v-for="(slide, index) in carouselSlides"
        :key="index"
        :class="{ 'prod-item-active': index + 1 === currentSlide }"
        @click="goToSlide(index)"
        >{{ slide }}</Slide
      >
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Slide from "./Slide.vue";

export default {
  components: { Slide },

  setup() {
    const carouselSlides = [
      "Комплектующие для ПК",
      "Литиевые аккумуляторы",
      "ИБП (UPS)",
      "Комплектующие для ПК",
      "Комплектующие для ПК",
      "Комплектующие для ПК",
      "Литиевые аккумуляторы",
      "Литиевые аккумуляторы",
      "Литиевые аккумуляторы",
      "Литиевые аккумуляторы",
    ];

    const currentSlide = ref(1);
    const getSlideCount = ref(null);

    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(
        ".category-slider__prod-item"
      ).length;
    });

    return { currentSlide, nextSlide, prevSlide, carouselSlides, goToSlide };
  },
};
</script>

<style></style>
