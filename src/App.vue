<template>
  <header>
    <h1>Design Patterns (Builder / Strategy / Facade)</h1>
    <nav>
      <button :class="{active: tab==='builder'}" @click="tab='builder'">Builder</button>
      <button :class="{active: tab==='strategy'}" @click="tab='strategy'">Strategy</button>
      <button :class="{active: tab==='facade'}" @click="tab='facade'">Facade</button>
    </nav>
  </header>

  <main>
    <BuilderDemo v-if="tab==='builder'" />
    <StrategyDemo v-else-if="tab==='strategy'" />
    <FacadeDemo v-else />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BuilderDemo from "./Builder/DemoBuilder.vue";
import StrategyDemo from "./Strategy/DemoStrategy.vue";
import FacadeDemo from "./Facade/DemoFacade.vue";

const tab = ref<"builder"|"strategy"|"facade">("builder");
</script>

<style scoped>
nav { display:flex; gap:8px; margin:12px 0; }
button.active { font-weight: 700; text-decoration: underline; }
main { padding: 8px 0; }
</style>
