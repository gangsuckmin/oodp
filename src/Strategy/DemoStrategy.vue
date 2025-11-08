<template>
  <div>
    <h2>Strategy Demo</h2>
    <select v-model="algo">
      <option value="zip">ZIP</option>
      <option value="rar">RAR</option>
    </select>
    <button @click="run">Compress</button>
    <pre v-if="out">{{ out }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CompressionContext, ZipCompressor, RarCompressor } from "./Strategy";

const algo = ref<"zip" | "rar">("zip");
const out = ref("");

function run()
{
  const ctx = new CompressionContext
  (
    algo.value === "zip" ? new ZipCompressor() : new RarCompressor()
  );
  const fake = new Uint8Array([1,2,3,4,5]); // 데모 데이터
  out.value = ctx.run(fake);
}
</script>
