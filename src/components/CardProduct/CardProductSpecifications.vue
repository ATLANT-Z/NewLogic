<template>
  <article class="spec">
    <div class="spec__w">
      <div class="spec__buywith">
        <h4 class="spec__buywith-title">С этим продуктом покупают</h4>
        <div>SliderComponent</div>
      </div>
      <section class="spec__description">
        <div class="ui-anchor" id="description"></div>
        <h3 class="spec__title">
          Описание
          <span class="spec__article">UPS 500VA + литиевая (LiFePO4) батарея 750W</span>
        </h3>
        <div class="ui-rich-text" v-html="contentFromServer"></div>
      </section>
      <section class="spec__characteristics">
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
      <section class="instruction">
        <h3 class="spec__title">
          Загрузки
          <span class="spec__article">UPS 500VA + литиевая (LiFePO4) батарея 750W</span>
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
            <span class="instruction__tech-title">Техническая документация</span>
          </div>
          <div class="instruction__tech-row" v-for="(item, idx) of techData" :key="idx">
            <span class="instruction__tech-row-title">{{item.title}}</span>
            <span class="instruction__tech-row-date">{{item.date}}</span>
            <span class="instruction__tech-row-lang">{{item.lang}}</span>
            <span class="instruction__tech-row-type">{{item.type}}</span>
            <a class="instruction__tech-row-link" :href="item.link">Скачать</a>
          </div>
        </div>
        <div class="instruction__tech-w">
          <div class="instruction__tech-title-w">
            <span class="instruction__tech-title">Драйвера</span>
          </div>
          <div class="instruction__tech-row" v-for="(item, idx) of techData" :key="idx">
            <span class="instruction__tech-row-title">{{item.title}}</span>
            <span class="instruction__tech-row-date">{{item.date}}</span>
            <span class="instruction__tech-row-lang">{{item.lang}}</span>
            <span class="instruction__tech-row-type">{{item.type}}</span>
            <a class="instruction__tech-row-link" :href="item.link">Скачать</a>
          </div>
        </div>
        <div class="instruction__tech-w">
          <div class="instruction__tech-title-w">
            <span class="instruction__tech-title">Мобильные приложения</span>
          </div>
          <div class="instruction__tech-row" v-for="(item, idx) of techData" :key="idx">
            <span class="instruction__tech-row-title">{{item.title}}</span>
            <span class="instruction__tech-row-date">{{item.date}}</span>
            <span class="instruction__tech-row-lang">{{item.lang}}</span>
            <span class="instruction__tech-row-type">{{item.type}}</span>
            <a class="instruction__tech-row-link" :href="item.link">Скачать</a>
          </div>
        </div>
        <div class="instruction__tech-w"></div>
        <div class="instruction__tech-w"></div>
      </section>
    </div>
    <div class="product-card__position">
      <div class="product-card__w">
        <div class="product-card__img-w">
          <img class="product-card__img" src="@/assets/img/sliderPromImg.png" alt="" />
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

@Options({})
export default class CardProductSpecificationsComponent extends Vue {
  isSale: boolean = true;
  contentFromServer: string = "";

  techData: any[] = [
    {
      title: "Руководство пользователя",
      date: "23.01.2020",
      lang: "укр; рус;",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf"
    },
    {
      title: "Руководство пользователя IP камеры",
      date: "27.05.2021",
      lang: "eng",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf"
    }
  ]
}
</script>

<style lang="scss">
.spec {
  --local-pad: 16px;
  width: 100%;

  @include flex-container;
  gap: 16px;

  &__w {
    width: 100%;
    height: 400vh;

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

  &__buywith-title {}

  &__description {
    @extend %flex-column;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: var(--local-pad);

    & .spec__title {
      margin-bottom: 24px;

      @include bigMobile {
        margin-bottom: 16px;
      }
    }
  }

  &__characteristics {
    @extend %flex-column;
    gap: 16px;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: var(--local-pad);
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
  @extend %flex-column;
  gap: 16px;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: var(--local-pad) 0;

  @include mobile {
    gap: 16px;
  }

  & .spec__title {
    padding: 0 var(--local-pad);
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

  &__img {}

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
