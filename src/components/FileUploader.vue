<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['contentProcessed'])

const handleFileChange = async (event) => {
  const file = event.target.files[0]
  const text = await file.text()
  emit('contentProcessed', text)
}
</script>

<template>
  <div class="file-uploader">
    <input type="file" @change="handleFileChange" accept=".srt" />
  </div>
</template>

<style scoped>
.file-uploader {
  margin-bottom: 1rem;
}
</style>
