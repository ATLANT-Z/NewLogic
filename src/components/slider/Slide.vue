<template>
  <li class="category-slider__prod-item">
    <transition name="slide">
      <slot />
    </transition>
  </li>
</template>

<script>
export default {
  name: "Slide",
};
</script>

<style></style>
