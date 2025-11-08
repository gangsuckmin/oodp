<template>
  <section>
    <h3>Strategy Demo</h3>
    <div style="display:flex; gap:8px; margin-bottom:8px;">
      <label>
        전략:
        <select v-model="sel" @change="apply">
          <option value="none">기본가</option>
          <option value="student">학생할인(15%)</option>
          <option value="bulk">대량(3개 이상 20%)</option>
        </select>
      </label>
      <label>
        수량:
        <input type="number" v-model.number="qty" min="0" @input="recalc" />
      </label>
    </div>
    <p>원가: {{ raw }}</p>
    <p>적용 후 금액: <b>{{ total }}</b></p>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { PricingContext, NoDiscount, StudentDiscount, BulkDiscount } from "./Strategy";

const pricePerItem = 100;
const qty = ref(0);
const raw = ref(0);
const total = ref(0);
const sel = ref<"none"|"student"|"bulk">("none");

const ctx = new PricingContext(new NoDiscount());

function recalc()
{
  raw.value = qty.value * pricePerItem;
  total.value = ctx.run(raw.value);
}

function apply()
{
  if (sel.value === "student") ctx.setStrategy(new StudentDiscount());
  else if (sel.value === "bulk") ctx.setStrategy(new BulkDiscount());
  else ctx.setStrategy(new NoDiscount());
  recalc();
}

watch(qty, recalc, { immediate: true });
</script>
