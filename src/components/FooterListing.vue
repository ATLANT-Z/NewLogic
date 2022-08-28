<template>
  <div class="content__title-w" @click="dropDownList()">
    <h4 class="content__title">продукция</h4>
    <div class="content__title-mob-arrow">
      <img
        class="content__title-mob-arrow-img"
        src="../../src/assets/icons/nav-arrow-down.svg"
        alt=""
        :class="{ active: openProdList }"
      />
    </div>
  </div>
  <div
    class="content__block-list-w"
    :class="{ active: openProdList }"
    :style="{ '--list-height': listHeight + 'px' }"
  >
    <ul class="content__block-list" ref="listOfItem">
      <li
        class="content__block-list-item"
        v-for="(item, index) of prodList"
        :key="index"
        ref="listItem"
      >
        <a class="content__block-list-link" href="#"> {{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "FooterListingComponent",
})
export default class FooterListingComponent extends Vue {
  declare $refs: {
    listItem: HTMLElement;
    listOfItem: HTMLElement;
  };

  prodList: any = [
    { id: 1, title: "Комплекты для резервного питания" },
    { id: 2, title: "Источники бесперебойного питания" },
    { id: 3, title: "Аккумуляторы AGM" },
    { id: 4, title: "Литиевые аккумуляторы" },
    { id: 5, title: "Альтернативная энергетика" },
    { id: 6, title: "Стабилизаторы напряжения" },
    { id: 7, title: "Аккумуляторы SILVER" },
    { id: 8, title: "Электротранспорт" },
    { id: 9, title: "Автомобильные аккумуляторы" },
    { id: 10, title: "Компьютерная периферия" },
  ];

  listHeight: number = 0;
  openProdList: boolean = false;
  openInfoList: boolean = false;

  get ProdCount() {
    return this.prodList.length;
  }

  dropDownList() {
    if (innerWidth <= 680) {
      const itemRect = this.$refs.listItem[0].getBoundingClientRect();
      const listRect = this.$refs.listOfItem.getBoundingClientRect();

      if (this.listHeight === 0)
        this.listHeight =
          itemRect.height * this.ProdCount +
          (listRect.height - itemRect.height * this.ProdCount);
      else this.listHeight = 0;

      console.log(itemRect.height);
      console.log(listRect.height);

      this.openProdList = !this.openProdList;
      console.log(this.openProdList);
    }
  }
}
</script>

<style></style>
