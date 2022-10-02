<template>
  <section class="banner">
    <div class="banner__img-w">
      <picture>
        <source
          srcset="../assets/img/partnershipBannerMob.png"
          media="(max-width: 680px)"
        />
        <img
          class="banner__img"
          src="../assets/img/partnershipBanner.png"
          alt=""
        />
      </picture>
    </div>
    <div class="banner__content">
      <div class="banner__content-column">
        <h1 class="banner__title">Сотрудничество</h1>
      </div>
    </div>
  </section>
  <section class="cooperation">
    <div class="cooperation__w">
      <div class="cooperation__start">
        <h4 class="cooperation__start-title">Как начать сотрудничество?</h4>
        <div class="cooperation__start-step">
          <div class="cooperation__start-step-item">
            <img
              class="cooperation__start-step-img"
              src="../assets/icons/partnership1Icon.png"
              alt=""
            />
            <p class="cooperation__start-step-text">
              РЕГИСТРИРУЙТЕСЬ, ПОЛУЧАЙТЕ ДОСТУП К ОПТОВЫМ ЦЕНАМ
            </p>
          </div>
          <div class="cooperation__start-step-item">
            <img
              class="cooperation__start-step-img"
              src="../assets/icons/partnership2Icon.png"
              alt=""
            />
            <p class="cooperation__start-step-text">
              С ВАМИ СВЯЖЕТСЯ МЕНЕДЖЕР, ДЛЯ ПОДТВЕРЖДЕНИЯ ДАННЫХ
            </p>
          </div>
          <div class="cooperation__start-step-item">
            <img
              class="cooperation__start-step-img"
              src="../assets/icons/partnership3Icon.png"
              alt=""
            />
            <p class="cooperation__start-step-text">
              ИСПОЛЬЗУЙТЕ НАШ СЕРВИС B2B ДЛЯ БЫСТРОГО ЗАКАЗА ТОВАРОВ
            </p>
          </div>
        </div>
        <div class="cooperation__registration">
          <p class="cooperation__text">
            Для регистрации на сервисе необходимо нажать на кнопку “Регистрация”
            и заполнить необходимые поля в форме для регистрации. После чего
            администратор сервиса подтверждает регистрацию и отправляет Вам на
            электронную почту соответствующее письмо.
          </p>
          <button class="cooperation__btn">Регистрация</button>
        </div>
      </div>
      <div class="cooperation-service">
        <h3 class="cooperation-service__title">
          СЕРВИС ПОЗВОЛЯЕТ ОПЕРАТИВНО И ЧЕТКО:
        </h3>
        <div class="cooperation-service__line-o"></div>
        <ul class="cooperation-service__list">
          <li class="cooperation-service__list-item">
            <img
              class="cooperation-service__list-item-img"
              src="../assets/icons/partnershipMoneyIcon.png"
              alt=""
            />
            <p class="cooperation-service__list-item-text">
              Проверять актуальность цен
            </p>
          </li>
          <li class="cooperation-service__list-item">
            <img
              class="cooperation-service__list-item-img"
              src="../assets/icons/partnershipEyeIcon.png"
              alt=""
            />
            <p class="cooperation-service__list-item-text">
              Отслеживать наличие остатков товара на складе
            </p>
          </li>
          <li class="cooperation-service__list-item">
            <img
              class="cooperation-service__list-item-img"
              src="../assets/icons/partnershipCarIcon.png"
              alt=""
            />
            <p class="cooperation-service__list-item-text">
              Максимально быстро сделать заказ
            </p>
          </li>
          <li class="cooperation-service__list-item">
            <img
              class="cooperation-service__list-item-img"
              src="../assets/icons/partnershipKeyIcon.png"
              alt=""
            />
            <p class="cooperation-service__list-item-text">
              Получить ТТН сразу после отправки товара
            </p>
          </li>
          <li class="cooperation-service__list-item">
            <img
              class="cooperation-service__list-item-img"
              src="../assets/icons/partnershipPiggyIcon.png"
              alt=""
            />
            <p class="cooperation-service__list-item-text">
              Следить за состоянием бонусного счета
            </p>
          </li>
        </ul>
        <div class="cooperation-service__line-g"></div>
        <p class="cooperation-service__text">
          Оптовые покупатели и владельцы торговых площадок могут заработать до
          50% прибыли от розничной продажи товаров ТМ LogicPower. Мы не только
          предложим вам лучшую цену на рынке электротехнической продукции, но и
          максимально быстро доставим товар, со складов европейского образца,
          расположенных на территории Украины.
        </p>
      </div>
      <div class="cooperation-product">
        <h5 class="cooperation-product__title">
          LOGICPOWER – УКРАИНСКАЯ ТОРГОВАЯ МАРКА, ПОСТАВЛЯЮЩАЯ НА РЫНОК:
        </h5>
        <ul class="cooperation-product__list">
          <li
            class="cooperation-product__list-item"
            v-for="(category, idx) of categoryListData"
            :key="idx"
          >
            <a href="" class="cooperation-product__list-item-link">
              <img
                class="cooperation-product__list-item-img"
                :src="category.img"
                alt=""
              />
              <p class="cooperation-product__list-item-text">
                {{ category.name }}
              </p>
            </a>
          </li>
          <li class="cooperation-product__list-item">
            <a href="" class="cooperation-product__list-item-link">
              <img
                class="cooperation-product__list-item-img"
                src="@/assets/icons/right-round-arrow.svg"
                alt=""
              />
              <p class="cooperation-product__list-item-text">И другое</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="moreover">
        <h5 class="cooperation-product__title">
          КРОМЕ ТОГО, МЫ ПРЕДЛАГАЕМ К ПРОДАЖЕ ПРОДУКЦИЮ ТОРГОВЫХ МАРОК:
        </h5>
        <div class="moreover__slider">СЛАЙДЕР</div>
      </div>
      <div class="cooperation__registration">
        <p class="cooperation__text">
          Разработкой новых моделей и контролем качества продукции занимаются
          технические специалисты нашей компании. Все товары сертифицированы в
          соответствии с украинскими и международными нормами и стандартами.
        </p>
        <button class="cooperation__btn">Регистрация</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class CooperationComponent extends Vue {
  categoryListData = [
    {
      name: "Комплекты для резервного питания",
      img: "https://logicpower.ua/storage/1914178/11142_menu.svg",
    },
    {
      name: "Источники бесперебойного питания",
      img: "https://logicpower.ua/storage/1914183/2415_menu.svg",
    },
    {
      name: "Аккумуляторы AGM",
      img: "https://logicpower.ua/storage/1914181/275_menu.svg",
    },
    {
      name: "Литиевые аккумуляторы",
      img: "https://logicpower.ua/storage/1914180/3861_menu.svg",
    },
    {
      name: "Стабилизаторы напряжения",
      img: "https://logicpower.ua/storage/1914186/462_menu.svg",
    },
    {
      name: "Стабилизаторы напряжения",
      img: "https://logicpower.ua/storage/1914186/462_menu.svg",
    },
    {
      name: "Стабилизаторы напряжения",
      img: "https://logicpower.ua/storage/1914186/462_menu.svg",
    },
    {
      name: "Стабилизаторы напряжения",
      img: "https://logicpower.ua/storage/1914186/462_menu.svg",
    },
    {
      name: "Стабилизаторы напряжения",
      img: "https://logicpower.ua/storage/1914186/462_menu.svg",
    },
    {
      name: "Стабилизаторы напряжения",
      img: "https://logicpower.ua/storage/1914186/462_menu.svg",
    },
  ];

  shortCategoryList() {
    this.categoryListData = this.categoryListData.slice(0, 7);
    console.log(this.categoryListData);
  }

  mounted() {
    this.shortCategoryList();
  }
}
</script>

<style lang="scss">
.cooperation {
  @extend %flex-column;
  align-items: center;

  @extend %padding-wrp;
  padding-bottom: 80px;

  &__w {
    @extend %width-main;

    @extend %flex-column;
    align-items: center;
    gap: 96px;

    @include mobile {
      gap: 48px;
    }
  }

  &__start {
    width: 100%;

    @extend %flex-column;
    align-items: center;
    gap: 48px;

    @include mobile {
      gap: 36px;
    }
  }

  &__start-title {
    @include fontUnify(32, 40, 600);
    text-align: center;
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify(24, 34);
    }
  }

  &__start-step {
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 24px;

    @include mobile {
      flex-direction: column;
      align-items: center;
      gap: 48px;
    }
  }

  &__start-step-item {
    width: 100%;
    max-width: 363px;

    @extend %flex-column;
    align-items: center;
  }

  &__start-step-img {
  }

  &__start-step-text {
    @include fontUnify(18, 24, 500);
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &__registration {
    width: 100%;

    @include flex-container(row, space-between, center);
    gap: 32px;

    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    padding: 32px;

    @include bigMobile {
      flex-direction: column;
      justify-content: center;

      padding: 16px;
    }
  }

  &__text {
    max-width: 772px;
    width: 100%;

    @include fontUnify(20, 28);
    text-align: center;
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
      text-align: left;
    }
  }

  &__btn {
    width: 100%;
    max-width: 236px;

    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    color: white;

    background-color: $color-main;
    border-radius: 6px;

    padding: 8px 0;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: $color-main-dark;
    }
  }
}

.cooperation-service {
  width: 100%;

  @extend %flex-column;
  align-items: center;
  gap: 48px;

  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

  padding: 32px;

  @include mobile {
    gap: 16px;

    padding: 32px 8px;
  }

  &__title {
    width: 100%;

    @include fontUnify(36, 44, 500);
    text-align: left;
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(18, 24, 600);
      text-align: center;
    }
  }

  &__line-o {
    width: 100%;
    height: 1px;

    background-color: $color-main;
  }

  &__list {
    width: 100%;

    @include flex-container(row, center);
    flex-wrap: wrap;
    gap: 32px 80px;

    @include mobile {
      gap: 32px 8px;
    }
  }

  &__list-item {
    width: 100%;
    max-width: 168px;

    @extend %flex-column;
    align-items: center;
    gap: 16px;
  }

  &__list-item-img {
  }

  &__list-item-text {
    @include fontUnify(18, 24, 500);
    text-align: center;
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }

  &__line-g {
    width: 100%;
    height: 1px;

    background-color: #8a8a8a;
  }

  &__text {
    @extend %width-content;

    @include fontUnify(18, 24, 500);
    letter-spacing: 0.02em;

    margin-bottom: 32px;

    @include mobile {
      @include fontUnify;

      margin-bottom: 0;
    }
  }
}

.cooperation-product {
  width: 100%;

  @extend %flex-column;
  align-items: center;
  gap: 36px;

  @include bigMobile {
    gap: 24px;
  }

  &__title {
    @extend %width-content;

    @include fontUnify(28, 36, 600);
    text-align: center;
    text-transform: uppercase;

    @include bigMobile {
      @include fontUnify(18, 24, 600);
    }
  }

  &__list {
    width: 100%;

    @include flex-container(row, center);
    flex-wrap: wrap;
    gap: 24px 16px;
  }

  &__list-item {
    max-width: 711px;
    width: 100%;

    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: 32px 16px 32px 64px;

    @include mobile {
      max-width: 164px;

      flex-direction: column;

      padding: 32px 16px;
    }
  }

  &__list-item-link {
    @include flex-container(row, flex-start, center);
    gap: 16px;

    @include mobile {
      flex-direction: column;
    }

    &:hover {
      & img {
        transform: scale(1.05);
      }
      & .cooperation-product__list-item-text {
        color: $color-main;
      }
    }
  }

  &__list-item-img {
    width: 48px;
  }

  &__list-item-text {
    @include fontUnify(20, 28);
    letter-spacing: 0.02em;
    word-break: break-word;

    transition: 0.2s ease;

    @include mobile {
      @include fontUnify;
      text-align: center;
    }
  }
}
</style>
