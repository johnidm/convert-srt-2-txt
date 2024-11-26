<script setup>
import SentenceDisplay from './SentenceDisplay.vue'

defineProps({
  sentences: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div class="sentence-list">
    <h3 v-if="sentences.length">Converted Text</h3>
    <div v-for="(sentence, index) in sentences" :key="index">
      <SentenceDisplay :sentence="sentence" />
    </div>
  </div>
</template>

<style scoped>
.sentence-list {
  margin-top: 1rem;
}
</style>
