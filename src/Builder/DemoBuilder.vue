<template>
  <section>
    <h3>Builder Demo</h3>
    <div style="display:flex; gap:8px; margin-bottom:8px;">
      <button @click="makeCheese">치즈버거</button>
      <button @click="makeVegan">비건버거</button>
    </div>
    <pre v-if="last">{{ last }}</pre>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BurgerDirector } from "./Builder";

const last = ref("");
const director = new BurgerDirector();

function makeCheese()
{
  last.value = JSON.stringify(director.makeCheeseBurger(), null, 2);
}
function makeVegan()
{
  last.value = JSON.stringify(director.makeVeganBurger(), null, 2);
}
</script>
