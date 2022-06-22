<template>
  <div class="category-catalog">
    <div class="category-card">
      <img src="https://logicfox.info/foto/14292/14292_1.png" alt="" />
      <a href="#">перейти</a>
      <h2>Лучшая категория в мире</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class CategoryCatalogComponent extends Vue {}
</script>

<style lang="scss">
.category-catalog {
  display: flex;
  gap: 16px;
  max-width: 900px;
  margin: 64px 0;
}

.category-card {
  position: relative;

  height: 300px;
  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4px;

  color: black;
  @include fontMid();

  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @include animAll();
  z-index: 2;

  &:hover {
    img {
      transform: scale(1.1) rotate(10deg);
    }
  }

  img {
    width: 200px;
    height: 300px;
    pointer-events: none;
  }
}
</style>
