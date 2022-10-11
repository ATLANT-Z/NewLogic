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
        <div class="cooperation-slider">
          <div
            class="cooperation-slider__arrow-left"
            :class="{ disable: currentSlide <= 0 }"
            @click="prevSlide"
          >
            <img
              class="cooperation-slider__arrow-left-img"
              src="@/assets/icons/mainNavArrowLeftIcon.svg"
              alt=""
            />
          </div>
          <div class="cooperation-slider__w" ref="slideWrap">
            <div
              class="cooperation-slider__cont"
              ref="slideList"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              :style="{
                '--translate-x': translateListX + 'px',
              }"
            >
              <div
                class="cooperation-slider__item-container"
                v-for="(item, index) in sliderData"
                :key="index"
                ref="slideListItem"
              >
                <div class="cooperation-slider__item">
                  <img
                    class="cooperation-slider__img"
                    :src="require(`@/assets/icons/${item.img}.png`)"
                    alt=""
                  />
                  <span class="cooperation-slider__text">{{
                    item.description
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="cooperation-slider__arrow-right"
            :class="{ disable: slideMaxCount === currentSlide }"
            @click="nextSlide"
          >
            <img
              class="cooperation-slider__arrow-right-img"
              src="@/assets/icons/mainNavArrowRightIcon.svg"
              alt=""
            />
          </div>
        </div>
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

  sliderData: any = [
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
    {
      img: "partnershipGVIcon",
      description:
        "— оборудование для систем видеонаблюдения и контроля доступом",
    },
  ];

  declare $refs: {
    slideWrap: HTMLElement;
    slideListItem: HTMLElement;
    slideList: HTMLElement;
  };

  currentSlide: number = 0;
  translateListX: number = 0;
  slideMaxCount: number = 0;
  startX: number = 0;
  endX: number = 0;

  get SlideCount() {
    return this.sliderData.length;
  }

  get TranslateX() {
    const slideItemRect =
      this.$refs.slideListItem[this.currentSlide].getBoundingClientRect();

    return -slideItemRect.width * this.currentSlide - this.currentSlide;
  }

  calcSlideScroll() {
    const slideWrapRect = this.$refs.slideWrap.getBoundingClientRect();
    const slideItemRect =
      this.$refs.slideListItem[this.currentSlide].getBoundingClientRect();

    let slideItemsCount = Math.round(slideWrapRect.width / slideItemRect.width);

    if (slideItemsCount >= this.SlideCount) slideItemsCount = this.SlideCount;

    const slideMaxTranslateX =
      this.SlideCount * slideItemRect.width - slideWrapRect.width;

    this.slideMaxCount = this.SlideCount - slideItemsCount;

    this.translateListX = -slideItemRect.width * this.currentSlide;

    if (this.currentSlide === this.slideMaxCount)
      this.translateListX = -slideMaxTranslateX;
  }

  nextSlide() {
    if (this.currentSlide + 1 >= this.SlideCount)
      this.currentSlide = this.SlideCount;
    else this.currentSlide = this.currentSlide + 1;

    this.calcSlideScroll();
  }

  prevSlide() {
    if (this.currentSlide - 1 < 0) this.currentSlide = 0;
    else this.currentSlide = this.currentSlide - 1;

    this.calcSlideScroll();
  }

  handleTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.endX = 0;
  }

  handleTouchMove(e) {
    this.endX = e.touches[0].clientX;
  }

  handleTouchEnd() {
    const slideItemRect =
      this.$refs.slideListItem[this.currentSlide].getBoundingClientRect();
    const slideWrapRect = this.$refs.slideWrap.getBoundingClientRect();

    const mobMaxWidth = this.SlideCount * slideItemRect.width;

    const mobWidthToShow =
      mobMaxWidth + (this.SlideCount - 1) - slideWrapRect.width;

    if (this.endX > 0 && this.endX < this.startX)
      this.translateListX -= slideItemRect.width;
    else if (this.endX > 0 && this.endX > this.startX)
      this.translateListX += slideItemRect.width;

    if (this.translateListX >= 0) this.translateListX = 0;
    else if (this.translateListX <= -mobWidthToShow) {
      this.translateListX = -mobWidthToShow;
    }
  }

  shortCategoryList() {
    this.categoryListData = this.categoryListData.slice(0, 7);
  }

  onResize() {
    this.calcSlideScroll();
  }

  mounted() {
    this.onResize();
    this.shortCategoryList();
    window.addEventListener("resize", this.onResize);
  }

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>

<style lang="scss">
.cooperation {
  --gap: 16px;

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
    gap: var(--gap);
  }

  &__list-item {
    @include set-item-count-in-row(2);

    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: 32px 16px 32px 64px;

    @include bigMobile {
      @include set-item-count-in-row(1);
    }

    @include mobile {
      flex-direction: column;

      padding: 32px 16px;
    }
  }

  &__list-item-link {
    @include flex-container(row, flex-start, center);
    gap: var(--gap);

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

.moreover {
  width: 100%;

  @extend %flex-column;
  align-items: center;
  gap: 36px;
}

.cooperation-slider {
  @extend %width-main;

  @include flex-container(row, space-between, center);
  gap: 24px;

  &__arrow-left {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s ease;

    @include bigMobile {
      display: none;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__arrow-left-img {
  }

  &__w {
    @include flex-container(row, flex-start, center);

    overflow: hidden;
    overscroll-behavior: contain;
  }

  &__cont {
    --translate-x: 0;

    @include flex-container;

    transform: translateX(var(--translate-x));
    transition: 0.3s ease;
  }

  &__item-container {
    padding: 16px;
  }

  &__item {
    min-width: 313px;
    min-height: 320px;

    @extend %flex-column;
    align-items: center;
    justify-content: center;
    gap: 48px;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    padding: 0 16px;

    @include bigMobile {
      min-width: 253px;
      min-height: 240px;

      gap: 24px;
    }
  }

  &__img {
    object-fit: contain;
  }

  &__text {
    @include fontUnify(18, 26, 500);
    letter-spacing: 0.02em;
    text-align: center;

    @include bigMobile {
      @include fontUnify;
    }
  }

  &__arrow-right {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    @include bigMobile {
      display: none;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__arrow-right-img {
  }
}
</style>
