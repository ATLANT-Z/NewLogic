<template>
  <div class="cooperation-slider">
    <div class="cooperation-slider__arrow-left">
      <img class="cooperation-slider__arrow-left-img" src="" alt="" />
    </div>
    <div class="cooperation-slider__w">
      <div class="cooperation-slider__item">
        <img class="cooperation-slider__img" src="../../assets/img/mainCooperationAtbIcon.svg" alt="" />
      </div>
      <div class="cooperation-slider__item">
        <img class="cooperation-slider__img" src="../../assets/img/mainCooperationMoyoIcon.svg" alt="" />
      </div>
      <div class="cooperation-slider__item">
        <img class="cooperation-slider__img" src="../../assets/img/mainCooperationPromIcon.svg" alt="" />
      </div>
      <div class="cooperation-slider__item">
        <img class="cooperation-slider__img" src="../../assets/img/mainCooperationFIcon.svg" alt="" />
      </div>
      <div class="cooperation-slider__item">
        <img class="cooperation-slider__img" src="../../assets/img/mainCooperationSilpoIcon.svg" alt="" />
      </div>
      <div class="cooperation-slider__item">
        <img class="cooperation-slider__img" src="../../assets/img/mainCooperationRozetkaIcon.svg" alt="" />
      </div>
    </div>
    <div class="cooperation-slider__arrow-right">
      <img src="cooperation-slider__arrow-right-img" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class CooperationSliderComponent extends Vue {}
</script>

<style lang="scss" scoped></style>
