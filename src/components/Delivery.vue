<template>
  <section class="delivery-payment">
    <div class="delivery-payment__w">
      <div class="delivery-payment__info">
        <h1 class="delivery-payment__title">Условия доставки и оплаты</h1>
        <div class="delivery-payment__info-block info-block-b">
          <h4 class="delivery-payment__info-block-title">
            Открыты точки самовывоза в г. Одесса по адресам:
          </h4>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              Рынок "Староконный", ул. Раскидайловская 31/к, маг. ЗП-3, ЗП-4
            </li>
            <li class="delivery-payment__info-block-list-item">
              Рынок "Селянка", проспект Небесної Сотні, 14Б/12 (11).
            </li>
            <p class="delivery-payment__info-block-list-p">
              Телефон для консультации 0800 208-977.
            </p>
          </ul>
        </div>
      </div>
      <div class="delivery">
        <div class="delivery__info">
          <h2 class="delivery__title">Доставка</h2>
          <p class="delivery__text">
            Доставка товаров, которые находится в разделе "Альтернативная
            энергетика" и "Электротранспорт" осуществляется за счет покупателя.
          </p>
          <p class="delivery__text">
            Доставка товара производятся по предоплате в размере не менее 20% от
            стоимости заказа. В случае, когда сумма заказа меньше 300 грн,
            предоплата производится в размере 100% от стоимости заказа. За
            дополнительной информацией обращайтесь к менеджеру, по номеру
            указанному на сайте.
          </p>
          <p class="delivery__text">
            Доставка товара производятся по предоплате в размере не менее 20% от
            стоимости заказа. В случае, когда сумма заказа меньше 300 грн,
            предоплата производится в размере 100% от стоимости заказа. За
            дополнительной информацией обращайтесь к менеджеру, по номеру
            указанному на сайте.
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Самовывоз г.Одесса</h3>
          <p class="delivery__text">
            Свой заказ можно получить в любом из магазинов сети "LogicPower" в
            Одессе
          </p>
          <p class="delivery__text">
            График: согласно графику работы магазинов
          </p>
          <p class="delivery__text">
            Стоимость: <span class="delivery__text-free">бесплатно</span>
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Доставка по Одессе</h3>
          <p class="delivery__text">
            Свой заказ можно получить в любом из магазинов сети "LogicPower" в
            Одессе
          </p>
          <p class="delivery__text">
            График: согласно графику работы магазинов
          </p>
        </div>
        <div class="delivery__pickup info-block-b">
          <h3 class="delivery-payment__info-block-title">График доставок:</h3>
          <p class="delivery-payment__info-block-list-p">
            Пн-Пт: с 13:00 до 20:00 (при оформлении заказа до 14.00 - доставка в
            тот же день, после - на следующий)*
          </p>
          <p class="delivery-payment__info-block-list-p">
            Сб: с 13:00 до 19:00 (при оформлении заказа до 12.00 - доставка в
            тот же день, после - в понедельник)*
          </p>
          <p class="delivery-payment__info-block-list-p">
            Вс: доставка не осуществляется (доставка в понедельник)*
          </p>
          <p class="delivery-payment__info-block-list-p">
            *при условии наличия товара на складе
          </p>
        </div>
        <div class="delivery__pickup info-block-b">
          <h3 class="delivery-payment__info-block-title">Стоимость:</h3>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              бесплатно при сумме заказа от 2000 грн**
            </li>
            <li class="delivery-payment__info-block-list-item">
              от 60 грн, при сумме заказа до 2000 грн**
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
export default class DeliveryComponent extends Vue {}
</script>

<style lang="scss"></style>
