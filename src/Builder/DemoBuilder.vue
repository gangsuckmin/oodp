<template>
  <div>
    <h2>Builder Demo</h2>
    <button @click="makeCheese">Make Cheese Burger</button>
    <button @click="makeVegan">Make Vegan Burger</button>

    <pre v-if="last">{{ last }}</pre>
  </div>
</template>

<script setup lang="ts">
import { BurgerDirector } from "./Builder.ts";
import { ref } from "vue";

const last = ref<string>("");
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
