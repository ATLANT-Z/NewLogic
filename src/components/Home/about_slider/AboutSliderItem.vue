<template>
  <li class="slider__list-item">
    <div class="slider__list-item-img-w">
      <img
        class="slider__list-item-img"
        src="@/assets/img/mainAboutUsImg.png"
        alt=""
      />
    </div>
    <div class="slider__list-item-info">
      <p class="slider__list-item-info-title">{{ aboutCard.title }}</p>
      <p
        class="slider__list-item-info-text"
        :class="{
          active: isActive,
        }"
        ref="itemText"
      >
        {{ aboutCard.text }}
      </p>
      <div
        class="slider__list-item-btn"
        v-if="isMobile && isTextBiggerThanWrapper"
        @click="isActive = !isActive"
      >
        {{ isActive ? "Свернуть" : "Развернуть" }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { AboutCard } from "@/models/view/about_slider";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  name: "AboutSliderItemComponent",
})
export default class AboutSliderItemComponent extends Vue {
  @Prop({ required: true }) aboutCard: AboutCard;
  @Prop({ required: true }) isMobile: boolean;

  declare $refs: {
    itemText: HTMLElement;
  };

  isTextBiggerThanWrapper: boolean = false;
  isActive: boolean = false;

  calcItemTextHeight() {
    const rawHeight = getComputedStyle(this.$refs.itemText).getPropertyValue(
      "--mob-height"
    );
    const height = parseFloat(rawHeight);

    this.isTextBiggerThanWrapper = this.$refs.itemText.scrollHeight > height;
  }

  onResize() {
    this.calcItemTextHeight();
  }

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>

<style lang="scss" scoped>
.slider {
  &__list-item {
    --item-width: 0;
    min-width: var(--item-width);
    height: 600px;

    @include flex-container;
    align-items: center;
    gap: 64px;

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding-right: 64px;

    transform: scaleY(0.8);
    transition: 0.7s cubic-bezier(0.18, 0.17, 0.74, 0.76);
    @include smallScreen {
      height: 540px;

      gap: 32px;

      box-shadow: none;

      padding-right: 32px;
    }

    @include bigMobile {
      min-width: 100%;
      height: auto;

      flex-direction: column;
      gap: 24px;

      padding: 0;
    }
    &.active {
      transform: scaleY(1);
    }
  }

  &__list-item-img-w {
    width: 100%;
    height: 100%;

    box-shadow: inherit;

    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    @include bigMobile {
      height: 450px;

      box-shadow: none;

      border-top-right-radius: inherit;
      border-bottom-left-radius: none;
    }

    @include mobile {
      height: 300px;
    }
  }

  &__list-item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    box-shadow: inherit;

    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    @include bigMobile {
      box-shadow: none;

      border-top-right-radius: inherit;
      border-bottom-left-radius: none;
    }
  }

  &__list-item-info {
    width: 100%;
    max-width: 756px;

    @extend %flex-column;
    gap: 56px;

    @include smallScreen {
      gap: 28px;
    }

    @include bigMobile {
      gap: 8px;

      padding: 0 16px 8px;
    }
  }

  &__list-item-info-title {
    @include fontUnify(64, 80, 500);
    color: $color-main;

    @include smallScreen {
      @include fontUnify(48, 52, 500);
    }

    @include bigMobile {
      @include fontUnify(20, 30, 600);
    }
  }

  &__list-item-info-text {
    --mob-height: 180px;

    @include fontUnify(22, 30, 700);
    letter-spacing: 0.02em;

    transition: 0.2s ease;

    @include smallScreen {
      @include fontUnify(20, 26, 700);
    }

    @include bigMobile {
      @include fontUnify;

      @include lineClamp(8);

      height: var(--mob-height);
    }

    &.active {
      height: auto;
      display: block;
    }
  }

  &__list-item-btn {
    @include fontUnify;
    letter-spacing: 0.02em;
    text-align: left;
    color: $color-main;

    cursor: none;
  }
}
</style>
