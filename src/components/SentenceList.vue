<script setup>
import { defineProps } from 'vue'

defineProps({
  content: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div v-if="content">
    <h3>Converted Text</h3>
    <div v-for="(sentence, index) in content" :key="index">
      <SentenceItem :sentence="sentence" />
      {{ sentence }}
    </div>
  </div>
</template>

<style scoped>
h3 {
  margin: 2rem 0 1rem;
  color: #2c3e50;
}
</style>
