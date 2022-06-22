<template>
  <CategoryCatalogComponent></CategoryCatalogComponent>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CategoryCatalogComponent from "./components/CategoryCatalog.vue";

@Options({
  components: { CategoryCatalogComponent },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: contents;
}
</style>

<style lang="scss" scoped></style>
