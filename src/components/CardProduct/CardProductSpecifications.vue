<template>
  <article class="spec">
    <div class="spec__w">
      <!-- <div class="spec__buywith">
        <h4 class="spec__buywith-title">С этим продуктом покупают</h4>
        <div>SliderComponent</div>
      </div> -->
      <section class="spec__description" :class="TabList.all ? 'active' : ''">
        <div class="ui-anchor" id="description"></div>
        <h3 class="spec__title">
          Описание
          <span class="spec__article"
            >UPS 500VA + литиевая (LiFePO4) батарея 750W</span
          >
        </h3>
        <div class="ui-rich-text" v-html="contentFromServer"></div>
      </section>
      <section
        class="spec__characteristics"
        :class="
          (TabList.all ? 'active' : '') ||
          (TabList.characteristics ? 'active' : '')
        "
      >
        <h3 class="spec__title">
          Характеристики
          <span class="spec__article">GV-074-IP-H-COА14-20 3МР (Lite)</span>
        </h3>
        <div class="spec__characteristics-cont">
          <div class="spec__characteristics-name">Вес, кг:</div>
          <div class="spec__characteristics-value">0,35</div>
          <div class="spec__characteristics-name">
            Дополнительные настройки:
          </div>
          <div class="spec__characteristics-value">
            насыщенность, яркость, контраст, резкость, WDR, 3D NR, баланс
            белого. BLC, FLK (Flicker)
          </div>
        </div>
      </section>
      <section
        class="instruction"
        :class="
          (TabList.all ? 'active' : '') || (TabList.downloads ? 'active' : '')
        "
      >
        <h3 class="spec__title">
          Загрузки
          <span class="spec__article"
            >UPS 500VA + литиевая (LiFePO4) батарея 750W</span
          >
        </h3>
        <div class="instruction__title-w">
          <span class="instruction__title">Тип</span>
          <span class="instruction__title">Дата</span>
          <span class="instruction__title">Язык</span>
          <span class="instruction__title">Тип файла</span>
          <span class="instruction__title">Загрузка</span>
        </div>
        <div class="instruction__tech-w">
          <div class="instruction__tech-title-w">
            <span class="instruction__tech-title"
              >Техническая документация</span
            >
          </div>
          <div
            class="instruction__tech-row"
            v-for="(item, idx) of techData"
            :key="idx"
          >
            <span class="instruction__tech-row-title">{{ item.title }}</span>
            <span class="instruction__tech-row-date">{{ item.date }}</span>
            <span class="instruction__tech-row-lang">{{ item.lang }}</span>
            <span class="instruction__tech-row-type">{{ item.type }}</span>
            <a class="instruction__tech-row-link" :href="item.link"
              ><span>Скачать</span>
              <img
                class="instruction__tech-row-link-img"
                src="@/assets/icons/download-arrow.svg"
                alt=""
            /></a>
          </div>
        </div>
        <div class="instruction__tech-w" v-if="driverData.length">
          <div class="instruction__tech-title-w">
            <span class="instruction__tech-title">Драйвера</span>
          </div>
          <div
            class="instruction__tech-row"
            v-for="(item, idx) of driverData"
            :key="idx"
          >
            <span class="instruction__tech-row-title">{{ item.title }}</span>
            <span class="instruction__tech-row-date">{{ item.date }}</span>
            <span class="instruction__tech-row-lang">{{ item.lang }}</span>
            <span class="instruction__tech-row-type">{{ item.type }}</span>
            <a class="instruction__tech-row-link" :href="item.link"
              ><span>Скачать</span>
              <img
                class="instruction__tech-row-link-img"
                src="@/assets/icons/download-arrow.svg"
                alt=""
            /></a>
          </div>
        </div>
        <div class="instruction__tech-w">
          <div class="instruction__tech-title-w">
            <span class="instruction__tech-title">Мобильные приложения</span>
          </div>
          <div
            class="instruction__tech-row"
            v-for="(item, idx) of techData"
            :key="idx"
          >
            <span class="instruction__tech-row-title">{{ item.title }}</span>
            <span class="instruction__tech-row-date">{{ item.date }}</span>
            <span class="instruction__tech-row-lang">{{ item.lang }}</span>
            <span class="instruction__tech-row-type">{{ item.type }}</span>
            <a class="instruction__tech-row-link" :href="item.link"
              ><span>Скачать</span>
              <img
                class="instruction__tech-row-link-img"
                src="@/assets/icons/download-arrow.svg"
                alt=""
            /></a>
          </div>
        </div>
      </section>
    </div>
    <div class="product-card__position">
      <div class="product-card__w">
        <div class="product-card__img-w">
          <img
            class="product-card__img"
            src="@/assets/img/sliderPromImg.png"
            alt=""
          />
        </div>
        <div class="product-card__money" @click="isSale = !isSale">
          <div class="product-card__money-sale" v-if="isSale">
            <p class="product-card__money-sale-old">3500 грн</p>
            <p class="product-card__money-sale-new">3113 грн</p>
          </div>
          <div class="product-card__money-regular" v-else>3113 грн</div>
        </div>
        <p class="product-card__code">Код: <span>0954</span></p>
        <h2 class="product-card__title">Наружная IP Камера</h2>
        <p class="product-card__article">GV-074-IP-H-COА14 COO21 - 201080p</p>
        <button class="buy">Купить</button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

interface activeTabDataList {
  all: boolean;
  characteristics: boolean;
  reviews: boolean;
  multimedia: boolean;
  downloads: boolean;
}

@Options({})
export default class CardProductSpecificationsComponent extends Vue {
  @Prop({ required: true }) TabList: activeTabDataList;

  isSale: boolean = true;
  contentFromServer: string = "";

  techData: any[] = [
    {
      title: "Руководство пользователя",
      date: "23.01.2020",
      lang: "укр; рус;",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf",
    },
    {
      title: "Руководство пользователя IP камеры",
      date: "27.05.2021",
      lang: "eng",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf",
    },
  ];

  driverData: any[] = [
    {
      title: "Руководство пользователя",
      date: "23.01.2020",
      lang: "укр; рус;",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf",
    },
    {
      title: "Руководство пользователя IP камеры",
      date: "27.05.2021",
      lang: "eng",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf",
    },
  ];
}
</script>

<style lang="scss">
.spec {
  --local-pad: 16px;
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  gap: 16px;

  &__w {
    width: 100%;

    @extend %flex-column;
    gap: 16px;
  }

  &__title {
    @include fontUnify(18, 22, 700);

    @include bigMobile {
      font-weight: 500;
    }
  }

  &__article {
    font-weight: 400;
  }

  &__buywith-title {
  }

  &__description {
    // visibility: hidden;
    // opacity: 0;
    display: none;
    // @extend %flex-column;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: var(--local-pad);

    &.active {
      @extend %flex-column;

      // visibility: visible;
      // opacity: 1;
    }

    & .spec__title {
      margin-bottom: 24px;
    }
  }

  &__characteristics {
    // visibility: hidden;
    // opacity: 0;
    display: none;
    // @extend %flex-column;
    gap: 16px;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: var(--local-pad);

    &.active {
      @extend %flex-column;

      // visibility: visible;
      // opacity: 1;
    }
  }

  &__characteristics-cont {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;

    @include bigMobile {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__characteristics-name {
    @include fontUnify(16, 22, 600);

    @include bigMobile {
      @include fontUnify(14, 20, 500);
    }
  }

  &__characteristics-value {
    @include fontUnify;

    @include bigMobile {
      @include fontUnify(14, 20);
    }
  }
}

.instruction {
  // visibility: hidden;
  // opacity: 0;
  display: none;

  // @extend %flex-column;
  gap: 16px;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: var(--local-pad) 0;

  &.active {
    @extend %flex-column;

    // visibility: visible;
    // opacity: 1;
  }

  & .spec__title {
    padding: 0 var(--local-pad);
  }

  &__title-w {
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    justify-items: center;

    padding: 0 var(--local-pad);

    @include mobile {
      grid-template-columns: 2fr repeat(2, 1fr);
    }
  }

  &__title {
    @include fontUnify;
    letter-spacing: 0.02em;

    color: $color-text-lighter;

    &:first-child {
      justify-self: flex-start;
    }

    &:last-child {
      justify-self: flex-end;
    }

    @include mobile {
      @include fontUnify(14, 16);

      &:nth-child(2n) {
        display: none;
      }
    }
  }

  &__tech-w {
    @include flex-container(column, center, flex-start);
    gap: 16px;

    @include mobile {
      gap: 8px;
    }
  }

  &__tech-title-w {
    width: 100%;

    border-top: 1px solid $color-main;

    background: rgba(243, 108, 33, 0.1);
    padding: 8px 0;
  }

  &__tech-title {
    @include fontUnify(16, 22, 500);
    color: $color-main;

    padding-left: 16px;
  }

  &__tech-row {
    width: 100%;

    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 8px;

    justify-items: center;

    @include fontUnify;

    padding: 0 var(--local-pad);

    @include mobile {
      grid-template-columns: 2fr repeat(2, 1fr);

      @include fontUnify(14, 16);
    }
  }

  &__tech-row-title {
    justify-self: flex-start;
  }

  &__tech-row-date {
    @include mobile {
      display: none;
    }
  }

  &__tech-row-lang {
  }

  &__tech-row-type {
    @include mobile {
      display: none;
    }
  }

  &__tech-row-link {
    width: fit-content;

    color: $color-main;

    @include flex-container(row, flex-start, flex-start);
    gap: 8px;

    justify-self: flex-end;

    & span {
      border-bottom: 1px solid transparent;

      transition: 0.2s ease;
    }

    &:hover {
      & span {
        border-bottom: 1px solid $color-main;
      }

      & .instruction__tech-row-link-img {
        transform: translateY(2px);
      }
    }
  }

  &__tech-row-link-img {
    transition: 0.2s ease;

    @include mobile {
      display: none;
    }
  }
}

.product-card {
  &__position {
    @include bigMobile {
      display: none;
    }
  }

  &__w {
    width: 346px;

    @include flex-container(column, center, center);
    gap: 8px;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    position: sticky;
    top: calc(16px + var(--height-header));

    padding: var(--local-pad);
  }

  &__img-w {
    max-width: 250px;
    width: 100%;
  }

  &__img {
  }

  &__money {
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 8px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-start, center);
    gap: 8px;
  }

  &__money-sale-old {
    @include fontUnify(18, 24);
    text-decoration: line-through;
  }

  &__money-sale-new {
    @include fontUnify(24, 32, 500);
    color: red;
  }

  &__money-regular {
    @include fontUnify(24, 32, 500);
  }

  &__code {
    align-self: flex-start;
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__title {
    align-self: flex-start;
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__article {
    align-self: flex-start;
    @include fontUnify(16, 22, 600);
    letter-spacing: 0.02em;
  }
}

.buy {
  max-width: 274px;
  width: 100%;

  @include flex-container(row, center, center);
  padding: 8px 0;

  @include fontUnify(18, 24);
  text-align: center;

  color: white;
  background: #f36c21;
  border-radius: 6px;
}
</style>
