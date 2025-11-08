<template>
  <section>
    <h3>Facade Demo</h3>
    <div style="display:flex; gap:8px; margin-bottom:8px;">
      <input v-model="token" placeholder="token (VALID)" />
      <input v-model="address" placeholder="address" />
      <input type="number" v-model.number="amount" placeholder="amount" />
      <button @click="run">Checkout</button>
    </div>
    <pre v-if="out">{{ out }}</pre>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { OrderFacade } from "./Facade";

const token = ref("VALID");
const address = ref("Seoul");
const amount = ref(300);
const out = ref("");

const facade = new OrderFacade();
function run()
{
  out.value = JSON.stringify
  (
    facade.checkout({ token: token.value, amount: amount.value, address: address.value }),
    null, 2
  );
}
</script>
