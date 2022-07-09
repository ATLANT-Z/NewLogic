<template>
  <section class="banner">
    <div class="banner__img-w">
      <picture>
        <source
          srcset="../assets/img/instructionBannerMob.png"
          media="(max-width: 680px)"
        />
        <img
          class="banner__img"
          src="../assets/img/instructionBanner.png"
          alt=""
        />
      </picture>
    </div>
    <div class="banner__content">
      <div class="banner__content-column">
        <h1 class="banner__title">ИНСТРУКЦИИ</h1>
        <p class="banner__text">
          Данный раздел содержит инструкции по настройке оборудования,
          предоставленного нашей компанией.
        </p>
        <input
          class="banner__input"
          type="text"
          placeholder="Введите код или модель товара"
        />
      </div>
    </div>
  </section>
  <section class="instruction">
    <div class="instruction__head">
      <div class="instruction__head-w">
        <span class="instruction__head-item">Код</span>
        <span class="instruction__head-item">Категория</span>
        <span class="instruction__head-item">Название</span>
        <span class="instruction__head-item">Модель</span>
        <span class="instruction__head-item">Подробнее</span>
      </div>
    </div>
    <div class="instruction__body">
      <div class="instruction__body-item">
        <div class="instruction__body-item-header">
          <span class="instruction__body-item-header-text">4135</span>
          <span class="instruction__body-item-header-text"
            >Аккумуляторы 4-6V (AGM)</span
          >
          <span class="instruction__body-item-header-text"
            >Аккумулятор AGM</span
          >
          <span class="instruction__body-item-header-text">LPM 4V - 4 Ah</span>
          <span class="instruction__body-item-header-text">Развернуть</span>
        </div>
        <div class="instruction__body-item-list-w">
          <div class="instruction__body-item-list-title-w">
            <span class="instruction__body-item-list-title">Название</span>
            <span class="instruction__body-item-list-title">Тип файла</span>
            <span class="instruction__body-item-list-title">Язык</span>
            <span class="instruction__body-item-list-title">Дата</span>
            <span class="instruction__body-item-list-title">Загрузка</span>
          </div>
          <div class="instruction__body-item-list-line"></div>
          <ul class="instruction__body-content">
            <li class="instruction__body-content-item">Паспорт аккумулятора</li>
            <li class="instruction__body-content-item">pdf</li>
            <li class="instruction__body-content-item">укр</li>
            <li class="instruction__body-content-item">07.12.2020</li>
            <li class="instruction__body-content-item">
              <a class="instruction__body-content-item-link" href="#"
                >Скачать</a
              >
            </li>
          </ul>
          <ul class="instruction__body-content">
            <li class="instruction__body-content-item">
              Инструкция по эксплуатации
            </li>
            <li class="instruction__body-content-item">pdf</li>
            <li class="instruction__body-content-item">укр</li>
            <li class="instruction__body-content-item">07.12.2020</li>
            <li class="instruction__body-content-item">
              <a class="instruction__body-content-item-link" href="#"
                >Скачать</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class InstructionComponent extends Vue {}
</script>

<style lang="scss">
.instruction {
  @extend %flex-column;
  align-items: center;
  gap: 32px;

  @include fontUnify(20, 28);
  letter-spacing: 0.02em;

  &__head {
    width: 100%;

    display: flex;
    justify-content: center;

    background: #d1d1d1;
  }

  &__head-w {
    @extend %width-main;

    display: grid;
    grid-template-columns: 0.5fr repeat(4, 1fr);
    align-items: center;
    column-gap: 16px;

    padding: 32px 48px;
  }

  &__head-item {
    text-align: center;
  }

  &__body {
    @extend %width-main;

    padding: 0 16px;
  }

  &__body-item {
    @extend %flex-column;
    align-items: center;
    gap: 8px;
  }

  &__body-item-header {
    width: 100%;

    display: grid;
    grid-template-columns: 0.5fr repeat(4, 1fr);
    align-items: center;
    column-gap: 16px;

    background-color: #ffffff;
    border-radius: 8px;

    padding: 16px 32px;
  }

  &__body-item-header-text {
    text-align: center;

    &:last-child {
      color: $color-main;
      cursor: pointer;

      &:hover {
        color: $color-main-dark;
      }
    }
  }

  &__body-item-list-w {
    width: 100%;

    @extend %flex-column;
    align-items: center;
    gap: 16px;

    background-color: #ffffff;
    border-radius: 8px;

    padding: 16px 32px;
  }

  &__body-item-list-title-w {
    width: 100%;

    display: grid;
    grid-template-columns: 1.5fr repeat(4, 1fr);
    align-items: center;
    column-gap: 16px;

    color: #8a8a8a;
  }

  &__body-item-list-line {
    width: 100%;
    background-color: #d1d1d1;
    height: 1px;
  }

  &__body-item-list-title {
    text-align: center;

    &:first-child {
      text-align: left;
    }
  }

  &__body-content {
    width: 100%;

    display: grid;
    grid-template-columns: 1.5fr repeat(4, 1fr);
    align-items: center;
    column-gap: 16px;
  }

  &__body-content-item {
    text-align: center;

    &:first-child {
      text-align: left;
    }
  }

  &__body-content-item-link {
    color: $color-main;

    &:hover {
      color: $color-main-dark;
    }
  }
}
</style>
