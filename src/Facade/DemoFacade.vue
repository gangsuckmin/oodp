<template>
  <div>
    <h2>Facade Demo</h2>
    <form @submit.prevent="run">
      <input v-model="token" placeholder="token (VALID)" />
      <input v-model.number="amount" type="number" placeholder="amount" />
      <input v-model="address" placeholder="address" />
      <button>Checkout</button>
    </form>
    <pre v-if="result">{{ result }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { OrderFacade } from "./Facade";

const token = ref("VALID");
const amount = ref(100);
const address = ref("Seoul");
const result = ref("");

const facade = new OrderFacade();
function run()
{
  result.value = JSON.stringify
  (
    facade.checkout({ token: token.value, amount: amount.value, address: address.value }),
    null, 2
  );
}
</script>
